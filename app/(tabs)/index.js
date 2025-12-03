import data from '@/data/data.json'
import { Ionicons } from '@expo/vector-icons'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCartStore } from '../store/cartStore'

export default function Home() {

    const addToCart = useCartStore(state => state.addToCart)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const clearCart = useCartStore()

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100, marginBottom: 10 }} />
        <View style={styles.itemInfoWrapper}>
          <Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="add-outline" size={30} color="black" onPress={() => addToCart(item)}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="remove-outline" size={30} color="black" onPress={() => removeFromCart(item.id)}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}>
      </FlatList>
    </View>
  )
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 10
    },

    itemContainer:
    {
      padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'
    },

    itemWrapper:
    {
      flexDirection: 'row',
      marginBottom: 16,
      gap: 12,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10
    },

    itemInfoWrapper: {
      gap: 10,
    },

    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    itemPrice: {
      fontSize: 16,
      color: '#555',
      fontWeight: '600'
    },

    buttonContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#f0f0f0',
      padding: 2,
      borderRadius: 5
    }

  })

