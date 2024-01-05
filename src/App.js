import { createContext } from 'react';
import './App.css';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div>
      <FirstName.Provider value={"ansari"}>
        <LastName.Provider value={"mati"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
