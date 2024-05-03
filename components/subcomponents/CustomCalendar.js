import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
//https://wix.github.io/react-native-calendars/docs/Components/Calendar#api

function CustomCalendar(props) {
  return (
    <Calendar
      initialDate="2022-12-01"
      minDate="2022-12-01"
      maxDate="2023-01-30"
      disableAllTouchEventsForDisabledDays={true}
      {...props}
    />
  );
}
export default CustomCalendar;