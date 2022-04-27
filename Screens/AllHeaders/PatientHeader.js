
// import React, {Component,useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignItems,justifyContent,alignSelf,ActivityIndicator} from 'react-native';
// import CheckBox from 'react-native-check-box';

// import axios from 'axios';
// import Patientinfo from '../DATA/patient.json';
// const baseUrl = 'https://emr-system.000webhostapp.com';

// const PatientHeader = () => {
//   // managing state with 'useState'
//   const [isLoading, setLoading] = useState(true);
//   const [firtName, setFirstName] = useState([]);
//   const [mrnum, setmrnum] = useState([]);
//   const [primaryContact, setprimaryContact] = useState([]);
//   const [gender, setgender] = useState([]);
//   // const [status, setStatus] = useState('false');

//   // similar to 'componentDidMount', gets called once
//   useEffect(() => {
//     // fetch(movieURL)
//     //   .then((response) => response.json()) // get response, convert to json
//     //   .then((json) => {
//     //     setData(json.movies);
//     //     setTitle(json.title);
//     //     setDescription(json.description);
//     //   })
//     //   .catch((error) => alert(error)) // display errors
//     //   .then(() => setLoading(false)); // change loading state
//     axios({
//         method: 'get',
//         url: `${baseUrl}/emrappointment/emrappointment/patient/tehreemhussain1`,
//       }).then((response) => {
//           setFirstName(response.data.result[0].firstName)
//           setprimaryContact(response.data.result[0].primaryContact)
//           setgender(response.data.result[0].gender)
//           setmrnum(response.data.result[0].mrnum)
     
//           setStatus(response.data.status)
          
//             console.log(firtName);
//             console.log(status)
//       }).then(() => setLoading(false));
//   }, []);

//   // Also get call asynchronous function
// //   async function getMoviesAsync() {
// //     try {
// //       let response = await fetch(movieURL);
// //       let json = await response.json();
// //       setData(json.movies);
// //       setTitle(json.title);
// //       setDescription(json.description);
// //       setLoading(false);
// //     } catch (error) {
// //       alert(error);
// //     }
// //   }

//           return (
//             <View style={{backgroundColor:'#FFFFFF',marginTop:10,padding:8,borderRadius:10}} >
    
//             <View style= {{flexDirection: "row"}}>
//             <View style = {{flexDirection: 'row',width: '5%' , alignItems: 'center',justifyContent: 'flex-start'}}>
//             <View style={{ width: 50 ,height: 50,marginRight: 6}}>
//                     { <Image
//                     style={{   width: '100%',height: '100%',alignSelf: 'center'}}
//                     source={require('../user.png')}
//                     /> }
//                   </View>
//             </View>


//             <View style = {{flexDirection: 'row',width: '45%' , alignItems: 'center',justifyContent: 'flex-start'}}>
//             <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>PatientName:{'\n'}Gender:</Text>
//             <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{firtName}{'\n'}{gender}</Text>
       
//             </View>


// <View style = {{flexDirection: 'row', width: '50%',justifyContent: 'flex-end',alignSelf:'flex-start'}}>
//             <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>MRNumber : {"\n"}PhoneNumber: </Text>
//               <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{mrnum}{'\n'}{primaryContact}</Text>
//             </View>
//           </View>
//           </View>
//           );
//                     };

      

       


// const styles = StyleSheet.create({
//     header: {
//         width:"100%",
//         height: '10%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor:"#3FB39B",

//     },
//     headerText: {
//         fontSize: 20,
//         fontWeight:'bold',
//        color:'#FFFFFF',
//     }
// })

// export default PatientHeader;


import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignItems,justifyContent,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';



export default function Header(props ){
  
 

          return (
            <View style={{backgroundColor:'#FFFFFF',marginTop:10,padding:8,borderRadius:10, alignSelf: 'center', height: 70}} >
            <View style= {{flexDirection: "row"}}>
            <View style = {{flexDirection: 'row',width: '5%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <View style={{ width: 50 ,height: 50,marginRight: 6}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../user.png')}
                    /> }
                  </View>
            </View>


            <View style = {{flexDirection: 'row',width: '45%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>PatientName:{'\n'}Age:</Text>
            <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{props.firstName}{" "}{props.lastName}{'\n'}{props.age} Years</Text>
       
            </View>


<View style = {{flexDirection: 'row', width: '50%',justifyContent: 'flex-end',alignSelf:'flex-start'}}>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>MRNumber : {"\n"}PhoneNumber: </Text>
              <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{props.mrnum}{'\n'}{props.phone}</Text>
            </View>
          </View>
          </View>
          );
        
      }




const styles = StyleSheet.create({
    header: {
        width:"100%",
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#252726",

    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold',
       color:'#FFFFFF',
    }
})