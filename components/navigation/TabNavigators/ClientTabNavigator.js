import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';

import AppointmentScreen from "../../screens/client/AppointmentScreen";
import ProfileScreen from "../../screens/client/ProfileScreen";
import Dashboard from "../../screens/client/Dashboard";
import NotificationScreen from "../../screens/client/NotificationScreen"


const Tab = createBottomTabNavigator();

const ClientTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Appointment") {
                        iconName = focused ? "calendar" : "calendar-outline";
                    } else if (route.name === "Notification") {
                        iconName = focused ? "notifications" : "notifications-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#4FC48B",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{ headerShown: false }}
            />

            <Tab.Screen name="Notification" component={NotificationScreen}
                options={{
                    headerShown: false,
                    headerTitle: "Notification",
                    headerTitleAlign: "center",
                }}
            />

            <Tab.Screen
                name="Appointment"
                component={AppointmentScreen}
                options={{
                    headerShown: false,
                    headerTitle: "Customer's Appointment",
                    headerTitleAlign: "center",
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    headerTitle: "Personal Infomation",
                    headerTitleAlign: "center",
                }}
            />

        </Tab.Navigator>
    );
};

export default ClientTabNavigator;
