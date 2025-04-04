import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import Countries from "../../components/Countries.tsx";
type Country= {
    name: string,
    capital: string,
}

type Data = {
  countries: Country[];
}

export const handler:Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown,Data>) => {
      const {name} = ctx.params;
      console.log(name);
        try{
          const response = await Axios.get<Data>(`https://api.api-ninjas.com/v1/country?name=${name}`,{
            headers: {
              'X-Api-Key': Deno.env.get("API_KEY")
            }
          });
          console.log(response.data)
          return ctx.render({countries: response.data});
        }catch(e){
          return new Response("Error en la API");
        }
    }
  }

  const Page = (props: PageProps<Data>) => {
    const countries = props.data.countries;

    return(
        <div>
           <Countries countries={countries}/>
        </div>
    );
}
export default Page;