import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';
import { Picker } from "@react-native-picker/picker";

import Header from './Header';

import { useNavigation } from '@react-navigation/native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

const SearchDoctor = ({route}) => {
  
  const navigation = useNavigation();
  const { patient } = route.params;

  let [AFMC, setAFMC] = useState('');
  let [specality, setSpeaciality] = useState('Cardiologist');
  let [Family_Medicine, setFamily_Medicine] = useState('');
  let [specifyDoctor, setSpecifyDoctor] = useState('');
  let [phone, setPhone] = useState('');
  let [mrNumber, setMrNumber] = useState('');
    return (
    
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Doctor " class= ""/>
           <UnitClerkHeader/>
           <PatientHeader/>
           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH DOCTOR BY:
           
           </Text>
           <Text style={styles.EdittextHeading}>Location </Text>
           <View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 

                    
<Picker  
           selectedValue={AFMC}
           placeholderTextColor="#30A28C"
            onValueChange={(itemValue, itemIndex) => setAFMC(itemValue)} >
  
  <Picker.Item color='#30A28C' label="Select" value="Select" />
           <Picker.Item color='#30A28C' label="AFMC" value="AFMC" />
 

           </Picker>  


       
     
     </View>
           <Text style={styles.EdittextHeading}>Speciality</Text>
           <View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 

<Picker  
           selectedValue={Family_Medicine}
           placeholderTextColor="#30A28C"
            onValueChange={(itemValue, itemIndex) => setFamily_Medicine(itemValue)} >
  <Picker.Item color='#30A28C' label="Select" value="Select" />
           <Picker.Item color='#30A28C' label="Family Medicine" value="Family Medicine" />
 

           </Picker>  

     
     </View>
          
           
           <Text style={styles.EdittextHeading}>Specify Doctor</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Specify Name of Desired Doctor" 
              placeholderTextColor="#30A28C"
              onChangeText={ (specifyDoctor)=> setSpecifyDoctor(specifyDoctor)}/>  


                         
           <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={ (phone)=> setPhone(phone)}/>  
        
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>navigation.navigate('SelectDoc', {
              specality: specality,
              specifyDoctor: specifyDoctor,
              patient: patient

            })}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
       
     );
     }
     export default SearchDoctor;
