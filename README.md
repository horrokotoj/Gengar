# vaccMe

VaccMe Mobile Application written in React Native by group Gengar

The VaccMe mobile application is a project for the Computer Systems with Project Work course at Uppsala University, spring 2021. It is an application for validating digital vaccination certificates.

# Views for development

## Splash

![Splash](./media/Splash.png)

## WelcomeScreen

![WelcomeScreen](./media/WelcomeScreen.png)

## PersonLoginScreen

![PersonLoginScreen](./media/PersonLoginScreen.png)

## PersonScreen

![PersonScreen](./media/PersonScreen.png)
Only exists as a navigator.

### PersonCalendarScreen

![PersonCalendarScreen](./media/PersonCalendarScreen.png)

### PersonCertScreen

![PersonCertScreen](./media/PersonCertScreen.png)

### PersonQrScreen

![PersonQrScreen](./media/PersonQrScreen.png)

### PersonBookScreen

![PersonBookScreen](./media/PersonBookScreen.png)

### PersonSettingsScreen

![PersonSettingsScreen](./media/PersonSettingsScreen.png)

## BusinessLoginScreen

![BusinessLoginScreen](./media/BusinessLoginScreen.png)

### BusinessHomeScreen

![BusinessHomeScreen](./media/BusinessHomeScreen.png)

### BusinessScanScreen

![BusinessScanScreen](./media/BusinessScanScreen.png)

### BusinessScanScreen scanned

![BusinessScanScreen-scanned](./media/BusinessScanScreen-scanned.png)

### BusinessValidScreen

![BusinessValidScreen](./media/BusinessValidScreen.png)

### BusinessInvalidScreen

![BusinessInvalidScreen](./media/BusinessInvalidScreen.png)

# Dependancies

Using expo for deployment.

### QR-reader

-   Barcode scanner: `expo install expo-barcode-scanner`

```bash
expo install expo-barcode-scanner
```

### Sound effects

-   `expo install`
    -   expo-av

```bash
expo install expo-av
```

### Navigation and tab bar

-   `npm install`
    -   @react-navigation/native
    -   @react-navigation/stack
    -   @react-navigation/bottom-tabs
    -   react-native-qrcode-svg (--legacy-peer-deps)
-   `expo install`
    -   react-native-reanimated
    -   react-native-gesture-handler
    -   react-native-screens
    -   react-native-safe-area-context
    -   @react-native-community/masked-view
    -   expo-secure-store

```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
```

```bash
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view expo-secure-store react-native-qrcode-svg expo-av
```

In some cases the react-native-qrcode-svg need the flag --legacy-peer-deps.
`TODO:` What cases?

### Google-api

-   `expo install expo-google-app-auth`

```bash
expo install expo-google-app-auth
```
