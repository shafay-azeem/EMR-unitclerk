
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,} from 'react-native';
import CheckBox from 'react-native-check-box';

export default function Header(props){
    return (
        <View style= {styles.header}>
        <Text style={styles.headerText}>{props.name} </Text>
        </View>

    )}


const styles = StyleSheet.create({
    header: {
        width:"100%",
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#252726",
        

    },
    headerText: {
        fontSize: 20,
        fontFamily:"Montserrat-Bold",
       color:'#FFFFFF',
        
    }
})