import {SafeAreaView, StyleSheet,ScrollView, Image,Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';


import { useNavigation } from '@react-navigation/native';

 
  const ImagesRecords = () => {



  const navigation = useNavigation();  
     return (
       <View style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="Images Or Records" class= ""/>
       <UnitClerkHeader/>
       {/* <PatientHeader/> */}

 
        <View style={{flexDirection:'row',marginTop:80,marginRight:50,marginLeft:50, alignSelf:'center'}}>
            <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>
             <View style={{height:200,width:240,backgroundColor:'#FFFFFF', marginRight:30 ,borderRadius:10,}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/heart.png')}
                    /> 
                  </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>
            
             <View style={{height:200,width:240,backgroundColor:'#FFFFFF' , marginRight:30 ,borderRadius:10 }}> 
             
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/medical-history.png')}
                    /> 
                  </View>
             </View>
             </TouchableOpacity>

             <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>
     
             <View style={{height:200,width:240,backgroundColor:'#FFFFFF',borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/medicine.png')}
                    /> 
                  </View>
                  </View>
                  </TouchableOpacity>
         </View>


         <View style={{flexDirection:'row',marginTop:30,marginRight:50,marginBottom:50,marginLeft:50, alignSelf:'center'}}>

         <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>
           
             <View style={{height:200,width:240,backgroundColor:'#FFFFFF', marginRight:30 ,borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/x-ray.png')}
                    /> 
                  </View></View>


                  </TouchableOpacity>

                  <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>

             <View style={{height:200,width:240,backgroundColor:'#FFFFFF' , marginRight:30 ,borderRadius:10 }}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/dialogue.png')}
                    /> 
                  </View>
             </View>

             </TouchableOpacity>


             <TouchableOpacity  onPress={() =>navigation.navigate("MoreImagesAndRecord")}>
             <View style={{height:200,width:240,backgroundColor:'#FFFFFF',borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,alignSelf:'center',marginTop:50,marginBottom:50}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/volumetric-flask.png')}
                    /> 
                  </View>
           </View>
           </TouchableOpacity>
         </View>

         </View>
           
             </SafeAreaView>
             </View>
      
     );
    }
 export default ImagesRecords;

 