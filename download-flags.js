const fs = require('fs');
const path = require('path');
const https = require('https');

const data = require('../services/data/country-state-code-phone-data.js');

const outputDir = path.join(__dirname, '..', 'assets', 'flags', 'countries');

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function downloadFile(url, filePath) {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                response.resume();
                downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                response.resume();
                reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close(resolve);
            });

            fileStream.on('error', reject);
        });

        request.on('error', reject);
    });
}

async function main() {
    ensureDir(outputDir);

    const countries = Array.isArray(data.countriesData) ? data.countriesData : [];
    const tasks = countries.map(async (country) => {
        const code = String(country.code || '').trim().toLowerCase();
        if (!code) return null;

        const filePath = path.join(outputDir, `${code}.png`);
        const remoteUrl = `https://flagcdn.com/w80/${code}.png`;
        await downloadFile(remoteUrl, filePath);
        return filePath;
    });

    const results = await Promise.allSettled(tasks);
    const failures = results.filter((result) => result.status === 'rejected');

    if (failures.length > 0) {
        console.error(`Downloaded with ${failures.length} failures.`);
        failures.slice(0, 10).forEach((failure) => {
            console.error(failure.reason && failure.reason.message ? failure.reason.message : failure.reason);
        });
        process.exitCode = 1;
        return;
    }

    console.log(`Downloaded ${countries.length} flags into ${outputDir}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});