import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput,
  Alert, TouchableOpacity, FlatList } from 'react-native';
  import { FlatList1 } from './src/FlatList1';

 


const App = () => {
    const NetflixSeries = [
        {
            name: "Kobra Kai",
            year: "2011",
            genre: "Drama",
        },
        {
            name: "Kobra Kai",
            year: "2011",
            genre: "Drama",
        },
        {
            name: "Kobra Kai",
            year: "2011",
            genre: "Drama",
        },
        {
            name: "Kobra Kai",
            year: "2011",
            genre: "Drama",
        }
      ];

      return(
        <FlatList
            data = {NetflixSeries}
            renderItem = {({item}) => 
            {return <Text>{item.name}</Text>}}
        />
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
 