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
import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
  
  const Payment = ({route}) => {


  const navigation = useNavigation();  

  const [active , setactive] = useState(false);

  const [PROMOCODE , setPROMOCODE] = useState('');
  const { slotDetails } = route.params;
  const { doctorInfo } = route.params;
  const { patient } = route.params;
  console.log(patient,"payment")
  
  let [method, setmethod] = useState('Cash');


    return (
      <View style={styles.container}>
        <Modal  
          animationType="slide"
          transparent={true}
          visible={active}
          onRequestClose={() => {
            console.warn("closed");
          }}
          >
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={{marginTop:10,fontFamily:"Montserrat-Bold",color:"#3FB39B",fontSize:15}}>ENTER PROMOCODE</Text>
            <TextInput  
              style={[styles.Edittext,{width:250}]}
              placeholder="ENTER PROMOCODE" 
              placeholderTextColor="#3FB39B"
              onChangeText={ (PROMOCODE)=> setPROMOCODE(PROMOCODE)}/>  
                <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                
                onPress={()=>{setactive(!active)}}
              >
               <Text style={styles.Button_text_styling}>DONE</Text>
                </TouchableOpacity>
            
            </View>
          </View>
        </Modal>
  


          <Header name="Payment" class= ""/>
          <UnitClerkHeader/>
          <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
      <View style = {styles.cardView90}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%'}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
   
          

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,fontFamily:"Montserrat-Regular"}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'flex-start',marginTop:5}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Doctor Name </Text>
            <Text numberOfLines={1} style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20,marginTop:5}}>{doctorInfo.firstName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20,marginTop:5}}>{doctorInfo.speciality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Fee</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20,marginTop:5}}>{doctorInfo.initialFees} Rs</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20,marginTop:5}}>{doctorInfo.phoneNum}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 ,fontFamily:"Montserrat-Regular"}}>Location</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20,marginTop:5}}>{invoice['IssuedBy '] }</Text>
       
            </View>
         







          </View>
          </View>
    


  

            <View style = {{height: '60%', width: '80%', flexDirection: 'row',alignSelf:'center',marginTop:30}}>

            
              <View style = {{width: '50%' ,flex:1,justifyContent:'center'}}>
               


                <View style = {{flexDirection: 'row' ,marginTop: 20}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#3FB39B'}]}>{invoice['InvoiceID '] }</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice Date: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#3FB39B'}]}>{slotDetails.date}</Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Issued by: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#3FB39B'}]}>{invoice['IssuedBy '] }</Text>

                </View>
                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient ID: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{patient.patientId}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient Name: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#3FB39B'}]}>{patient.firstName}{""}{patient.lastName}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Teleconsultation Payment: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#3FB39B'}]}>{doctorInfo.initialFees}</Text>

                </View>


              </View>

              <View style = {{width: '50%' ,flex:1}}>

                
                {/* <TouchableOpacity
                  onPress={() =>navigation.navigate('Payment', {
                    doctorInfo: doctorInfo,
                    slotDetails: slotDetails
                  })}
                  style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:40,height:"20%"}]}
                >
                   <Text style={styles.Button_text_styling}
                onPress={()=>{setactive(!active)}}
                            >Apply Promo Code</Text>
                </TouchableOpacity> */}

{/*  


                <View style={{flexDirection:'row'}}> 
                <Text style={{color:'black',fontSize:20,marginTop:30,fontFamily:"Montserrat-Regular"}}>Payment Mode</Text>




<View style={{flex:1,marginTop:20}}>
<View   style={{   borderColor: "#3FB39B",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker
            selectedValue={method}
           onValueChange={(itemValue, itemIndex) => { 
             setmethod(itemValue); 
           
             if(itemValue=="Card"){
              navigation.navigate('ConsultationPayment')

              
             }
             else if((itemValue=="Cheque")){
              navigation.navigate('ConsultationPaymentcheque')
             }
          
          } }
           style={{fontWeight:'bold',textAlign:'right',color:'#3FB39B', fontSize:25}}>


            <Picker.Item color='#3FB39B' label="Cash" value="0" />
           <Picker.Item color='#3FB39B' label="Bank Cheque" value="Cheque" />
           <Picker.Item color='#3FB39B' label="Credit Card/Debit Card" value="Card" />
        
      

           </Picker> 
           </View>
                
     </View>
  </View>  */}
 {/* </View> */}
 <View style={{flexDirection:'row',marginTop:25,marginLeft:100 }}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-start',marginTop:15,fontFamily:"Montserrat-Regular",fontSize:20,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row', width: 70,borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center',justifyContent:"center",marginTop:15}}>
            {/* <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View> */}
            <Text style= {{color: 'black',justifyContent:'center'}}>1000 PKR</Text>
            
            </View>
            
            </View>

              </View>
      </View>

                
           
    

      
                </View>
                <TouchableOpacity
                  onPress={() =>navigation.navigate('PaymentSuccessfull', {
                    slotDetails: slotDetails,
                    doctorInfo: doctorInfo,
                    patient: patient,
                    // schedule: schedule
                  })}
                  style={styles.smallRoundedBlueRounded}
                >
                  <Text style={styles.Button_text_styling}>PAY</Text>
                </TouchableOpacity>

                   </View>

    </View>
    );
      }
  export default Payment;

