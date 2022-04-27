import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,Pressable,Modal,Alert,Button} from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';
import { Picker } from "@react-native-picker/picker";



import { useNavigation } from '@react-navigation/native';

 
  const PaymentSuccessfull = ({route}) => {

    const { slotDetails } = route.params;
    const { doctorInfo } = route.params;
    const { patient } = route.params;

  const navigation = useNavigation();  

    return (
      <View style={styles.container}>
          <Header name="Payment Successfully Done" class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
      <View style = {styles.cardView91}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%',marginBottom:40}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
   
          

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Doctor Name </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.firstName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.speciality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Fee</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.initialFees}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.phoneNum}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , fontFamily:"Montserrat-Regular"}}>Location</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{invoice['IssuedBy '] }</Text>
       
            </View>
        



          </View>
          </View>
    


  

            <View style = {{width: '80%', flexDirection: 'row',alignSelf:'center'}}>

           
               
  <View style={{width:'50%',justifyContent:'center',alignSelf:'center',alignItems:'flex-start'}}>

                <View style = {{flexDirection: 'row' ,marginTop: 5}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{invoice['InvoiceID '] }</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice Date/Time: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{slotDetails.date}{" - "}{}</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient ID: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{patient.patientId}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient Name: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{patient.firstName}{""}{patient.lastName}</Text>

                </View>
                
                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Appointment Date: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{slotDetails.date} </Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Appointment Time: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{slotDetails.startTime }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Teleconsultation Payment: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{doctorInfo.initialFees}</Text>

                </View>
                
                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Issued by: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{invoice['IssuedBy '] }</Text>

                </View>

                </View>

              <View style = {{width: '50%',justifyContent:'center'}}>

              


 <View style={{flexDirection:'row'}}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-end',fontFamily:"Montserrat-Regular",fontSize:20,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row',borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center',}}>
            
            <Text style= {{textAlign: 'right',color: 'black',fontFamily:"Montserrat-SemiBold",padding:5,fontSize:15}}>{invoice.TeleconsultationPayment }</Text>
            
            </View>
            
            </View>

                


              </View>
      </View>
           
    

                </View>

                <TouchableOpacity style={[styles.buttonGeneral,{marginBottom:500,width:"28%"}]}
              onPress={() =>navigation.navigate("SignInScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              PRINTED INVOICE</Text>
            </TouchableOpacity>
                   </View>

    </View>
    );
      }
    export default PaymentSuccessfull;

