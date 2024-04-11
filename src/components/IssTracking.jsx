import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const IssTracking = () => {
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 30,
        longitudeDelta: 30,
    });

    const [data, setData] = useState(null);
    const [mapMoving, setMapMoving] = useState(false); 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://api.open-notify.org/iss-now.json');
                const jsonData = await response.json();
                setData(jsonData);
                if (!mapMoving) { // Solo actualiza automáticamente si no se ha presionado el botón manualmente
                    setRegion(prevRegion => ({
                        ...prevRegion,
                        latitude: parseFloat(jsonData.iss_position.latitude),
                        longitude: parseFloat(jsonData.iss_position.longitude),
                    }));
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        
        const intervalId = setInterval(fetchData, 250);

        return () => clearInterval(intervalId);
    }, [mapMoving, data]);

    const centrarRegion = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitude: parseFloat(data.iss_position.latitude),
            longitude: parseFloat(data.iss_position.longitude),
        }));
        setMapMoving(false);
    };


    const RegionChange = (newRegion) => {
        const deltaLatitude = Math.abs(Math.abs(region.latitude)-Math.abs(newRegion.latitude))
        const deltaLongitude = Math.abs(Math.abs(region.longitude)-Math.abs(newRegion.longitude))
        // const deltaLatitudeDelta = Math.abs(Math.abs(region.latitudeDelta)-Math.abs(newRegion.latitudeDelta))
        const deltaLongitudeDelta = Math.abs(Math.abs(region.longitudeDelta)-Math.abs(newRegion.longitudeDelta))
        if (deltaLatitude>1.1 || deltaLongitude>1.1 || deltaLongitudeDelta>1){
            setMapMoving(true);
        } 
      };

    return(
        <>
            <MapView
                style={{ flex: 1 }}
                region={region}
                onRegionChange={RegionChange}
            >
                <Marker
                    coordinate={{ latitude: data?parseFloat(data.iss_position.latitude):0, 
                        longitude: data?parseFloat(data.iss_position.longitude):0 }}
                    title="ISS Tracking"
                    description="ISS Real Time Tracking"
                >
                    <MaterialCommunityIcons name="space-station" size={40} color={"black"} />
                </Marker> 
            </MapView>
            {mapMoving?
                    <TouchableOpacity style={styles.button} onPress={centrarRegion}>
                        <MaterialIcons name="center-focus-strong" size={24} color="black" />
                    </TouchableOpacity>
                :
                null
            }
        </>
    );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row', // Alinear el icono y el texto horizontalmente
      alignItems: 'center', // Centrar verticalmente el icono y el texto
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default IssTracking;
