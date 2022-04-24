import React, { useState } from "react";
import { Button, View , Text, Touchable, TouchableOpacity, Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './Styles/CompleteStyling';




const Time = () => {
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
    // borderWidth: 1.5, 
    // borderColor: COLORS.main, 
    // borderRadius: 25, 
    // width: '90%',
    // height: 40 
    <View>
      <TouchableOpacity
       style = {{borderWidth: 1.5, borderColor:'#3FB39B', borderRadius: 25, width: '90%', height: 40, justifyContent: 'center',padding:10, alignItems: 'flex-start', alignSelf: 'center' }}
       title="Show Date Picker" onPress={showDatePicker} >
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        format="hh:mm"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <View style = {[styles.roundIconSmall,{justifyContent: 'flex-end',  width: '100%', alignItems: 'center', marginRight: 10, flexDirection: 'row'}]}>
               <Text style = {[styles.smallText, {color: '#3FB39B'},{marginRight:10}]}>HH:mm</Text>
                <Image
              style={[styles.detailLogo, {alignSelf: 'flex-end'},{width: 30, height:30},{marginBottom:5}]}
              source={require('../images/time.png')}
            />
        </View>   

      </TouchableOpacity>
   </View>
  );
};

export default Time;