import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView}  from 'react-native';
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


function Item({ item ,doctorInfo, patient, schedule } ) {
    const navigation = useNavigation();   
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('AppointmentConfirmation', {
          slotDetails : item,
          doctorInfo: doctorInfo,
          patient: patient,
          schedule: schedule


         })}
>
          <View style={{flex:1}}>
            
     
          <View style = {[styles.roundIcon,{height:40,width:40,marginTop:20}]}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/calendar.png')}
            />

         

          </View>

            <Text style={{ textAlign: 'left', fontSize: 22, color:"#3FB39B", textAlign: 'center',     fontFamily:"Montserrat-Regular",}}>{item.date}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 17,  color: 'grey'   ,  fontFamily:"Montserrat-Regular",}}>{item.startTime}{" - "}{item.endTime}</Text>
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
       
            <TouchableOpacity style={[styles.smallRoundedBlueRoundedNoMargin,{marginTop:20}]}
                   onPress={() => navigation.navigate('AppointmentConfirmation', {
                    slotDetails : item,
                    doctorInfo: doctorInfo,
                    patient: patient,
                    schedule: schedule


                   })}
           >
              <Text style={[styles.cardText,{fontSize: 18},{color: 'white'}]}>Book </Text>
            </TouchableOpacity>
      


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


  const SelectSlot = ({route}) => {


 
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
    const { schedule } = route.params;
    const { doctorInfo } = route.params;
    const { patient } = route.params;
 
    const [isLoading, setLoading] = useState(true);
    const [slot, setSlot] = useState([]);
    useEffect(() => {


let one = "http://emr.daldaeagleseye.com/emrappointment/appointment/provider/weekly-schedule/schedule/slot?provider=demodoctor1&date="+schedule
const requestOne = axios.get(one);

 
axios.all([requestOne]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  console.warn(responseOne.data)
 


        
        const data1 = formatData(responseOne.data.result, 4);

        console.log("data1", data1)
        setSlot(data1);



     

      })).catch(errors => {
        console.log(errors)
  
    }).then(() => setLoading(false))
  
  
  }, []);


 
 
   
  
     
    return (
  
        <View style={styles.container} >
          <Header name="Select Slot" class= ""/>
          
           
            <UnitClerkHeader/>
            <PatientHeader/>
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
             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, margin: 40}}
          data={slot}
          renderItem={({ item }) => <Item item={item} doctorInfo={doctorInfo}  patient= {patient}  schedule={schedule} />}
          keyExtractor={item => item.email}
          numColumns = {numColumns}
          // scrollEnabled={isScrollEnabled}
        />
</SafeAreaView>

        </View>

        </View>
     
    );
  }

  export default SelectSlot;
