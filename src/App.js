
import { useState } from 'react';
import './App.css';
import TestUserEffect from './Components/useEffectHook';
// import Hooks from './Components/useStateHook';

function App() {

  const [showComp ,setShowComp]=useState(true);

  return (
    <div className="App">
      {/* <Hooks/> */}
      {/* <TestUserEffect/> */}

      {showComp ? <TestUserEffect/> : null}
      <button onClick={()=>setShowComp(!showComp)}>unmount useEffect Component</button>
    </div>
  );
}

export default App;
