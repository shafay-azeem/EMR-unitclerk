import React, { useState } from "react";
import { Button, View , Text, Touchable, TouchableOpacity, Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './Styles/CompleteStyling';

// import { COLORS } from '../styles/colors';


const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
       style = {{borderWidth: 1,   padding: 10,
        marginTop:2, borderColor: "#3FB39B", borderRadius: 15, width: 300,justifyContent:'center', height: 50,padding:10, alignItems: 'flex-start',backgroundColor:'#F7F7F7' ,marginLeft:20}}
       title="Show Date Picker" onPress={showDatePicker} >
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        format = "DD-MM-YYYY"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <View style = {[styles.roundIconSmall,{justifyContent: 'flex-start',  width: '100%', alignItems: 'center', marginRight: 10, flexDirection: 'row',}]}>
               <Text style = {[styles.smallText, {color: "#3FB39B"},{marginRight:10}]}>Enter DOB</Text>
                <Image
              style={[styles.detailLogo, {alignSelf: 'flex-end'},{width: 30, height:30},{marginBottom:5}]}
              source={require('../images/calendar.png')}
            />
        </View>   

      </TouchableOpacity>
   </View>
  );
};

export default Example;