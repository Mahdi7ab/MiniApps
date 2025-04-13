const banks = {
  603799: { name: "بانک ملی", icon: "🏦" },
  603770: { name: "بانک کشاورزی", icon: "🌾" },
  603769: { name: "بانک صادرات", icon: "📤" },
  589210: { name: "بانک سپه", icon: "🛡️" },
  610433: { name: "بانک ملت", icon: "👥" },
  628023: { name: "بانک مسکن", icon: "🏠" },
  627648: { name: "بانک توسعه صادرات", icon: "🚀" },
  627961: { name: "بانک صنعت و معدن", icon: "⛏️" },
  627353: { name: "بانک تجارت", icon: "💼" },
  589463: { name: "بانک رفاه", icon: "🩺" },
  639347: { name: "بانک پاسارگاد", icon: "🛤️" },
  627412: { name: "بانک اقتصاد نوین", icon: "💡" },
  622106: { name: "بانک پارسیان", icon: "🌟" },
  627488: { name: "بانک کارآفرین", icon: "🧑‍💼" },
  621986: { name: "بانک سامان", icon: "📅" },
  639346: { name: "بانک سینا", icon: "✨" },
  639607: { name: "بانک سرمایه", icon: "💰" },
  502806: { name: "بانک شهر", icon: "🏙️" },
  502938: { name: "بانک دی", icon: "☀️" },
  627381: { name: "بانک انصار", icon: "🛡️" },
  639599: { name: "بانک قوامین", icon: "⚖️" },
};

function detectBank() {
  const input = document.getElementById("bankInput").value.replace(/\D/g, ""); // Remove non-digits
  const resultElement = document.getElementById("result");

  if (input.length < 6) {
    resultElement.innerHTML = "❌ حداقل ۶ رقم وارد کنید"; // "Enter at least 6 digits"
    return;
  }

  const bin = input.slice(0, 6);
  const detectedBank = banks[bin] || { name: "بانک ناشناخته", icon: "❓" }; // "Unknown Bank"
  resultElement.innerHTML = `${detectedBank.icon} ${detectedBank.name}`;
}

function autoDetectBank() {
  const input = document.getElementById("bankInput").value.replace(/\D/g, "");
  if (input.length === 6) {
    detectBank();
  }
}
