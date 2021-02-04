import HelloWorld from './components/HelloWorld';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <ClassComponent fees="1000"/>
    </div>
  );
}

export default App;
