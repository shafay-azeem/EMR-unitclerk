import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView,ActivityIndicator}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';

import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import patientDoc from './DATA/patientDoc.json';
import AppointmentConfirmation from './AppointmentConfirmation';
import axios from 'axios';

function Item({ item }) {
    const navigation = useNavigation();   
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('PatientDemographics')}
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

                    <View style = {[styles.roundIcon,{marginTop:10, marginRight:5}]}>
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
            
        
                    <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>

                  
                
                  <Text style={{ color:"green",marginTop:20,fontFamily:"Montserrat-Bold",fontSize:12}}>CONFIRMED</Text>
           
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  // onPress={() => this.props.navigation.navigate('')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold",fontSize:12}}>VIEW DETAILS</Text>
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

    const baseUrl='http://emr.daldaeagleseye.com/emrappointment/';


  const UpcomingAppointmentSchedule = () => {
  
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
 const [date, setDate] = useState([]);
 const [doctorName, setDoctorName] = useState([]);
 const [speciality, setSpeaciality] = useState([]);

 const [patientDoc, setPatientDoc] = useState([]);
  useEffect(() => {




  let two = "http://emr.daldaeagleseye.com/emrappointment/appointment/patient/tehreemhussain1/upcoming-appointments/"

  const requestTwo = axios.get(two);
   
  axios.all([ requestTwo]).then(axios.spread((...responses) => {
 

    const responseTwo = responses[0]

    console.warn(responseTwo.data)

    const data1 = formatData(responseTwo.data.result, 3);

    console.log("data1", data1)
    setPatientDoc(data1);
    console.log(patientDoc,"patientdoc")
    console.log(patientDoc[0].appointmentId)

  })).catch(errors => {
      console.log(errors)

  }).then(() => setLoading(false))


}, []);


    return (
  
        <View style={styles.container} >
          <Header name="Upcoming Appointment Schedule" class= ""/>
          
           
            <UnitClerkHeader/>
            {/* <PatientHeader/> */}
            {/* <AppointmentHeading  name="Upcoming Appointments" /> */}
            {isLoading ? (
              <View style={{alignContent:'center', justifyContent: 'center',  alignSelf: 'center', marginTop: 200}}>

             <ActivityIndicator size="large" color="#000000"/>
             <Text style={{textAlign: 'center', fontSize: 20, fontFamily:" Montserrat-Medium"}}>Loading..</Text>

             </View>

                ) : (
             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, margin: 40}}
          data={patientDoc}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {numColumns}
          // scrollEnabled={isScrollEnabled}
        />
</SafeAreaView>

        </View>
)}
        </View>
     
    );
  }
export default UpcomingAppointmentSchedule;