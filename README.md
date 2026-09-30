# 🪟 Windows 11 New Tab (Chrome Extension)

A lightweight and elegant Chrome extension that transforms your browser's New Tab page into an authentic **Windows 11 desktop experience**. Designed with modern Fluent/Mica aesthetics, centered taskbar, floating Start menu, and quick access tools.

یک افزونه مدرن و سبک برای مرورگرهای مبتنی بر کرومیوم که صفحه تب جدید را به محیط دسکتاپ ویندوز ۱۱ تبدیل می‌کند.

---

## ⚡ Features | ویژگی‌ها

- **Centered Taskbar**: Native Windows 11 style centered taskbar with floating Start menu.
- **Glassmorphism / Fluent UI**: Acrylic backdrop-blur effects and rounded aesthetics.
- **Live System Tray**: Real-time clock and Persian/Gregorian date support.
- **Integrated Web Search**: Quick search box built right into the Start menu.
- **Customizable Shortcuts**: Pin favorite links directly for fast access.
- **Lightweight & Privacy-Friendly**: Zero trackers, no external dependencies, running entirely offline.

---

## 📥 Download | دانلود

Download the latest pre-built ZIP package directly from the release page:

[![Download ZIP](https://img.shields.io/badge/Download-win11--newtab.zip-0078D4?style=for-the-badge&logo=windows11&logoColor=white)](win11-newtab.zip)

> 💡 Alternatively, grab it from the **[Releases Tab](../../releases/latest)** or visit the **[Live Demo / Website](https://<username>.github.io/<repo-name>/)**.

---

## 🛠️ Installation Guide | راهنمای نصب

Supported on **Google Chrome**, **Microsoft Edge**, **Brave**, and other Chromium browsers.

### English:
1. Download `win11-newtab.zip` and extract it to a preferred folder on your PC.
2. Open your browser and navigate to:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`
3. Enable **Developer mode** toggle in the top-right corner.
4. Click **Load unpacked** (بارگذاری افزونه بازشده).
5. Select the extracted folder containing `manifest.json`.
6. Open a new tab and enjoy the Windows 11 desktop!

### فارسی:
1. فایل `win11-newtab.zip` را دانلود کرده و آن را در یک پوشه دلخواه اکسترکت (Extract) کنید.
2. مرورگر کروم یا اج را باز کرده و به آدرس `chrome://extensions` بروید.
3. گزینه **Developer mode** (حالت برنامه‌نویس) را از گوشه بالا فعال کنید.
4. روی دکمه **Load unpacked** کلیک کنید.
5. پوشه استخراج‌شده (که فایل `manifest.json` داخل آن است) را انتخاب کنید.
6. یک تب جدید باز کنید تا دسکتاپ ویندوز ۱۱ اجرا شود.

---

## 📂 Project Structure | ساختار پوشه‌ها

```text
├── win11-newtab.zip      # Packaged release ready to install
├── manifest.json          # Chrome Extension Manifest V3 config
├── newtab.html            # Main desktop & start menu markup
├── style.css              # Fluent UI styling & blur filters
├── script.js              # Clock logic, search & menu controls
├── wallpaper.jpg          # Default Windows 11 bloom wallpaper
├── icon.png               # Extension brand icon
└── index.html             # Landing & release showcase page
