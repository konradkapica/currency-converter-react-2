import { useState } from "react";
import { StyledForm, Paragraph, LabelText, FormFiled, Button, ErrorText, LoadingText, Spinner, Info } from "./styled"
import { Result } from "./Result"
import { useRatesData } from "./useRatesData";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyExchange, setCurrencyExchange] = useState("EUR");
    const [result, setResult] = useState("");
    const ratesData = useRatesData();
    const { date, rates, status } = ratesData;

    const onSelectChange = ({ target }) => setCurrencyExchange(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyExchange);
    };

    const calculateResult = (amount, currency) => {
        const rateExchange = rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: +amount * rateExchange,
            currency,
        });
    };

    return (
        <>
        <StyledForm onSubmit={onFormSubmit}>
            {status === "error" ? (
                <ErrorText>
                    Ups... coś poszło nie tak!
                    <br />
                    Możesz nie mieć połączenia z internetem. Odśwież stronę lub spróbuj później.
                </ErrorText>
            ) : status !== "success" ? (
                <>
                    <LoadingText>
                        Trwa ładowanie danych z Europejskiego Banku Centralnego...
                    </LoadingText>
                    <Spinner></Spinner>
                </>
            ) : (
                <>
                    <Paragraph>
                        <LabelText>Wpisz kwotę (PLN):</LabelText>
                        <FormFiled
                            name="PLN"
                            type="number"
                            min="0.01"
                            step="any"
                            placeholder="PLN"
                            autoFocus
                            required
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </Paragraph>
                    <Paragraph>
                        <LabelText>Wybierz walutę:</LabelText>
                        <FormFiled
                            as="select"
                            name="currency"
                            value={currencyExchange}
                            onChange={onSelectChange}
                        >
                            {Object.keys(rates).map(currency => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))};
                        </FormFiled>
                    </Paragraph>
                    <Button>Przelicz</Button>
                </>
            )}
        </StyledForm>
        <Result
        result={result}
    />
    <Info>
        Kursy walut pobierane są z Europejskiego Banku Centralnego.
        <br />
        Aktualne na dzień: <strong>{date}</strong>
    </Info>
    </>
    );
};

export default Form;