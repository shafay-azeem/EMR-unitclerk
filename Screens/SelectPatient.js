import React, {Component, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,Alert}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import Patientinfo from './DATA/patient.json';
import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctors from './DATA/selectdoc.json';
import patientcomplete from './DATA/patientcomplete.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';


function Item({ item }) {
    const navigation = useNavigation();   

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
  
  
      return (
        

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SearchDoctor',  {         
          patient: item
          })}
          
          >
        
          <View >
    
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/user.png')}
            />

         

          </View>

            <Text numberOfLines={1} style={{ textAlign: 'left', fontSize: 25, color:"#075430", textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.firstName}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            {/* <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 17,  color: 'grey',fontFamily:"Montserrat-Regular"}}> {item.PhoneNumber}</Text>
            <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 17,  color: 'grey',fontFamily:"Montserrat-Regular"}}> {item.MRNumber}</Text>
             */}

<View style = {{flexDirection: 'row',justifyContent: 'flex-end',alignSelf:'center'}}>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Phone Number : {"\n"}Mr Number </Text>
              <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{item.primaryContact}{'\n'}{item.mrnum}</Text>
            </View>
        
            <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
       
            <TouchableOpacity style={[styles.smallRoundedBlueRoundedNoMargin,{marginTop:10,marginBottom:40}]}
                   onPress={() => navigation.navigate('PatientDemographics')} >
              <Text style={[styles.cardText,{fontSize: 18},{color: 'white'}]}>SELECT </Text>
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



  const SelectPatient = ({route}) => {

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
 

 // const navigation = useNavigation(); 

 const [isLoading, setLoading] = useState(true);
 const [patient, setPatient] = useState([]);
 const { mrNum } = route.params;

 useEffect(() => {
  
  console.log(mrNum)
  let one = "http://emr.daldaeagleseye.com/emrappointment/patient/search?mrnum="+mrNum+"&cnic=&qrcode="
  const requestOne = axios.get(one);

   
  axios.all([requestOne]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    console.warn(responseOne.data)
   


          
          const data1 = formatData(responseOne.data.result, 4);

          console.log("data1", data1)
          setPatient(data1);



          console.log(responseOne.data.result);
          console.log(patient[0].patientId);
          console.log(patient);
          console.log(mrNum)

        })).catch(errors => {
          console.log(errors)
    
      }).then(() => setLoading(false))
    
    
    }, []);
    

// useEffect(() => {
//   getPatientsFromApi();

// }, [])

// const getPatientsFromApi = () => {
//   return fetch('https://emr-system.000webhostapp.com/emrappointment/emrappointment/patient/search?mrnum=89&cnic=&qrcode=')
//     .then((response) => response.json())
//     .then((json) => {

//       console.log('response', json)
//       return json.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

 


   

    //  const item=JSON.parse(item);
    return (
    
        <View style={styles.container}>
          <Header name="Select Patient" class= ""/>
          
      
            <UnitClerkHeader/>
            <PatientHeader/>
         <View style= {{flex:1 ,width: '100%', alignSelf: 'center'}}>
         <SafeAreaView style={{flex:1}} >
         
        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={patient}
          renderItem={({ item }) => <Item item={(item)}/>}
          keyExtractor={item => item.patientId}
          numColumns = {numColumns}

         
        /> 
        </SafeAreaView>
  

        </View> 
        </View>
       
      
    
    );
  }

export default SelectPatient;
