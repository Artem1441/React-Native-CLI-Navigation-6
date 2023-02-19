import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () => {
    const navigation =  useNavigation()

    return (
        <View>
            <Text>Screen1</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
                <Text>Go to Screen2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1