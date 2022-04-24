import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput,Alert} from 'react-native';
import React, {Component,Fragment,useState} from 'react';
import RadioForm  from 'react-native-simple-radio-button';
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import QRCodeScanner from 'react-native-qrcode-scanner';
import CheckBox from 'react-native-check-box';

import Example from './Example';

import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';





  import { useNavigation } from '@react-navigation/native';

 
  const UpdatePatientProfile = () => {



  const navigation = useNavigation();  
    let [FirstName, setFirstName] = useState('');
    let [MiddleName, setMiddleName] = useState('');
    let [LastName, setLastName] = useState('');
    let [Age, setAge] = useState('');
    let [MaritalStatus, setMaritalStatus] = useState('Unmarried');
    let [Phone_Number, setPhone_Number] = useState('');
    let[HomeAddress,setHomeAddress] = useState('')
    let[password,setpassword] = useState('')
    let[Email,setEmail] = useState('')
    let[confirmpassword,setconfirmpassword] = useState('')
    
    let[gender,setgender] = useState('Male')
    let [date, setDate] = useState('');
    let [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setDate(date);
      hideDatePicker();
    };
  
    const getDate = () => {
      let tempDate = date.toString().split(' ');
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    };



    let register_user = () => {

    

  
      if (!FirstName) {
        alert('Please fill First Name');
        return;
      }

      if (FirstName.trim().length < 3) {
        alert('First Name must be minimum 3 characters');
         return;
        }

      let regname=/^[A-Za-z]+(([,.] |[ '-])[A-Za-z]+)*([.,'-]?)$/;
      if (regname.test(FirstName.toString())){
      }
      else{
        alert('First Name should include only Alphabets');
        return;
      }

      if (!MiddleName) {
        alert('Please fill Middle Name');
        return;
      }
      if (MiddleName.trim().length < 3) {
        alert('Middle Name must be minimum 3 characters');
         return;
       }
       if (regname.test(MiddleName.toString())){
      }
      else{
        alert('Middle Name should include only Alphabets');
        return;
      }
      if (!LastName) {
        alert('Please fill Last Name');
        return;
      }
      if (LastName.trim().length < 3) {
        alert('Last Name must be minimum 3 characters');
         return;
       }

       if (regname.test(LastName.toString())){
       }
      else{
        alert('Last Name should include only Alphabets');
        return;
      }
      if (!Phone_Number) {
        alert('Please Enter Phone Number');
        return;
      }

      if (Phone_Number.trim().length < 12 ||Phone_Number.trim().length > 12 ) {
        alert('Phone Number must be of 11 digit');
         return;
       }
         
      let regNum=/^[0-9]{4}[-]{1}[0-9]{7}$/;
      if (regNum.test(Phone_Number.toString())){

      }
      else{
        alert('Please Enter Number Acc to our Hint')
        return;
      }

      
      if (!Email) {
        alert('Please fill Email');
        return;
      }

      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(Email) === false) {
      alert('enter valid email address');
      return;
      }
  

    
      if (!Age) {
        alert('Please fill Address');
        return;
      }

       let regAge=/^100|[1-9]?\d$/
       if (regAge.test(Age.toString())){

       }
       else{
         alert('Enter Valid Age')
         return;
       }
       if (!password) {
        alert('Please Enter Password');
        return;
      }
      if (!confirmpassword) {
        alert('Please Enter Password');
        return;
      }
      if(password!=confirmpassword){
        alert('password must be match');
        return;
      }

     

            if (password!=null) {
              Alert.alert(
                'Success',
                'Updated Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('PatientDemographics'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Failed');
          }
   
  



    return (
      <View style={styles.container} >
      <SafeAreaView >
 
      <View > 
      <Header name="  Update Patient Profile " class= "" />
      <UnitClerkHeader/>
</View>


<View style={[styles.containerForRegistration]}>
  
  <View style={[styles.containerWithinScrollViewforForm]}>

  <ScrollView>
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>First Name</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter First Name" 
          placeholderTextColor="#3FB39B"
          onChangeText={(FirstName) => setFirstName(FirstName)}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Middle Name</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Middle Name" 
           placeholderTextColor="#3FB39B"
           onChangeText={ (MiddleName) => setMiddleName(MiddleName)}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Last Name</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Last Name" 
           placeholderTextColor="#3FB39B"
           onChangeText={ (LastName) => setLastName(LastName)}/>
        </View>
      </View>
    

           
      <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Gender</Text>
          <View   style={{   borderColor: "#3FB39B",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker  
           selectedValue={gender}
           placeholderTextColor="#3FB39B"
           onValueChange={(itemValue, itemIndex) => setgender(itemValue)} >
  
           <Picker.Item color='#3FB39B' label="Male" value="Male" />
           <Picker.Item color='#3FB39B' label="Female" value="Female" />
           <Picker.Item color='#3FB39B' label="Others" value="Others" />
          
        

           </Picker> 

       
     
     </View>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Age</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Age" 
           keyboardType = 'numeric'
           placeholderTextColor="#3FB39B"
           onChangeText={ (Age) => setAge(Age)}/>
        </View>

        <View style={styles.inputWrap}>
        <TouchableOpacity  onPress={showDatePicker}>
             <Text style={styles.EdittextHeading}>DOB</Text>
             <View>
               
             <TextInput
            style={styles.Edittext}
            value={getDate()}
            editable={false} 
            selectTextOnFocus={false}
            color="#000000"
            placeholderTextColor="#30A28C"
            placeholder="Date"/>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     
              </View>
              </TouchableOpacity>
        </View>
      </View>


           
      <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>phoneNumber</Text>
          <TextInput style={styles.Edittext}
            placeholder="03XX-XXXXXXX" 
           keyboardType = 'numeric'
           placeholderTextColor="#3FB39B"
           onChangeText={ (Phone_Number) => setPhone_Number(Phone_Number)}/>
        </View>



        <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Marital Status</Text>
<View   style={{   borderColor: "#3FB39B",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
           <Picker  
           selectedValue={MaritalStatus}
           placeholderTextColor="#30A28C"
            onValueChange={(itemValue, itemIndex) => setMaritalStatus(itemValue)} 
            
            >
  
           <Picker.Item color='#30A28C' label="Married" value="Married" />
           <Picker.Item color='#30A28C' label="Unmarried" value="Unmarried" />
           <Picker.Item color='#30A28C' label="Divorced" value="Divorced" />
           <Picker.Item  color='#30A28C' label="Widow" value="Widow" />
        

           </Picker>  


       
     
     </View>
     </View>
     </View>

         <View >
          <Text style={styles.EdittextHeading}>Address</Text>
          <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Address" 
              placeholderTextColor="#3FB39B"
              onChangeText={ (HomeAddress) => setHomeAddress(HomeAddress)}/>
         
         


</View>
<View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Email</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter Email" 
          placeholderTextColor="#3FB39B"
          onChangeText={ (Email) => setEmail(Email)}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Password</Text>
          <TextInput style={styles.Edittext}
            secureTextEntry={true}
           placeholder="Enter Password" 
           placeholderTextColor="#3FB39B"
           onChangeText={ (password) => setpassword(password)}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Confirm Password</Text>
          <TextInput style={styles.Edittext}
          secureTextEntry={true}
           placeholder="Enter Password" 
           placeholderTextColor="#3FB39B"
        
           onChangeText={ (confirmpassword) => setconfirmpassword(confirmpassword)}/>
        </View>
      </View>

     
<View style={{flexDirection:'row',marginTop:30}}>

  <View style={{width:"50%",flexDirection:'row',alignSelf:'center',alignItems:'center',marginLeft:27}}>
             {/* <CheckBox

      
         
style={{marginTop:3}}
onClick={()=>{
 this.setState({
  isChecked:!this.state.isChecked
})
}}
isChecked={this.state.isChecked}
RightText={"Remember Me"}
checkedColor={"#3FB39B"}

/> */}

             <Text style= {[{fontFamily:"Montserrat-Bold",justifyContent:'center',color:"#3FB39B",fontSize:15}]}>Please Verify above Information is Correct</Text>
             </View>
             <View style={{width:"50%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end'}} >


<TouchableOpacity style={[styles.buttonForm]}
  //  onPress={() =>navigation.navigate("PatientDemographics")}
  onPress={register_user}
   > 
   <Text style={styles.Button_text_styling}>
   UPDATE </Text>
 </TouchableOpacity>
 </View>



</View>
</ScrollView>
             </View>

      

</View>



      </SafeAreaView>
     
      </View>
      
    );
   };


  export default UpdatePatientProfile;


