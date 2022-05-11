/* eslint-disable import/no-extraneous-dependencies */
import { createFilter } from "@rollup/pluginutils";
import { extname } from "path";
import toSource from "tosource";
import type { DSVRowArray, DSVRowString } from "d3-dsv";
import { dsvFormat } from "d3-dsv";

type DsvOptions<T extends Record<string, unknown> = Record<string, unknown>> = {
  include?: string[];
  exclude?: string[];
  processRow?: (row: DSVRowString, id: string) => T;
  delimiter?: string;
};

export default function dsv(options: DsvOptions = { delimiter: "," }) {
  const filter = createFilter(options.include, options.exclude);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const parsers = { ".csv": dsvFormat(options.delimiter!).parse } as const;

  return {
    name: "dsv",
    transform(code: string, id: string) {
      if (!filter(id)) return null;

      const ext = extname(id);
      if (!(ext in parsers)) return null;

      const parser = parsers[ext as keyof typeof parsers];

      let rows: DSVRowArray | Record<string, unknown>[] = parser(code);

      if (options.processRow) {
        rows = rows.map((row) => options.processRow(row, id) || row);
      }

      return {
        code: `export default ${toSource(rows)}`,
        map: { mappings: "" as const },
      };
    },
  };
}
