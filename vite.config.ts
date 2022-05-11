/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dsv from "./dsv-plugin";

// type CsvColumns = ["země", "měna", "množství", "kód", "kurz"];
//
// const casting = {
//   země: String,
//   měna: String,
//   množství: Number,
//   kód: String,
//   kurz: Number,
// } as const;

// type ResultWithPipeDelimiter = {
//   [Key in CsvColumns[number]]: ReturnType<typeof casting[Key]>;
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dsv({
      processRow(row, id) {
        const rateAsNumber = +row.kurz.replace(",", ".");
        const amount = +row["množství"];

        return { ...row, kurz: rateAsNumber, množství: amount };
      },

      // Legacy approach without using custom plugin

      // processRow(row, id) {
      //   const columns = Object.keys(row)[0].split("|") as CsvColumns;
      //   const values = Object.values(row)[0].split("|") as [
      //     string,
      //     string,
      //     string,
      //     string,
      //     string
      //   ];
      //
      //   const resultWithPipeDelimiter = columns.reduce<ResultWithPipeDelimiter>(
      //     (accumulator, current) => {
      //       const typeConstructor = casting[current];
      //       const currentValue = values.shift();
      //
      //       if (typeConstructor === Number) {
      //         accumulator[current] = typeConstructor(
      //           currentValue.replace(",", ".")
      //         );
      //
      //         return accumulator;
      //       }
      //
      //       accumulator[current] = typeConstructor(currentValue);
      //
      //       return accumulator;
      //     },
      //     {} as ResultWithPipeDelimiter
      //   );
      //
      //   console.log(resultWithPipeDelimiter);
      //
      //   return resultWithPipeDelimiter;
      // },
      delimiter: "|",
    }),
    react(),
  ],
});
