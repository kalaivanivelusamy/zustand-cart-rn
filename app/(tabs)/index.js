import data from '@/data/data.json'
import { FlatList, Image, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={{flex: 1, padding: 10}}>
     <FlatList data={data}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({item}) => (  
      <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
       <Image 
        source={{uri: item.image}}
        style={{width: 100, height: 100, marginBottom: 10}} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 16, color: '#555'}}>${item.price}</Text>
      </View>
     )}>
      </FlatList>
    </View>
  )
}