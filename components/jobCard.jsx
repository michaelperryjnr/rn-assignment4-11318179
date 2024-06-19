import { View, Text, Image, ImageBackground } from "react-native";
import { backgrounds } from "../constants";

const JobCard = ({ company, role, salary, location, image, bgColor }) => {
  return (
    <ImageBackground
      source={backgrounds.background}
      resizeMode="cover"
      className={`${bgColor} px-4 py-4 flex flex-col rounded-xl  w-[300px] ml-3 h-[200px] justify-between`}
      opacity={0.2}
      >
        <View className="flex flex-row items-center justify-start gap-2">
          <View className="bg-white rounded-lg p-[10px]">
            <Image source={image} resizeMode="contain" className="w-9 h-9" />
          </View>
          <View className="flex flex-col">
            <Text className="text-white font-bold text-xl">{role}</Text>
            <Text className="text-white text-sm">{company}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-2">
          <Text className="text-white text-sm">{salary}</Text>
          <Text className="text-white text-sm">{location}</Text>
        </View>
    </ImageBackground>
  );
};

export default JobCard;
