import React, { Component } from "react";
import { Provider } from "react-redux";
// Redux-persist delays the rendering of the app until the persisted dtate is retrived and stores the redux store to local storage so it is retained on refresh.
import { PersistGate } from "redux-persist/integration/react";

import configureStore from "./redux/store";
import Rooms from "./components/rooms";
//
const { persistor, store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Rooms />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
