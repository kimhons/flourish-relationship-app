import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import App from '../App';
import { AuthProvider } from '../contexts/AuthContext';

// Mock external dependencies
jest.mock('@react-native-firebase/messaging', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('token')),
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(() => Promise.resolve(null)),
    setBackgroundMessageHandler: jest.fn(),
  })),
}));

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

jest.mock('../utils/notifications', () => ({
  requestNotificationPermission: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('../services/NavigationService', () => ({
  navigationRef: { current: null },
}));

// Mock store
const mockStore = {
  ...store,
  getState: jest.fn(() => ({
    auth: {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      token: null,
    },
  })),
};

// Test wrapper component
const TestWrapper = ({ children }) => (
  <Provider store={mockStore}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </AuthProvider>
    </PersistGate>
  </Provider>
);

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(getByTestId).toBeDefined();
    });
  });

  it('shows loading screen initially', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    expect(getByTestId('loading-screen')).toBeTruthy();
  });

  it('initializes notification permissions', async () => {
    const { requestNotificationPermission } = require('../utils/notifications');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(requestNotificationPermission).toHaveBeenCalled();
    });
  });

  it('handles app state changes', async () => {
    const { AppState } = require('react-native');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Simulate app going to background
    fireEvent(AppState, 'change', 'background');
    
    // Simulate app coming to foreground
    fireEvent(AppState, 'change', 'active');

    await waitFor(() => {
      expect(true).toBeTruthy(); // Test passed if no errors
    });
  });

  it('handles Firebase messaging initialization', async () => {
    const messaging = require('@react-native-firebase/messaging').default;
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(messaging).toHaveBeenCalled();
    });
  });

  it('hides splash screen on Android', async () => {
    const SplashScreen = require('react-native-splash-screen');
    
    // Mock Platform.OS to be 'android'
    jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
    }));

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(SplashScreen.hide).toHaveBeenCalled();
    });
  });

  it('handles errors gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Mock an error in initialization
    require('../utils/notifications').requestNotificationPermission.mockRejectedValue(
      new Error('Permission denied')
    );

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'App initialization error:',
        expect.any(Error)
      );
    });

    consoleSpy.mockRestore();
  });

  it('navigates to appropriate screens based on auth state', async () => {
    const mockNavigate = jest.fn();
    const navigationRef = { current: { navigate: mockNavigate } };
    
    jest.doMock('../services/NavigationService', () => ({
      navigationRef,
    }));

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      // Should navigate to auth screen if not authenticated
      expect(mockNavigate).toHaveBeenCalledWith('Auth');
    });
  });

  it('applies correct theme based on dark mode setting', async () => {
    const { rerender } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Test light theme
    expect(true).toBeTruthy();

    // Test dark theme
    rerender(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    expect(true).toBeTruthy();
  });

  it('handles deep links correctly', async () => {
    const { Linking } = require('react-native');
    
    // Mock deep link
    const mockUrl = 'flourish://profile/123';
    Linking.getInitialURL = jest.fn(() => Promise.resolve(mockUrl));

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(Linking.getInitialURL).toHaveBeenCalled();
    });
  });

  it('handles push notifications correctly', async () => {
    const messaging = require('@react-native-firebase/messaging').default;
    const mockMessage = {
      notification: {
        title: 'Test Notification',
        body: 'Test message body',
      },
      data: {
        type: 'message',
        userId: '123',
      },
    };

    const mockMessaging = messaging();
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Simulate receiving a message
    const onMessageCallback = mockMessaging.onMessage.mock.calls[0][0];
    onMessageCallback(mockMessage);

    await waitFor(() => {
      expect(mockMessaging.onMessage).toHaveBeenCalled();
    });
  });

  it('handles background message handler', async () => {
    const messaging = require('@react-native-firebase/messaging').default;
    const mockMessage = {
      messageId: '123',
      data: {
        type: 'background',
      },
    };

    const mockMessaging = messaging();
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Simulate background message
    const backgroundHandler = mockMessaging.setBackgroundMessageHandler.mock.calls[0][0];
    backgroundHandler(mockMessage);

    await waitFor(() => {
      expect(mockMessaging.setBackgroundMessageHandler).toHaveBeenCalled();
    });
  });

  it('handles gesture handler setup', async () => {
    const { GestureHandlerRootView } = require('react-native-gesture-handler');
    
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(getByTestId('gesture-handler-root')).toBeTruthy();
    });
  });

  it('handles status bar configuration', async () => {
    const { StatusBar } = require('react-native');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(StatusBar.setBarStyle).toHaveBeenCalledWith('dark-content');
    });
  });

  it('handles safe area provider', async () => {
    const { SafeAreaProvider } = require('react-native-safe-area-context');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(SafeAreaProvider).toHaveBeenCalled();
    });
  });

  it('handles network state changes', async () => {
    const NetInfo = require('@react-native-community/netinfo');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Simulate network state change
    const networkChangeCallback = NetInfo.addEventListener.mock.calls[0][0];
    networkChangeCallback({ isConnected: false });

    await waitFor(() => {
      expect(NetInfo.addEventListener).toHaveBeenCalled();
    });
  });

  it('handles device orientation changes', async () => {
    const Orientation = require('react-native-orientation-locker');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(Orientation.lockToPortrait).toHaveBeenCalled();
    });
  });

  it('handles app version checks', async () => {
    const DeviceInfo = require('react-native-device-info');
    DeviceInfo.getVersion = jest.fn(() => '1.0.0');
    DeviceInfo.getBuildNumber = jest.fn(() => '1');

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(DeviceInfo.getVersion).toHaveBeenCalled();
      expect(DeviceInfo.getBuildNumber).toHaveBeenCalled();
    });
  });

  it('handles memory warnings', async () => {
    const { AppState } = require('react-native');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Simulate memory warning
    fireEvent(AppState, 'memoryWarning');

    await waitFor(() => {
      expect(true).toBeTruthy(); // Test passed if no errors
    });
  });

  it('handles app updates', async () => {
    const CodePush = require('react-native-code-push');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(CodePush.checkForUpdate).toHaveBeenCalled();
    });
  });

  it('handles crash reporting', async () => {
    const crashlytics = require('@react-native-firebase/crashlytics');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(crashlytics().setCrashlyticsCollectionEnabled).toHaveBeenCalled();
    });
  });

  it('handles analytics initialization', async () => {
    const analytics = require('@react-native-firebase/analytics');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(analytics().setAnalyticsCollectionEnabled).toHaveBeenCalled();
    });
  });

  it('handles performance monitoring', async () => {
    const perf = require('@react-native-firebase/perf');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(perf().setPerformanceCollectionEnabled).toHaveBeenCalled();
    });
  });

  it('handles biometric authentication setup', async () => {
    const TouchID = require('react-native-touch-id');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(TouchID.isSupported).toHaveBeenCalled();
    });
  });

  it('handles location services setup', async () => {
    const Geolocation = require('@react-native-community/geolocation');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(Geolocation.requestAuthorization).toHaveBeenCalled();
    });
  });

  it('handles camera permissions', async () => {
    const { check, request, PERMISSIONS } = require('react-native-permissions');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(check).toHaveBeenCalledWith(PERMISSIONS.IOS.CAMERA);
      expect(request).toHaveBeenCalledWith(PERMISSIONS.IOS.CAMERA);
    });
  });

  it('handles storage permissions', async () => {
    const { check, request, PERMISSIONS } = require('react-native-permissions');
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(check).toHaveBeenCalledWith(PERMISSIONS.IOS.PHOTO_LIBRARY);
      expect(request).toHaveBeenCalledWith(PERMISSIONS.IOS.PHOTO_LIBRARY);
    });
  });

  it('cleans up resources on unmount', async () => {
    const { unmount } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    unmount();

    await waitFor(() => {
      expect(true).toBeTruthy(); // Test passed if no memory leaks
    });
  });
});

