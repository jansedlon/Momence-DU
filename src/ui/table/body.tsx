import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type TableBodyProps = ComponentPropsWithoutRef<"tbody">;

const StyledTableBody = styled.tbody``;

export function TableBody(props: TableBodyProps) {
  return <StyledTableBody {...props} />;
}
