import useChange from 'hooks/useChange';
import useLists from 'hooks/useLists';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Forms } from './blocks/Forms';
import Lists from './blocks/Lists';

function App() {
  const [todo, onChangeTodo] = useChange('');
  const { lists, addList, removeList } = useLists([]);

  useEffect(() => {
    console.log(lists);
  }, [lists]);
  return (
    <Container>
      <Contents>
        <Lists lists={lists} handleDelete={removeList} />
        <Forms
          handleAddTodo={addList(todo)}
          onChangeTodo={onChangeTodo}
          todo={todo}
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
