import { ComponentType, ReactNode } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { TableHeader, TableHeaderProps } from "~/ui/table/header";
import { TableColumn, TableColumnProps } from "~/ui/table/column";
import { TableRow, TableRowProps } from "~/ui/table/row";
import { TableCell, TableCellProps } from "~/ui/table/cell";
import { TableBody, TableBodyProps } from "~/ui/table/body";

type TableProps = StyledComponentProps<"table", any, any, any>;

type TableComponent = {
  (props: TableProps): JSX.Element;
  Header: ComponentType<TableHeaderProps>;
  Column: ComponentType<TableColumnProps>;
  Row: ComponentType<TableRowProps>;
  Cell: ComponentType<TableCellProps>;
  Body: ComponentType<TableBodyProps>;
};

const StyledTable = styled.table``;

export const Table: TableComponent = (props) => <StyledTable {...props} />;

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
