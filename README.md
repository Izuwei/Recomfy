[![License badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Izuwei/Detection-of-violators/blob/master/LICENSE)
[![NodeJS badge](https://img.shields.io/badge/Node-v14.18.1-026e00.svg)](https://nodejs.org/en/download/releases)
[![NPM badge](https://img.shields.io/badge/npm-8.1.0-cc3534.svg)](https://www.npmjs.com/package/npm/v/8.1.0)

# Recomfy

Mobile application for recommending titles from various categories. It is possible to search for titles, view their description or rating. Recommendations are based on titles stored in favorites or on the basis of a specific title. The application offers basic themes and is translated into English, Czech, German and Turkish. Currently available categories are:
- Movies
- Serials
- Books
- Games
- Anime
- Manga

APK file can be found in `/build/*.apk`, but result of installation on mobile phone will be application without any funcionality that requires server - getting informations about any title. Only thing that can be tested that way is GUI without any data.

## Installation
- Download and install Android studio from https://developer.android.com/studio
- Download and install Node.js v14.18.1 from https://nodejs.org/en/download/releases

1. Launch Android Studio and open SDK manager
    - In SDK platform install Android (10.0) Q
    - In SDK Tools install following:
        - Android SDK Build-Tools: 31.0.0., 30.0.3, 29.0.3
        - Android Emulator
        - Android Emulator Hypervisor Driver
        - Android SDK Platform-Tools
2. Open AVD manager and create new virtual mobile device.
3. Open terminal and export following paths *(default installation directory)*:
    ```
    PATH = %PATH%;C:\Users\[YOURUSERPCNAME]\AppData\Local\Android\Sdk\platform-tools
    PATH = %PATH%;C:\Users\[YOURUSERPCNAME]\AppData\Local\Android\Sdk\emulator
    PATH = %PATH%;C:\Users\[YOURUSERPCNAME]\AppData\Local\Android\Sdk\tools\bin
    ```
4. In root directory run:
    ```
    npm install
    ```
5. In directory `/API` run:
    ```
    npm install
    ```
6. Launch created mobile device.
7. In terminal with exported paths run *(emulator-5554 should  be replaced with ID of your emulator)*:
    ```
    adb -s emulator-5554 reverse tcp:8080 tcp:8080 
    ```
8. In root directory and same terminal with exported paths launch mobile application by:
    ```
    npm start
    ```
9. In the browser click on button `run on Android device/emulator`.
10. Open new terminal and launch server in `/API` directory by typing:
    ```
    npm start
    ```

## License

Licensed under the MIT license - see [LICENSE](https://github.com/Izuwei/recomfy/blob/master/LICENSE "License").

## Screenshots

<img src="./screenshots/homepage.png" height="400" width="190">
<img src="./screenshots/recommendations.png" height="400" width="190">
<img src="./screenshots/search.png" height="400" width="190">
<img src="./screenshots/details.png" height="400" width="190">
<img src="./screenshots/dark_theme.png" height="400" width="190">
<img src="./screenshots/yellow_theme.png" height="400" width="190">
