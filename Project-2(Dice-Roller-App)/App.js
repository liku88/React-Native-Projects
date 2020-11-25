import React, {useState} from "react";
import {Text,Image,View,TouchableOpacity,StyleSheet} from "react-native";

import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";


const App = () => { 
  const [img, setImg] = useState(DiceOne);
  const btnFun = () => {
     let random = Math.floor(Math.random() * 6) + 1;
     switch(random){
       case 1:
         setImg(DiceOne);
          break;
        case 2:
          setImg(DiceTwo);
          break;
        case 3 :
          setImg(DiceThree);
          break;
        case 4:
          setImg(DiceFour);
          break;
        case 5:
          setImg(DiceFive);
          break;
        case 6:
          setImg(DiceSix);
          break;
        default :
        setImg(DiceOne);     

     }
  }
 return(
   <>
   <View style={Styles.container}>
   <Image style={Styles.image} source={img}/>
   <TouchableOpacity onPress={btnFun}>
   <Text style={Styles.txtBtn}>
   Play Dice
   </Text>
   </TouchableOpacity>
   </View>
   </>
 )
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831"
  },
  image :{
    width: 200,
    height:200
  },
  txtBtn:{
  fontSize:20,
  marginTop: 30,
  color: "#F2A365",
  paddingHorizontal: 40,
  paddingVertical: 10,
  borderColor: "#30475E",
  borderWidth: 3,
  borderRadius: 5,
  fontWeight: "bold"
  }
})
