import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type TableColumnProps = ComponentPropsWithoutRef<"th">;

const StyledTableColumn = styled.th`
  text-align: left;
`;

export function TableColumn(props: TableColumnProps) {
  return <StyledTableColumn {...props} />;
}
