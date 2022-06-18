import useChange from 'hooks/useChange';
import useLists from 'hooks/useLists';
import useTodoActions from 'hooks/useTodoActions';
import useTodoValue from 'hooks/useTodoValue';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Forms } from './blocks/Forms';
import Lists from './blocks/Lists';

function App() {
  const { onChangeTodo, addList, updateTodo, removeList } = useTodoActions();
  const { todo, todoLists } = useTodoValue();

  return (
    <Container>
      <Contents>
        <Lists lists={todoLists} handleDelete={removeList} />
        <Forms
          removeTodo={() => updateTodo('')}
          handleAddTodo={addList}
          onChangeTodo={onChangeTodo}
          todo={todo}
          placeHolder="할 일을 입력해 주세요"
        />
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
