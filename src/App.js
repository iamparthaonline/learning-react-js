import HelloWorld from './components/HelloWorld';
import ClassComponent from './components/ClassComponent';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <ClassComponent fees="1000"/>
      <Form/>
    </div>
  );
}

export default App;
