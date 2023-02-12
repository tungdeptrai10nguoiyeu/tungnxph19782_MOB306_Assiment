
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage';
export default function QuanLyCuaHang(props) {
    const navigation = props.navigation;
    const route = useRoute();
    const [name, setName] = useState('');
    const [drees, setDrees] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const onClear = () => {
        setName("");
        setDrees("");
        setPhone("");
        setImage("");
    }
    const [data, setData] = useState([
        {
            id: 1,
            name: "Bách Hóa Xanh",
            drees: "Nam Từ Liêm - Hà Nội",
            phone: "038928392",
            follow: 30,
            star: 3,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyfOEbq3bVSxryL2EAB6KuP211Jwbze2RNA&usqp=CAU",
            status: 0
        },
        {
            id: 2,
            name: "Circle",
            drees: "Bắc Từ Liêm - Hà Nội",
            phone: "038928392",
            follow: 20,
            star: 4,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBmWfnHMaQEIW-whYRobEnUvVK_VXKSbVmw&usqp=CAU",
            status: 1
        },
        {
            id: 3,
            name: "Viettel",
            drees: "Nam Từ Liêm - Hà Nội",
            phone: "038928392",
            follow: 60,
            star: 5,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxQvsXh7Z4OIhEiudL61Exzi8oDz5RS_7IA&usqp=CAU",
            status: 0
        },
        {
            id: 4,
            name: "F88",
            drees: "Nam Từ Liêm - Hà Nội",
            phone: "038928392",
            follow: 90,
            star: 1,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA1E102ro_AXWIvk0Vx2zyV5Vvb3riECxtA&usqp=CAU",
            status: 1
        },
        {
            id: 5,
            name: "FPT Shop",
            drees: "Cầu giấy - Hà Nội",
            phone: "038928392",
            follow: 90,
            star: 1,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1q_jlU3s2xyZZIHu14mqu3xKhCqD1wmW0w&usqp=CAU",
            status: 1
        },
    ]);
    const Status = (stus) => {
        if (stus == 0) {
            return "Đóng cửa"
        } else if (stus == 1) {
            return "Mở cửa"
        }
    }
    const ColorStatus = (stus) => {
        if (stus == 0) {
            return "red"
        } else if (stus == 1) {
            return "green"
        }
    }
    return (
        <View style={{ padding: 20 }}>

            <FlatList data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Details', { item, setData, data })
                        }}>
                            <View style={{
                                flexDirection: "row", marginBottom: 20, padding: 10,
                                width: "100%", height: 120, borderWidth: 1, borderRadius: 8
                            }}>

                                <Image style={{
                                    height: 50, width: 50, borderRadius: 25, marginTop: 5
                                }}

                                    source={{ uri: item.Image }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                                    <View style={{ height: 1, backgroundColor: "black", width: "100%" }} />
                                    <Text>Dress: {item.drees}</Text>
                                    <Text>Phone: {item.phone}</Text>
                                  <View style={{ flexDirection: "row" }}>
                                        <Text>Status: </Text>
                                        <Text style={{ color: ColorStatus(item.status) }}>{Status(item.status)}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add", { data, setData });
                }}
                style={{
                    width: 50, height: 50, borderRadius: 25,
                    backgroundColor: "red", position: "absolute", bottom: 20, right: 10,
                    alignItems: "center", justifyContent: "center"
                }}>
                <Image style={{ width: 20, height: 20 }} source={require("../assets/add.png")} />
            </TouchableOpacity>

        </View>

    )

}