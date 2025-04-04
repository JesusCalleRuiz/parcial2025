import { FunctionalComponent } from "preact/src/index.d.ts";

type Phone = {
    is_valid: string,
    country: string,
    location: string,
    format_national:string,
  }

const Header: FunctionalComponent<Phone> = (props) => {
    const phone = props.phone;
    return(
        <div >
            <li>
                {phone.format_national}
                <a href={`/country/${phone.country}`}>{phone.country}</a>
            </li>
        </div>
    );
}
export default Header;