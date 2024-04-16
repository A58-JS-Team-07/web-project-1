import { uploadGIF } from '../requests/request-service.js';
import { addUpload } from '../data/uploads.js';
import { setLoader } from './helpers.js';
import { q } from './helpers.js';
import { removeMessageAfter3Seconds } from './helpers.js';

/**
 * Executes the upload of a GIF item based on the provided form data.
 * @async
 * @param {FormData} formData - The form data containing information about the GIF item to upload.
 * @returns {Promise<void>}
 */
export const executeUploadItem = async (formData) => {
  const stringTags = formData.get('tags') || '';
  let file = formData.get('local-file');
  const fileURL = formData.get('file-url') || '';
  const sourcePostURL = formData.get('source-url') || '';

  const errorMessage = q('form p.error-message');
  const successMessage = q('form p.successful-upload');

  if (fileURL === '' && file.name === '') { 
    errorMessage.textContent = '*Please provide a GIF with the following formats: GIF, MP4, MOV, WebM or valid media URL.';
  } else if (file.type !== 'image/gif' && file.type !== 'image/webp' && file.type !== 'video/quicktime'  && file.type !== 'video/mp4' && fileURL === '') {
    errorMessage.textContent = '*Please provide a GIF with the following formats: GIF, MP4, MOV, WebM.';
    removeMessageAfter3Seconds(errorMessage);
    throw new Error('User provided file is in the wrong format!')
  } else if (fileURL !== '' && file.name !== '') {
    errorMessage.textContent = '*Please select only one of the following: upload a file or provide a valid media URL.';
    removeMessageAfter3Seconds(errorMessage);
    throw new Error('User tries to upload from two sources!')
  }
  removeMessageAfter3Seconds(errorMessage);

  if (file.name === '') {
    file = '';
  }

  try {
    const newGifId = await uploadGIF(stringTags, file, fileURL, sourcePostURL);
    addUpload(newGifId);
    successMessage.textContent = 'Your upload was successful!';
    removeMessageAfter3Seconds(successMessage);
    console.log('Upload successful!');
    setLoader('stop');
  } catch (error) {
    setLoader('stop');
    console.error('Error uploading GIF:', error.message);
  }
};

