import "./style.css";
import { currecies } from "../Currencies";

const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <header className="form__header">
                Przelicznik walut
            </header>
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">Wpisz kwotę (PLN):</span>
                    <input className="form__field" name="PLN" type="number" min="0.01" step="any"
                        placeholder="PLN" autoFocus required />
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
            <p className="form__paragraph form__paragraph--button">
                <button className="form__button">Przelicz</button>
            </p>
        </fieldset>

    </form>
);

export default Form;