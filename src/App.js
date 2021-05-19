import ConfirmationOfOwnership from './ConfirmationOfOwnership'
import './App.css';


export default function App() {

  return (
    <div className="App">
      <h2>1. W czym mogę pomóc?</h2>
      <h2>2. Jakiego numeru dotyczy sprawa?</h2>
      <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
      <ConfirmationOfOwnership />

    </div>
  );

}


