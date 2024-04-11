import React from "react";
import { connect } from 'react-redux'
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { setInfoPhoto } from "../redux/actions/MarsPhoto";
const MarsPhotoItem = ({setInfoPhoto, ...props}) => {
    const navigation = useNavigation();
    const onPress = (e) => {
        setInfoPhoto(e)
        navigation.navigate('Mars Photo Details')  
    }
    return (
        <Card>
            <Card.Cover source={{ uri: props.img_src }}  style={{height:500}} />
            <Card.Content>
                <Text style={{color:'green'}} variant="titleLarge">ID Image: {props.id}</Text>
            </Card.Content>
            <Card.Actions>
                <Text variant="bodyMedium">Date: {props.earth_date}</Text>
                <Button
                    mode="contained"
                    theme={{ colors: { primary: '#fad7a0'} }}
                    textColor="black"
                    onPress={() => onPress(props)}>
                        Information
                </Button>
            </Card.Actions>
        </Card>
    );
}

const mapStateToProps = state => ({
    infoPhoto: state.MarsPhoto.infoPhoto,
})

export default connect(mapStateToProps,{
    setInfoPhoto
}) (MarsPhotoItem)