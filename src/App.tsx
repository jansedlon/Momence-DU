import { Converter } from "~/features/exchange/converter";
import dailyRates from "~/data/denni_kurz.csv";
import { ExchangeTable } from "~/features/exchange/exchange-table";
import { Text } from "~/ui/text";

function App() {
  return (
    <main className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center space-y-40 my-24">
      <Text h1 color="primary" size={42} className="text-center">
        Currency converter
      </Text>
      <Converter rates={dailyRates} />
      <ExchangeTable rates={dailyRates} />
    </main>
  );
}

export default App;
