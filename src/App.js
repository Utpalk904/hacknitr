import './App.css';
import FloatingTextInput from './Components/FloatInput';

function App() {
  return (
    <div className="App">
      <FloatingTextInput inputType="text" InputId="username" InputName="username" InputPlaceholder="Enter your username" InputLabel="Username" />
    </div>
  );
}

export default App;