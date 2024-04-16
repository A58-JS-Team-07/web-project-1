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
 * Retrieves the IDs of all uploaded GIFs.
 *
 * This function returns a new array containing the IDs of all GIFs that have been uploaded.
 * The IDs are stored in the `uploadsIds` array. By using the spread operator, we ensure that
 * a new array is returned, preventing any modifications to the original `uploadsIds` array.
 *
 * @returns {string[]} An array containing the IDs of all uploaded GIFs.
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
