import { writeFile } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

async function createLogs() {
    const projectFolder = join(process.cwd(), 'Logs');
    const dirCreation = await mkdir(projectFolder, { recursive: true });

    for (let i = 0; i < 10; i++) {
        try {
            const data = `This is a test`;
            const promise = writeFile(`${projectFolder}/logs${i}.txt`, data);
            console.log(`creating...log${i}.txt`);
            await promise;
        } catch (err) {
            console.error(err);
        }
    }
    return dirCreation;
}

createLogs().catch(console.error);