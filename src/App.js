import Container from "./Container";
import Form from "./Form";
import { Result } from "./Result"
import Header from "./Header";
import { useState } from "react";
import { currencies } from "./currencies";


function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rateExchange = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: +amount / rateExchange,
      currency,
    });
  };

  return (
    <Container>
      <Header title="Przelicznik walut" />
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
