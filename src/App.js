import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  const [curr, setCurr] = useState({ value: 'INR', label: 'INR' });

  const options = ['INR', 'EUR'];

  const defaultOption = options[0];

  return (
    <div className='flex-container'>
      Currency
      <Dropdown
        options={options}
        value={defaultOption}
        onChange={(value) => setCurr(value)}
      />
      <ProductList curr={curr} />
    </div>
  );
}

export default App;
