import HelloWorld from './components/HelloWorld';
import ClassComponent from './components/ClassComponent';
import Form from './components/Form';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <ClassComponent fees="1000"/>
      <Api/>
      <Form/>
    </div>
  );
}

export default App;
