import { ChangeEvent, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { useDebouncedCallback } from "use-debounce";
import { Text } from "~/ui/text";
import { Input } from "~/ui/input";
import { CurrencySelect } from "~/ui/currency-select";
import { Card } from "~/ui/card";
import { ConvertButton } from "~/ui/convert-button";

type Props = {
  rates: {
    kód: string;
    kurz: number;
    množství: number;
  }[];
};

const czechRate = { kód: "CZK", kurz: 1, množství: 1 } as const;

export function Converter({ rates }: Props) {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("CZK");
  const [haveAmount, setHaveAmount] = useState(0);
  const [getAmount, setGetAmount] = useState(0);

  /** To support direct conversion from any currency to any currency
   * without checking if it's a (from or to) czech currency, we need to convert the source currency to czech and then to target currency.
   *
   * This helps us to avoid if statements to keep the clean relatively clean.
   */
  const recalculateRates = () => {
    const sourceCurrency =
      fromCurrency === "CZK"
        ? czechRate
        : rates.find((rate) => rate["kód"] === fromCurrency);
    const targetCurrency =
      toCurrency === "CZK"
        ? czechRate
        : rates.find((rate) => rate["kód"] === toCurrency);

    invariant(targetCurrency, "target currency not found");
    invariant(sourceCurrency, "source currency not found");

    const toCzechAmount =
      (sourceCurrency.kurz / sourceCurrency.množství) * haveAmount;
    const toTargetAmount =
      (toCzechAmount / targetCurrency.kurz) * targetCurrency.množství;

    setGetAmount(+toTargetAmount.toFixed(2));
  };

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  const handleHaveAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHaveAmount(e.target.valueAsNumber);
  };

  return (
    <Card className="w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
      <div className="flex flex-col w-full lg:w-auto">
        <Text p color="primary" size={24}>
          You have
        </Text>
        <div className="flex space-x-2 mt-2">
          <Input
            name="haveAmount"
            defaultValue={haveAmount}
            onChange={handleHaveAmountChange}
            type="number"
            className="w-full lg:w-auto"
          />
          <CurrencySelect
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            rates={rates}
          />
        </div>
      </div>
      <div className="">
        <ConvertButton onClick={() => recalculateRates()} />
      </div>
      <div className="flex flex-col w-full lg:w-auto">
        <Text p color="primary" size={24}>
          You get
        </Text>
        <div className="flex space-x-2 mt-2">
          <Input
            name="getAmount"
            value={getAmount}
            type="number"
            disabled
            className="w-full lg:w-auto"
          />
          <CurrencySelect
            value={toCurrency}
            onChange={handleToCurrencyChange}
            rates={rates}
          />
        </div>
      </div>
    </Card>
  );
}
