import { uploadGIF } from '../requests/request-service.js';

export const executeUploadItem = async (formData) => {
  const stringTags = formData.get('tags') || '';
  let file = formData.get('local-file');
  const fileURL = formData.get('file-url') || '';
  const sourcePostURL = formData.get('source-url') || '';

  // console.log(stringTags);
  // console.log(file.name);
  // console.log(file);
  // console.log(fileURL);
  // console.log(sourcePostURL);

  if (file.name === '') {
    file = '';
  }

  try {
    await uploadGIF(stringTags, file, fileURL, sourcePostURL);
    console.log('Upload successful!');
  } catch (error) {
    console.error('Error uploading GIF:', error);
  }
};

