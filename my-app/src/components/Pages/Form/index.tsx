import { Forms } from 'components/blocks/Forms';
import useTodoActions from 'hooks/useTodoActions';
import styled from 'styled-components';

function Form() {
  const { addList } = useTodoActions();

  return (
    <Container>
      <Forms placeHolder="할 일을 입력해 주세요" addTodo={addList()} />
    </Container>
  );
}

export default Form;

const Container = styled.div``;
