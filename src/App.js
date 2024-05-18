import Counter from './components/Counter';
import { Fragment } from 'react';
import Auth from "./components/Auth";
import Header from "./components/Header"
import { useSelector } from 'react-redux';


function App() {

  const isAuth = useSelector((state)=> state.auth.isAuthenticated);
 
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <Counter/>}
    </Fragment>
  );
}

export default App;
