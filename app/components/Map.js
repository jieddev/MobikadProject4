import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps' 


const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        region={{latitude: 11.0064, longitude: 124.6075, latitudeDelta: 0.1 ,  longitudeDelta: 0.1 }}  
        showsUserLocation={true}
      />
        
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})