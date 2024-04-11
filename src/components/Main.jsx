import React from "react";
import { View, StyleSheet } from "react-native";
// import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./BottonTabNavigator";
import ApodButton from "./ApodButton";
import ApodModal from "./ApodModal";
const Main = () => {
    return(
        <View style={styles.container}>
            <NavigationContainer style={styles.navigator}>
                <BottomTabNavigator />
                <ApodModal />
            </NavigationContainer>
            <ApodButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop:Constants.statusBarHeight,
        flexGrow: 1
    },
    navigator:{
        
    }
  });


export default Main