import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView,Modal,Alert,ActivityIndicator,RefreshControl}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import Balance from './Balance';
import axios from 'axios';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import patientDoc from './DATA/patientDoc.json';
import {DevSettings} from 'react-native';


function Item({ item }) {
    const navigation = useNavigation();   
    console.log(item,"jee jee")
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('PatientDemographics',{
          patientId: item.patientId


        })}
        >
          <View style={{flex:1}}>
            
          <View style={{flexDirection:"row"}}>
          <View style = {[styles.roundIcon,{marginRight:5}]}>
            <Image
              style={[styles.tinyLogo,]}
              source={require('../images/doctor.png')}
            />
         

         
         
          </View>
          
                    
                    <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',alignSelf:'center'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text
                      style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{item.providerName}{'\n'}{item.providerSpeciality}</Text>
                    </View>
                    </View> 
                    <View style={{borderColor:"#3FB39B",borderWidth:1,margin:5}}></View>



                    <View style={{flexDirection:"row"}}>

                    <View style = {[styles.roundIcon,{marginTop:10 ,marginRight:5}]}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/user.png')}
            />
         

          </View>
                    
                    <View style = {{flexDirection: 'row',  alignItems: 'center',justifyContent: 'center',marginTop:25}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{item.patientName}{'\n'}{item.date}</Text>
                    </View>
             
                    </View>
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
       
            <TouchableOpacity style={[styles.smallRoundedBlueRoundedNoMargin,{marginBottom:40}]}
                   onPress={() => navigation.navigate('PatientDemographics',{
                    patientId: item.patientId

                   })} >
              <Text style={[styles.cardText,{fontSize: 18},{color: 'white'}]}>SELECT </Text>
            </TouchableOpacity>
      


              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
            );
    }


 const HomeScreen = () => {

  const numColumns = 3;

    const formatData = (data, numColumns) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
    
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }
    
      return data;
    };
 

 
 const navigation = useNavigation();  

 const [active , setactive] = useState(false);
 const [isLoading, setLoading] = useState(true);
 const [  OpenBal , setOpenBal] = useState('');
 const [  Phone_Number , setPhone_Number] = useState('');
 const [balance, setbalance] = useState([]);
 const [opening, setopening] = useState([]);
 const [closing, setclosing] = useState([]);
 const [patientName, setpatientName] = useState([]);
 
 const [doctorName, setDoctorName] = useState([]);
 const [speciality, setSpeaciality] = useState([]);
 const [refreshing, setRefreshing] = useState(true);
 const [patientDoc, setPatientDoc] = useState([]);
 let [date, setDate] = useState('');
 let [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  let tempDate2;
 const showDatePicker = () => {
   setDatePickerVisibility(true);
 };

 const hideDatePicker = () => {
   setDatePickerVisibility(false);
 };

 const handleConfirm = (date) => {
   setDate(date);
   hideDatePicker();
 };

 const getDate = () => {
 

   let tempDate = date.toString().split(' ');
    console.log(tempDate)
    let month = "";
    if(tempDate[1] == "Apr"){
      month = "01"
    }
    if(tempDate[1] == "Feb"){
      month = "02"
    }
    if(tempDate[1] == "Mar"){
      month = "03"
    }
    if(tempDate[1] == "Apr"){
      month = "04"
    }
    if(tempDate[1] == "May"){
      month = "05"
    }
    if(tempDate[1] == "Jun"){
      month = "06"
    }
    if(tempDate[1] == "Jul"){
      month = "07"
    }
    if(tempDate[1] == "Aug"){
      month = "08"
    }
    if(tempDate[1] == "Sep"){
      month = "09"
    }
    if(tempDate[1] == "Oct"){
      month = "10"
    }
    if(tempDate[1] == "Nov"){
      month = "11"
    }
    if(tempDate[1] == "Dec"){
      month = "12"
    }
    tempDate2 = tempDate[3]+ "-"+month+"-"+tempDate[2];
    console.log(tempDate2)

   return date !== ''
     ? `${tempDate[3]}-${month}-${tempDate[2]}`
     : '';
  
 };

 useEffect(() => {
  loadUserData();
  
  
  fetch('http://emr.daldaeagleseye.com/emrappointment/balance/today')
  .then((response) => response.json())
  .then((responseJson) => {
    setRefreshing(false);
  console.log(responseJson,'king2')
  setopening(responseJson.result[0].opening)
    setbalance(responseJson.result[0].balance)
    setclosing(responseJson.result[0].closing)
    console.log(responseJson.result[0].closing)


  });

}, []);

const loadUserData = () => {
  fetch('https://emr-system.000webhostapp.com/emrappointment/emrappointment/appointment/provider/upcoming-appointments?date='+getDate())
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
      console.log(responseJson,'king2')
      const data1 = formatData(responseJson.result, 3);
      console.log(data1,'lol')
      setPatientDoc(data1);
      console.log(patientDoc,'queen');
      console.log(patientDoc[0].patientId)
   
      




  console.log(tempDate2)
  let one = "http://emr.daldaeagleseye.com/emrappointment/balance/today"
  let two = "https://emr-system.000webhostapp.com/emrappointment/emrappointment/appointment/provider/upcoming-appointments?date="+getDate()
   
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
   
//   axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
//     // setRefreshing(false);
//     const responseOne = responses[0]
//     console.warn(responseOne.data)
//     setopening(responseOne.data.result[0].opening)
//     setbalance(responseOne.data.result[0].balance)
//     setclosing(responseOne.data.result[0].closing)

//     console.log(closing)

//     const responseTwo = responses[1]

//     console.log(responseTwo.data,'king')

//     const data1 = formatData(responseTwo.data.result, 3);

//     console.log("data1", data1)
//     setPatientDoc(data1);
//     // console.log(patientDoc,"patientdoc")
//     // console.log(patientDoc[0].appointmentId)

//   })).catch(errors => {
//       console.log(errors)

 });
};
// const kill=DevSettings.reload()

    return (
  
        <View style={styles.container} >



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
            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:25}}>TODAY'S DATE: </Text>
            <Text style={{color:"#3FB39B",alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:25}}>{doctorApp[0].date}</Text>
       
            </View>
            <Text style={[{ fontFamily:"Montserrat-Bold",
        marginTop:30,
        color:"#3FB39B",fontSize:15}]}>ENTER OPENING BALANCE</Text>
            <TextInput  
              style={[styles.Edittext,{width:250}]}
              placeholder="Enter Opening Bal" 
              placeholderTextColor="#3FB39B"
              onChangeText={ (OpenBal)=> setOpenBal(OpenBal)}/>  
                <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}

                onPress={()=>{setactive(!active)}}
              >
               <Text style={styles.Button_text_styling}>SUBMIT</Text>
                </TouchableOpacity>
     
            </View>
          </View>
        </Modal>
  
       
          <Header name="EMR logo" class= ""/>
          
        
            <UnitClerkHeader/>
            <View style= {[styles.headerbalance,{}]}>

              <View style={{width:'33%', alignItems: 'center'}}>
              {/* <TouchableOpacity */}
            {/* onPress={() =>navigation.navigate("HomeScreen")}> */}
                <Text style={{   fontFamily:"Montserrat-Bold",marginLeft:57,
        marginTop:10,
        color:"#3FB39B"}}
          onPress={()=>{setactive(!active)}}>Opening Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  editable={false}
                  selectTextOnFocus={false}
                  color="black"
                  value={opening}
                  placeholderTextColor="#3FB39B"
                     onChangeText={ (Phone_Number)=> setPhone_Number(Phone_Number)}/> 
{/* </TouchableOpacity> */}
              </View>

              <View style={{width:'33%', alignItems: 'center'}}>
                <Text style={[{   fontFamily:"Montserrat-Bold",
        marginTop:10,
        color:"#3FB39B"}]}>Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  editable={false}
                  selectTextOnFocus={false}
                  color="black"
                  value={balance}
                  placeholderTextColor="#3FB39B"
                  onChangeText={ (Phone_Number)=> setPhone_Number(Phone_Number)}/> 

              </View>

              
              <View style={{width:'33%', alignItems: 'center'}}>
                <Text style={{   fontFamily:"Montserrat-Bold",
        marginTop:10,
        color:"#3FB39B"}}>Closing Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  editable={false}
                  selectTextOnFocus={false}
                  color="black"
                  value={closing}
                  placeholderTextColor="#3FB39B"
                  onChangeText={ (Phone_Number)=> setPhone_Number(Phone_Number)}/> 

              </View>

                        
        
 
        
            </View>



            <View style={[styles.containerForButton]}>
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>navigation.navigate("RegistrationScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              REGISTER NEW PATIENT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>navigation.navigate("SelectDocbooking")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOKING MANAGEMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>navigation.navigate("SearchPatient")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH PATIENT</Text>
            </TouchableOpacity>
    </View>
    <AppointmentHeading name="Upcomming Appointments"/>
    <View style={[{width:160,justifyContent:'center',  alignItems: 'center',  alignSelf:'center'}]}>
      <TouchableOpacity  onPress={showDatePicker}>
             <Text style={styles.EdittextHeading}>DOB</Text>
             <View>
               
             <TextInput
            style={[styles.Edittext,{width:160,justifyContent:'center'}]}
            value={getDate()}
            editable={false} 
            selectTextOnFocus={false}
            color="#000000"
            placeholderTextColor="#30A28C"
            placeholder="Date"
              // onChangeText={DevSettings.reload()}
/>
<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     
              </View>
              </TouchableOpacity>
           
</View>
    {/* {isLoading ? (
              <View style={{alignContent:'center', justifyContent: 'center',  alignSelf: 'center', marginTop: 200}}>

             <ActivityIndicator size="large" color="#000000"/>
             <Text style={{textAlign: 'center', fontSize: 20, fontFamily:" Montserrat-Medium"}}>Loading..</Text>

             </View>

                ) : ( */}
                   <View style= {{flex:1 , height:"100%",width: '100%'}}>
             <SafeAreaView style={{flex:1}} >
 <FlatList
  
          style={{flex:1,  marginRight: 40,marginLeft: 40,marginBottom: 40}}
          data={patientDoc}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {numColumns}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
          }
          // scrollEnabled={isScrollEnabled}
        /> 
</SafeAreaView> 

        </View>
      
        </View>
     
    );
        };
    

export default HomeScreen;