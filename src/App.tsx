import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light );
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
