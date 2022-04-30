import {SafeAreaView, StyleSheet,ScrollView, Image,Text,Button, View, TouchableOpacity,TextInput,Alert

  ,Platform,
  PermissionsAndroid,} from 'react-native';
import React, {Component, useState} from 'react';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

import { useNavigation } from '@react-navigation/native';

 
  const MoreImagesAndRecord = ({route}) => {

    const [filePath, setFilePath] = useState({});
    const { patient } = route.params;
  const navigation = useNavigation();  
  console.log(patient.patientId)
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
 
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const captureImage = async (type) => {
    const formdata = new FormData();
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response 22= ', response);
        console.log('base64direct',response.assets[0].base64)
        let kill=response.assets[0].base64
        console.log({kill});
 
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }

        setFilePath(response);
       
        
      
        const data ={"images":response.assets[0].base64}
        
        fetch('http://emr.daldaeagleseye.com/emrappointment/appointment/patient/'+patient.patientId+'/documents/laboratory' ,   { 
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
      
          },
          body:JSON.stringify(data) ,
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success apni:', data);
          Alert.alert(
            'Success',
            ' Uploaded Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          console.error('Error 22:', error);
          Alert.alert(
            'Failed',
            'Not Uploaded',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false }
          );
        });
      
        
    
       
        
      });
    }
  };
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      console.log('base64direct',response.assets[0].base64)
      let kill=response.assets[0].base64
      console.log({kill});
 
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setFilePath(response);

      const data ={"images":response.assets[0].base64}

      fetch('http://emr.daldaeagleseye.com/emrappointment/appointment/patient/'+patient.patientId+'/documents/laboratory' ,   { 
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
    
        },
        body:JSON.stringify(data) ,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success apni:', data);
        Alert.alert(
          'Success',
          'Uploaded Successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('HomeScreen'),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error('Error 22:', error);
        Alert.alert(
          'Failed',
          'Not Uploaded',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('HomeScreen'),
            },
          ],
          { cancelable: false }
        );
      });
    
      
    });
  };
     return (
       <ScrollView style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="Images Or Records" class= ""/>

       <UnitClerkHeader/>
       <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/> 
       <Text>{filePath.uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonGeneral}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image Upload
          </Text>
          </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonGeneral}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image from Gallery to Upload</Text>
        </TouchableOpacity>
      
       </View>
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 export default MoreImagesAndRecord;

 