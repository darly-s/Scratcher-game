# “Scratcher  game” UI Documentaion

Test sample of Scratcher  game
Game engine: HTML 5(expo-pixi - Tool to use Pixi.js in Expo)
Phones and tablets. (iOs devices for now)
Game works on WebView inside ReactNative application
Multiplayer: no

## Installation

There are two tools that you need to develop apps with Expo: a local development tool and a mobile client to open your app.

**Desktop Tool: XDE**

XDE stands for Expo Development Environment. It is a standalone desktop app that includes all dependencies you'll need to get started.
Download the latest version of XDE for [macOS](https://xde-updates.exponentjs.com/download/mac), [Windows (64-bit)](https://xde-updates.exponentjs.com/download/win32), or [Linux](https://xde-updates.exponentjs.com/download/linux-x86_64).
On Linux, open with chmod a+x xde*.AppImage and ./xde*.AppImage.

**Optional Command Line Tool: exp**

`exp` is an alternative to XDE for users who prefer to use the command line.
You can choose whichever one you want. Some advanced Expo features may require you to use exp later.
You can install exp by running `npm i -g exp`.

## Running the example

Clone or download the project. Run `npm install`

> This lib uses @expo/browser-polyfill please take a look at this [issue with v26](https://github.com/expo/browser-polyfill#bug). You will need to run `rm -rf node_modules/gl-matrix/.babelrc` after running `npm install`

Open Expo XDE and run the project on ios or android simulator. For more info visit [Expo Docs](https://docs.expo.io/versions/v27.0.0/introduction/xde-tour)

## Running the example on your device

Expo Client helps view your projects while you're developing them. When you serve your project from XDE or `exp`, it generates a development URL that you can open in Expo Client to preview your app. On Android, Expo Client can also be used to view others' projects on expo.io. Expo Client works on devices, simulators, and emulators.

[Download for Android from the Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) or [for iOS from the App Store](https://itunes.com/apps/exponent)
> Required Android and iOS versions: The minimum Android version Expo supports is Android 4.4 and the minimum iOS version is iOS 9.0.
You don't need to manually install the Expo client on your emulator/simulator, because XDE will do that automatically. See the next sections of this guide.