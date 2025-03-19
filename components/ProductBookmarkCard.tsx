//ProductBookmarkCard.tsx

import React from 'react';
import { Image, Pressable } from 'react-native'
import { View, Text } from './Themed'

interface ProductBookmarkCardProps {
  image: string;
  title: string;
  price: string;
  status: string;
  onPress: () => void;
}

const ProductBookmarkCard: React.FC<ProductBookmarkCardProps> = ({ image, title, price, status, onPress }) => {
  return (
    <Pressable onPress={onPress} className="shadow-md my-[1px] dark:bg-gray-800 bg-white" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}>
      <View className="flex-row items-center px-4 py-2">
        <Image source={{ uri: image }} className="w-16 h-16 rounded" />
        <View className="flex-1 ml-4">
          <Text className="text-lg" numberOfLines={2} ellipsizeMode="tail">{title}</Text>
          <Text className="!text-gray-400">{price} - {status}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductBookmarkCard;