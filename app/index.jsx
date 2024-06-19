import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputBar, CustomButton, LogInOptions } from "../components";
import { icons } from "../constants";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();


  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full px-3 min-h-[85vh] pt-4 flex justify-center">
        <View className="flex flex-col justify-between ">
          <Text className="text-blue-100 text-2xl font-bold mb-4">Jobizz</Text>
          <Text className="font-extrabold text-black text-3xl mb-2">
            Welcome Back 👋
          </Text>
          <Text className="text-gray-400 mb-12 text-lg">
            Let's log in. Apply to jobs!
          </Text>
          <View className="flex flex-col gap-2 mb-4">
            <InputBar
              placeholder={"Name"}
              isFilterable={false}
              inputStyles={"border-2 border-gray-200"}
            />
            <InputBar
              placeholder={"Email"}
              isFilterable={false}
              inputStyles={"border-2 border-gray-200"}
            />
          </View>
          <CustomButton
            title={"Log In"}
            textStyles={"text-white"}
            handlePress={() => router.push("/home-page")}
          />
        </View>
        <View className="flex flex-row items-center justify-center mt-10 mb-5">
          <View className="h-[2px] bg-gray-300 w-[120px]"></View>
          <Text className="font-normal text-gray-500 m-2 p-0">
            Or Continue with
          </Text>
          <View className="h-[2px] bg-gray-300 w-[120px]"></View>
        </View>
        <LogInOptions
          icons={[icons.appleIcon, icons.googleIcon, icons.facebookIcon]}
        />
        <Text className="text-gray-500 text-center mt-10">
          Have an account?<Text className="text-blue-100">Register</Text>
        </Text>
      </View>
      <StatusBar backgroundColor="#FFFFFF" style="auto" />
    </SafeAreaView>
  );
}