import { Table } from "~/ui/table/table";
import { Card } from "~/ui/card";

type Props = {
  rates: {
    kód: string;
    množství: number;
    kurz: number;
  }[];
};

export function ExchangeTable({ rates }: Props) {
  return (
    <Card className="w-full">
      <Table className="w-full">
        <Table.Header>
          <Table.Column>Code</Table.Column>
          <Table.Column>Amount</Table.Column>
          <Table.Column>Rate</Table.Column>
        </Table.Header>
        <Table.Body>
          {rates.map((rate) => (
            <Table.Row key={rate.kód}>
              <Table.Cell>{rate.kód}</Table.Cell>
              <Table.Cell>
                {rate.množství} {rate.kód}
              </Table.Cell>
              <Table.Cell>{rate.kurz} CZK</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Card>
  );
}
