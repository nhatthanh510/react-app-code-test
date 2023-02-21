import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from 'contexts/AuthContext'
import Routes from 'routes';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" />
        <Routes />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
