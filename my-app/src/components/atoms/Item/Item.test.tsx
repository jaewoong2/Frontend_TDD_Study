import { fireEvent, render, screen } from '@testing-library/react';
import { Item } from 'components/atoms';
import 'jest-styled-components';

describe('<Input />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <Item buttonName="Delete">Default Value</Item>,
    );

    const label = screen.getByText('Default Value');
    expect(label).toBeInTheDocument();
    const Button = screen.getByText('Delete');
    expect(Button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('click delete button', () => {
    const handleClick = jest.fn();
    render(
      <Item buttonName="Delete" onClick={handleClick}>
        Default Value
      </Item>,
    );

    const deleteButton = screen.getByText('Delete');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
