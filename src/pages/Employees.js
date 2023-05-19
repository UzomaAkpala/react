import Employee from '../components/Employee';
import '../index.css'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';


export default function Employees() {
  const showEmployees = true
  const [employees, setEmployees] = useState([

    {
      id: 1,
    name: "Uzoma Akpala",
    role:  "Senior Dev",
     img:"https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg"
      },
      {
        id:2,
      name:"Jovita Akpala",
      role: "Banker and Youtuber",
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg'
      },
      {
        id:3,
        name: "Jane Akpala",
        role: "Senior Student",
        img: 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg' 
      },
      {
        id:4,
        name: "Joshua Akpala",
           role: "Junior Student",
           img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg'
      },
      {
        id:5,
        name: "Julia Akpala",
        role: "Nusery baby",
        img: 'https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg'
      },
      {
        id:6,
        name: "Machi Akpala",
            role: "Business Man",
            img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
      }

  ])
     
      function updateEmployee(id,newName, newRole){
        const updatedEmployees = employees.map((employee) => {
          if(id===employee.id){
            return{...employee, name:newName, role: newRole}
          }
          return employee
        })
        setEmployees(updatedEmployees)
      }

        function newEmployee(name, role, img){
          const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img
          }
          setEmployees([...employees, newEmployee])
        }

  return (
    <div className=''>
    
        {showEmployees ? 
        <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
        const editEmployee = ( <EditEmployee
        name ={employee.name} 
        role = {employee.role}
        updateEmployee = {updateEmployee}
        id = {employee.id} 
        />
        )

        

        return(  
        <Employee
           key = {employee.id}
           id = {employee.id}
          name = {employee.name}
          role = {employee.role}
          img = {employee.img}
          EditEmployee = {editEmployee}
          />
          )
        })}
          <AddEmployee newEmployee = {newEmployee} />
        </div>
      
        :
        <p>You cannot see the employeees</p>
        }
    </div>
  );
}


