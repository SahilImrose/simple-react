import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import data from './MOCK_DATA (1).json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
function App() {
  // console.log(data);
  const list = data.slice(0, 15)
  const [info, setInfo] = useState(list)
  return (
    <div className="app container">
      
      <div className="club">
        <h1 id="totalPlyer">Total Player: {info.length}</h1>
      </div>
      {
        info.map(info => <div><img className="" src={info.img} alt="" /> <h1>{info.name}</h1> <h4 className="text-align-center"> Salary: {info.salary}tk</h4> <button className="btn btn-primary text-align-center"><FontAwesomeIcon icon={faUserPlus} />  add plyer to club</button></div>)
      }

    </div>
  );
}

export default App;