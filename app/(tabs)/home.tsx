// rnf
import React, { useState } from "react"
import { FlatList, RefreshControl, Image } from "react-native"
import { View, Text } from "@/components/Themed"
import { SafeAreaView } from "react-native-safe-area-context"
import ProductCard from "@/components/ProductCard"
import HorizontalCard from "@/components/HorizontalCard"
import { images } from "@/constants"
import SearchInput from "@/components/SearchInput"

export default function Home() {
  // Product Data
  const products = [
    {
      id: 1,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Python Django 5 และ Next.JS 15 ร่วมกับ Supabase",
      price: 535,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/workshop_django_nextjs.jpg",
      postDate: "10 Mar 2024 20:30",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Python Django 5 และ Next.JS 15 ร่วมกับ Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 2,
      name: "เรียนรู้การสร้างแอพพลิเคชั่นด้วย React Native และ Expo",
      price: 299,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_React_Native_Expo_Pic_Course.jpg",
      postDate: "12 Mar 2024 15:00",
      description:
        "เรียนรู้การสร้างแอพพลิเคชั่นด้วย React Native และ Expo เพื่อสร้างแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 3,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Vue และ Nuxt 3 ร่วมกับ Prisma และ Supabase",
      price: 399,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_Vue_Nuxt_Pic_Course.jpg",
      postDate: "14 Mar 2024 10:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Vue และ Nuxt 3 ร่วมกับ Prisma และ Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 4,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Kubernetes (K8s) สำหรับผู้พัฒนาเว็บ",
      price: 599,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/k8s-for-dev-cover.jpg",
      postDate: "16 Mar 2024 11:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Kubernetes (K8s) เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 5,
      name: "Internet of Things with MicroPython สำหรับผู้เริ่มต้น",
      price: 499,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/IOT_MicroPython_Cover.jpg",
      postDate: "18 Mar 2024 12:00",
      description:
        "Learn to build web applications using MicroPython. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Go และ React",
      price: 329,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Go_and_React_PicCourse.jpg",
      postDate: "20 Mar 2024 13:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Go และ React เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 7,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Web API Spring Boot 3 Kotlin ร่วมกับ Nuxt 3 และ Docker",
      price: 379,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/SpringBoot3_With_Nuxt3_PicCourse.jpg",
      postDate: "22 Mar 2024 14:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Web API Spring Boot 3 Kotlin ร่วมกับ Nuxt 3 และ Docker เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 8,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Laravel 11 ร่วมกับ Vue 3",
      price: 389,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Laravel11_Vue3_Pic_Course.jpg",
      postDate: "24 Mar 2024 15:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Laravel 11 ร่วมกับ Vue 3 เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 9,
      name: "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Angular 17 ร่วมกับ .NET Core 8",
      price: 989,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Angular_with_NET8_PictureCourse.jpg",
      postDate: "26 Mar 2024 16:00",
      description:
        "เรียนรู้การสร้างเว็บแอพพลิเคชั่นด้วย Angular 17 ร่วมกับ .NET Core 8 เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างเว็บแอพพลิเคชั่นที่มีประสิทธิภาพและมีความปลอดภัย",
    },
    {
      id: 10,
      name: "สร้างรายงานด้วย Power BI ร่วมกับ Power Query สำหรับผู้เริ่มต้น",
      price: 890,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/PowerBI_With_Power_Query_Pic_Course.jpg",
      postDate: "28 Mar 2024 17:00",
      description:
        "เรียนรู้การสร้างรายงานด้วย Power BI ร่วมกับ Power Query เพื่อสร้างรายงานที่มีประสิทธิภาพและมีความปลอดภัย รวมถึงการจัดการข้อมูลด้วย Supabase เพื่อสร้างรายงานที่มีประสิทธิภาพและมีความปลอดภัย",
    },
  ]

  const horizontalItems = [
    {
      id: 1,
      title: "สมาทโฟนสำหรับผู้เริ่มต้นอินเทอร์เน็ต",
      image:
        "https://www.pixalate.com/hubfs/Blog_Media/Blog%20covers/shutterstock_224743036.jpg",
    },
    {
      id: 2,
      title: "Sample IOT for Beginner 2",
      image:
        "https://iottechnews.com/wp-content/uploads/2023/03/IoT-Runs-on-Arm-Paid-Ads_300x600_ST2.png",
    },
    {
      id: 3,
      title: "Sample IOT for Beginner 3",
      image:
        "https://www.verytechnology.com/wp-content/uploads/2022/10/nfciot.jpg",
    },
    {
      id: 4,
      title: "Sample IOT for Beginner 4",
      image:
        "https://thumbs.dreamstime.com/b/nfc-perto-de-uma-comunica%C3%A7%C3%A3o-do-campo-30837330.jpg",
    },
    {
      id: 5,
      title: "Sample IOT for Beginner 5",
      image:
        "https://thumbs.dreamstime.com/b/terminal-de-paiement-avec-la-carte-de-cr%C3%A9dit-sur-le-bureau-dans-la-boutique-57656151.jpg",
    },
  ]

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    // Fetch Data from API
    console.log("Fetching Data...")
    setRefreshing(false)
  }

  const handleHorizontalCardPress = (item: any) => {
    console.log("Horizontal Card Pressed:", item.title)
  }

  const handleProductCardPress = (item: any) => {
    console.log("Product Card Pressed:", item.name)
  }

  return (
    <SafeAreaView className="h-full">
      <FlatList
        ListHeaderComponent={() => (
          <View className="flex py-6 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6 px-4">
              <View>
                <Text className="font-pmedium text-md text-gray-100">
                  ยินดีต้อนรับ
                </Text>
                <Text className="text-2xl text-white">พรประเสริ ซีฟู๊ด</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 px-4">
              <Text className="text-lg font-pregular text-gray-100">
                สินค้าแนะนำ
              </Text>
            </View>
            <FlatList
              horizontal
              data={horizontalItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HorizontalCard
                  image={item.image}
                  title={item.title}
                  onPress={() => handleHorizontalCardPress(item)}
                />
              )}
              showsHorizontalScrollIndicator={false}
              className="mt-4"
            />
          </View>
        )}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            productname={item.name}
            productprice={item.price}
            productimage={item.imgurl}
            postDate={item.postDate}
            description={item.description}
            onPress={() => handleProductCardPress(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text className="text-center">ไม่พบสินค้า</Text>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  )
}