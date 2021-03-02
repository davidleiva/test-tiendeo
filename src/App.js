import Header from './components/Header';
import MainContent from './components/MainContent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
