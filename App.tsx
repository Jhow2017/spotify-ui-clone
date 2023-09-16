import { StatusBar } from 'expo-status-bar';
import GetStarted from './src/screens/GetStarted';

export default function App() {
  return (
    <>
      <GetStarted />
      <StatusBar style="light" translucent />
    </>
  );
}

