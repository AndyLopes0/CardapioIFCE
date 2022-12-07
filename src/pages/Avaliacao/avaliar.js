import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';


export default App = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('./img1.png')
                    : require('./img2.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Classifique a sua experiência
        </Text>
        <RatingBar />
        <Text style={styles.textStyle}>
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
      
          <TextInput
            placeholder= "Deixe um comentário"
            style = {styles.input}
            multiline
            keyboardType = "textarea"
            />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          <Text style={styles.buttonTextStyle}>
            Obter Valor Selecionado
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
    marginBottom: 15
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  input: {
    width: "100%",
    height: 100,
    textAlign: 'center',
    backgroundColor: '#DDD',
    borderRadius: 0,
    fontSize: 20,
    padding: 0
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});



  