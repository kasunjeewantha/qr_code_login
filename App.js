import * as React from 'react';
import NavContainer from './src/views/navigators/NavContainer';
import configureStore from './src/store';
import {Provider} from 'react-redux';

const store = configureStore();

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    );
  }
}

export default App;
