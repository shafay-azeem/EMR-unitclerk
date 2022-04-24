import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class Receipt extends Component {
    constructor(props){
      super(props)
  
     }
      state={
          Location:"",
          Speciality:"",
          Specify_Doctor:"",
          Phone_Number:""
    }
     render(){
      return (
      
        <SafeAreaView style={[styles.container,{flex: 1}]}>
   
     
        <View style={{backgroundColor:'#38AB94'}}> 
             <Header style={{height:"20%"}} name="Printed Invoice" class= ""/>
             <UnitClerkHeader/>
             <PatientHeader/>

<ScrollView>
           <ScrollView style={{backgroundColor:'white',alignSelf:'center',width:450,height:700,marginTop:10,padding:20}}>
           <Text style = {[styles.mediumText,{alignSelf:'center',color:"#3FB39B",marginBottom:3}]}>AGA KHAN AFMC</Text>
           
<View style = {{justifyContent: 'center',alignSelf:'center',alignItems:'center'}}>
            <Text style={{lineHeight: 20, color: 'black',textAlign:'center',fontFamily:"Montserrat-SemiBold"}}>Aga Khan University Hospital</Text>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'center',fontFamily:"Montserrat-SemiBold"}}>Karachi City, Sindh</Text>

            </View>

            <View style = {{flexDirection:'row',justifyContent: 'flex-start',alignSelf:'flex-start',alignItems:'flex-start',width:'100%',marginTop:20}}>
            <Text style={{ color: 'black',textAlign:'left',fontFamily:"Montserrat-SemiBold",fontSize:20}}>Receipt No: </Text>
            <Text style={{ color: '#3FB39B',alignSelf:'center',fontFamily:"Montserrat-Regular",fontSize:20}}>123</Text>

            </View>
           <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -
    </Text>


    <View style = {{justifyContent: 'center',alignSelf:'center',alignItems:'center'}}>
            <Text style={{lineHeight: 20, color: 'black',textAlign:'center',fontFamily:"Montserrat-SemiBold"}}>Appointment Slip</Text>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'center',fontFamily:"Montserrat-SemiBold"}}>Consulting Clinics</Text>

            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -
    </Text>
    <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Shafay Azeem ( 0908763 ) </Text>
            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -
    </Text>
    <View style = {{justifyContent: 'center',alignSelf:'center',alignItems:'center'}}>
            <Text style={{lineHeight: 20, color: 'black',textAlign:'center',fontFamily:"Montserrat-SemiBold"}}>Your Next Appointment</Text>
        
            </View>
            <View style = {{flexDirection: 'row',justifyContent: 'flex-start',alignSelf:'flex-start',marginTop:20}}>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Day :{"\n"}Date :{"\n"}Reporting Time :{"\n"}Location :{"\n"}Resource :{"\n"} </Text>
              <Text style={{color:"black",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Friday{'\n'}8 April 2022{'\n'}01:25 pm{'\n'}AFMC{'\n'}Dr.Ahmed Khan</Text>
            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -
    </Text>



    <View style = {{justifyContent: 'flex-start',alignSelf:'flex-start',alignItems:'flex-start',width:'100%'}}>
            <Text style={{ color: 'black',textAlign:'left',fontFamily:"Montserrat-SemiBold",fontSize:20}}>Note: </Text>
            <Text style={{color:"black",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>
            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
            </Text>


            </View>



           </ScrollView>
  
           </ScrollView>
            
          
             </View>
           
             </SafeAreaView>
         
       );
       }
  }
  