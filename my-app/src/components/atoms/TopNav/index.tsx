import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

function TopNav({ children, left, right }: Props) {
  return (
    <Nav>
      <div className="box left">{left}</div>
      <div className="box center">{children}</div>
      <div className="box right">{right}</div>
    </Nav>
  );
}

export { TopNav };

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  background-color: #9bceee;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  .box {
    width: 100%;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
