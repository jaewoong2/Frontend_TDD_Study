import React from 'react';
import styled from 'styled-components';
import { Button, Input, InputContainer } from './atoms';

function App() {
  return (
    <Container>
      <Contents>
        <InputContainer>
          <Input placeholder="할 일을 입력 해주세요" />
          <Button>+ ADD</Button>
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
