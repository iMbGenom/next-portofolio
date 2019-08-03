// import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
// // style using scss

// class Header extends Component {
//   render() {
//     const title = this.props.title
//     return (
//       <Fragment>
//         <p>{title}</p>
//         {this.props.children}
//         <p className='customClass'> I am styled P element </p>
//         <p className='customClassFromFile'> I am styled P element </p>
//         <Link href="/">
//           {/* style using inline */}
//           <a style={{'fontSize': '20px'}}> Homepage </a>
//         </Link>
//         <Link href="/about">
//           <a> About </a>
//         </Link>
//         <Link href="/portofolios">
//           <a> Portofolio </a>
//         </Link>
//         <Link href="/blogs">
//           <a> Blog </a>
//         </Link>
//         <Link href="/cv">
//           <a> CV </a>
//         </Link>
//         {/* style using jsx */}
//         <style jsx>
//           {`
//             a {
//               font-size: 20px;
//             };
//             .customClass {
//               color: red;
//             }
//           `}
//         </style>
//       </Fragment>
//     )
//   }
// }

// export default Header

import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import Link from 'next/link'

const BsNavLink = (props) => {
  const { route, title } = props
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span className="nav-link port-navbar-link clickable">
      Login
    </span>
  )
}

const Logout = () => {
  return (
    <span className="nav-link port-navbar-link clickable">
      Logout
    </span>
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { className } = this.props
    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Sakata Gintoki</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              {/* <Link href="/">
                <a className="nav-link"> Homepage </a>
              </Link> */}
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portofolios" title="Portofolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <Login/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}