import React from "react";
import { Image, View} from "react-native";

export default function LogInOptions({ icons }) {
  return (
    <View className="flex flex-row  items-center justify-center gap-12 px-4 py-4">
      {icons.map((icon, index) => {
        return (
          <Image
          key={index}
          source={icon} resizeMode="contain" className="w-8 h-8" />
        );
      })}
    </View>
  );
}
