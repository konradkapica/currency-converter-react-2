
function App() {
  return (
    <div className="body__container">
        <form className="js-form form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik PLN</legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Wpisz kwotę (PLN):</span>
                        <input className="form__field js-input" name="PLN" type="number" min="0.01" step="any"
                            placeholder="PLN" autoFocus required />
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select className="form__field js-currency" name="currency">
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                            <option value="GBP">Funt brytyjski</option>
                            <option value="UAH">Hrywna</option>
                        </select>
                    </label>
                </p>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
            </fieldset>
          
        </form>
        <p className="result js-result">
            -
        </p>
    </div>
  );
}

export default App;