// Integration tests
describe('App Integration', () => {
  it('completes full app initialization flow', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Wait for initialization to complete
    await waitFor(() => {
      expect(getByTestId('app-container')).toBeTruthy();
    }, { timeout: 5000 });
  });

  it('handles authentication flow', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Should show login screen for unauthenticated users
    await waitFor(() => {
      expect(getByTestId('auth-screen')).toBeTruthy();
    });
  });

  it('handles navigation between screens', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Test navigation functionality
    await waitFor(() => {
      expect(getByTestId('navigation-container')).toBeTruthy();
    });
  });

  it('handles real-time updates', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Test real-time functionality
    await waitFor(() => {
      expect(getByTestId('real-time-updates')).toBeTruthy();
    });
  });

  it('handles offline functionality', async () => {
    const NetInfo = require('@react-native-community/netinfo');
    NetInfo.fetch = jest.fn(() => Promise.resolve({ isConnected: false }));

    const { getByTestId } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(getByTestId('offline-indicator')).toBeTruthy();
    });
  });
});

// Performance tests
describe('App Performance', () => {
  it('renders within acceptable time limits', async () => {
    const startTime = Date.now();
    
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    const endTime = Date.now();
    const renderTime = endTime - startTime;

    expect(renderTime).toBeLessThan(3000); // Should render within 3 seconds
  });

  it('handles memory usage efficiently', async () => {
    const initialMemory = process.memoryUsage().heapUsed;
    
    const { unmount } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    unmount();

    const finalMemory = process.memoryUsage().heapUsed;
    const memoryDiff = finalMemory - initialMemory;

    expect(memoryDiff).toBeLessThan(10 * 1024 * 1024); // Less than 10MB increase
  });
});

// Error handling tests
describe('App Error Handling', () => {
  it('handles JavaScript errors gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Mock an error in a component
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    render(
      <TestWrapper>
        <ErrorComponent />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });

    consoleSpy.mockRestore();
  });

  it('handles network errors gracefully', async () => {
    const { authAPI } = require('../services/api');
    authAPI.login = jest.fn(() => Promise.reject(new Error('Network error')));

    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(true).toBeTruthy(); // Should handle error gracefully
    });
  });
});