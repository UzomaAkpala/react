import Employees from './pages/Employees';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Defintion from './pages/Definition';
import NotFound from './pages/NotFound';
import Customer from './pages/Customer';

export default function App() {
  return(
    
      <BrowserRouter>
        <Header >
         <Routes>
           <Route path="/" element= { <Employees />} />
           <Route path='/dictionary' element={ <Dictionary />} />
           <Route path='/dictionary/:search' element={ <Defintion />} />
           <Route path='/404' element={ <NotFound />} />
           <Route path='*' element={ <NotFound />} />
           <Route path="/customers" element= { <Customers />} />
           <Route path="/customers/:id" element= { <Customer />} />
         </Routes>
        </Header>
      </BrowserRouter>
      
 
    )
}


