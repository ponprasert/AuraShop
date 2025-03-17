// Button.tsx
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '@/components/Themed'

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="text-lg !text-secondary" fontWeight='bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button