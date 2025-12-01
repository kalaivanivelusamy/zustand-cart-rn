import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerRight: () => (<Text style={{marginRight: 10,fontSize: 18}}> 0 </Text>)
      }}>
      <Tabs.Screen name="index" options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: () => (
         <Ionicons name="home-outline" size={24} color="black" />
        )
      }} />
       <Tabs.Screen name="cart" options={{
        headerShown: false,
        tabBarLabel: 'Cart',
        tabBarIcon: () => (
         <Ionicons name="cart-outline" size={24} color="black" />
        )
      }} />
    </Tabs>
  )
}
