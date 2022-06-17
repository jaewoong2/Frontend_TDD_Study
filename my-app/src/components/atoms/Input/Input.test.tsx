import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from 'components/atoms';
import 'jest-styled-components';

describe('<Input />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Input value="Default Value" />);

    const input = screen.getByDisplayValue('Default Value');
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    render(<Input placeholder="Default Value" />);

    const input = screen.getByPlaceholderText('Default Value');
    expect(input).toBeInTheDocument();
  });

  it('renders change data', () => {
    render(<Input placeholder="default value" />);

    const input = screen.getByPlaceholderText(
      'default value',
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
  });
});
