import React, { FormEvent } from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader, Button } from '@patternfly/react-core';
import { Dropdown, DropdownToggle,DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import Logo from '../../images/melody.svg';
import Mask from '../../images/mask.svg';
import Mask1 from '../../images/mask1.svg';
import Shape1 from '../../images/shape1.svg';
import Shape2 from '../../images/shape2.svg';
import Shape3 from '../../images/shape3.svg';
import Shape4 from '../../images/shape4.svg';
import Auth from '../../images/auth.svg';
import { Avatar } from '@patternfly/react-core';
import Select from 'react-select';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { NavbarStyle, Span, P, LinkStyle } from './NavbarStyle'



const options = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Telgu', label: 'Telgu' },
]

interface ComponentState {
    activeItem: number,
    isOpen: boolean
}

class Navbar extends React.Component<{}, ComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0,
            isOpen: false
        };
    }

    onSelect = (result) => {
        this.setState({
            activeItem: result
        });
    };
    onToggle1 = isOpen => {
      this.setState({
        isOpen
      });
    };
    onSelect1 = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    render() {
      const {activeItem, isOpen } = this.state;
      const SalesMenu = [
          <DropdownItem key="earned">
            <Link to="/earned-comission">
                Earned Comission
            </Link>
          </DropdownItem>,
          <DropdownItem key="sales">
            <Link to="/sales-transection">
                Sales transection
            </Link>
          </DropdownItem>
        ];
        const ResellerMenu = [
            <DropdownItem key="reseller-group">
              <Link to="/reseller-group">
                  Reseller Group
              </Link>
            </DropdownItem>,
            <DropdownItem key="reseller">
              <Link to="/reseller">
                  Reseller
              </Link>
            </DropdownItem>
        ];
        const ProductConfigrationMenu = [
            <DropdownItem key="price">
              <Link to="/product-configration/price-item">
                  Price Item types
              </Link>
            </DropdownItem>,
            <DropdownItem key="Products">
              <Link to="/product-configration/product">
                  Products
              </Link>
            </DropdownItem>
        ];
        const AthenticationMenu = [
            <DropdownItem key="groups">
              <Link to="/athentication">
                  Groups
              </Link>
            </DropdownItem>,
            <DropdownItem key="user">
              <Link to="/user">
                  User
              </Link>
            </DropdownItem>
        ];

        return (
            <React.Fragment>
                <NavbarStyle>
                  <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />
                  <Nav onSelect={this.onSelect} variant="horizontal">
                    <NavList>
                      <NavItem itemId={0} isActive={activeItem.itemId=== 0} >
                        <Link to="/dashboard" >
                            Dashboard
                        {/* <Avatar src={Mask} alt="avatar"></Avatar> */}
                        </Link>
                      </NavItem>
                      <NavItem itemId={1} isActive={activeItem.itemId === 1} >
                        <Dropdown
                          onSelect={this.onSelect1}
                          toggle={
                            <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                              Sales
                            </DropdownToggle>
                          }
                          isOpen={isOpen && activeItem.itemId=== 1}
                          dropdownItems={SalesMenu}
                          position={DropdownPosition.right}
                        />

                      </NavItem>
                      <NavItem itemId={2} isActive={activeItem.itemId === 2} >
                      <Dropdown
                        onSelect={this.onSelect1}
                        toggle={
                          <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                            Reseller
                          </DropdownToggle>
                        }
                        isOpen={isOpen && activeItem.itemId=== 2}
                        dropdownItems={ResellerMenu}
                        position={DropdownPosition.right}
                      />
                      </NavItem>
                      <NavItem itemId={3} isActive={activeItem.itemId === 3} >
                      <Dropdown
                        onSelect={this.onSelect1}
                        toggle={
                          <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                            Product
                          </DropdownToggle>
                        }
                        isOpen={isOpen && activeItem.itemId=== 3}
                        dropdownItems={ProductConfigrationMenu}
                        position={DropdownPosition.right}
                      />
                      </NavItem>
                      <NavItem itemId={4} isActive={activeItem.itemId === 4} >
                        <Link to="/comission" >
                            Commision
                        {/* <Avatar src={Mask} alt="avatar"></Avatar> */}
                        </Link>
                      </NavItem>
                      <NavItem itemId={5} isActive={activeItem.itemId === 5} >
                      <Dropdown
                        onSelect={this.onSelect1}
                        toggle={
                          <DropdownToggle onToggle={this.onToggle1} toggleIndicator={CaretDownIcon} id="toggle-id-4">
                            Authentication
                          </DropdownToggle>
                        }
                        isOpen={isOpen && activeItem.itemId === 5}
                        dropdownItems={AthenticationMenu}
                        position={DropdownPosition.right}
                      />
                      </NavItem>
                    </NavList>
                  </Nav>

                </NavbarStyle>
                <Span>
                    <Select options={options} onChange={this.onSelect} />
                </Span>
                <P>
                    <Avatar src={Shape4} alt="avatar"></Avatar>
                </P>

            </React.Fragment>
        );
    }
}

export default Navbar;
