import './App.css';
import Coders from './components/Coders/Coders';
import Header from './components/Header/Header';


function App() {
  
    return (
    <div className="App">
      {/* Header section */}
        <Header></Header>
      {/* Staff code section */}
        <Coders></Coders>
    </div>
  );
}

export default App;
