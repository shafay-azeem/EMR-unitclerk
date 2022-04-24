import {SafeAreaView, StyleSheet,ScrollView, Image,Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

import { useNavigation } from '@react-navigation/native';

 
  const MoreImagesAndRecord = () => {



  const navigation = useNavigation();  
     return (
       <ScrollView style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="Images Or Records" class= ""/>

       <UnitClerkHeader/>

       <PatientHeader/>


        <View style={{flexDirection:'row',margin:50, alignSelf:'center'}}>
            
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF',borderRadius:10,margin:20}}> 
             <View style={{ width: 100 ,height:100,alignSelf:'center',marginTop:50,marginBottom:50}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/question-mark.png')}
    
                    /> 
                  </View>
            </View>
            
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF'  ,borderRadius:10 ,alignSelf:'flex-end',margin:20}}> 
             
             <View style={{ width: 100 ,height:100,alignSelf:'center',marginTop:50,marginBottom:50}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/question-mark.png')}
                    /> 
                  </View>
             </View>
            
         </View>
     

       
       
         <TouchableOpacity style={styles.buttonGeneralInForm}
              onPress={() =>navigation.navigate("PatientDemographics")}
              > 
              <Text style={styles.Button_text_styling}>
              NEXT </Text>
            </TouchableOpacity>
         </View>
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 export default MoreImagesAndRecord;

 