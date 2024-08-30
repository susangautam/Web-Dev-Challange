document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('.file-input');
    const form = document.querySelector('form');
    const progressArea = document.querySelector('.progress-area');
    const uploadedArea = document.querySelector('.uploaded-area');
  
    form.addEventListener('click', () => fileInput.click());
  
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
  
      if (file) {
        simulateUpload(file);
      }
    });
  
    function simulateUpload(file) {
      const reader = new FileReader();
      const totalSize = file.size;
      let loadedSize = 0;
      
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          loadedSize = event.loaded;
          const progress = Math.round((loadedSize / totalSize) * 100);
          showProgress(file.name, progress);
        }
      };
  
      reader.onloadstart = () => {
        showProgress(file.name, 0);
      };
  
      reader.onloadend = () => {
        showUploadedFile(file.name);
        removeProgress(file.name);
      };
  
      reader.readAsArrayBuffer(file);
    }
  
    function showProgress(fileName, progress) {
      let progressHTML = `
        <div class="row" id="${fileName.replace(/\s+/g, '_')}">
          <i class="fas fa-cloud-upload-alt"></i>
          <div class="content">
            <span class="details">${fileName}</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${progress}%"></div>
            </div>
            <span class="details">${progress}%</span>
          </div>
        </div>
      `;
      progressArea.innerHTML = progressHTML;
    }
  
    function removeProgress(fileName) {
      const progressElement = document.getElementById(fileName.replace(/\s+/g, '_'));
      if (progressElement) {
        progressElement.remove();
      }
    }
  
    function showUploadedFile(fileName) {
      let uploadedHTML = `
        <div class="row">
          <i class="fas fa-check"></i>
          <div class="content">
            <span class="details">${fileName}</span>
            <span class="size">Uploaded</span>
          </div>
        </div>
      `;
      uploadedArea.innerHTML += uploadedHTML;
    }
  });
  
