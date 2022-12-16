import { currencies } from "../currencies";
import { useState } from "react";
import { StyledForm, Paragraph, LabelText, FormFiled, Button } from "./styled"

const Form = ({ calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currencyExchange, setCurrencyExchange] = useState(currencies[0].short);

    const onSelectChange = ({ target }) => setCurrencyExchange(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyExchange);
    };

    return (
            <StyledForm onSubmit={onFormSubmit}>
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
                            {currencies.map(currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))};
                        </FormFiled>
                </Paragraph>
                <Paragraph>
                    <Button>Przelicz</Button>
                </Paragraph>
            </StyledForm>
    );
};

export default Form;