# React Native Movie App

This project is 2 page app as POC for react-native applications which can be use for andorid and ios application building.

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [React Native](https://reactnative.dev/docs/environment-setup)
- [Expo Go](https://docs.expo.io/versions/latest/workflow/expo-cli/)
- [Xcode 14](https://developer.apple.com/xcode)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

---

# Screenshots

- iOS

  ![iOS](https://i.postimg.cc/nrcPG9YH/iOS-RTI.png)

- Android

  ![iOS](https://i.postimg.cc/kGJxpk4C/Android-RTI.png)

## Configuring the project

1. Clone this repo to your local machine.

```
git clone https://github.com/rathodravi/ReactNativeMovieApp.git

cd ReactNativeMovieApp
```

2. Set API key value from [TheMovieDB](https://www.themoviedb.org)

```
#src/config/index.js
API_KEY = XXXX
```

## Running the application

1. Install client dependencies.

```
npm install
```

2. Launch the React Native app in your simulator under your project directory.

```
npx expo start  #Generic start of application

# or

expo start --ios #Launch to iOS simulator

expo start --android #Launch to Android simulator

```

---
