import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'components/atoms';
import 'jest-styled-components';

describe('<Button />', () => {
  it('renders component correclty', () => {
    const { container } = render(<Button>Button Test</Button>);
    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();

    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304FFE');
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
      modifier: ':hover',
    });

    expect(container).toMatchSnapshot();
  });

  it('changes backgroundColor and hoverColor Props', () => {
    const BACKGROUND_COLOR = '#FF1744';
    const HOVER_COLOR = '#F01440';
    render(
      <Button backgroundColor={BACKGROUND_COLOR} hoverColor={HOVER_COLOR}>
        Button Test
      </Button>,
    );

    const parent = screen.getByText('Button Test').parentElement;
    expect(parent).toHaveStyleRule('background-color', BACKGROUND_COLOR);
    expect(parent).toHaveStyleRule('background-color', HOVER_COLOR, {
      modifier: ':hover',
    });
  });

  it('clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button Test</Button>);

    const label = screen.getByText('Button Test');
    fireEvent.click(label);
    /**
     * error - Call Time 1 (Now)
     * expect(handleClick).toHaveBeenCalledTimes(0);
     */
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
