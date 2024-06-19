import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const PageLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home-page"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default PageLayout;
