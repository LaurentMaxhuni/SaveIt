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

## Installation (CRX File)

⚠️ **Important:** Chrome blocks direct installation of `.crx` files that are not from the Chrome Web Store. This is normal Chrome behavior.

### Recommended Method (Always Works)

#### Install via “Load Unpacked”

1. Download the `SaveIt.crx` file.
2. Rename it:
   ```
   SaveIt.crx → SaveIt.zip
   ```
3. Extract the ZIP file into a folder.
4. Open Chrome and go to:
   ```
   chrome://extensions
   ```
5. Enable **Developer mode** (top-right).
6. Click **Load unpacked**.
7. Select the extracted **SaveIt** folder.
8. SaveIt is now installed.

---

### Alternative Method (May Be Blocked)

> This method may not work on newer Chrome versions.

1. Open:
   ```
   chrome://extensions
   ```
2. Enable **Developer mode**.
3. Drag and drop `SaveIt.crx` onto the page.
4. Confirm installation if Chrome allows it.

If Chrome blocks it, use the **Recommended Method** above.

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
