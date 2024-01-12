import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default function App() {

  const [count, setCount] = useState<number>(0)

  
  const [ imageURL, setImageURL ] = useState<string>('https://thptphanvantri.edu.vn/hinh-anh-dang-yeu-cua-be/imager_792.jpg')

  const [inputURL, setInputURL] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const loadImage = () => {
    setLoading(true)
    setImageURL(inputURL)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    
  }

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.subText}>
        The easiest way to start with your amazing application
      </Text>
      <Image style={styles.mainImage} source={ { uri: imageURL } } />
      <Text style={styles.mainText}>
        {count}
      </Text>
      { loading && <ActivityIndicator /> } 
      <TextInput style={{ borderWidth: 2, fontSize: 10, width: '100%', height: 30, borderColor: "#eee", borderRadius: 5, padding: 5 }}  onChangeText={(value) => {
        setInputURL(value)
      }} />
      <TouchableOpacity style={styles.button} onPress={loadImage}>
        <View >
          <Text>
           Load Image
            </Text>
        </View>
      </TouchableOpacity> 
    </View>
  );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25
    },
    mainImage: {
      width: 90,
      height: 80
    },
    mainText: {
      fontSize: 22,
      fontWeight: "900",
      marginVertical: 20,
      color: "#5f1ad0"
    },
    subText: {
      fontSize: 15,
      marginBottom: 15,
      textAlign: "center",
      fontWeight: "700"
    },
    button: {
      width: "100%",
      padding: 15,
      borderColor: "#eee",
      borderRadius: 5,
      borderWidth: 2,
      alignItems: "center",
      marginTop: 10
    },
    loginBtn: {
      backgroundColor: "#560cce"
    },
    loginLabel: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600"
    },
    signUpLabel: {
      color: "#560cce",
      fontSize: 16,
      fontWeight: "600"
    }
})
