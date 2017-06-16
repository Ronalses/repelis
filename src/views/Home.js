/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux'

import CardMovieTwo from '../components/CardMovieTwo'
import CardMovieOne from '../components/CardMovieOne'
import ButtomCategories from '../components/ButtomCategories'
import ProgressBar from '../components/ProgressBar'
import Error from '../components/Error'
import { getStrenos, getDestacadas, getCategories } from '../services/apiService'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estrenos: [],
      destacadas: [],
      isLoading: true,
      categories:[],
      chargeError:false
    }
  }
  componentWillMount() {
    this.chargeInfo()
  }

  chargeInfo() {
    let _chargeInfo = this.chargeInfo
    Promise.all([getStrenos(), getDestacadas(), getCategories()])
      .then(data => {
        let estrenos = data[0]
        let destacadas = data[1]
        let categories = data[2]
        this.setState({ estrenos })
        this.setState({ destacadas })
        this.setState({ categories })
        this.setState({ isLoading: false })
      })
      .catch(error => {
        this.setState({chargeError:true})
      })
  }

  viewList(categorie, viewMovie) {
    Actions.movieList({ categorie, viewMovie })
  }

  viewListCategorie(categorie, viewMovie) {
    Actions.movieListCategories({ categorie, viewMovie })
  }

  viewMovie(info) {
    // This function is for router the view movie
    Actions.movie({ info })
  }

  refresh = () => {
    // this function recharge if error occurred
    this.setState({chargeError:false})
    this.setState({ isLoading: true })
    this.chargeInfo()
  }

  render() {
    let { estrenos, destacadas, categories } = this.state
    //const categories = ['Comedia', 'Adolescencia', 'Accion', 'Anime', 'Artes Marciales', 'Aventura', 'Belico', 'Biografico', 'Cine Negro']
    return (
      this.state.chargeError ? <Error refresh={this.refresh}/> :
      this.state.isLoading ? <View style={styles.progresBar}><ProgressBar /></View> :
        <ScrollView style={styles.container}>
          <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
            style={styles.swiper}
          >{
              estrenos.map(data => (
                <CardMovieOne key={1} info={data} viewMovie={this.viewMovie} />
              ))}
          </Swiper>
          <View>
            <View style={styles.text}>
              <Text style={styles.textCategorie}>Peliculas Destacadas</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                destacadas.map(data => (
                  <CardMovieTwo key={data.title} info={data} viewMovie={this.viewMovie} />
                ))
              }
            </ScrollView>
            <View style={styles.text}>
              <Text style={styles.textCategorie}>Categorias</Text>
              <TouchableOpacity onPress={() => { this.viewList('all', this.viewMovie) }}>
                <Text style={styles.textCategorie}>Ver Todas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categories}>{
              categories.map(data => (
                <ButtomCategories key={data} categorie={data} viewList={this.viewListCategorie} viewMovie={this.viewMovie}/>
              ))}
            </View>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    //alignItems:'flex-end',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  swiper: {
    flex:1
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingTop: 15,
    paddingHorizontal: 10
  },
  textCategorie: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
  progresBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});