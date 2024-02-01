import './App.css';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';
import Form from './components/Form';

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
      <h2>COntador: </h2>
      <Counter />
      <h2>Formulario: </h2>
      <Form/>
    </div>
  );
}

export default App;
