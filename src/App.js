// Module Dependencies
import { useReducer } from 'react';
import { AppContext, initialState, reducer } from './reducers';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// UI Components
import MainContainer from './components/main-container';

// Assets
import customTheme from './configs/theme';


const theme = createTheme(customTheme);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
