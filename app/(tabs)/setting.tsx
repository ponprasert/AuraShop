// rnf
import React from 'react'
import { Alert, ScrollView, Pressable } from 'react-native'
import { View, Text } from '@/components/Themed'
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { supabase } from '@/utils/supabase'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

export default function Setting() {

  const handleLogout = async () => {
    try {
      // Logout from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert("Logout Failed", error.message);
        return;
      }
      
      // Clear login status from AsyncStorage
      await AsyncStorage.removeItem('isLoggedIn');

      // Redirect to login page
      // <Redirect href="/" />
      router.replace('/(auth)/login')
    } catch (error) {
      console.error('Failed to logout:', error);
      Alert.alert("Error", "An error occurred while logging out.");
    }
  };

  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className="px-4 pt-5 pb-5">
          
          {/* Settings Management */}
          <Section title="จัดการการตั้งค่า">
            <SectionItem icon="comment" text="โหมดพักร้อน" />
            <SectionItem icon="bell" text="การแจ้งเตือน" />
            <SectionItem icon="map-marker" text="ตำแหน่ง" />
          </Section>

          {/* Additional Actions */}
          <Section title="การดำเนินการเพิ่มเติม">
            <SectionItem icon="edit" text="ใช้การสร้างรายการสินค้าที่เรียบง่าย" />
            <SectionItem icon="user-plus" text="ให้ผู้คนผู้ติดตามคุณ" />
            <SectionItem icon="comment" text="ตั้งค่าข้อความที่กำหนดเอง" />
          </Section>

          {/* Privacy */}
          <Section title="ความเป็นส่วนตัว">
            <SectionItem icon="lock" text="ความเป็นส่วนตัว" />
            <SectionItem icon="shield" text="ความปลอดภัย" />
          </Section>

          {/* Logout */}
          <CustomButton title="Logout" handlePress={handleLogout} containerStyles="mt-7 px-8" />  
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View className="my-4">
    <Text className="text-lg text-gray-100" fontWeight='medium'>{title}</Text>
    {children}
  </View>
)

const SectionItem = ({ icon, text, onPress }: { icon: string, text: string, onPress?: () => void }) => (
  <Pressable
    className="flex-row items-center my-2 p-2 rounded-lg"
    onPress={() => console.log(`Pressed: ${text}`)}
    android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}
  >
    <FontAwesome name={icon as any} size={24} className="mr-4 dark:!text-white" />
    <Text className="text-base">{text}</Text>
  </Pressable>
)