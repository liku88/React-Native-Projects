import React, {useState} from "react";
import {Text, StyleSheet,View,TouchableOpacity, StatusBar} from "react-native";

const App = () => {
  const [randombgColor , setRandombgColor] = useState('rgb(32,0,126)');

  const changeBg = () => {
    let color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
    setRandombgColor(color);
  }

  const setBlack = () => {
    let color ="#000000";
    setRandombgColor(color);
  }

  return(
    <>
    <StatusBar backgroundColor={randombgColor} />
    <View style={[styles.container, {backgroundColor: randombgColor}]}>
    <TouchableOpacity onPress={changeBg}>
    <Text style={styles.text}>Hello </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={setBlack}>
    <Text style={styles.text1}>Reset</Text>
    </TouchableOpacity>
    </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
container:{
flex: 1,
alignItems : "center",
justifyContent: "center"
},
text:{
  fontSize: 20,
  backgroundColor : "#BB2CD9",
  paddingVertical: 10,
  paddingHorizontal: 40,
  color: "#FFFFFF",
  borderRadius: 15,
  textTransform: "uppercase"
},
text1:{
  fontSize: 20,
  backgroundColor : "#BB2CD9",
  marginVertical : 15,
  paddingVertical: 10,
  paddingHorizontal: 40,
  color: "#FFFFFF",
  borderRadius: 15,
  textTransform: "uppercase"
}
});