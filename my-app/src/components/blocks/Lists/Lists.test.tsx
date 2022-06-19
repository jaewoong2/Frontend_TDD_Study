import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from 'context/TodoProvider';
import useTodoValue from 'hooks/useTodoValue';
import { BrowserRouter } from 'react-router-dom';
import Lists from './index';

beforeEach(() => {
  localStorage.clear();
});

describe('<Lists />', () => {
  it('render List correctly', () => {
    const { container } = renderWithRouter(<Lists lists={['default value']} />);

    const todoItem = screen.getByText('default value');
    const button = screen.getByText('Move to Item');

    expect(todoItem).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('click the button to detail', () => {
    renderWithRouter(<Lists lists={['default value']} />);

    const todoItem = screen.getByText('default value');
    const button = screen.getByText('Move to Item');

    expect(todoItem).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(window.location.pathname).toBe('/detail/0');
  });
});

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
