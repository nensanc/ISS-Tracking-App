import React from "react";
import { connect } from 'react-redux';
import { Divider, Card, Text } from 'react-native-paper';
import { StyleSheet, ScrollView } from "react-native";

const DetailsMarsPhoto = ({infoPhoto}) =>{
    return(
        <ScrollView>
        <Card style={styles.Card}>
            <Card.Cover source={{ uri: infoPhoto.img_src }} style={{height:500}} />
            <Card.Content>
                <Text style={{color:'green'}} variant="titleLarge">ID Image: {infoPhoto.id}</Text>
                <Text variant="bodyMedium">Sol: {infoPhoto.sol}</Text>
                <Text variant="bodyMedium">Date: {infoPhoto.earth_date}</Text>
                <Divider />
                <Text style={{color:'green'}} variant="titleMedium">Camera:</Text>
                <Text style={styles.Text} variant="bodyMedium">Id: {infoPhoto.camera.id}</Text>
                <Text style={styles.Text} variant="bodyMedium">Name: {infoPhoto.camera.name}</Text>
                <Text style={styles.Text} variant="bodyMedium">Rover ID: {infoPhoto.camera.rover_id}</Text>
                <Text style={styles.Text} variant="bodyMedium">Full Name: {infoPhoto.camera.full_name}</Text>
                <Divider />
                <Text style={{color:'green'}} variant="titleMedium">Rover:</Text>
                <Text style={styles.Text} variant="bodyMedium">Id: {infoPhoto.rover.id}</Text>
                <Text style={styles.Text} variant="bodyMedium">Name: {infoPhoto.rover.name}</Text>
                <Text style={styles.Text} variant="bodyMedium">Landing Date: {infoPhoto.rover.landing_date}</Text>
                <Text style={styles.Text} variant="bodyMedium">Launch Date: {infoPhoto.rover.launch_date}</Text>
                <Text style={styles.Text} variant="bodyMedium">Status: {infoPhoto.rover.status}</Text>
                <Text style={styles.Text} variant="bodyMedium">Max Sol: {infoPhoto.rover.max_sol}</Text>            
                <Text style={styles.Text} variant="bodyMedium">Max Date: {infoPhoto.rover.max_date}</Text>
                <Text style={styles.Text} variant="bodyMedium">Total Photos: {infoPhoto.rover.total_photos}</Text>
            </Card.Content>
        </Card>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    Card:{
        margin:10
    },
    Text: {
        // marginTop:Constants.statusBarHeight,
        marginLeft: 10
    },
});


const mapStateToProps = state => ({
    infoPhoto: state.MarsPhoto.infoPhoto,
})

export default connect(mapStateToProps,{

    }) (DetailsMarsPhoto)