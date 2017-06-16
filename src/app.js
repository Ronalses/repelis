import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import CodePush from "react-native-code-push"

import Home from './views/Home'
import Movie from './views/Movie'
import WebViewReproductor from './components/WebViewReproductor'
import MovieList from './components/MovieList'
import MovieListCategories from './components/MovieListCategories'


export default class Repelis extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" leftButtonIconStyle={{ tintColor: 'red' }} navigationBarStyle={styles.nBar}>
          <Scene key="home" component={Home} hideNavBar />
          <Scene key="movie" component={Movie} hideNavBar />
          <Scene key="movieList" component={MovieList} hideNavBar={false} />
          <Scene key="movieListCategories" component={MovieListCategories} hideNavBar={false} />
          <Scene key="webViewReproductor" component={WebViewReproductor} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nBar: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  button: {
    color: 'red',
    tintColor: 'red'
  },
});

let onSyncStatusChange = (SyncStatus) => {
    switch (SyncStatus) {
        case SyncStatus.CHECKING_FOR_UPDATE:
            // Show "Checking for update" notification
            break;
        case SyncStatus.AWAITING_USER_ACTION:
            // Show "Checking for update" notification
            break;
        case SyncStatus.DOWNLOADING_PACKAGE:
            // Show "downloading" notification
            break;
        case SyncStatus.INSTALLING_UPDATE:
            // Show "installing" notification
            break;
    }
}

let updateDialogOptions = {
  updateTitle: "You have an update",
  optionalUpdateMessage: "Update available. Install?",
  optionalIgnoreButtonLabel: "Nop",
  optionalInstallButtonLabel: "Yep",
}

var onError = function (error) {
  console.log("An error occurred. " + error);
};

var onDownloadProgress = function (downloadProgress) {
  if (downloadProgress) {
    console.warn("Downloading " + downloadProgress.receivedBytes + " of " + downloadProgress)
  }
}




CodePush.sync({ updateDialog: updateDialogOptions }, onSyncStatusChange)

AppRegistry.registerComponent('Repelis', () => Repelis);
