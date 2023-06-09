import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import StepperForm from './pages/OnboardingForm/OnboardingForm';
import 'react-confirm-alert/src/react-confirm-alert.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/form" element={<StepperForm />}></Route>
    </Routes>
  );
}

export default App;
