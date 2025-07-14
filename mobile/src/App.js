import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { 
  StyleSheet, 
  StatusBar, 
  Platform, 
  SafeAreaView,
  AppState,
  Alert
} from 'react-native';
import { 
  Provider as PaperProvider, 
  DefaultTheme, 
  DarkTheme 
} from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import { requestNotificationPermission } from './utils/notifications';
import { store, persistor } from './store/store';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';

// Auth Screens
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import OnboardingScreen from './screens/auth/OnboardingScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';

// Main App Screens
import DashboardScreen from './screens/main/DashboardScreen';
import DiscoverScreen from './screens/main/DiscoverScreen';
import MatchesScreen from './screens/main/MatchesScreen';
import MessagesScreen from './screens/main/MessagesScreen';
import ProfileScreen from './screens/main/ProfileScreen';
import CoachingScreen from './screens/coaching/CoachingScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import PremiumScreen from './screens/premium/PremiumScreen';

// Components
import LoadingScreen from './components/LoadingScreen';
import TabIcon from './components/TabIcon';
import { navigationRef } from './services/NavigationService';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => (
        <TabIcon name={route.name} focused={focused} color={color} size={size} />
      ),
      tabBarActiveTintColor: '#FF1B6B',
      tabBarInactiveTintColor: '#666666',
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        height: Platform.OS === 'ios' ? 85 : 60,
        paddingTop: 5,
        paddingBottom: Platform.OS === 'ios' ? 20 : 5,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500',
      },
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name="Dashboard" 
      component={DashboardScreen}
      options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen 
      name="Discover" 
      component={DiscoverScreen}
      options={{ tabBarLabel: 'Discover' }}
    />
    <Tab.Screen 
      name="Matches" 
      component={MatchesScreen}
      options={{ tabBarLabel: 'Matches' }}
    />
    <Tab.Screen 
      name="Messages" 
      component={MessagesScreen}
      options={{ tabBarLabel: 'Chat' }}
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{ tabBarLabel: 'Profile' }}
    />
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="Main" component={MainTabs} />
    <Stack.Screen name="Coaching" component={CoachingScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Premium" component={PremiumScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Request notification permissions
        await requestNotificationPermission();
        
        // Set up Firebase messaging
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert(
            remoteMessage.notification?.title || 'New Message',
            remoteMessage.notification?.body || 'You have a new message'
          );
        });

        // Handle background messages
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });

        // Hide splash screen
        if (Platform.OS === 'android') {
          SplashScreen.hide();
        }

        setIsLoading(false);
        
        return unsubscribe;
      } catch (error) {
        console.error('App initialization error:', error);
        setIsLoading(false);
      }
    };

    initializeApp();

    // Handle app state changes
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        // App came to foreground
        console.log('App became active');
      } else if (nextAppState === 'background') {
        // App went to background
        console.log('App went to background');
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <ThemeProvider>
              <AuthProvider>
                <NotificationProvider>
                  <SafeAreaView style={styles.container}>
                    <StatusBar 
                      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                      backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
                    />
                    <NavigationContainer ref={navigationRef}>
                      <RootStack />
                    </NavigationContainer>
                  </SafeAreaView>
                </NotificationProvider>
              </AuthProvider>
            </ThemeProvider>
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;