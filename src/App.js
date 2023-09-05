import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/menu';
import { useState } from 'react';
import items from './components/data'
import Categories from './components/categories';
import Order from './components/Order';



const allcategories = ['all',...new Set(items.map ((item) => item.category))]

function App() {
  const[menuItems, setMenuItems] = useState(items)
  const [categories, setcategories] = useState(allcategories);
  const [total, setTotal] = useState(0);
  const [persons, setPersons] = useState([{
    name: 'Person-1',
    id: '001',
    orders: [],
    selected: true,
  }]);
  
  const filterItems = (category) =>{
    if (category === 'all'){
      return setMenuItems(items);
    }
      const newItems = items.filter((item) => item.category === category)
      return setMenuItems(newItems)

  }

  console.log(persons);
 
  return (
     <div className="container">
       <div className='row'>
         <div className='col-md-8'>
           <h2 className='text-center py-5'>Our Menu</h2>
           
           <Categories filterItems={filterItems} categories={categories} />
           
         <Menu items={menuItems} setTotal={setTotal} persons={persons} setPersons={setPersons} />
         

         </div>
         <Order total={total} persons={persons} setPersons={setPersons} />

       </div>

     </div>

  );
}

export default App;
