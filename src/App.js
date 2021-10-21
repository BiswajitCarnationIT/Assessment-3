import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Form store={store}/>
    </div>
  );
}

export default App;
