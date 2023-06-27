import './App.css';
import ApplicationBar from './components/ApplicationBar.js'
import ApplicationTextField from './components/ApplicationTextField.js'


function App() {
  return (
    <div className="App">
      <ApplicationBar/>
      <br></br>
      <br></br>
      <br></br>
      
      <h1>Add student</h1>
      <ApplicationTextField/>
    </div>
  );
}

export default App;
