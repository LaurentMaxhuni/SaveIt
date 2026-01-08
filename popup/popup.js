const urlInput = document.getElementById('url-input');
const filenameInput = document.getElementById('filename-input');
const button = document.getElementById('download-btn');

function downloadFile() {
  chrome.downloads.download({
    url: urlInput.value,
    filename: filenameInput.value
  }, (id) => {
    if(chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {
      console.log('Download started: ', id)
    }
  })
}

button.addEventListener('click', () => downloadFile());