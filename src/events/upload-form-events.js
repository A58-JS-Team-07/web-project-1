import { uploadGIF } from '../requests/request-service.js';
import { addUpload } from '../data/uploads.js';
import { setLoader } from './helpers.js';

export const executeUploadItem = async (formData) => {
  const stringTags = formData.get('tags') || '';
  let file = formData.get('local-file');
  const fileURL = formData.get('file-url') || '';
  const sourcePostURL = formData.get('source-url') || '';

  if (file.name === '') {
    file = '';
  }

  try {
    const newGifId = await uploadGIF(stringTags, file, fileURL, sourcePostURL);
    addUpload(newGifId);
    console.log('Upload successful!');
    setLoader('stop');
    alert('Upload successful!');
  } catch (error) {
    setLoader('stop');
    console.error('Error uploading GIF:', error.message);
    alert('Please provide a GIF with the following formats: GIF, MP4, MOV, WebM or valid media URL.');
  }
};

