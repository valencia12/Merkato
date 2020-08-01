import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 89%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = ({onChangeItem}) =>  {
  return (
    <Nav >
      <div className="logo">

      </div>
      <Burger   onChangeItem={onChangeItem}/>
    </Nav>
  )
}

export default Navbar
