import { Button } from 'components/atoms';
import { TodoActionsContext, TodoValueContext } from 'context/TodoProvider';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export function Detail() {
  const { id } = useParams();
  const lists = useContext(TodoValueContext);
  const { removeList } = useContext(TodoActionsContext);
  const navigate = useNavigate();

  if (!id || !lists[+id]) {
    return <Container>Error</Container>;
  }

  return (
    <Container>
      {lists[+id]}
      <Button
        onClick={() => {
          removeList(+id);
          navigate('/');
        }}
        hoverColor="#FF1744"
        backgroundColor="#F01440">
        Delete
      </Button>
    </Container>
  );
}

const Container = styled.ul`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;
