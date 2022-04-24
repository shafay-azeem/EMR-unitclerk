import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, Image, Alert, Modal,  Pressable, Picker, ScrollView} from 'react-native';

import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import CheckBox from 'react-native-check-box';
import Example1 from './Example1';
import Example2 from './Example2';
import Time from './timer';




    import { useNavigation } from '@react-navigation/native';

 
const ScheduleManagement = () => {



  const navigation = useNavigation();  

  
  let [mrNumber, setmrNumber] = useState('');
  let [password, setpassword] = useState('');
  let [sunday, setsunday] = useState('');
  let [tuesday, settuesday] = useState('');
  let [monday, setmonday] = useState('');
  let [wdnesday, setwdnesday] = useState('');
  let [friday, setfriday] = useState('');
  let [thursday, setthursday] = useState('');
  let [saturday, setsaturday] = useState('');
    
   
    return (
      <View style={styles.container}>
          <Header name="Schedule Management" class= ""/>
          <UnitClerkHeader/> 
      
          <View style = {[styles.cardView91, {marginTop:10}, {width: '67%'}]}>
            
            
            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 3,borderColor: "#7B7978"}}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.mediumText}>Days</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.mediumText}>Time Slot</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.mediumText}>Max Slot</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>


            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor:"#7B7978"}}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Sunday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>No Sitting</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>-</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>



            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor: "#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Monday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>12:00 - 01:00</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>6</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>


            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor:"#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Tuesday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>12:00 - 01:00</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>6</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>


            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor:"#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Wednesday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>12:00 - 01:00</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>6</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>


            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor: "#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Thursday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>12:00 - 01:00</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>6</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>

            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor:"#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Friday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>12:00 - 01:00</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>6</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>




            <View style = {{flexDirection: 'row',    borderStyle: 'dotted',borderBottomWidth: 1,borderColor:"#7B7978" }}>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.smallText}>Saturday</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>No Sitting</Text>
            </View>
            <View style = {{width: '33%',alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.smallText}>-</Text>
            
            </View>
            <Text>{'\n\n'}</Text>
            </View>
            <TouchableOpacity style={[styles.buttonGeneral,{width:300,marginTop:50}]}
              onPress={() =>navigation.navigate("HomeScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              SAVE </Text>
             
            </TouchableOpacity>




        </View>
        
      </View>
    );
  };



  export default ScheduleManagement;
