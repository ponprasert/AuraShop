import React from 'react';
import { Image, ScrollView, Pressable } from 'react-native';
import { View, Text } from '@/components/Themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="p-4">
          {/* Profile Info */}
          <View className="items-center mb-6 mt-5">
            <Image
              source={{ uri: 'https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/482322551_1660342481275524_2055072166946369049_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGVIZ7cRae6m7nE-YnQKKMkI9zQJWihHqIj3NAlaKEeosNXJy7rBNqXiFgFQvSOWaUTjfvoXXUA9361JbTDw0eV&_nc_ohc=XwZKnXOWmx0Q7kNvgFVFvWu&_nc_oc=Adhnqwwvk7kL2dmprGgvSKdeYSbpk40UntQdhZALteoujtCsgvV8LJCaavIeq5WIefw&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=xuRkXmJGuKJS4vZBZpbD9Q&oh=00_AYH7kzh0zR6kOWFSbd8xJ7Cf1VrwCJWzkMlGSHSlL3HNWQ&oe=67DED9C9' }}
              className="w-20 h-20 rounded-full"
            />
            <Text className="text-3xl mt-5" fontWeight='medium'>พรประเสริฐ รัตนทิพย์</Text>
            <Text className="text-blue-400 text-base">ดูโปรไฟล์ Marketplace</Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รายการที่บันทึกไว้')}>
              <FontAwesome name="heart" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">รายการที่บันทึกไว้</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: กล่องข้อความ')}>
              <FontAwesome name="envelope" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">กล่องข้อความ</Text>
            </Pressable>
          </View>
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รีวิว')}>
              <FontAwesome name="star" size={24} className='dark:!text-white'   />
              <Text className="mt-2 text-center">รีวิว</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: ดูล่าสุด')}>
              <FontAwesome name="clock-o" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">ดูล่าสุด</Text>
            </Pressable>
          </View>

          {/* Sections */}
          <Section title="การขาย">
            <SectionItem icon="list" text="รายการสินค้าของคุณ" />
            <SectionItem icon="bolt" text="การดำเนินการด่วน" />
            <SectionItem icon="users" text="ผู้ติดตามบน Marketplace" />
            <SectionItem icon="line-chart" text="กิจกรรมการขายทั้งหมด" />
          </Section>

          <Section title="การตั้งค่า">
            <SectionItem icon="cog" text="กำลังติดตาม" />
          </Section>

          <Section title="บัญชี">
            <SectionItem icon="map-marker" text="ตำแหน่ง" />
            <SectionItem icon="lock" text="ความปลอดภัย" />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View className="mb-6">
    <Text className="text-lg text-gray-100" fontWeight='medium'>{title}</Text>
    {children}
  </View>
);

const SectionItem = ({ icon, text }: { icon: string, text: string }) => (
  <Pressable
    className="flex-row items-center mb-4 p-2 rounded-lg"
    onPress={() => console.log(`Pressed: ${text}`)}
    android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}
  >
    <FontAwesome name={icon as any} size={24} className="mr-4 dark:!text-white" />
    <Text className="text-base">{text}</Text>
  </Pressable>
);