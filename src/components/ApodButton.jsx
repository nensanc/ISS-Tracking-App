import React, {useRef, useState} from 'react';
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet, PanResponder } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { setApodModal } from '../redux/actions/Apod';
const ApodButton = ({showApod,setApodModal}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} // Ajusta la posición inicial del botón 
        onPress={()=>{setApodModal()}}>
        <Text style={styles.buttonText}>
          {!showApod?
              <FontAwesome name="photo" size={12} color="blue" />
            :
              <AntDesign name="closecircle" size={12} color="black" />
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 150,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#cacfd2',
    opacity:0.6,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin:0
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

const mapStateToProps = state => ({
  showApod: state.Apod.showApod,
})

export default connect(mapStateToProps,{
    setApodModal
}) (ApodButton)