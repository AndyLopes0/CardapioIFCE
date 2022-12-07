import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const Order = () => {
    return <ImageBackground source={require('../../assets/Order.png')} resizeMode="contain" style={styles.image}></ImageBackground>;
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
      justifyContent: "center"
    },
    ImageBackground:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",     
    }
    
});

export default Order;