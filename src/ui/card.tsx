import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";
import * as React from "react";

const StyledCard = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 16px;
  border-radius: 10px;
`;

export function Card<C extends string | React.ComponentType<any> = "div">(
  props: StyledComponentProps<C, DefaultTheme, any, any>
) {
  return <StyledCard {...props} />;
}
