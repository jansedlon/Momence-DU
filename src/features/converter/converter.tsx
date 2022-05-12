import { ChangeEvent, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { useDebouncedCallback } from "use-debounce";
import { Text } from "~/ui/text";
import { Input } from "~/ui/input";
import { CurrencySelect } from "~/ui/currency-select";
import { Card } from "~/ui/card";

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

  const debouncedOnChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { valueAsNumber: value } = e.target;

      setHaveAmount(value);
    },
    500
  );

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  useEffect(recalculateRates, [haveAmount, fromCurrency, toCurrency, rates]);

  return (
    <Card className="w-full flex">
      <div className="w-1/2">
        <Text h1 color="primary" size={24}>
          You have
        </Text>
        <div className="flex space-x-2">
          <Input
            name="haveAmount"
            defaultValue={haveAmount}
            onChange={debouncedOnChange}
            type="number"
          />
          <CurrencySelect
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            rates={rates}
          />
        </div>
      </div>
      <div className="w-1/2">
        <Text h1 color="primary" size={24}>
          You get
        </Text>
        <div className="flex space-x-2">
          <Input name="getAmount" value={getAmount} type="number" disabled />
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
