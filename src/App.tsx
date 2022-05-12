import { Converter } from "~/features/exchange/converter";
import dailyRates from "~/data/denni_kurz.csv";
import { ExchangeTable } from "~/features/exchange/exchange-table";

function App() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center space-y-40 my-24">
      <Converter rates={dailyRates} />
      <ExchangeTable rates={dailyRates} />
    </div>
  );
}

export default App;
