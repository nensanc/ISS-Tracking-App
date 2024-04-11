import React, {useState, useEffect} from "react";
import {FlatList, View} from 'react-native';
import { Divider } from 'react-native-paper';
import MarsPhotoItem from "./MarsPhotoItem";
import LoadingIndicator from "./LoadingIndicator";
const MarsPhotoList = () =>{

    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY'); // URL de la API
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
  
      fetchData(); // Llama a la función fetchData cada vez que el componente se renderiza
    }, []); // El segundo argumento [] indica que useEffect se ejecutará solo una vez después del montaje inicial
  
    return (
        <View>
            {data?
                <FlatList style={{padding:5, margin:5, marginBottom:0}}
                    data={data.photos}
                    ItemSeparatorComponent={() => <Divider style={{padding:1, margin:5}} />}
                    renderItem={({item:data}) => (
                        <MarsPhotoItem {...data}/>
                    )}
                />
            :
            <LoadingIndicator />
            }
        </View>
    );
}

export default MarsPhotoList;