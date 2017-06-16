/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  RefreshControl
} from 'react-native';
import CardMovieThree from './CardMovieThree'
import { getCategorie } from '../services/apiService'
import ProgressBar from './ProgressBar'
import Error from './Error'


export default class MovieListCategories extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
      isRefreshing: false,
      list: [],
      isLoading: true,
      currentPage: 1,
      totalPage: 2,
      categorie: this.props.categorie
    };
  }

  componentWillMount() {
    this.chargeInfo()
  }

  chargeInfo() {
    let { categorie } = this.state
    getCategorie(categorie)
      .then(data => {
        this.setState({
          list: data.info,
          dataSource: this.state.dataSource.cloneWithRows(data.info),
          isLoading: false,
          chargeError: false,
          currentPage: data.currentPage,
          totalPage: data.pages
        })
      })
      .catch(error => {
        this.setState({ chargeError: true })
      })
  }

  chargeInfoNextPage(number) {
    let { categorie } = this.state
    getCategorie(categorie, number)
      .then(result => {

        let data = this.state.list
        let newData = result.info
        newData.map((item, index) => data.push(item))

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          isLoading: false,
          currentPage: result.currentPage
        })
      })
      .catch(error => {

        this.setState({ chargeError: true })
      })
  }

  nextPage = () => {
    let currentPage = this.state.currentPage + 1
    this.setState({ currentPage })
    if (currentPage <= this.state.totalPage) {
      this.chargeInfoNextPage(currentPage)
    }
  }

  isLoading = () => {
    this.chargeInfo()
  }

  refresh = () => {
    // this function recharge if error occurred
    this.setState({ chargeError: false })
    this.setState({ isLoading: true })
    this.chargeInfo()
  }

  render() {
    let { viewMovie } = this.props
    let { currentPage, totalPage } = this.state
    return (
      this.state.chargeError ? <Error refresh={this.refresh} /> :
        this.state.isLoading ? <View style={styles.progresBar}><ProgressBar /></View> :
          <View style={styles.container}>
            <ListView
              enableEmptySections
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(info) => (
                <CardMovieThree info={info} viewMovie={viewMovie} />
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              onEndReachedThreshold={1200}
              onEndReached={() => this.nextPage()}
              renderFooter={() => currentPage <= totalPage ? <View style={{ height: 50 }}><ProgressBar /></View> : null}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this.isLoading}
                  colors={['#EA0000']}
                  tintColor='white'
                  title='Loading...'
                  titleColor='white'
                  progressBackgroundColor='white'
                />
              }
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#0a0a0a',
  },
  listViewContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  separator: {
    marginTop: 10,
    backgroundColor: '#8E8E8E'
  },
  progresBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});