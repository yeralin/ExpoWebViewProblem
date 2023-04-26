import * as React from 'react';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <WebView
      source={{ uri: 'https://expo.dev' }}
    />
  );
};

export default App;
