import { ThemeProvider } from '@mui/material';
import './App.css';
import {theme} from './theme';
import Landing from './views/Landing';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
    </>
  );
}

export default App;
