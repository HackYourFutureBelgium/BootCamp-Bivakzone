import React, { Component } from 'react';
import { Menu, Checkbox } from 'antd';
import Bivakzones from '../../bivakzones.json';
import Controllers from '../../controllers/controllers';
import './Filter.css';
import { Col, Container, Row } from 'react-bootstrap';

const { SubMenu } = Menu;
let filtredBivs;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycle: false,
      toilets: false,
      drinking_water: false,
      motor_vehicle: false,
      fee: false,
      openfire: false,
      dog: false,
      reservation: false,
    };
  }

  handleFilterClick = () => {
    filtredBivs = Controllers.filter(Bivakzones, this.state);
    this.props.callBack(filtredBivs);
  };

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.checked,
    });
  };

  render() {
    return (
      <Container className="filterField">
        <Row>
          <ul className="listItem">
            <li className="item">
              <Checkbox id="bicycle" onChange={this.handleOnChange}>
                <acronym title="accessibility by bike">
                  <span>
                    <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="openfire" onChange={this.handleOnChange}>
                <acronym title="campfires allowed">
                  <span>
                    <img src="/Icons/campfire.png" alt="campfire icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="drinking_water" onChange={this.handleOnChange}>
                <acronym title="drinkable Water">
                  <span>
                    <img src="/Icons/drinking_water.png" alt="water icon" className="icon" />{' '}
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="toilets" onChange={this.handleOnChange}>
                <acronym title="toilet">
                  <span>
                    <img src="/Icons/toilet.png" alt="toilet icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="reservation" onChange={this.handleOnChange}>
                <acronym title="reservation required">
                  <span>
                    <img src="/Icons/reservation.png" alt="reservation" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="fee" onChange={this.handleOnChange}>
                <acronym title="no fee">
                  <span>
                    <img src="/Icons/fee.png" alt="no fee icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>

            <li className="item">
              <Checkbox id="dog" onChange={this.handleOnChange}>
                <acronym title="dog is allowed">
                  <span>
                    <img src="/Icons/dog.png" alt="reservation" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item ">
              <button onClick={this.handleFilterClick} className="listButton">
                Filter
              </button>
            </li>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default Filter;

// import React, { Component } from 'react';
// import { Menu, Checkbox, Icon, Button } from 'antd';
// import Bivakzones from '../../bivakzones.json';
// import Controllers from '../../controllers/controllers';

// const { SubMenu } = Menu;
// let filtredBivs;
// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bicycle: false,
//       toilets: false,
//       drinking_water: false,
//       motor_vehicle: false,
//       fee: false,
//       openfire: false,
//       dog: false,
//       reservation: false,
//       collapsed: false,
//     };
//   }
//   componentDidMount() {}
//   handleClick = e => {
//     console.log('click ', e);
//   };

//   handleFilterClick = () => {
//     filtredBivs = Controllers.filter(Bivakzones, this.state);

//     this.props.callBack(filtredBivs);
//     console.log(filtredBivs);
//   };
//   handleOnChange = e => {
//     this.setState({
//       [e.target.id]: e.target.checked,
//     });
//   };
//   toggleCollapsed = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Menu
//           mode="horizontal"
//           className="icons"
//           mode="inline"
//           theme="dark"
//           inlineCollapsed={this.state.collapsed}
//           overflowedIndicator={
//             <img src="/Icons/menu-icon.png" alt="menu icon" className="menubutton" />
//           }
//         >
//           <SubMenu
//             className="submenu"
//             onTitleClick={this.handleClick}
//             mode="horizontal"
//             title={
//               <span>
//                 <img src="/Icons/menu-icon.png" alt="menu icon" className="menubutton" />
//               </span>
//             }
//           >
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="bicycle" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />
//                   </span>
//                   Accessible by bike
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="openfire" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/campfire.png" alt="campfire icon" className="icon" />
//                   </span>
//                   Fire
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="drinking_water" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/noun_Water_2496699.png" alt="water icon" className="icon" />{' '}
//                   </span>
//                   Drinkable Water
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="toilets" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/toilet.png" alt="toilet icon" className="icon" />
//                   </span>
//                   Toilet
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="fee" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/free.png" alt="no fee icon" className="icon" />
//                   </span>
//                   No Fee
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="reservation" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/reservation.png" alt="reservation" className="icon" />
//                   </span>
//                   Reservation required
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <Menu.Item className="item">
//               <span>
//                 <Checkbox id="dog" onChange={this.handleOnChange}>
//                   <span>
//                     <img src="/Icons/dog.png" alt="reservation" className="icon" />
//                   </span>
//                   Dog is allowed
//                 </Checkbox>
//               </span>
//             </Menu.Item>
//             <button onClick={this.handleFilterClick}>Filter </button>
//           </SubMenu>
//         </Menu>
//       </div>
//     );
//   }
// }

// export default Filter;
