import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Results from './views/Results'
import Loading from './views/Loading'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    Results: Results
  },
  {
    initialRouteName: 'Loading',
  }
));
