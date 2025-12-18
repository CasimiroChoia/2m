import logo from './assets/img/logo.png';
import style from './App.module.css';
import { useNavigate } from 'react-router-dom';
// import Button from './Components/Button';

function App() {
  const navigate = useNavigate()
  setTimeout(() => navigate("/home", { replace: true, viewTransition: true }), 2 * 1000);
  return (
    <div className={style.App}>
      <img
        src={logo}
        className={style.Logo}
        alt="logo"
      />
    </div>
  );
}

export default App;
