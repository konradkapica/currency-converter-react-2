import "./style.css";
import { currecies } from "../Currencies";
import Header from "../Header";
import { useState } from "react";

const Form = (props) => {
    const [amount, setAmount] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <Header
                    title="Przelicznik walut"
                />
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
                            onChange={({target}) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select className="form__field" name="currency">
                            {currecies.map(currency => (
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