import { Dimensions, ScrollView, Text, View, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView, } from 'react-native-safe-area-context'
import images from '@/constants/images'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { useState } from 'react'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { supabase } from '@/utils/supabase'

export default function login() {

  // กำหนดตัวแปร State สำหรับเก็บค่าของ Email และ Password
  const [form, setForm] = useState({
    email: "your@email.com",
    password: "yourpassword",
  })

  // กำหนดตัวแปรเก็บสถานะการ submit ข้อมูล
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ฟังก์ชัน submit form สำหรับการเข้าสู่ระบบ
  const submit = async () => {

    setIsSubmitting(true)

    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      Alert.alert("Login Failed", error.message)
    } else {
      console.log('Token:', data.session?.access_token) // Log the token
      Alert.alert(
        'Login Successful',
        'You have successfully registered. Press OK to login.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/(tabs)/home'), // ส่งไปยังหน้า Home
          },
        ]
      )
    }

    setIsSubmitting(false)
  }

  return (
    <SafeAreaView className='px-4 my-6 bg-primary h-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='h-full'
      >
        <ScrollView>
          <View
            className="w-full flex justify-center h-full px-4 my-6"
            style={{
              minHeight: Dimensions.get("window").height - 100,
            }}
          >
            <View className="flex items-center">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="h-[34px]"
              />
            </View>

            <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
              Log in to AuraShop
            </Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e:any) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e:any) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />

            <CustomButton
              title="Login"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Button title="Register" onPress={() => router.replace('/register')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}