import { View, Text, ScrollView, Image, Dimensions, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { images } from '@/constants'
import Button from '@/components/Button'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'

export default function register() {

  // สร้างตัวแปร State สำหรับเก็บค่าของ Display Name, Email และ Password
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('') 

  // สร้างฟังก์ชันสำหรับ submit form สำหรับการสมัครสมาชิก
  const handleRegister = async () => {
    setError('')

    // เช็คว่ามีการกรอกข้อมูลในช่อง Display Name, Email และ Password หรือไม่
    if(!displayName || !email || !password) {
      Alert.alert('Incomplete Information', 'Please fill in all fields')
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          displayName 
        }
      }
    })

    if(error) {
      setError(error.message)
    } else {
      console.log('Token:', data.session?.access_token) // แสดง token ไปยัง console
      Alert.alert(
        'Registration Successful',
        'You have successfully registered. Press OK to login.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/login'), // ส่งไปยังหน้า Login
          },
        ]
      )
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full px-4 my-6">
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
              Sign Up to AuraShop
            </Text>

            <FormField
              title="Display Name"
              value={displayName}
              onChangeText={setDisplayName}
              otherStyles="mt-10"
            />

            <FormField
              title="Email"
              value={email}
              onChangeText={setEmail}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={password}
              onChangeText={setPassword}
              otherStyles="mt-7"
            />

            {
              error ? (
                <Text className="text-red-500 mt-4">{error}</Text>
              ) : null
            }

            <CustomButton
              title="Register"
              handlePress={handleRegister}
              containerStyles="mt-7"
            />

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Button title="Login" onPress={() => router.replace('/login')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}