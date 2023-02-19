import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
    const navigation =  useNavigation()

    return (
        <View>
            <Text>Screen2</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
                <Text>Go to Screen1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2