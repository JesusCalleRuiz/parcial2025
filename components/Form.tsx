import { FunctionalComponent } from "preact";

const Form: FunctionalComponent = () => {
    return(
        <div>
            <form action="/">
                <input type="text" name="telefono" placeholder="introduce un telefono"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}
export default Form