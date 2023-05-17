import Employee from './components/Employee';
import './App.css';
import { useState } from 'react';

export default function App() {
 const [role, setRole] = useState('Senior Dev')
  const showEmployees = true
  return (
    <div className="App">
      <header className="App-header">
        {showEmployees ? 
        <>

        <input
         type='text' 
         placeholder='role'
         onChange={(e) => {
          setRole(e.target.value)
        }} />
          <Employee
           name = "Uzoma Akpala"
           role = {role} 
           />
          <Employee
           name ="Jovita Akpala"
            role = "Banker and Youtuber"
             />
          <Employee
           name = "Jane Akpala"
            role = "Senior Student"
             />
          <Employee
           name = "Joshua Akpala"
            role = "Junior Student"
             />
          <Employee
           name = "Julia Akpala"
            role = "Nusery Baby"
            />
        </>
        :
        <p>You cannot see the employeees</p>
        }
      </header>
    </div>
  );
}


