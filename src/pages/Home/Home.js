import React, { useEffect } from 'react';
import { Text, Button, StyleSheet, ImageBackground, View,TouchableOpacity,Image } from 'react-native';
import Order from '../../components/icons/Order';

const Home = ({navigation}) => {
    useEffect(() => {
    }, [])
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Order />
            
            <TouchableOpacity
                style={styles.buttonFacebookStyle}
                activeOpacity={0.5}
                onPress={() => {navigation.navigate("Refeicoes")}}
              >
                <View  style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                  Cardapio
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonFacebookStyle}
                activeOpacity={0.5}
                onPress={() => {navigation.navigate("avaliacao")}}
              >
                <View  style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                  Avaliação
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      justifyContent: "center"
    },
    text: {
      color: "#fff",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#fff"
    },
    buttonFacebookStyle: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#63BF6A",
      borderWidth: 0.5,
      borderColor: "#fff",
      height: 50,
      borderRadius: 5,
      margin: 10,
      padding:12,
      position:'relative'

    },
    buttonTextStyle: {
      color: "#fff",
      marginBottom: 4,
     
    },
    ImageBackground:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
     
    }
    
});

export default Home;