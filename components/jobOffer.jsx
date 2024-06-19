import { View, Text, Image } from "react-native";
import React from "react";

const JobOffer = ({ image, position, company, salary, location }) => {
  return (
    <View className="flex-row justify-evenly items-start px-1 py-4  rounded-[15px] mb-4 bg-white">
      <Image source={image} className="w-12 h-12" />
      <View className="flex flex-col items-start justify-start">
        <Text className="text-black font-bold text-[15px]">{position}</Text>
        <Text className="text-gray-400 text-[15px]">{company}</Text>
      </View>
      <View className="flex flex-col items-end justify-end">
        <Text className="text-black font-bold text-[15px] text-right">{salary}</Text>
        <Text className="text-gray-400 text-[15px]">{location}</Text>
      </View>
    </View>
  );
};

export default JobOffer;
