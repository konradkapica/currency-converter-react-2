import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";
import { currencies } from "./Currencies";


function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (amount, currency) => {
    const rateExchange = currencies.find(({ short }) => short === currency).rate;
    const currencyName = currencies.find(({ short }) => short === currency).short;
    setResult((+amount / rateExchange).toFixed(2) + currencyName);
  };

  return (
    <Container>
      <Form
        calculateResult={calculateResult}
      />
      <Result
        result={result}
      />
    </Container>
  );
}

export default App;
