import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const [sideBar, setSideBar] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{minHeight: windowHeight}}>
      <View style={{height: 40}}>
        {/* placeholder to handle content off screen */}
      </View>
      <View style={{width: '100%', borderBottomColor: '#cbcbcb', borderBottomWidth: 2, paddingBottom: 2, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
        <Text>Gym planner</Text>
        <Button title={'menu'} onPress={()=>{setSideBar(true)}}></Button>
        
      </View>
      <View style={{flexDirection: 'row', display: sideBar ? 'flex': 'none'}}>
       <TouchableNativeFeedback onPress={()=>{setSideBar(false)}}>
         <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0,0,0,.7)', position: 'absolute', top: 0, left: 0}}>
          {/* backdrop*/}
        </View>
       </TouchableNativeFeedback>
        
        <View style={{backgroundColor: '#ffebeb', width: '80%', height: windowHeight, position: 'absolute', top: 0, right: 0}}>

        </View>
      </View>

      
      
      <StatusBar style='auto'/>
    </View>

  );
}

const styles = StyleSheet.create({


  
});
