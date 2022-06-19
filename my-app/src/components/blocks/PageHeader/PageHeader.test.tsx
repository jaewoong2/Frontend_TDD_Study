import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './index';

describe('<PageHeader />', () => {
  it('Renders Component Correctly', () => {
    const { container } = renderWithRouter(<PageHeader />, { route: '/' });

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Back');
    expect(goBack).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Renders Component Correctly with /add Url', () => {
    renderWithRouter(<PageHeader />, { route: '/add' });

    const label = screen.getByText('할 일 추가');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Back');
    expect(goBack).toBeInTheDocument();
  });

  it('Renders Component Correctly with /detail Url', () => {
    renderWithRouter(<PageHeader />, { route: '/detail/1' });

    const label = screen.getByText('할 일 상세');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Back');
    expect(goBack).toBeInTheDocument();
  });
  it('Renders Component Correctly with /add Url', () => {
    renderWithRouter(<PageHeader />, { route: '/add' });

    const label = screen.getByText('할 일 추가');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Back');
    expect(goBack).toBeInTheDocument();
  });

  it('Renders Component Correctly with /Error Url', () => {
    renderWithRouter(<PageHeader />, { route: '/error' });

    const label = screen.getByText('Error!');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Back');
    expect(goBack).toBeInTheDocument();
  });

  it('Renders Component Correctly with Goback Button ', async () => {
    renderWithRouter(<PageHeader />, { route: '/error' });

    const errorLabel = screen.getByText('Error!');
    expect(errorLabel).toBeInTheDocument();

    const goBack = screen.getByText('Back') as HTMLAnchorElement;
    expect(goBack).toBeInTheDocument();
    fireEvent.click(goBack);
    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
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
