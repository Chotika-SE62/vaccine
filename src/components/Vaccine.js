import React from 'react';
import './Vaccine.css';
import VacImage from './VacImage';

class Vaccine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nameCompony = "Astraxeneca",
      // nameInter: 'AZD1222',
      // produce = "England",
      // technology = "ไวรัส Adonvirus พาหะ",
      short: '10000000',
      have: true,
    };
  }
//state = ดึงขึ้นมาจัดเก็บไว้ แล้วใช้งาน 
    // component
    //   this.setState({})

  render() {
    if (!this.state.have) { //เงื่อไข,ค่าคงที่ในการแสดงผล
      return <div>Not Found</div>;
    }

    return (
      <div className="vaccine__list">
        <VacImage path="/img/1.jpg" />
        <div className="vaccine__item">{this.props.nameCompony}</div>
        <div className="vaccine__item">{this.props.nameInter}</div>
        <div className="vaccine__item">{this.props.produce}</div>
        <div className="vaccine__item">{this.props.technology}</div>
        <div>{this.state.short}</div> 
        <div>{`${this.state.have}`}</div>
      </div>
    );
    // } else {
    //   return (
    //     <div>Not found</div>
    //   )
    // }
  }
}

// export const Vac = Vaccine;
export default Vaccine;
