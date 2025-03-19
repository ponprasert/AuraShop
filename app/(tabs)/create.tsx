// rnf
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextField from "@/components/FormField";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "@/utils/supabase";
import { decode } from "base64-arraybuffer";
import CustomButton from "@/components/CustomButton";

interface ProductForm {
  title: string;
  price: string;
  description: string;
  category: string;
  condition: string;
  location: string;
  image?: string;
}

export default function Create() {
  const [form, setForm] = useState<ProductForm>({
    title: "",
    price: "",
    description: "",
    category: "",
    condition: "",
    location: "",
  });
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [conditionModalVisible, setConditionModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled && result.assets[0].base64) {
      setImageUri(result.assets[0].uri);
      setForm({ ...form, image: result.assets[0].base64 });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Upload image to bucket if exists
      let imagePath = null;
      if (form.image) {
        const fileName = ${Date.now()}.jpg;
        const { data, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, decode(form.image), {
            contentType: "image/jpeg",
          });

        if (uploadError) throw uploadError;
        imagePath = data.path;
      }

      // Insert product data
      const { data, error } = await supabase
        .from("products")
        .insert([
          {
            title: form.title,
            description: form.description,
            price: parseFloat(form.price),
            condition: form.condition,
            category: form.category,
            location: form.location,
            image_url: imagePath
              ? ${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${imagePath}
              : null,
          },
        ])
        .select();

      if (error) throw error;

      // Reset form after successful submission
      setForm({
        title: "",
        price: "",
        description: "",
        category: "",
        condition: "",
        location: "",
      });
      setImageUri(null);
    } catch (error) {
      console.error("Error creating product:", error);
      alert("เกิดข้อผิดพลาดในการสร้างสินค้า");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView className="h-full">
        <View className="px-4 mb-10">
          {/* Image Picker */}
          <TouchableOpacity
            onPress={pickImage}
            className="h-64 rounded-lg mb-4 mt-4 items-center justify-center"
          >
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                className="w-full h-full rounded-lg"
              />
            ) : (
              <FontAwesome name="camera" size={24} color="gray" />
            )}
          </TouchableOpacity>

          <CustomTextField
            title="ชื่อสินค้า"
            value={form.title}
            onChangeText={(text: any) => setForm({ ...form, title: text })}
          />
          <CustomTextField
            title="ราคา"
            value={form.price}
            keyboardType="numeric"
            onChangeText={(text: any) => setForm({ ...form, price: text })}
          />
          <CustomTextField
            title="รายละเอียด"
            value={form.description}
            multiline
            numberOfLines={4}
            onChangeText={(text: any) =>
              setForm({ ...form, description: text })
            }
          />
          <CustomTextField
            title="สถานที่"
            value={form.location}
            onChangeText={(text: any) => setForm({ ...form, location: text })}
          />

          <Pressable
            className="flex-row items-center my-2 py-3"
            onPress={() => setCategoryModalVisible(true)}
            android_ripple={{ color: "rgba(104, 104, 104, 0.3)" }}
          >
            <Text className="flex-1">{form.category || "หมวดหมู่"}</Text>
            <FontAwesome name="chevron-down" size={16} />
          </Pressable>

          <Pressable
            className="flex-row items-center my-2 py-3"
            onPress={() => setConditionModalVisible(true)}
            android_ripple={{ color: "rgba(104, 104, 104, 0.3)" }}
          >
            <Text className="flex-1">{form.condition || "สภาพ"}</Text>
            <FontAwesome name="chevron-down" size={16} />
          </Pressable>

          <CustomButton
            title="บันทึก"
            handlePress={handleSubmit}
            disabled={loading}
            className={`bg-blue-500 p-4 rounded-lg mt-4 ${
              loading ? "opacity-50" : ""
            }`}
          >
            <Text className="!text-white text-center text-lg" fontWeight="bold">
              {loading ? "กำลังบันทึก..." : "บันทึก"}
            </Text>
          </CustomButton>

          {/* Category Modal */}
          <Modal
            visible={categoryModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setCategoryModalVisible(false)}
          >
            <View className="flex-1 justify-center bg-black/50">
              <View className="bg-white m-4 rounded-lg p-4">
                <Text className="text-lg mb-4">เลือกหมวดหมู่</Text>
                {["อิเล็กทรอนิก", "แฟชั่น", "บ้านและสวน", "กีฬา", "อื่นๆ"].map(
                  (category) => (
                    <Pressable
                      key={category}
                      onPress={() => {
                        setForm({ ...form, category });
                        setCategoryModalVisible(false);
                      }}
                      className="py-2"
                      android_ripple={{ color: "rgba(104, 104, 104, 0.3)" }}
                    >
                      <Text>{category}</Text>
                    </Pressable>
                  )
                )}
              </View>
            </View>
          </Modal>

          {/* Condition Modal */}
          <Modal
            visible={conditionModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setConditionModalVisible(false)}
          >
            <View className="flex-1 justify-center bg-black/50">
              <View className="bg-white m-4 rounded-lg p-4">
                <Text className="text-lg mb-4">สภาพ</Text>
                {[
                  "ใหม่",
                  "มือสอง - เหมือนใหม่",
                  "มือสอง - สภาพดี",
                  "มือสอง - สภาพพอใช้",
                ].map((condition) => (
                  <Pressable
                    key={condition}
                    onPress={() => {
                      setForm({ ...form, condition });
                      setConditionModalVisible(false);
                    }}
                    className="py-2"
                    android_ripple={{ color: "rgba(104, 104, 104, 0.3)" }}
                  >
                    <Text>{condition}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
