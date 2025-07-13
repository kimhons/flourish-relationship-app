// Service Worker Registration Utility
// Handles PWA installation and offline functionality

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// Configuration for service worker
const swConfig = {
  onSuccess: (registration) => {
    console.log('Service Worker registered successfully:', registration);
    
    // Show install prompt for PWA
    if (window.deferredPrompt) {
      showInstallPrompt();
    }
  },
  onUpdate: (registration) => {
    console.log('Service Worker updated:', registration);
    
    // Show update available notification
    if (registration && registration.waiting) {
      showUpdateAvailable(registration);
    }
  },
  onOffline: () => {
    console.log('App is now offline');
    showOfflineNotification();
  },
  onOnline: () => {
    console.log('App is now online');
    showOnlineNotification();
  }
};

// Register service worker
export function register(config = {}) {
  const finalConfig = { ...swConfig, ...config };
  
  if ('serviceWorker' in navigator) {
    // Register service worker
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          
          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New content available
                finalConfig.onUpdate(registration);
              } else {
                // Content cached for first time
                finalConfig.onSuccess(registration);
              }
            }
          });
        });
        
        // Set up message channel for SW communication
        setupMessageChannel();
        
        // Handle install prompt
        setupInstallPrompt();
        
        // Handle network status
        setupNetworkStatusHandlers(finalConfig);
      })
      .catch(error => {
        console.error('SW registration failed: ', error);
      });
  }
}

// Unregister service worker
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

// Set up message channel for communication with SW
function setupMessageChannel() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        window.location.reload();
      }
    });
  }
}

// Handle PWA install prompt
function setupInstallPrompt() {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('Install prompt triggered');
    
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    window.deferredPrompt = e;
    
    // Show custom install button
    showInstallButton();
  });
  
  // Handle successful installation
  window.addEventListener('appinstalled', (evt) => {
    console.log('App installed successfully');
    hideInstallButton();
    
    // Track installation
    if (window.gtag) {
      window.gtag('event', 'pwa_install', {
        event_category: 'engagement',
        event_label: 'PWA Installed'
      });
    }
  });
}

// Show install button
function showInstallButton() {
  const installButton = document.createElement('button');
  installButton.id = 'pwa-install-button';
  installButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Install Flourish App
  `;
  installButton.className = 'pwa-install-btn';
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.2s;
  `;
  
  installButton.addEventListener('click', async () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      const { outcome } = await window.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      window.deferredPrompt = null;
      hideInstallButton();
    }
  });
  
  installButton.addEventListener('mouseenter', () => {
    installButton.style.transform = 'scale(1.05)';
  });
  
  installButton.addEventListener('mouseleave', () => {
    installButton.style.transform = 'scale(1)';
  });
  
  document.body.appendChild(installButton);
}

// Hide install button
function hideInstallButton() {
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.remove();
  }
}

// Show update available notification
function showUpdateAvailable(registration) {
  const updateNotification = document.createElement('div');
  updateNotification.id = 'update-notification';
  updateNotification.innerHTML = `
    <div style="background: #2196F3; color: white; padding: 16px; border-radius: 8px; margin: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-weight: 600; margin-bottom: 4px;">App Update Available</div>
          <div style="font-size: 14px; opacity: 0.9;">A new version of Flourish is ready to install</div>
        </div>
        <button id="update-app-btn" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-left: 16px;">
          Update
        </button>
      </div>
    </div>
  `;
  
  const updateBtn = updateNotification.querySelector('#update-app-btn');
  updateBtn.addEventListener('click', () => {
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    updateNotification.remove();
  });
  
  document.body.appendChild(updateNotification);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (updateNotification.parentNode) {
      updateNotification.remove();
    }
  }, 10000);
}

// Set up network status handlers
function setupNetworkStatusHandlers(config) {
  window.addEventListener('online', () => {
    config.onOnline();
  });
  
  window.addEventListener('offline', () => {
    config.onOffline();
  });
}

// Show offline notification
function showOfflineNotification() {
  showNetworkStatus('offline', 'You are offline', 'Some features may be limited');
}

// Show online notification
function showOnlineNotification() {
  showNetworkStatus('online', 'You are back online', 'All features are available');
}

// Show network status notification
function showNetworkStatus(type, title, message) {
  const existing = document.getElementById('network-status');
  if (existing) {
    existing.remove();
  }
  
  const notification = document.createElement('div');
  notification.id = 'network-status';
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'online' ? '#4CAF50' : '#F44336'};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 1001;
      font-size: 14px;
      font-weight: 600;
      animation: slideIn 0.3s ease-out;
    ">
      <div>${title}</div>
      <div style="font-size: 12px; opacity: 0.9; margin-top: 4px;">${message}</div>
    </div>
  `;
  
  // Add slide-in animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 3000);
}

// Check if app is installed
export function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

// Get install prompt availability
export function canInstall() {
  return window.deferredPrompt !== null;
}

// Manual install trigger
export function triggerInstall() {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
  }
}