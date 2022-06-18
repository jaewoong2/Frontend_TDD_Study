import { fireEvent, render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/TodoProvider';
import 'jest-styled-components';
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
    const { container } = render(<App />);

    const todoList = screen.getByTestId('toDoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const label = screen.getByText('+ ADD');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('adds and deletes Todo Items', () => {
    render(<ProvidedApp />);
    const input = screen.getByPlaceholderText(
      '할 일을 입력해 주세요',
    ) as HTMLInputElement;
    const button = screen.getByText('+ ADD').parentElement as HTMLButtonElement;
    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);

    const todoItem = screen.getByText('study react 1');
    expect(todoItem).toBeInTheDocument();
    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons[0]).toBeInTheDocument();

    const todoLists = screen.getByTestId('toDoList');
    expect(todoLists.childElementCount).toBe(1);
    fireEvent.change(input, { target: { value: 'study react 2' } });
    fireEvent.click(button);

    const todoItem2 = screen.getByText('study react 2');
    expect(todoItem2).toBeInTheDocument();
    expect(todoLists.childElementCount).toBe(2);

    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
    expect(todoLists.childElementCount).toBe(1);
  });

  it('doesn`t add empty todo', () => {
    render(<ProvidedApp />);
    const todoLists = screen.getByTestId('toDoList');
    const length = todoLists.childElementCount;

    const button = screen.getByText('+ ADD');
    fireEvent.click(button);

    // empty value not added
    expect(todoLists.childElementCount).toBe(length);
  });
});
