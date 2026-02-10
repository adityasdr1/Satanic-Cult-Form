const translations = {
  en: {
    title: "CULT OF SATANIC",
    subtitle: "Luciferian Thought • Free Will • Responsibility",
    explore: "EXPLORE",
    disclaimer: "DISCLAIMER",
    info: "Your Information",
    reason: "The Calling",
    source: "How Did You Find Us",
    confirm: "Final Will",
    policy: "Cult Disclaimer",
    submit: "Submit Request",
    successTitle: "Request Accepted",
    successMsg: "Your request has been successfully submitted. Our cult team will contact you through WhatsApp or Email."
  },
  hi: {
    title: "सैटेनिक कल्ट",
    subtitle: "स्वतंत्र विचार • स्वतंत्र इच्छा • जिम्मेदारी",
    explore: "आगे बढ़ें",
    disclaimer: "अस्वीकरण",
    info: "आपकी जानकारी",
    reason: "कारण",
    source: "आपने हमें कहाँ से जाना",
    confirm: "अंतिम निर्णय",
    policy: "कल्ट अस्वीकरण",
    submit: "अनुरोध भेजें",
    successTitle: "अनुरोध स्वीकार",
    successMsg: "आपका अनुरोध सफलतापूर्वक भेज दिया गया है। हमारी टीम WhatsApp या Email द्वारा संपर्क करेगी।"
  },
  ur: {
    title: "شیطانی فرقہ",
    subtitle: "آزاد سوچ • آزاد مرضی • ذمہ داری",
    explore: "آگے بڑھیں",
    disclaimer: "اعلان",
    info: "آپ کی معلومات",
    reason: "وجہ",
    source: "آپ نے ہمیں کہاں سے جانا",
    confirm: "آخری فیصلہ",
    policy: "فرقہ اعلان",
    submit: "درخواست جمع کریں",
    successTitle: "درخواست منظور",
    successMsg: "آپ کی درخواست کامیابی سے جمع ہو گئی ہے۔ ہماری ٹیم آپ سے واٹس ایپ یا ای میل کے ذریعے رابطہ کرے گی۔"
  },
  bn: {
    title: "স্যাটানিক কাল্ট",
    subtitle: "স্বাধীন চিন্তা • স্বাধীন ইচ্ছা • দায়িত্ব",
    explore: "প্রবেশ করুন",
    disclaimer: "অস্বীকৃতি",
    info: "আপনার তথ্য",
    reason: "কারণ",
    source: "আপনি আমাদের কোথা থেকে জানলেন",
    confirm: "চূড়ান্ত সিদ্ধান্ত",
    policy: "কাল্ট অস্বীকৃতি",
    submit: "অনুরোধ পাঠান",
    successTitle: "অনুরোধ গৃহীত",
    successMsg: "আপনার অনুরোধ সফলভাবে পাঠানো হয়েছে। আমাদের টিম WhatsApp অথবা Email এর মাধ্যমে যোগাযোগ করবে।"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
  const sel = document.querySelector(".lang-select");
  if (sel) sel.value = lang;
});
