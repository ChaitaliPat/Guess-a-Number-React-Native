import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export default function Header() {
    return (
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Guess a Number Now</Text>       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      header:{
          width: '100%',
          height: 50,
          marginTop:25,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
      },
      headerTitle:{
          color: 'black',
          fontSize: 18,
      }  
  });
  
