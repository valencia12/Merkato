import React, { useState } from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;


  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    opacity: .9;
    text-align: justify;
    li {
      color: black;
    }
  }
`;

const Burger = ({ onChangeItem }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}  >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        
        <li onClick={() => {
          setOpen(false);
          onChangeItem(0)
        }}>Home</li>
        <li onClick={() => {
          setOpen(false);
          onChangeItem(1)
        }}
        >Secciones</li>
        <li onClick={() => {
          setOpen(false);
          onChangeItem(2)
        }}
        >Alimentos</li>
        <li onClick={() => {
          setOpen(false);
          onChangeItem(3)
        }}
        >Bebidas</li>
        <li onClick={() => {
          setOpen(false);
          onChangeItem(4)
        }}
        >Postres</li>
      </Ul>
    </>
  )
}








export default Burger
