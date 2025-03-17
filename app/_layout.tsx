// Import your global CSS file
import "../global.css"
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useEffect } from "react"
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useColorScheme, StatusBar } from 'react-native'
import { View } from "@/components/Themed"

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    "NotoSansThai-Thin": require("../assets/fonts/NotoSansThai-Thin.ttf"),
    "NotoSansThai-ExtraLight": require("../assets/fonts/NotoSansThai-ExtraLight.ttf"),
    "NotoSansThai-Light": require("../assets/fonts/NotoSansThai-Light.ttf"),
    "NotoSansThai-Regular": require("../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../assets/fonts/NotoSansThai-Bold.ttf"),
    "NotoSansThai-ExtraBold": require("../assets/fonts/NotoSansThai-ExtraBold.ttf"),
    "NotoSansThai-Black": require("../assets/fonts/NotoSansThai-Black.ttf"),
  });

  // Apply the fonts to the app
  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null
  if(!fontsLoaded && !error) return null

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return(
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className="h-screen">
        <StatusBar className={colorScheme === 'dark' ? 'bg-black text-white': 'bg-white text-black'} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </View>
    </ThemeProvider>
  )
}