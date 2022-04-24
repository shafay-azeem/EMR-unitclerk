import React, {Component, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctors from './DATA/selectdoc.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



function Item({ item }) {
    const navigation = useNavigation();   
  
      return (
        

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SelectSchedule')}
        >
          <View style={{flex:1}}>
            
      {/* <View style = {{flexDirection: 'row', width: 80, height: 25,borderColor: 'orange' ,borderWidth:2, borderRadius: 25, alignSelf: 'flex-end', alignItems: 'center'}}>
             <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View> 
             <Text style= {{textAlign: 'right',color: 'black'}}>500 PKR</Text> 
            
            
            
            </View> */}
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/doctor.png')}
            />

         

          </View>

            <Text numberOfLines={1} style={{ textAlign: 'left', fontSize: 25, color:"#075430", textAlign: 'center',fontFamily:"Montserrat-Regular"}}>Dr. {item.name}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 17,  color: 'grey',fontFamily:"Montserrat-Regular"}}>{item.profession}</Text>
            
        
        <View style= {{flex: 1,justifyContent: 'flex-end', marginBottom: 80 }}> 
        <View style= {{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
            <View style={styles.circleView}>
                <Text style = {styles.enabled}>M</Text>
              </View>
              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>T</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>W</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>T</Text>
              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>F</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              </View>
              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
       
            );
    }


    const SelectDoc = () => {
  
  doctorName = "Dr Ahmed Khan";
  specality = "MBBS";
 
 let  numColumns = 4;
  const formatData = (data, numColumns) => {
   const numberOfFullRows = Math.floor(data.length / numColumns);

     let numberOfElementsLastRow = 8 - (numberOfFullRows * numColumns);
     while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
       data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
       numberOfElementsLastRow++;
      
     }
     return data;
   };
  
    
    return (
    
        <View style={styles.container}>
          <Header name="Select Doctor" class= ""/>
          
          
            <UnitClerkHeader/>
            <PatientHeader/>
         <View style= {{flex:1 ,width: '100%', alignSelf: 'center'}}>
         <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={ formatData(doctors,numColumns)}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {numColumns}
         
        />
        </SafeAreaView>
  

        </View>

        </View>
       
      
    
    );
  }
export default SelectDoc;
