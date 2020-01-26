import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Results from './views/Results'
import Loading from './views/Loading'
import Start from './views/Start'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    Results: Results,
    Start : Start,
  },
  {
    initialRouteName: 'Start',
  }
));
