import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen'
import LoginValidate from '../Screens/LoginValidate'
import CreatePasswordScreen from '../Screens/CreatePasswordScreen';
import CreateProfile from '../Screens/CreateProfile';
import CnicScreen from '../Screens/CnicScreen';
import ActivationScreen from '../Screens/ActivationScreen'; 
import DbHomeScreen from '../Screens/DbHomeScreen'; 
import Modal from '../Component/ModalScreen';
import DisplayItem from '../Screens/DisplayItem';

const MainNavigator = createStackNavigator({
   
   
    FList: {
        screen: DisplayItem,

        navigationOptions: {
            headerShown: false 
        }

    },

     
    DbHome: {
        screen: DbHomeScreen,

        navigationOptions: {
            headerShown: false 
        }

    },
 

Modal:{
screen: Modal,

navigationOptions: {
    headerShown: false 
}


},

    CnicScreen: {
        screen: CnicScreen,

        navigationOptions: {
            headerShown: false 
        }

    },
 
    LoginScreen: {
        screen: LoginScreen,

        navigationOptions: {
            headerShown: false 
        }
    },

    LoginValidate: {
        screen: LoginValidate,

        navigationOptions: {
            headerShown: false 
        }

    },

    PasswordScreen: {
        screen: CreatePasswordScreen,

        navigationOptions: {
            headerShown: false 
        }

    },

    ProfileScreen: {
        screen: CreateProfile,

        navigationOptions: {
            headerShown: false 
        }

    },

ActivationScreen:{
    screen: ActivationScreen,
   
    navigationOptions: {
        headerShown: false 
    }

},   


});

const App = createAppContainer(MainNavigator);

export default App;