import { forwardRef } from 'react';
import styled from 'styled-components';

export const InputContainer = styled.label`
  display: flex;
`;

const StyledInput = styled.input`
  font-size: 16px;
  margin-right: 9px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
  flex: 1;
`;

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, placeholder }, ref) => {
    return (
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'Input';
Input.defaultProps = {
  onChange: () => {},
};
