import React from 'react';
import ReactDOM from 'react-dom';
import Vaccine from './components/Vaccine';

const App = () => {
  return (
    <div className='vaccine'>
      <Vaccine
        nameCompony="Astrazeneca"
        nameInter="AZD1222"
        produce="England"
        technology="ไวรัส Adonovirus พาหะ"
      />
      <Vaccine
        nameCompony="Phizer"
        nameInter="BNT162"
        produce="USA"
        technology="mRNA"
      />
      <Vaccine
        nameCompony="moderna"
        nameInter="mRNA-1273"
        produce="USA"
        technology="mRNA"
      />
      <Vaccine
        nameCompony="sinovac"
        nameInter="Coronavac"
        produce="China"
        technology="วัคซันเชื้อตาย"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
