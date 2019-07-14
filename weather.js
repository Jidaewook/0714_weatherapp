import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";

export default class Weather extends Component{
    render(){
        return(
            <LinearGradient colors={["#00C6FB", "#005BEA"]}> 
                <View>
                    <Text>
                        Icon Here!!
                    </Text>
                </View>
                <View>
                    <Text>
                        Raining like a MF
                    </Text>
                    <Text>
                        For more info look outside
                    </Text>
                </View>
            </LinearGradient>
        );
    }
};

const styles = StyleSheet.create({

});