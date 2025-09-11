export const detectOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  return 'other';
};

export const getAppStoreLink = (os) => {
  const links = {
    ios: 'https://apps.apple.com/your-app-link',
    android: 'https://play.google.com/your-app-link',
    other: '/download-options' // Page with both options
  };
  return links[os] || links.other;
};