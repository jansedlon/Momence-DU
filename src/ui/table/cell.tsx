import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type TableCellProps = ComponentPropsWithoutRef<"td">;

const StyledTableCell = styled.td``;

export function TableCell(props: TableCellProps) {
  return <StyledTableCell {...props} />;
}
