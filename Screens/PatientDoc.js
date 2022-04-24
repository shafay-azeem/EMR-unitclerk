

import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, StyleSheet, FlatList, Image,Button}  from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles/CompleteStyling';
import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';



export default class PatientDoc extends Component {


  //  constructor(props){
  //  super(props);
  //  }


   

  render(){


    return (
     <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>
      
    );
  }
}

