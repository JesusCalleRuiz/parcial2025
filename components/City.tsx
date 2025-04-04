import { FunctionalComponent } from "preact/src/index.d.ts";

type City= {
    name: string,
    latitude: string,
    longitude: string,
  }
  type Data = {
    city: City[];
  }
const Header: FunctionalComponent<Data> = (props) => {
    const city = props.city;
    return(
        <div >
            {city.map((c) => (
                <li key={c.name}>City: {c.name}
                Latitude: {c.latitude}
                Longitude: {c.longitude}
                </li>
            ))}
        </div>
    );
}
export default Header;