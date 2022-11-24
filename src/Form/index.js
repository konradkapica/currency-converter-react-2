import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currencyExchange, setCurrencyExchange] = useState(currencies[0].short);

    const onSelectChange = ({ target }) => setCurrencyExchange(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyExchange);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Wpisz kwotę (PLN):</span>
                        <input
                            className="form__field"
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
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p className="form__paragraph">
                    <button className="form__button">Przelicz</button>
                </p>
            </fieldset>
        </form>
    );
};


export default Form;