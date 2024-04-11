// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import IssTracking from './IssTracking';
import AstrosList from "./AstrosList";
import MarsPhotoList from "./MarsPhotoList";
import DetailsMarsPhoto from './DetailsMarsPhoto';

const Tab = createBottomTabNavigator();

const MarsPhotoStack = createNativeStackNavigator();
function MarsPhotoStackScreen() {
    return (
        <MarsPhotoStack.Navigator>
            <MarsPhotoStack.Screen name="Mars Photo Rovers" component={MarsPhotoList} />
            <MarsPhotoStack.Screen name="Mars Photo Details" component={DetailsMarsPhoto} />
        </MarsPhotoStack.Navigator>
    );
}
const IssTrackingScreenStack = createNativeStackNavigator();
function IssTrackingScreenStackScreen() {
    return (
        <IssTrackingScreenStack.Navigator>
        <IssTrackingScreenStack.Screen name="ISS Real Time Tracking" component={IssTracking} />
        </IssTrackingScreenStack.Navigator>
    );
}
const AstrosListStack = createNativeStackNavigator();
function AstrosListStackScreen() {
    return (
        <AstrosListStack.Navigator>
        <AstrosListStack.Screen name="People on the ISS" component={AstrosList} />
        </AstrosListStack.Navigator>
    );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle:styles.tabBarItemStyle, 
            headerShown: false,
            tabBarShowLabel: false 
        }}
      >
      <Tab.Screen 
        name="ISS_Real_Time_Tracking" 
        component={IssTrackingScreenStackScreen}
        options={{
            tabBarIcon: ({focused }) => (
                <MaterialCommunityIcons name="space-station" size={32} color={focused?"black":"gray"} />
            ),
         }}
        />
      <Tab.Screen 
        name="People_on_the_ISS" 
        component={AstrosListStackScreen} 
        options={{
            tabBarIcon: ({focused }) => (
                <FontAwesome6 name="user-astronaut" size={32} color={focused?"black":"gray"} />
            ),
         }}
        />
      <Tab.Screen 
        name="Mars_Photo_Rovers" 
        component={MarsPhotoStackScreen} 
        options={{
            tabBarIcon: ({focused }) => (
                <FontAwesome name="photo" size={32} color={focused?"black":"gray"} />
            ),
         }}
        />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tabBarStyle:{
        height:60,
      },
      tabBarItemStyle:{
      }
  });

export default BottomTabNavigator;