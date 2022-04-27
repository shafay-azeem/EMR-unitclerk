import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import doctorApp from './DATA/doctorApp.json';
import CheckBox from 'react-native-check-box';


function Item({ item }) {
    // const navigation = useNavigation();   
  
      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.listItem}>
            <View style={{width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.date}</Text>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.time}</Text>


            </View>  
        
        </View>
        </SafeAreaView>
        </ScrollView>
      );
    }






  const AppointmentConfirmation = ({route}) => {
    const navigation = useNavigation();  
    const doctorName = "Demo Fatima Khan";
    const specality = "Cardiologist";    
    const AppointmentDate = 'Monday, 06 December 2021';
    const AppointmentTime = '1:00pm - 1:30pm'
    const { slotDetails } = route.params;
    const {doctorInfo} = route.params;
    const {patient} = route.params;
    const {schedule} = route.params;
 
    return (
        <View style={styles.container}>
        <Header name="Appointment Confirmation"/>
        <UnitClerkHeader/>
        <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
         <View style = {styles.cardView90}>
           

         <View style= {{backgroundColor: '', height: '100%', width: '70%', alignSelf: 'center',marginTop: 20}}>
             {/* <View style={{alignSelf: 'center', backgroundColor: 'grey', borderRadius: 20, height: '23%', width: '20%'}}>
                <Text> </Text>
             </View> */}
                        <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{doctorInfo.fullName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start',color:'black'}]}>{doctorInfo.speciality}</Text>
             </View>
             </View>
            
             <View style = {styles.subCardView}>
               <Text style = {[styles.centeredText,{color:"#3FB39B"}]}>{slotDetails.dayname}{", "}{slotDetails.date}</Text>
               <Text style = {[styles.centeredText,{color:"#3FB39B"}]}>{slotDetails.startTime}{" - "}{slotDetails.endTime}</Text>
             </View>


             {/* <View style={{flexDirection:'row'}}>
             <CheckBox

      
         
style={{marginTop:3}}
onClick={()=>{
 this.setState({
  isChecked:!this.state.isChecked
})
}}
isChecked={this.state.isChecked}
RightText={"Remember Me"}

/>

             <Text style= {[styles.centeredText,{fontFamily:"Montserrat-Bold",color:"#30A28C"}]}>I hearby confirm that, I have read and understood everything written in the consent form</Text>
             </View> */}
             <TouchableOpacity style={[styles.buttonGeneral,{marginTop:40}]}
              onPress={() =>navigation.navigate("AppointmentDetails", {
                slotDetails: slotDetails,
                doctorInfo: doctorInfo,
                patient: patient,
                schedule: schedule
              })}
              > 
              <Text style={styles.Button_text_styling}>
              CONFIRM APPOINTMENT </Text>
            </TouchableOpacity>
                   
            <TouchableOpacity style={{     alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 25,
        backgroundColor:'#FFFFFF',
        borderColor:"#252726",
        borderWidth:1,
        height:50,
       //  margin:50,
       width:500,
       marginRight:20,marginLeft:20,marginBottom:20}}
              onPress={() =>navigation.navigate("PatientDemographics")}
              > 
              <Text style={{  fontSize:15,
   color:'black',
  //  fontWeight:'normal',
   fontFamily:"Montserrat-Regular"}}>
              CANCEL APPOINTMENT</Text>
            </TouchableOpacity>

          


              </View>
        </View>
  
        </View>
      
    );
  }
export default AppointmentConfirmation;

