import fetch from 'node-fetch';
import https from 'https';
import fs from 'fs';

export const isValidUrl = (url) => {
    // TODO: Implement this
    return url ? true : false;
}

export const apiCall = async (url) => {
    const resp = await fetch(url, { method: 'POST' });
    return resp.json();
}

export const downloadFile = (name, url) => {
    const file = fs.createWriteStream(name);
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    resolve();
                });
            });
        }).on('error', err => {
            reject(err);
        });
    });
}