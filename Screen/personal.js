import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';

export default function Personal() {

return(
    <View style={{flex:1}}>
       <Image style={{
        width:"100%",height:180
       }} source={{uri:"https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/190914822_328987512191740_6771604365206838213_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WQcG7N-007sAX_5AwxO&tn=OZvRkjCdNKIMa2Vr&_nc_ht=scontent.fhan5-1.fna&oh=00_AfBzgtSGO_qoefzy56X3RgJf0gbsrF8bWKxeFnLxoTORNQ&oe=63EDA8CD"}}/>
       <Image style={{
        width:130 , height:130,
        borderRadius:65, justifyContent: "center" , alignSelf:"center",position:"absolute",
        marginTop:100 , borderWidth:3 , borderColor:"white",

       }} source={{uri:"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/321129180_1132955530740988_4259225682888261198_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-xCxHsLBGp0AX_J6wes&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfApQBna2X3uohm-0NRoAmboivU0tzsGUtL6eWxUgGkq9A&oe=63EE6B45"}}/>
       <Text style={{alignSelf:"center", marginTop:60, fontSize:25, fontWeight:"bold"}}>Ngô Quang Sang</Text>
       <Text style={{alignSelf:"center", fontSize:18}}>PH20059</Text>
    </View>
)

}