import { TouchableOpacity, Text } from "react-native";
import React, {useEffect} from "react";

const CustomButton = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}) => {

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-blue-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
