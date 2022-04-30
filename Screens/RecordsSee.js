import React, {Component, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,ActivityIndicator}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctors from './DATA/selectdoc.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';



function Item({item}) {
    const navigation = useNavigation();  
    console.log(item,'hello hello')
    console.log(item.king,"king")
    console.log(item.patientId,"king")
    let  image=item.imgPath
    console.log(image)
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
      return (
        

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('HomeScreen',{
    
        })}
        >
          <Image
        style={[styles.tinyLogo,]}
        source={{uri: image}}

        
      />
      
            
   
        </TouchableOpacity>
       
            );
    }

 const RecordsSee = ({route}) => {
  const { patient } = route.params;
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
      const [Doctor, setDoctor] = useState([]);
    
      



      useEffect(() => {

  let one = "http://emr.daldaeagleseye.com/emrappointment/appointment/patient/"+patient.patientId+"/documents/laboratory"
  const requestOne = axios.get(one);

   
  axios.all([requestOne]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    console.warn(responseOne.data)
   


          
          const data1 = formatData(responseOne.data.result, 4);

          console.log("data1", data1)
          setDoctor(data1);
      
       
        })).catch(errors => {
          console.log(errors)
    
      }).then(() => setLoading(false))
    
    
    }, []);
    
 

  
    
    return (
    
        <View style={styles.container}>
          <Header name="See Records" class= ""/>
          
          
            <UnitClerkHeader/>
       
            <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
            {isLoading ? (

<ActivityIndicator size="large" color="#000000" style={{marginTop:280}}/>
    
) : (
         <View style= {{flex:1 ,width: '100%', alignSelf: 'center'}}>
         <SafeAreaView style={{flex:1}} >

        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={ Doctor}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.providerId}
          numColumns = {numColumns}
         
        />
        </SafeAreaView>
  

        </View>
)}
        </View>
       
      
    
    );
  }
export default RecordsSee;
