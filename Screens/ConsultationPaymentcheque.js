import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image} from 'react-native';
// import DoctorDetailHeader from '../shared/doctorDetailHeader';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
// import DropDownPicker from 'react-native-dropdown-picker';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';



import { useNavigation } from '@react-navigation/native';

 
  const ConsultationPaymentcheque = () => {



  const navigation = useNavigation();  

  
  let [Transaction_ID, setTransaction_ID] = useState('');
  let [Amount, setAmount] = useState('');
  let [Payees_Name, setPayees_Name] = useState('');
  let [Bank_Name, setBank_Name] = useState('');
  let [Card_Name, setCard_Name] = useState('');
    return (
      <View style={styles.container}>
          <Header name="Cheque Mode " class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
     
  
            <View style = {[styles.cardView90,{maxHeight:'65%'}]}>
         
            <View style={{width:'100%',padding:20,height:'30%'}} >
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
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>Doctor Name </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.doctorName}</Text>
       
            </View>


            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.specality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Fee</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.Fees}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.doctorPhone}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , fontFamily:"Montserrat-Regular"}}>Location</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.Location}</Text>
       
            </View>
         

            </View>
            
            
            
            </View>

        
         
            
          <View style={{flex:1}}>
              
            <View style = {{flexDirection:'row',alignSelf:'center',marginTop:40}}>

            <TextInput  
             style={[styles.Edittext,{width:200}]}
              placeholder="Cheque Number" 
              placeholderTextColor="#3FB39B"
              onChangeText={(Transaction_ID) => setTransaction_ID(Transaction_ID)}
              />
           

            <TextInput  
           style={[styles.Edittext,{width:200}]}
              placeholder="Amount" 
              placeholderTextColor="#3FB39B"
              keyboardType = 'numeric'
              onChangeText={(Amount) => setAmount(Amount)}
              />


            <TextInput  
         style={[styles.Edittext,{width:200}]}
              placeholder="Payee's Name" 
              placeholderTextColor="#3FB39B"
              onChangeText={(Payees_Name) => setPayees_Name(Payees_Name)}
              />
 </View>


<View style = {{flexDirection:'row',alignSelf:'center',marginTop:40}}>

            <TextInput  
            style={[styles.Edittext,{width:200}]}
              placeholder="Bank's Name" 
              placeholderTextColor="#3FB39B"
              onChangeText={(Bank_Name) => setBank_Name(Bank_Name)}
              />
               

       
            <TextInput  
              style={[styles.Edittext,{width:200}]}
              placeholder="Account Number" 
              placeholderTextColor="#3FB39B"
              keyboardType = 'numeric'     onChangeText={(Card_Name) => setCard_Name(Card_Name)}
              />
                     </View>

                     <View style={{marginTop:20}}>
            <TouchableOpacity style={[styles.buttonGeneral,{width:"30%"}]}
              onPress={() =>navigation.navigate("PaymentSuccessfull")}
              > 
              <Text style={styles.Button_text_styling}>
              PAY </Text>
             
            </TouchableOpacity>
             </View>
            </View>
      </View>


   
</View>
    );
  }

export default ConsultationPaymentcheque;