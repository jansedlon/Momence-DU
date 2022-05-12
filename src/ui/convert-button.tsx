import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";
import { SwitchIcon } from "~/icons";

type Props = Omit<ComponentPropsWithRef<"button">, "children">;

const StyledButton = styled.button`
  color: white;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.1);
  }
`;

export const ConvertButton = forwardRef<HTMLButtonElement, Props>(
  (props, ref) => (
    <StyledButton {...props} ref={ref}>
      <SwitchIcon />
    </StyledButton>
  )
);
