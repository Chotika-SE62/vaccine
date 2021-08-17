import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Vaccine from './components/Vaccine';

class App extends React.Component {
  constructor(props) {  //กำหนดconstructor มีพารามิเตอร์เป็นprop
    super(props); // 
    this.state = {  //กำหนดค่าไอเท็ม มีข้อมูลวัคซีน ส่งโดยผ่านstate //เรนเดอร์ส่งค่าpropของวัคซีนออกมา //รีเทรินคลาสที่ชื่อvaccine //แมพนี้หรือพื้นที่การทำงานตรงนี้ส่งพารามิเตอร์เป็นไอเท็ม เรียกใช้เป็น item.ตามด้วยชื่อ เก็บไว้ในitemsRendered แล้วจะได้ค่ามาแสดงผล
      items: [
        {
          nameCompony: 'Astrazeneca',
          nameInter: 'AZD1222',
          produce: 'England',
          technology: 'ไวรัส Adonovirus พาหะ',
        },
        {
          nameCompony: 'Phizer',
          nameInter: 'BNT162',
          produce: 'USA',
          technology: 'mRNA',
        },
      ],
    };
  }

  render() {
    const itemsRendered = this.state.items.map((item) => {
      return (
        <Vaccine
          nameCompony={item.nameCompony}
          nameInter={item.nameInter}
          produce={item.produce}
          technology={item.technology}
        />
      );
    });

    return <div className="vaccine">  
      {itemsRendered}
    </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
