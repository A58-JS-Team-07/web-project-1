import { loadMultipleGIFsByID } from '../requests/request-service.js';

const uploadsIds = JSON.parse(localStorage.getItem('uploadsIds')) || [];

/**
 * Adds a GIF ID to the list of upload IDs.
 * @param {string} uploadId - The ID of the GIF to be added.
 */
export const addUpload = (uploadId) => {
  uploadsIds.push(uploadId);
  localStorage.setItem('uploadsIds', JSON.stringify(uploadsIds));
};

/**
 * 
 * @returns An array of the uploaded GIF's IDs
 */
export const getUploadsIds = () => [...uploadsIds];


/**
 *  * Loads multiple GIFs based on their IDs.
 * @param {*} uploadsIds - An array of uploaded GIF's IDs.
 * @returns {Object[]} - An array of loaded GIF objects.
 */
export const loadUploads = (uploadsIds) => {
  if (uploadsIds.length !== 0) {
    const uploads = loadMultipleGIFsByID(uploadsIds);
    return uploads;
  }

  return [];
};
