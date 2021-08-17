import React from 'react';
import './Vaccine.css';
import VacImage from './VacImage';

class Vaccine extends React.Component {
  constructor(props) {  //กำหนดค่าpropให้constructor
    super(props); 
    this.state = {  //กำหนดค่าshot have
      // nameCompony="Astrazeneca",
      // nameInter: 'AZD1222',
      // produce="England",
      // technology="ไวรัส Adonovirus พาหะ",
      shot: '10000000',
      have: true,
    };
  }

  // componentDidMount() {
  //   this.setState({ have: true });
  // }

  render() {
    if (!this.state.have) { //ถ้าไม่มีstate
      return <div>Not found</div>;  //สั่งให้รีเทรินออกมาเป็นNot found
    }
    return (
      <div className="vaccine__list">
        <VacImage path="/img/1.jpg" />
        <div className="vaccine__item">{this.props.nameCompony}</div>
        <div className="vaccine__item">{this.props.nameInter}</div>
        <div className="vaccine__item">{this.props.produce}</div>
        <div className="vaccine__item">{this.props.technology}</div>
        <div>{this.state.shot}</div>
        <div>{`${this.state.have}`}</div>
      </div>
    );
  }
}

// export const Vac = Vaccine;
export default Vaccine;