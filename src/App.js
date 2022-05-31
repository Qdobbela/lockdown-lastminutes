import './App.css';
import ButtonAppBar from './components/nav';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Main from './components/main'
import AdminPage from './components/adminpage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="adminpage" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
