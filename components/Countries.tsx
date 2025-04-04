import { FunctionalComponent } from "preact";

type Country= {
    name: string,
    capital: string,
}

type Data = {
  countries: Country[];
}
const Countries : FunctionalComponent<Data> = (props) => {
    const countries = props.countries;
    return(
        <div class="list">
            {countries.map((c) => (
                <li key={c.name}>{c.name}
                <a href={`/city/${c.capital}`}>{c.capital}</a>
                </li>
            ))}
        </div>
    );

}
export default Countries;