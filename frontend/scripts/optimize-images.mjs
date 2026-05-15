import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = process.cwd();
const configPath = path.join(rootDir, 'scripts', 'image-optimization.config.json');
const outputDir = path.join(rootDir, 'public', 'assets', 'optimized');

const toKb = (value) => Math.round((value / 1024) * 10) / 10;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function getFileSize(filePath) {
  const stat = await fs.stat(filePath);
  return stat.size;
}

async function optimizeAsset(asset) {
  const inputPath = path.join(rootDir, asset.input);
  const inputBuffer = await fs.readFile(inputPath);
  const image = sharp(inputBuffer, { failOn: 'warning' }).rotate();
  const meta = await image.metadata();

  const resizeWidth =
    typeof asset.maxWidth === 'number' && meta.width && meta.width > asset.maxWidth
      ? asset.maxWidth
      : meta.width;

  const basePipeline = resizeWidth ? image.resize({ width: resizeWidth, withoutEnlargement: true }) : image;
  const outputBase = path.join(outputDir, asset.outputName);

  const webpPath = `${outputBase}.webp`;
  const avifPath = `${outputBase}.avif`;

  await basePipeline.clone().webp(asset.webp).toFile(webpPath);
  await basePipeline.clone().avif(asset.avif).toFile(avifPath);

  const inputSize = await getFileSize(inputPath);
  const webpSize = await getFileSize(webpPath);
  const avifSize = await getFileSize(avifPath);

  return {
    source: asset.input,
    width: meta.width ?? null,
    height: meta.height ?? null,
    originalKb: toKb(inputSize),
    webpKb: toKb(webpSize),
    avifKb: toKb(avifSize),
    webpSavingPercent: Math.round((1 - webpSize / inputSize) * 1000) / 10,
    avifSavingPercent: Math.round((1 - avifSize / inputSize) * 1000) / 10,
  };
}

async function main() {
  const config = JSON.parse(await fs.readFile(configPath, 'utf8'));
  await ensureDir(outputDir);

  const report = [];
  for (const asset of config.assets) {
    const result = await optimizeAsset(asset);
    report.push(result);
  }

  const reportPath = path.join(outputDir, 'optimization-report.json');
  await fs.writeFile(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), report }, null, 2));

  console.table(report);
  console.log(`\nRelatório salvo em: ${path.relative(rootDir, reportPath)}`);
}

main().catch((error) => {
  console.error('Falha ao otimizar imagens:', error);
  process.exitCode = 1;
});

