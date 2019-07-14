import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";

export default function Weather({temperature}){
    // render(){
    //     const {} = 


        return(
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}> 
                <View style={styles.upper}>
                    <Ionicons name="ios-rainy" size={144} color="white" />
                    <Text style={styles.temperature}>{temperature}º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>
                        Raining like a MF
                    </Text>
                    <Text style={styles.subtitle}>
                        For more info look outside
                    </Text>
                </View>
            </LinearGradient>
        );
    
};

Weather.prototype = {
    // weatherCase: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle:{
        marginBottom: 100,
        backgroundColor: "transparent",
        color: "white",
        fontSize: 28
    },
    temperature: {
        fontSize: 48,
        color: "white"
    }

});