import './App.css';
import ButtonAppBar from './components/nav';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Main from './components/main'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2225',
    },
    text: {
      primary: '#d4af37'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar></ButtonAppBar>
        <Main></Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
