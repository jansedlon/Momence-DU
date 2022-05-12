import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type TableHeaderProps = ComponentPropsWithoutRef<"thead">;

const StyledTableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray["200"]};

  & tr {
    height: 38px;
    color: ${({ theme }) => theme.colors.gray["700"]};
  }

  & tr:first-child th:first-child {
    border-top-left-radius: 10px;
    padding-left: 16px;
  }
  & tr:first-child th:last-child {
    border-top-right-radius: 10px;
    padding-right: 16px;
  }
  & tr:last-child th:first-child {
    border-bottom-left-radius: 10px;
  }
  & tr:last-child th:last-child {
    border-bottom-right-radius: 10px;
  }
`;

const StyledTableHeaderRow = styled.tr``;

export function TableHeader({ children, ...otherProps }: TableHeaderProps) {
  return (
    <StyledTableHeader {...otherProps}>
      <StyledTableHeaderRow>{children}</StyledTableHeaderRow>
    </StyledTableHeader>
  );
}
