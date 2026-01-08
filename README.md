# SaveIt

**SaveIt** is a lightweight Chrome extension that lets you download any file from a URL by providing the link and a filename. Paste the URL, name the file, click download — done.

---

## Features

- Download files from any direct URL  
- Choose your own filename  
- Fast and simple UI  
- No accounts, no tracking  
- Fully local — runs in your browser  

---

## Installation (Load Unpacked)

SaveIt is provided as source files. Install it as an unpacked extension:

1. Download or clone this repository.
2. Keep the files in a folder (the folder must contain `manifest.json`).
3. Open Chrome and go to:
   ```
   chrome://extensions
   ```
4. Enable **Developer mode** (top-right).
5. Click **Load unpacked**.
6. Select the folder that contains `manifest.json`.
7. SaveIt is now installed. Keep the folder in place so Chrome can load it.

---

## How to Use

1. Click the **SaveIt** extension icon.
2. Paste the **file URL**.
3. Enter a **filename** (include the extension, e.g. `video.mp4`, `file.pdf`).
4. Click **Download**.
5. Choose where to save the file when prompted.

---

## Requirements

- Google Chrome or any Chromium-based browser
- The URL must point to a **directly downloadable file**

---

## Limitations

- Some websites block downloads due to server restrictions
- Streaming-only platforms may not work
- Auth-protected or temporary URLs may fail

---

## Permissions

SaveIt only requests permissions required to:
- Download files
- Access the provided URL

No tracking. No data collection.

---

## License

MIT License — free to use, modify, and distribute.
