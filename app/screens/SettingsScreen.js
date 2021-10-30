import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
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
  const [language, setLanguage] = useState("eng");
  const [theme, setTheme] = useState("light");

  const [enabledFilms, setEnabledFilms] = useState(true);
  const [enabledSerials, setEnabledSerials] = useState(true);
  const [enabledBooks, setEnabledBooks] = useState(true);
  const [enabledGames, setEnabledGames] = useState(true);
  const [enabledAnime, setEnabledAnime] = useState(true);
  const [enabledManga, setEnabledManga] = useState(true);

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
          <Text style={styles.sectionHeader}>General</Text>
          <View style={[styles.line, { flex: 0.95 }]} />
        </View>

        <View style={styles.section}>
          <View style={styles.option}>
            <Text style={styles.caption}>Language</Text>
            <View style={styles.value}>
              <Picker
                selectedValue={language}
                onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
                style={{ width: "80%", textAlign: "center" }}
              >
                <Picker.Item label="English" value="cze" />
                <Picker.Item label="Czech" value="eng" />
                <Picker.Item label="Turkey" value="tur" />
              </Picker>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Theme</Text>
            <View style={styles.value}>
              <Picker
                selectedValue={theme}
                onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}
                style={{ width: "80%", textAlign: "center" }}
              >
                <Picker.Item label="Light" value="light" />
                <Picker.Item label="Dark" value="dark" />
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
          <Text style={styles.sectionHeader}>Content</Text>
          <View style={[styles.line, { flex: 0.95 }]} />
        </View>
        <View style={styles.section}>
          <View style={styles.option}>
            <Text style={styles.caption}>Films</Text>
            <View style={styles.value}>
              <Switch
                value={enabledFilms}
                onValueChange={() => setEnabledFilms((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Serials</Text>
            <View style={styles.value}>
              <Switch
                value={enabledSerials}
                onValueChange={() => setEnabledSerials((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Books</Text>
            <View style={styles.value}>
              <Switch
                value={enabledBooks}
                onValueChange={() => setEnabledBooks((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Games</Text>
            <View style={styles.value}>
              <Switch
                value={enabledGames}
                onValueChange={() => setEnabledGames((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Anime</Text>
            <View style={styles.value}>
              <Switch
                value={enabledAnime}
                onValueChange={() => setEnabledAnime((prev) => !prev)}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <Text style={styles.caption}>Manga</Text>
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
