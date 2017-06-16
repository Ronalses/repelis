/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Info extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { info } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.label}>Descripcion</Text>
          <Text style={styles.descriptionText}>
            {info.description}
          </Text>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Visualizaciones</Text>
            <Text style={styles.value}>{info.visualizations}</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Genero</Text>
            <Text style={styles.value}>{info.category}</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Año</Text>
            <Text style={styles.value}>{info.year}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 25
  },
  description: {
    marginBottom: 15
  },
  descriptionText: {
    color: '#d2d2d2',
    fontSize: 14,
    paddingTop: 10,
    lineHeight: 22
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  value: {
    color: '#d2d2d2',
    fontSize: 14
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  }
});