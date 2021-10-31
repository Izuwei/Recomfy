import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

import colors from "../constants/colors";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState("light");

  const [enabledFilms, setEnabledFilms] = useState(true);
  const [enabledSerials, setEnabledSerials] = useState(true);
  const [enabledBooks, setEnabledBooks] = useState(true);
  const [enabledGames, setEnabledGames] = useState(true);
  const [enabledAnime, setEnabledAnime] = useState(true);
  const [enabledManga, setEnabledManga] = useState(true);

  const storeLang = async (value) => {
    i18n.changeLanguage(value);
    try {
      await AsyncStorage.setItem("@i18n_lang", value);
    } catch (e) {
      console.log("Unable to store language!");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={[styles.line, { flex: 0.05 }]} />
          <Text style={styles.sectionHeader}>{t("General")}</Text>
          <View style={[styles.line, { flex: 0.95 }]} />
        </View>

        <View style={styles.section}>
          <View style={styles.option}>
            <Text style={styles.caption}>{t("Language")}</Text>
            <View style={styles.value}>
              <Picker
                selectedValue={i18n.language}
                onValueChange={(itemValue, itemIndex) => storeLang(itemValue)}
                style={{ width: "80%", textAlign: "center" }}
              >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Čeština" value="cz" />
                <Picker.Item label="Turkish" value="tr" />
              </Picker>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Theme")}</Text>
            <View style={styles.value}>
              <Picker
                selectedValue={theme}
                onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}
                style={{ width: "80%", textAlign: "center" }}
              >
                <Picker.Item label={t("Light")} value="light" />
                <Picker.Item label={t("Dark")} value="dark" />
              </Picker>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={[styles.line, { flex: 0.05 }]} />
          <Text style={styles.sectionHeader}>{t("Content")}</Text>
          <View style={[styles.line, { flex: 0.95 }]} />
        </View>
        <View style={styles.section}>
          <View style={styles.option}>
            <Text style={styles.caption}>{t("Films")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledFilms}
                onValueChange={() => setEnabledFilms((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Serials")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledSerials}
                onValueChange={() => setEnabledSerials((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Books")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledBooks}
                onValueChange={() => setEnabledBooks((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Games")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledGames}
                onValueChange={() => setEnabledGames((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Anime")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledAnime}
                onValueChange={() => setEnabledAnime((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>{t("Manga")}</Text>
            <View style={styles.value}>
              <Switch
                value={enabledManga}
                onValueChange={() => setEnabledManga((prev) => !prev)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "800",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 5,
    textAlign: "center",
  },
  section: {
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  option: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  caption: {
    flex: 0.4,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  value: {
    flex: 0.6,
    alignItems: "flex-end",
  },
  divider: {
    height: 0.4,
    backgroundColor: colors.black,
    opacity: 0.4,
  },
  line: {
    height: 1.5,
    backgroundColor: colors.red,
  },
});

export default SettingsScreen;
