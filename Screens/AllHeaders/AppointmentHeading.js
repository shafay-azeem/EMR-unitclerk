import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,} from 'react-native';
import CheckBox from 'react-native-check-box';

export default function AppointmentHeader(props){
    return (
        <View >
        <Text style={styles.headerText}>{props.name} </Text>
        </View>

    )}


const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FFFFFF",
        borderRadius:10,
      marginTop:50


    },
    headerText: {
        fontSize: 20,
        fontFamily:"Montserrat-SemiBold",
       color:'#FFFFFF',
       justifyContent: 'center',
       alignSelf:'center',
        marginTop:30
    }
})