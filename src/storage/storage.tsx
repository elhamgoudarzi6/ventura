import CryptoJS from "crypto-js";

const SECRET_KEY = "@AaPmAnAgEr_ApP-DeVeLoPeD-By-ApRaD-PrOgRaMmInG!-TeAm@";

export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (encrypted: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return "";
  }
};
