import { useState } from "react";
import { icons } from "../constants";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

const InputBar = ({
  title,
  placeholder,
  filterIcon = icons.filter,
  isFilterable = true,
  searchIcon,
  handleSearch,
  handleFilter,
  otherStyles,
  inputStyles,
  placeholderStyles,
}) => {
  return (
    <View className={`flex-row items-center p-2 ${otherStyles}`}>
      <View className={`flex-1 flex-row items-center ${inputStyles}  bg-white rounded-2xl px-3 py-3 mr-3`}>
        <Image source={searchIcon} className="w-5 h-5" />
        <TextInput
          className={`placeholder:text-gray-400 py-2 placeholder:font-thin flex-1 text-lg`}
          placeholder={placeholder || "Search"}
          onChangeText={handleSearch}
          style={{ color: "black" }}
        />
      </View>
      {isFilterable && (
        <TouchableOpacity
          className="ml-2 bg-gray-200 p-4 rounded-xl"
          onPress={handleFilter}
        >
          <Image source={filterIcon} className="w-6 h-6 tint-white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputBar;
