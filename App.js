import * as React from 'react';
import NavContainer from './src/views/navigators/NavContainer';
import configureStore from './src/store';
import {Provider} from 'react-redux';
import SQLiteDB from './src/utils/SQLiteDB';

const store = configureStore();

class App extends React.Component {
  async componentDidMount() {
    await SQLiteDB.DeleteUserTable();
    await SQLiteDB.DeleteNoteTable();
  }

  render() {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    );
  }
}

export default App;
