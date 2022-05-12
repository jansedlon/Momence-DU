/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dsv from "./dsv-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dsv({
      processRow(row, id) {
        const rateAsNumber = +(row.kurz as string).replace(",", ".");
        const amount = +row["množství"];

        return { ...row, kurz: rateAsNumber, množství: amount };
      },
      delimiter: "|",
    }),
    react(),
  ],
});
