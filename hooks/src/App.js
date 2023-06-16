import { createContext } from "react";
import './App.css'
import C1 from "./contextApiHook/c1";
import CounterOne from "./useReducerhook/CounterOne";
import ComplexReducer from "./useReducerhook/ComplexReducer";
export  const user=createContext();
export const context2=createContext();
function App() {

  return (
    <div className="App">

<user.Provider value={"Tom"}>
<context2.Provider value={'Jerry'}>
<C1/>
</context2.Provider>
 
</user.Provider>
<CounterOne/>
<ComplexReducer/>
    </div>
  );
}

export default App;
