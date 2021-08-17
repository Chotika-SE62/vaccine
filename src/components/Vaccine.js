import React from 'react';
import './Vaccine.css';
import VacImage from './VacImage';

class Vaccine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (!this.state.have) {
      return <div>Not found</div>;
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
