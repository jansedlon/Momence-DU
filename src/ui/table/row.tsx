import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type TableRowProps = ComponentPropsWithoutRef<"tr">;

const StyledTableRow = styled.tr`
  & td {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & td:first-child {
    padding-left: 16px;
  }

  & td:last-child {
    padding-right: 16px;
  }
`;

export function TableRow(props: TableRowProps) {
  return <StyledTableRow {...props} />;
}
