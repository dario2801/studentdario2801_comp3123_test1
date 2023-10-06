import { readdir, rm, rmdir } from 'node:fs/promises';
import path from 'node:path'

let PATH = "./Logs";

async function remove_Log_file() {
    try {
        const files = await readdir(PATH);
        for (const file of files) {
            console.log(`${file}`);
        }

        for (const file of files) {
            console.log(`delete files...${file}`);
            await rm(path.join(PATH, file));
        }
        await rmdir(PATH);

    } catch (err) {
        console.error(err);
    }
}

remove_Log_file();