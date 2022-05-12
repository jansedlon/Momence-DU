import { Converter } from "~/features/converter/converter";
import dailyRates from "~/data/denni_kurz.csv";

function App() {
  return (
    <div className="h-screen max-w-5xl mx-auto flex items-center justify-center">
      <Converter rates={dailyRates} />
    </div>
  );
}

export default App;
