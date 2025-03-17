import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "@/constants";

const SearchInput = ({ initialQuery }: { initialQuery?: string }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center h-16 px-4 mx-4 rounded-xl bg-black-100 focus:border-secondary">
      <TextInput
        className="text-white mt-0.5 flex-1"
        value={query}
        placeholder="ป้อนคำค้นหาสินค้า"
        placeholderTextColor="#fff"
        onChangeText={(e) => setQuery(e)}
        style={{ fontFamily: 'NotoSansThai-Regular' }}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "ไม่พบคำค้นหา",
              "กรุณาระบุคำค้นหา"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push('/home');
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput