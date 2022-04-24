import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';
import doctorApp from './DATA/doctorApp.json';

import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

export default class OpeningBal extends Component {
  constructor(props){
    super(props)

   }
    state={
        OpeningBal:"",
        CNIC:"",
        QR_code:""
  }
   render(){
    return (
      <ScrollView style={{backgroundColor:'#38AB94'}}> 
      <SafeAreaView style={{flex: 1}}>
 
   
      <View > 
           <Header style={{height:"20%"}} name="OPENING BALANCE " class= ""/>
           <UnitClerkHeader/>
           </View>
           <View style={styles.containerWithinScrollView} >

           <View style={{backgroundColor:'#FFFFFF',marginTop:10,padding:8,borderRadius:10,alignItems: 'center'}} >
            <View style= {{flexDirection: "row"}}>
       


            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:25}}>TODAY'S DATE: </Text>
            <Text style={{color:"#38AB94",alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:25}}>{doctorApp[0].date}</Text>
       
            </View>



          </View>
          </View>
             

    
           <Text style={styles.EdittextHeading}>Opening Balance  </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Opening Bal" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({OpeningBal:text})}/>
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>this.props.navigation.navigate("HomeScreen")}
             > 
             <Text style={styles.Button_text_styling}>
             SUBMIT </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
           </ScrollView>
     );
     }
}
