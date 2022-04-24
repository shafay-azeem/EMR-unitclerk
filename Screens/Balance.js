import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';
import balanceinfo from './DATA/balance.json';

export default function Balance(){
    return (
        <View style= {styles.headerbalance}>
                
               <View style = {styles.OpeningBalView}>
                   <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center',marginLeft:100}}>
                   <Text style={styles.TextForBalance}>Opening Balance </Text>
                   </View>
                   
                   <View style={{marginLeft:100,alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                    />
                          
                    </View>
                    <Text style={[styles.TextForBalance,{marginTop:5}]}>{balanceinfo.openingBal}</Text>
                   </View>
                   </View>
                   </View>
               </View>
               <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center'}}>
               <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center'}}>
               <Text style={styles.TextForBalance}>Balance</Text>
               </View>
               <View style={{alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                   
                    />
                  </View>
                    <Text style={[styles.TextForBalance,{marginTop:5}]}>{balanceinfo.bal}</Text>
                   </View>
                   </View>
                   </View>
               </View>
               <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center',borderTopRightRadius:100,borderBottomRightRadius:100}}>
               <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center'}}>
               <Text style={styles.TextForBalance}>Closing Balance</Text>
               </View>
               <View style={{alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                   
                    />
                  </View>
                    <Text style={[styles.TextForBalance,{marginTop:5}]}>{balanceinfo.closingbal}</Text>
                   </View>
                   </View>
                   </View>
               </View>

        </View>

    )}


const styles = StyleSheet.create({
    headerbalance: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        margin:10,
      

    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold',
       color:'#FFFFFF',
    },
    OpeningBalView:{
        flexDirection: 'row', width: '33%' ,borderTopLeftRadius:100,borderBottomLeftRadius:100
    },
    TextForBalance:{
        fontSize:20,fontFamily:'Montserrat-SemiBold'}
})