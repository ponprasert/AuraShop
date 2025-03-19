// rnf
import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from '@/components/Themed'
import { SafeAreaView } from "react-native-safe-area-context"
import ProductBookmarkCard from '@/components/ProductBookmarkCard'

export default function Bookmark() {

  const products = [
    {
      image: 'https://www.pixalate.com/hubfs/Blog_Media/Blog%20covers/shutterstock_224743036.jpg',
      title: 'Temperature Sensor Industry for new design with new design and new design and new design',
      price: '฿2,500',
      status: 'ขายแล้ว',
    },
    {
      image: 'https://iottechnews.com/wp-content/uploads/2023/03/IoT-Runs-on-Arm-Paid-Ads_300x600_ST2.png',
      title: 'สมาร์ทโฟนสำหรับผู้สูงอายุ ในยุคสมัยนี้ ด้วยระบบสมาร์ทโฟนสำหรับผู้สูงอายุ ที่มีความสะดวกสบายสำหรับผู้สูงอายุ',
      price: '฿1,500',
      status: 'มีสินค้า', 
    },
    {
      image: 'https://www.verytechnology.com/wp-content/uploads/2022/10/nfciot.jpg',
      title: 'Sample IOT for Beginner 3',
      price: '฿1,500',
      status: 'มีสินค้า', 
    },
    {
      image: 'https://www.pixalate.com/hubfs/Blog_Media/Blog%20covers/shutterstock_224743036.jpg',
      title: 'Temperature Sensor Industry for new design',
      price: '฿2,500',
      status: 'ขายแล้ว',
    },
    {
      image: 'https://www.pixalate.com/hubfs/Blog_Media/Blog%20covers/shutterstock_224743036.jpg',
      title: 'Temperature Sensor Industry for new design',
      price: '฿2,500',
      status: 'ขายแล้ว',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/nfc-perto-de-uma-comunica%C3%A7%C3%A3o-do-campo-30837330.jpg',
      title: 'Sample IOT for Beginner 4 with new design and new design and new design and new design',
      price: '฿1,500',
      status: 'มีสินค้า', 
    },
    {
      image: 'https://www.pixalate.com/hubfs/Blog_Media/Blog%20covers/shutterstock_224743036.jpg',
      title: 'Temperature Sensor Industry for new design',
      price: '฿2,500',
      status: 'ขายแล้ว',
    },
    {
      image: 'https://iottechnews.com/wp-content/uploads/2023/03/IoT-Runs-on-Arm-Paid-Ads_300x600_ST2.png',
      title: 'Sample IOT for Beginner 1',
      price: '฿1,500',
      status: 'มีสินค้า', 
    },
    {
      image: 'https://www.verytechnology.com/wp-content/uploads/2022/10/nfciot.jpg',
      title: 'Sample IOT for Beginner 3',
      price: '฿1,500',
      status: 'มีสินค้า', 
    },
  ];

  return (
    <SafeAreaView className="h-full">
        <FlatList
          ListHeaderComponent={() => (
            <View className="w-full flex-1 pt-5 px-4">
              <Text className="text-2xl font-pregular text-gray-100">
                รายการสินค้าของคุณ
              </Text>
            </View>
          )}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ProductBookmarkCard
              image={item.image}
              title={item.title}
              price={item.price}
              status={item.status}
              onPress={() => console.log('Product pressed:', item.title)}
            />
          )}
        />
    </SafeAreaView>
  )
}