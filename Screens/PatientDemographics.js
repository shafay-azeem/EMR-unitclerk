import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState,useEffect} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

import { useNavigation } from '@react-navigation/native';


const PatientDemographics = () => {
   
 const navigation = useNavigation();  


     return (
       <ScrollView style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="Patient Demographics" class= ""/>
       <UnitClerkHeader/>
       {/* <PatientHeader/> */}


               {/* <TouchableOpacity style={[styles.buttonGeneral,{marginTop:110}]}
              onPress={() =>navigation.navigate("SearchDoctor")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOK APPOINTMENT </Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={[styles.buttonGeneral,{marginTop:130}]}
              onPress={() =>navigation.navigate("UpcomingAppointmentSchedule")}
              > 
              <Text style={styles.Button_text_styling}>
              UPCOMING APPOINTMENT </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>navigation.navigate("UpdatePatientProfile")}
              > 
              <Text style={styles.Button_text_styling}>
              UPDATE PATIENT PROFILE </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>navigation.navigate("ImagesRecords")}
              > 
              <Text style={styles.Button_text_styling}>
             IMAGES OR RECORD </Text>
            </TouchableOpacity>
            

            </View>
       
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }

export default PatientDemographics;
 