import { loadMultipleGIFsByID } from "../requests/request-service.js";

let uploadsIds = JSON.parse(localStorage.getItem('uploadsIds')) || [];

export const addUpload = (uploadId) => {
    uploadsIds.push(uploadId);
    localStorage.setItem('uploadsIds', JSON.stringify(uploadsIds));
}

export const getUploadsIds = () => [...uploadsIds];

export const loadUploads = (uploadsIds) => {
    if (uploadsIds.length !== 0) {
        
        const uploads = loadMultipleGIFsByID(uploadsIds);
        return uploads;
    }

    return [];
}
