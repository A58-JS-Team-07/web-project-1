/**
 * Generates HTML markup for the upload form view.
 * @returns {string} - The HTML markup for the upload form view. 
 */
export const toUploadView = () => {
  return `
  <div class="container-center">
    <h1>Upload GIF</h1>
    <p>Easy way to share your favorite GIFs with the world. 
      Simply use the form below to upload a GIF to Giphy.com
      directly from your device or via image URL.</p>
      <form action="" id="upload-form" method="POST">
      <div id="files-container">
        <div id="local-file-container">
          <h3>Upload GIF from PC</h3>
          <div class="add-info">We support formats GIF, MP4, MOV, or WebM.</div>
          <div class="file-input">
            <input type="file" id="file" class="file" name="local-file">
            <label for="file">Select file</label>
          </div>
            <p class="file-name"></p>
        </div>
        <div id="text-separator">or</div>
        <div id="file-url-container">
          <h3>Upload GIF with URL</h3>
          <div class="add-info">We support media URLs</div>
          <input type="url" name="file-url" id="file-url">
        </div>
      </div>
      <div id="gif-add-info-container">
        <div id="tags-container">
          <label for="tags">Tags</label>
          <div class="add-info">Optional. Separate tags with comma.</div>
          <input type="text" name="tags" id="tags">
        </div>
        <div id="source-url-container">
          <label for="source-url">Source URL</label>
          <div class="add-info">Optional. Provide credit to the website you got the GIF.</div>
          <input type="url" name="source-url" id="source-url">
        </div>
      </div>
      <div id="button-container">
        <input type="submit" value="Upload to GIPHY" id="upload-button">
      </div>
      <p class="error-message"></p>
      <p  class="successful-upload"></p>
    </form>  
  </div>
  `;
};
