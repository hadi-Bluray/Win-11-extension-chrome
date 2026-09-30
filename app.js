const T = {
  fa: {
    available: "آماده دانلود", release: "انتشار نسخه ۱.۱.۰",
    title: "یک تب جدید، با حس ویندوز ۱۱.",
    intro: "ساعت و تاریخ، جستجوی سریع، منوی استارت و سایت‌های محبوبتان، همه در یک جا — حالا با تنظیمات و زبان انگلیسی.",
    download: "دانلود افزونه", fileType: "فایل ZIP", browser: "برای Chrome، Edge و Brave",
    f1: "✓ فارسی و انگلیسی", f2: "✓ تقویم شمسی یا میلادی", f3: "✓ انتخاب موتور جستجو", f4: "✓ صفحه تنظیمات",
    notes: "درباره این نسخه",
    notesBody: "در این نسخه صفحه تنظیمات اضافه شد: تغییر زبان، موتور جستجو، نوع تقویم، ساعت ۲۴ ساعته، نمایش ثانیه، نمایش میانبرها و تاری پس‌زمینه.",
    install: "روش نصب",
    steps: ["فایل ZIP را دانلود و از حالت فشرده خارج کنید.", "نشانی <code>chrome://extensions</code> را باز کنید.", "گزینه <b>Developer mode</b> را فعال کنید.", "روی <b>Load unpacked</b> بزنید و پوشه را انتخاب کنید."],
    note: "این افزونه هنوز در فروشگاه Chrome منتشر نشده است.", lang: "EN",
  },
  en: {
    available: "Ready to download", release: "Version 1.1.0 release",
    title: "A new tab that feels like Windows 11.",
    intro: "Clock, date, quick search, a Start menu and your favorite sites in one place — now with settings and English support.",
    download: "Download extension", fileType: "ZIP file", browser: "For Chrome, Edge & Brave",
    f1: "✓ English & Persian", f2: "✓ Solar or Gregorian calendar", f3: "✓ Choose search engine", f4: "✓ Settings panel",
    notes: "About this release",
    notesBody: "This release adds a settings panel: language, search engine, calendar type, 24-hour clock, seconds, shortcuts visibility and wallpaper blur.",
    install: "How to install",
    steps: ["Download the ZIP file and extract it.", "Open <code>chrome://extensions</code>.", "Turn on <b>Developer mode</b>.", "Click <b>Load unpacked</b> and pick the folder."],
    note: "This extension is not listed on the Chrome Web Store yet.", lang: "فا",
  },
};
let lang = localStorage.getItem("lang") || "fa";
function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = t[el.dataset.t]));
  document.getElementById("steps").innerHTML = t.steps.map((s) => `<li>${s}</li>`).join("");
  document.getElementById("langLabel").textContent = t.lang;
  localStorage.setItem("lang", lang);
}
document.getElementById("langBtn").onclick = () => { lang = lang === "fa" ? "en" : "fa"; render(); };
render();
