import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from "./pages/AdminRoom";

import GlobalStyle from './styles/global';


import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {

  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/new" component={NewRoom}/>
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
