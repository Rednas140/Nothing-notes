/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#000';
const tintColorDark = '#E7E9E9';

export const Colors = {
  light: {
    text: '#000',
    background: '#E7E9E9',
    tint: tintColorLight,
    icon: '#EB0008',
    tabIconDefault: '#EB0008',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#E7E9E9',
    background: '#000',
    tint: tintColorDark,
    icon: '#EB0008',
    tabIconDefault: '#EB0008',
    tabIconSelected: tintColorDark,
  },
};
