import { fireEvent, render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/TodoProvider';
import useTodoActions from 'hooks/useTodoActions';
import useTodoValue from 'hooks/useTodoValue';
import { useEffect } from 'react';
import Lists from '.';

beforeEach(() => {
  localStorage.clear();
});

describe('<Lists />', () => {
  it('TodoList Context', () => {
    function ChildComponent() {
      return (
        <TodoProvider>
          <div>Child Component</div>
        </TodoProvider>
      );
    }
    render(<ChildComponent />);

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(localStorage.getItem('todoItem')).toBeNull();
  });

  it('Loads localStorage data and sets it to State', () => {
    const data = ['ToDo 1', 'ToDo 2', 'ToDo 3'];
    localStorage.setItem('todoItem', JSON.stringify(data));

    function ChildComponent() {
      const todoLists = useTodoValue();

      return (
        <div>
          {todoLists.map((list) => (
            <div key={list}>{list}</div>
          ))}
        </div>
      );
    }
    render(
      <TodoProvider>
        <ChildComponent />
      </TodoProvider>,
    );

    data.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });

  it('Uses addList Function', () => {
    function ChildComponent() {
      const todoLists = useTodoValue();
      const { addList } = useTodoActions();

      return (
        <div>
          <button type="button" onClick={() => addList()('study react 1')}>
            Add ToDo
          </button>
          {todoLists.map((list) => (
            <div key={list}>{list}</div>
          ))}
        </div>
      );
    }
    render(
      <TodoProvider>
        <ChildComponent />
      </TodoProvider>,
    );

    const button = screen.getByText('Add ToDo');
    fireEvent.click(button);

    expect(screen.getByText('study react 1')).toBeInTheDocument();
    expect(localStorage.getItem('todoItem')).toBe('["study react 1"]');
  });

  it('Use Delete Functuon', () => {
    const data = ['ToDo 1', 'ToDo 2', 'ToDo 3'];
    localStorage.setItem('todoItem', JSON.stringify(data));

    function ExampleLists() {
      const lists = useTodoValue();
      const { removeList } = useTodoActions();

      return <Lists handleDelete={removeList} lists={lists} />;
    }
    render(
      <TodoProvider>
        <ExampleLists />
      </TodoProvider>,
    );

    const todoItems = screen.getAllByText(/ToDo/i);
    const buttons = screen.getAllByRole('button', { name: 'Delete' });

    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[0]);
  });
});
