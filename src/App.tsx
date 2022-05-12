import { useState } from "react";
import logo from "./logo.svg";
import dailyRates from "./data/denni_kurz.csv";
import { Text } from "./ui/text";
import { Input } from "./ui/input";
import { CurrencySelect } from "./ui/currency-select";
import { Card } from "./ui/card";

function App() {
  const [getAmount, setGetAmount] = useState(0);

  return (
    <div className="h-screen max-w-7xl mx-auto flex items-center justify-center">
      <Card className="w-full flex">
        <div className="w-1/2">
          <Text h1 color="primary" size={24}>
            You have
          </Text>
          <div className="flex space-x-2">
            <Input name="haveAmount" value={50000} type="number" />
            <CurrencySelect />
          </div>
        </div>
        <div className="w-1/2">
          <Text h1 color="primary" size={24}>
            You get
          </Text>
          <div className="flex space-x-2">
            <Input name="getAmount" value={getAmount} type="number" disabled />
            <CurrencySelect />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
