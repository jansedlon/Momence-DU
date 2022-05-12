import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled from "styled-components";

type Props = ComponentPropsWithoutRef<"input">;

const StyledInput = styled.input`
  font-size: 1.5rem;
  font-weight: bold;

  border: 0;
  border-radius: 0;
  outline: 0;

  transition: border-color 0.2s ease-in-out;
`;

const StyledInputContainer = styled.div`
  display: inline-flex;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.2s ease-in-out;
    background: black;
    z-index: 2;
  }

  &:focus-within::before {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray["500"]};
  }
`;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ ...otherProps }, ref) => (
    <StyledInputContainer>
      <StyledInput ref={ref} {...otherProps} />
    </StyledInputContainer>
  )
);

Input.displayName = "Input";
