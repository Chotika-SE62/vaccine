import React from 'react';
import './Vaccine.css';
import VacImage from './VacImage';

class Vaccine extends React.Component {
  render() {
    return (
      <div className="vaccine__list">
        <VacImage path="/img/1.jpg" />
        <div className="vaccine__item">{this.props.nameCompony}</div>
        <div className="vaccine__item">{this.props.nameInter}</div>
        <div className="vaccine__item">{this.props.produce}</div>
        <div className="vaccine__item">{this.props.technology}</div>
      </div>
    );
  }
}

// export const Vac = Vaccine;
export default Vaccine;
