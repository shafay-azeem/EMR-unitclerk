import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';



function Item({ item }) {
    const navigation = useNavigation();   
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('AppointmentConfirmation')}
        >
          <View style={{flex:1}}>
            
     
          <View style = {[styles.roundIcon,{height:40,width:40,marginTop:20}]}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/calendar.png')}
            />

         

          </View>

            <Text style={{ textAlign: 'left', fontSize: 22, color:"#3FB39B", textAlign: 'center',     fontFamily:"Montserrat-Regular",}}>{item.slot}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 17,  color: 'grey'   ,  fontFamily:"Montserrat-Regular",}}>{item.date}</Text>
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
       
            <TouchableOpacity style={[styles.smallRoundedBlueRoundedNoMargin,{marginTop:20}]}
                   onPress={() => navigation.navigate('AppointmentConfirmation')} >
              <Text style={[styles.cardText,{fontSize: 18},{color: 'white'}]}>Book </Text>
            </TouchableOpacity>
      


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


  const SelectSlot = () => {


 
     let doctorName = "Dr Ahmed Khan";
    let specality = "Family Medicine";
   
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
  
        <View style={styles.container} >
          <Header name="Select Slot" class= ""/>
          
           
            <UnitClerkHeader/>
            <PatientHeader/>
         <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{doctorName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start'}]}>{specality}</Text>
             </View>
             </View>
             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, margin: 40}}
          data={ formatData(doctorApp, numColumns)}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {numColumns}
          // scrollEnabled={isScrollEnabled}
        />
</SafeAreaView>

        </View>

        </View>
     
    );
  }

  export default SelectSlot;
