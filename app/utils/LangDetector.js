import AsyncStorage from "@react-native-async-storage/async-storage";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const lang = await AsyncStorage.getItem("@i18n_lang");
    return callback(lang);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export default languageDetector;
