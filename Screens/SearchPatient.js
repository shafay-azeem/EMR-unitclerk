import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';

import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

const SearchPatient = () => {
  
  const navigation = useNavigation();


  let [Mr_Number, setMr_Number] = useState('');
    
  let [CNIC, setCNIC] = useState('');
  let [QRcode, setQRcode] = useState('');
    
  let [Phone_Number, setPhone_Number] = useState('');

    return (
  
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Patient " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH PATIENT BY:</Text>
           <Text style={styles.EdittextHeading}>Mr Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient's MR Number" 
              placeholderTextColor="#30A28C"
              onChangeText={ (Mr_Number)=> setMr_Number(Mr_Number)}/>  
         
           <Text style={styles.EdittextHeading}>CNIC</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient's CNIC Number" 
              placeholderTextColor="#30A28C"
              onChangeText={ (CNIC)=> setCNIC(CNIC)}/>  
          
           
           <Text style={styles.EdittextHeading}>QRcode</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient 16 digit QR code" 
              placeholderTextColor="#30A28C"
              onChangeText={ (QRcode)=> setQRcode(QRcode)}/>  


<Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={ (Phone_Number)=> setPhone_Number(Phone_Number)}/>  
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>navigation.navigate("SelectPatient")}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
     
     );
     }


     export default SearchPatient;
