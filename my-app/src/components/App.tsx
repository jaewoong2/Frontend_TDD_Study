import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { List } from './Pages/List';
import Form from './Pages/Form';
import { Detail } from './Pages/Detail';
import PageHeader from './blocks/PageHeader';

function App() {
  return (
    <Container>
      <Contents>
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<div className="error">Error!</div>} />
        </Routes>
      </Contents>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  align-content: center;

  .error {
    width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
  }
`;
