import { Image, Pressable } from 'react-native'
import { View, Text } from '@/components/Themed'
import React from 'react'

export default function ProductCard({
  productname, 
  productprice,
  productimage,
  postDate,
  description,
  onPress
}: any) {
  return (
    <Pressable onPress={onPress} className="flex flex-col shadow-md my-[1px] bg-gray-900 rounded-lg">
      <Image
        source={{uri: productimage}}
        className="w-full h-64"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text
          className="text-xl text-white"
          fontWeight='bold'
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {productname}
        </Text>
        <View className="flex flex-row justify-between mt-2">
          <Text
            className="text-lg text-gray-400"
            fontWeight='medium'
          >
            ราคา {productprice} บาท
          </Text>
          <Text
            className="text-md text-gray-400 mt-1"
            fontWeight='medium'
          >
            เมื่อ {postDate}
          </Text>
        </View>
        <Text
          className="text-md text-gray-300 mt-2"
          fontWeight='light'
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
      </View>
    </Pressable>
  )
}