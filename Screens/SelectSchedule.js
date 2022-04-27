import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView,ActivityIndicator}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';

import axios from 'axios';

function Item({ item , doctorInfo, patient}) {
 
    const navigation = useNavigation(); 
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
  
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SelectSlot' ,{ 
          schedule : item.date,
          doctorInfo : doctorInfo,
          patient: patient
          })}
          >
          <View style={{flex:1}}>
            
     
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/slots.png')}
            />

         

          </View>

            <Text style={{ textAlign: 'left', fontSize: 25, color:"#3FB39B", textAlign: 'center'   , fontFamily:"Montserrat-Regular"}}>{item.date}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 17,  color: 'grey',  fontFamily:"Montserrat-Regular"}}>{item.startTime}{" - "}{item.endTime}</Text>
 
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
                  <Text style={{ color: 'grey',marginTop:20,fontSize:15,  fontFamily:"Montserrat-Regular"}}>Available Slots:{'\n'}</Text>
                  <Text style={{ color:"#3FB39B",marginTop:20,fontWeight:'bold',fontSize:16 , fontFamily:"Montserrat-Regular"}}>{item.slotAvailable}</Text>
                  
             
           


              </View>
              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
            );
    }



  
  const SelectSchedule = ({route}) => {


    const numColumns = 4;

    const formatData = (data, numColumns) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
    
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }
    
      return data;
    };
    const [isLoading, setLoading] = useState(true);
    const [schedule, setSchedule] = useState([]);
    const { doctorInfo } = route.params;
    const { patient } = route.params;
  


    // console.log(provider)

    useEffect(() => {

// console.log(provider)
// console.log(speciality,"speciality")
let one = "https://emr-system.000webhostapp.com/emrappointment/emrappointment/appointment/provider/weekly-schedule/schedule?provider=demodoctor1"
const requestOne = axios.get(one);

 
axios.all([requestOne]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  console.warn(responseOne.data)
 


        
        const data1 = formatData(responseOne.data.result, 4);

        console.log("data1", data1)
        setSchedule(data1);



        console.log('scheduleApi',responseOne.data.result);
 
        console.log('date saad', schedule[0].date)

      })).catch(errors => {
        console.log(errors)
  
    }).then(() => setLoading(false))
  
  
  }, []);

//   axios({
//     method: 'get',
//     url: `https://emr-system.000webhostapp.com/emrappointment/emrappointment/appointment/provider/weekly-schedule/schedule?provider=${provider}`,
//   }).then((response) => {

//     const data1 = formatData(response.data.result, 4);

//     console.log("data1", data1)
//     setschedule(data1);



//     console.log(response.data.result);
//     console.log(doctor[0].patientId);
//     console.log(doctor);
//     console.log(provider)

//   }).then(() => setLoading(false));
// }, []);

   
  
    return (

        <View style={styles.container}>
          <Header name="Select Schedule" class= ""/>
          
         
            <UnitClerkHeader/>
            <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
         {/* <View style= {{ height: '100%', width: '100%', alignSelf: 'center'}}> */}
         <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{doctorInfo.fullName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start'}]}>{doctorInfo.speciality}</Text>
             </View>
             </View>
             {isLoading ? (
              <View style={{alignContent:'center', justifyContent: 'center',  alignSelf: 'center', marginTop: 200}}>

             <ActivityIndicator size="large" color="#000000"/>
             <Text style={{textAlign: 'center', fontSize: 20, fontFamily:" Montserrat-Medium"}}>Loading..</Text>

             </View>

                ) : (

             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}}>
             <FlatList
  
  style={{flex:1,  marginRight: 40,marginLeft: 40,marginBottom: 40}}
  data={schedule}
  renderItem={({ item }) => <Item item={item} doctorInfo = {doctorInfo}   patient= {patient} />}
  keyExtractor={item => item.email}
  numColumns = {numColumns}

/> 

</SafeAreaView>
</View>
                )}

        </View>
       
    
    );
  }

  export default SelectSchedule;
