import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text } from 'react-native'
import { useCartStore } from '../store/cartStore'

export default function TabLayout() {
  const itemsCount = useCartStore(state => state.itemsCount)

  return (
    <Tabs screenOptions={{
      headerRight: () => (<Text style={{marginRight: 10,fontSize: 18}}> {itemsCount} </Text>)
      }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: () => (
         <Ionicons name="home-outline" size={24} color="black" />
        )
      }} />
       <Tabs.Screen name="cart" options={{
        headerShown: true,
        tabBarLabel: 'Cart',
        tabBarIcon: () => (
         <Ionicons name="cart-outline" size={24} color="black" />
        )
      }} />
    </Tabs>
  )
}
