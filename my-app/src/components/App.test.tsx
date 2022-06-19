import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from 'context/TodoProvider';
import 'jest-styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

function ProvidedApp() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = renderWithRouter(<ProvidedApp />, { route: '/' });

    const todoList = screen.getByTestId('toDoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.firstChild).toBeNull();

    const header = screen.getByText('할 일 목록');
    expect(header).toBeInTheDocument();

    const label = screen.getByText('+');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('All Test', () => {
    renderWithRouter(<ProvidedApp />, { route: '/' });

    const label = screen.getByText('+');
    expect(label).toBeInTheDocument();
    fireEvent.click(label);

    expect(screen.getByText('할 일 추가')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'study react' } });

    const addButton = screen.getByText('+ ADD');
    fireEvent.click(addButton);

    const goBack = screen.getByText('Back');
    fireEvent.click(goBack);

    expect(screen.getByText('할 일 목록')).toBeInTheDocument();

    const todoList = screen.getByTestId('toDoList');
    expect(todoList).toBeInTheDocument();

    const todoItem = screen.getByText('study react');
    expect(todoItem).toBeInTheDocument();

    const moveButton = screen.getByText('Move to Item');
    fireEvent.click(moveButton);

    expect(screen.getByText('할 일 상세')).toBeInTheDocument();

    const removeButton = screen.getByText('Delete');
    fireEvent.click(removeButton);
    fireEvent.click(screen.getByText('Back'));

    expect(screen.getByText('할 일 목록')).toBeInTheDocument();
    expect(screen.getByTestId('toDoList').firstChild).toBeNull();
  });
});

// needs for react-router-dom v6
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
