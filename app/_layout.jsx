import { Stack, SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(pages)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
