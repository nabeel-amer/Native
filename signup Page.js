import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput,
  Alert, TouchableOpacity } from 'react-native';
 
import { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons'

export default function App() {

  return (
    <View style={{flex : 1}} >
    <ImageBackground style = {{flex:1}}  
      source={require("./assets/image1.jpg")}
    >
    <View style = {{flex : 0.30,  alignItems: "center", justifyContent: "center"}}>
    <Text style = {{fontSize:50, color:"lightblue"}}>Sign Up</Text>
    </View>
        <View style = {{flex : 0.40,  alignItems: "center", justifyContent: "center"}}>
       
    <TextInput style = {{backgroundColor:"lightgrey", marginBottom : 10 , width: 200, height: 30, borderRadius: 15, textAlign: "center",}} placeholder = "Username" keyboardType='numeric'/>
    <TextInput style = {{backgroundColor:"lightgrey", marginBottom : 10 , width: 200, height: 30, borderRadius: 15, textAlign: "center"}} placeholder = "Password" secureTextEntry={true}/>
    <TextInput style = {{backgroundColor:"lightgrey", marginBottom : 10 , width: 200, height: 30, borderRadius: 15, textAlign: "center"}} placeholder = "Email"/>
    <Text style={{color:"lightblue", marginTop: 10}}>Choose your Social Account</Text>
    <View style={{flexDirection: "row", marginTop:10}}>
    <FontAwesome name = 'google' size={25} style={{color:'blue'}}></FontAwesome>
      <FontAwesome name = 'facebook-square' size={25} style={{color:'blue',marginLeft:10}} ></FontAwesome>
  <View style={{alignItems:"left", marginTop:50,justifyContent : 'center'}}>
    
    </View>
      
    </View>



    </View>
    
    <View style = {{  alignItems: "center", justifyContent: "center"}}>
    
    <TouchableOpacity style={{width: 100, height: 40, backgroundColor: "lightblue", alignItems: "center", justifyContent: "center", borderRadius:15}}>
      <Text style={{ alignItems: "center", justifyContent: "center",color:"white" }}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={{color:"lightblue", marginTop:10}}>Read User License and Agreement</Text>
    </View>

    </ImageBackground>

    

    

    </View>


  );
}

// const styles = StyleSheet.create({
//   mainContainer : {
//     height : "100%",
//     paddingHorizontal : 30,
//     paddingTop : 30,
//     backgroundColor : "#fff",
//   },

//   mainHeader : {
//     fontSize : 25,
//     color : "#344055",
//     fontWeight : "500",
//     paddingTop : 20,
//     paddingBottom : 15,
//     textTransform : "capitalize",
//     fontFamily : "bold",
//   },
//   description : {
//     fontSize : 20,
//     color : "#7d7d7d",
//     paddingBottom : 20,
//     lineHeight : 25,
//     fontFamily : "regular",
//   },

//   inputContainer : {
//     marginTop : 20,
//   },

//   labels : {
//     fontSize : 18,
//     color : "#7d7d7d",
//     marginTop : 10,
//     marginBottom : 5,
//     lineHeight : 25,
//     fontFamily : "regular",
//   },

//   inputStyle :{
//     marginTop : 10,
//     borderWidth : 1,
//     borderColor : "rgba(0,0,0,0.3)",
//     paddingHorizontal : 15,
//     paddingVertical : 7,
//     borderRadius : 1,
//     fontFamily : "regular",
//     fontSize : 18,
//   },
  
//   buttonText : {
//     flexDirection: 'column',
//     borderWidth : 0,
//     borderColor : "rgba(0,0,0,0.3)",
//     paddingHorizontal : 0,
//     paddingVertical : 0,
//     borderRadius : 1,
//   },

// });
 