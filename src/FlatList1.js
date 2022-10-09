import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput,
  Alert, TouchableOpacity, FlatList } from 'react-native';
const FlatList1 = () =>{
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
};

export default FlatList1;

