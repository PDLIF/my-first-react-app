const Item = ({ country }) => {
    return (
        <button className="country-item">
            <img src={country.flagURL} />
            {country.name}
        </button>
    );
};

const CountriesList = ({ countries }) => {
    return (
        <div>
            {countries.map(country => (
                <Item country={country} />
            ))}
        </div>
    );
};