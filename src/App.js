import './App.css';
import UserInfo from './components/UserInfo';

function App() {

  const data = {
    name: 'Jeisson',
    age: 34,
    email: 'jeda1989@gmail.com'

  }

  return (
    <div className="App">
      <h1>prueba</h1>
      <UserInfo  {...data} />
    </div>
  );
}

export default App;
