// import styles from "../styles/stylesheet";
import React, {Component,useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Button ,Alert} from 'react-native';
// import { COLORS } from "../styles/colors";
import CheckBox from 'react-native-check-box';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './Styles/CompleteStyling';




var db = openDatabase({ name: 'patient.db' });

const SignInScreen = ({ navigation }) => {


  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Unitclerk'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Unitclerk', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Unitclerk(user_id INTEGER PRIMARY KEY AUTOINCREMENT,Email VARCHAR(30), Password VARCHAR(30))',
              []
            );
          }
        }
      );
    });
  }, []);

  let [Email, setEmail] = useState('');
  
  let [Password, setPassword] = useState('');

  let register_user = () => {

    
    if (!Email) {
      alert('Please fill Email');
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(Email) === false) {
    alert('enter valid email address');
    return;
    }

  
    if (!Password) {
      alert('Please Enter Password');
      return;
    }

    db.transaction(function (tx) {
      console.log(Email,Password);
      tx.executeSql(
        
        'INSERT INTO Unitclerk (Email,Password) VALUES (?,?)',
        [Email,Password],
      
        (tx, results) => {
          console.log('Results', results.rowsAffected);
        
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are SignIn Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };


     return (

        <View style={styles.containerlogo}>
     

          <View style = {{flexDirection: 'row', width:'100%', height:'100%'}}>
            <View style = {{width:'40%', height: '100%'}}>
              <View style = {{height: '13%', width: '70%', alignSelf: 'center', margin: 15}}>
                <Image style={styles.logoImage}
                  source={require('../images/logo.png')}>
                </Image>
              </View>

              <View style={{marginTop: 140, alignSelf: 'center'}}>
                <Text style = {[styles.largeText, {color: 'white'}]}>SIGN INTO EMR</Text>
              </View>

              <View style={{marginTop: 40, alignSelf: 'center', width: '70%', alignItems: 'center'}}>
                <Text style = {[styles.smallText, {color: 'white'},{textAlign: 'center'}]}>To keep connected with us please login with your personal info!</Text>
              </View>

              <View style={{marginTop: 60, alignSelf: 'center', width: '70%', alignItems: 'center'}}>
                  <TouchableOpacity style = {[styles.mediumButton, {borderWidth: 1.5}, {borderColor: 'white'},{justifyContent: 'center'}]}>
                    <Text style={[styles.mediumText,{textAlign: 'center'},{color: 'white'},{fontSize: 20}]}>SIGN UP</Text>

                  </TouchableOpacity>
              </View>

            </View>






            <View style = {{width:'60%', height: '100%', backgroundColor: 'white'}}>
            <View style = {{height: '22%', width: '50%', alignSelf: 'center', marginTop: 45}}>
                <Image style={styles.logoImage}
                  source={require('../images/AKUH.png')}>
                </Image>
              </View>

              <View style = {{marginTop: 40,alignSelf: 'center'}}>
               <Text style= {[styles.smallText, {color:"Purple"}]}>Please fill the form below</Text>
              </View>

              <View style = {{marginTop: 30,alignSelf: 'center'}}>
              <Text style = {[styles.smallText, {marginLeft:23}, {marginBottom: 5}]}>Email:</Text>
              {/* <View style={styles.inputViewLarge} > */}
              <TextInput  
              style={[styles.Edittext,styles.MontserratSemiBold,{  width:450}]}
              placeholder="@ecample.edu.pk" 
              placeholderTextColor="#3FB39B"
              value={Email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={ (Email) => setEmail(Email)}/>
              </View>


              <View style = {{marginTop: 30,alignSelf: 'center'}}>
              <Text style = {[styles.smallText, {marginLeft:23}, {marginBottom: 5}]}>Password:</Text>
              {/* <View style={styles.inputViewLarge} > */}
              <TextInput  
              style={[styles.Edittext,styles.MontserratSemiBold,{  width:450}]}
              placeholder="Enter your password" 
              placeholderTextColor="#3FB39B"
              secureTextEntry={true}
              onChangeText={ (Password) => setPassword(Password)}/>
              </View>
              {/* </View> */}


              
              <View style = {{marginTop: 10,alignSelf: 'center', flexDirection: 'row',width: 450 }}>
                <View style = {{flexDirection: 'row', marginLeft: 2, width: '65%'}}>
{/* 
                <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /> */}
                <Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Remember Me</Text>
                </View>

               
               
                <View style = {{flexDirection: 'row', marginLeft: 2, justifyContent: 'flex-end',}}>

                <Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'},{color: 'red'}]}>Forgot Password?</Text>
                </View>
              </View>

              <View style={{marginTop: 40, alignSelf: 'center',  alignItems: 'center'}}>
              <TouchableOpacity style={[styles.buttonGeneralInForm,{width:300}]}
             onPress={register_user}
              > 
              <Text style={styles.Button_text_styling}>
             SIGN IN </Text>
            </TouchableOpacity>

              </View>

              <View style={{marginTop: 20, alignSelf: 'center', width: '70%', alignItems: 'center'}}>
              <View style={{marginTop: 20, alignSelf: 'center',  alignItems: 'center'}}>
              <TouchableOpacity style={{     alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 25,
        backgroundColor:'#FFFFFF',
        borderColor:"#252726",
        borderWidth:1,
        height:50,
       //  margin:50,
       width:300,
       marginRight:20,marginLeft:20,marginBottom:20}}
              // onPress={() =>this.props.navigation.navigate("PatientDemographics")}
              > 
              <Text style={{  fontSize:15,
   color:'black',
  //  fontWeight:'normal',
   fontFamily:"Montserrat-Regular"}}>
              REQUEST ACCOUNT</Text>
            </TouchableOpacity>

              </View>
              </View>


            </View>
            
          </View>
    
        </View>
      );

  }

  export default SignInScreen;