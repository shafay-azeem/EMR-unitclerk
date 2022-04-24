import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import doctorApp from './DATA/doctorApp.json';
import paymentStatus from './DATA/paymentStatus.json';
import { useNavigation } from '@react-navigation/native';
import Patientinfo from './DATA/patient.json';

function Item({ item }) {
    // const navigation = useNavigation();   
  
      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.listItem}>
            <View style={{width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.date1}</Text>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.slot}</Text>


            </View>  
        
        </View>
        </SafeAreaView>
        </ScrollView>
      );
    }




  const AppointmentDetails = () => {
    const navigation = useNavigation();  

 
    let doctorName = "Dr Ahmed Khan";
    let specality = "Family Medicine";

    return (
        <View style={styles.container}>
        <Header name="Appointment Details"/>
        <UnitClerkHeader/>
         <PatientHeader/>
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
             <Text style= {styles.cardText30}>{doctorName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start',color:"black"}]}>{specality}</Text>
             </View>
             </View>
            
             <View style = {[styles.subCardView,{height:"60%",width:"65%"}]}>
               <Text style = {[styles.centeredText,{color:"#3FB39B",fontSize:25}]}>{doctorApp[0].date1}</Text>
               <Text style = {[styles.centeredText,{color:"#3FB39B",marginBottom:40,justifyContent:'flex-start',textAlign:'left',marginRight:160}]}>{doctorApp[0].slot}</Text>


               
            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-end',fontFamily:"Montserrat-Regular",fontSize:20,marginLeft:150}}>PAYMENT </Text>
            <Text style={{color:"black",alignSelf: 'flex-end',fontFamily:"Montserrat-Regular",fontSize:20}}>{paymentStatus.paymentstatus}</Text>
       
            </View>
       
            <TouchableOpacity style={{     alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'flex-end',
        borderRadius: 25,
        backgroundColor:'#FFFFFF',
        borderColor:"#252726",
        borderWidth:1,
        height:40,
       //  margin:50,
       width:250,
       marginTop:10,
       marginRight:60,marginLeft:20,marginBottom:20}}
              onPress={() =>navigation.navigate("Payment")}
              > 
              <Text style={{  fontSize:15,
   color:'black',
  //  fontWeight:'normal',
   fontFamily:"Montserrat-Regular"}}>
              PAY NOW</Text>
            </TouchableOpacity>
             </View>
             

             <View style={{backgroundColor:'#green',marginTop:10,padding:8,borderRadius:10,alignItems: 'center'}} >
            <View style= {{flexDirection: "row"}}>
       



          </View>
          </View>
             

    
    
                   
     

          


              </View>
        </View>
  
        </View>
      
    );
  }
export default AppointmentDetails;

