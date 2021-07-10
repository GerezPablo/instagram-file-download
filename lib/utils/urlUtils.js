import axios from "axios";
import https from 'https';
import fs from 'fs';

export const isValidUrl = (url) => {
    // TODO: Implement this
    return url ? true : false;
}

export const axiosGet = async (url) => {
    try {
        const resp = await axios.get(url);
        return resp;
    } catch (err) {
        console.log(err);
    }
};

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