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
          <label for="local-file">Upload GIF from your PC</label>
          <div class="add-info">We support formats GIF, MP4, MOV, or WebM.</div>
          <input type="file" name="local-file" id="local-file">
        </div>
        <div id="text-separator">or</div>
        <div id="file-url-container">
          <label for="file-url">Upload GIF with URL</label>
          <div class="add-info">We support media URLs from GIPHY, YouTube, Vimeo, and others!</div>
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
    </form>  
  </div>
  `;
};
