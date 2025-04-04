import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"

import City from "../../components/City.tsx";
type City= {
  name: string,
  latitude: string,
  longitude: string,
}

type Data = {
  city: City[];
}

export const handler:Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown,Data>) => {
      const {city} = ctx.params;
      console.log(city);
        try{
          const response = await Axios.get<Data>(`https://api.api-ninjas.com/v1/city=${city}`,{
            headers: {
              'X-Api-Key': Deno.env.get("API_KEY")
            }
          });
          console.log(response.data)
          return ctx.render({city: response.data});
        }catch(e){
          return new Response("Error en la API");
        }
    }
  }

  const Page = (props: PageProps<Data>) => {
    const city = props.data.city;

    return(
        <div>
           <City city={city} />
        </div>
    );
}
export default Page;