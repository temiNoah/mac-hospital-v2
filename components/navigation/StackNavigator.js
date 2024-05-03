import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
// import SignUpScreen from "../screens/SignUpScreen";
import SSOSignUpScreen from "../screens/SSOsignupScreen";
import UserTypeScreen from '../screens/UserTypeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import UserVerificationByPhoneScreen from '../screens/UserVerificationByPhoneScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import GOPDScreen from '../screens/client/GOPDScreen';
import GOPDNextScreen from '../screens/client/GOPDNextScreen';
import MakeAppointmentScreen from '../screens/client/MakeAppointmentScreen';
import MyAppointmentsScreen from "../screens/client/MyAppointmentsScreen";
import MyAppointmentStatusScreen from '../screens/client/MyAppointmentStatusScreen';
import FeedbackScreen from '../screens/client/FeedbackScreen';
import FeedbackResultScreen from '../screens/client/FeedbackResultScreen';
import NotificationMessageScreen from '../screens/client/NotificationMessageScreen';
import NotificationNewsLetterScreen from '../screens/client/NotificationNewsLetterScreen';
import NotificationNearbyHospitalScreen
  from '../screens/client/NotificationNearbyHospitalScreen';
import NotificationMessageDetailsScreen from '../screens/client/NotificationMessageDetailsScreen';
// import ProfileScreen from '../screens/client/ProfileScreen';
import MakePaymentScreen from '../screens/client/MakePaymentScreen';
import RegistrationScreen from '../screens/client/RegistrationScreen';
import UploadImage from '../subcomponents/uploadImage'
import ServiceDetailsScreen from '../screens/client/ServiceDetailsScreen'
import AppointmentDetailsScreen from '../screens/client/AppointmentDetailsScreen'
// import ChatScreen from '../screens/chat/chat'//'../screens/ChatScreen'

import ClientTabNavigator from "./TabNavigators/ClientTabNavigator";
import DoctorTabNavigator from "./TabNavigators/DoctorTabNavigator";
import DoctorNotificationMessageScreen from '../screens/doctor/DoctorNotificationMessageScreen'
import DoctorNotificationNewsLetterScreen from '../screens/doctor/DoctorNotificationNewsLetterScreen'
import DoctorNotificationMessageDetailsScreen from '../screens/doctor/DoctorNotificationMessageDetailsScreen'


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserTypeScreen"
        component={UserTypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GOPDScreen"
        component={GOPDScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GOPDNextScreen"
        component={GOPDNextScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SSOSignUpScreen"
        component={SSOSignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClientDashboardScreen"
        component={ClientTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorDashboardScreen"
        component={DoctorTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="MyAppointmentsScreen"
        component={MyAppointmentsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UserVerificationByPhoneScreen"
        component={UserVerificationByPhoneScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MakeAppointmentScreen"
        component={MakeAppointmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAppointmentStatusScreen"
        component={MyAppointmentStatusScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedbackResultScreen"
        component={FeedbackResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationNewsLetterScreen"
        component={NotificationNewsLetterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationMessageDetailsScreen"
        component={NotificationMessageDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationMessageScreen"
        component={NotificationMessageScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationNearbyHospitalScreen"
        component={NotificationNearbyHospitalScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MakePaymentScreen"
        component={MakePaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadImage"
        component={UploadImage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceDetailsScreen"
        component={ServiceDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppointmentDetailsScreen"
        component={AppointmentDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAppointmentScreen"
        component={MyAppointmentsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DoctorNotificationMessageScreen"
        component={DoctorNotificationMessageScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DoctorNotificationNewsLetterScreen"
        component={DoctorNotificationNewsLetterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DoctorNotificationMessageDetailsScreen"
        component={DoctorNotificationMessageDetailsScreen}
        options={{ headerShown: false }}
      />



    </Stack.Navigator>
  );
};

export default StackNavigator;

