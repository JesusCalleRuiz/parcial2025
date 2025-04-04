import { FreshContext, FreshOptions, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../components/Form.tsx";
import Axios from "npm:axios";
import Phone from "../components/Phone.tsx";

type Phone = {
  is_valid: string,
  country: string,
  location: string,
  format_national:string,
}

type Data = {
  phone: Phone;
}

export const handler:Handlers = {
  GET: async(req:Request, ctx: FreshContext<unknown,Data>) => {
    const url = new URL(req.url);
    let tlf = url.searchParams.get("number");
    console.log(tlf);
    if(tlf == null){
      tlf = "+34653957137"
    }
      try{
        const response = await Axios.get<Phone>(`https://api.api-ninjas.com/v1/validatephone?number=${tlf}`,{
          headers: {
            'X-Api-Key': Deno.env.get("API_KEY")
          }
        });
        return ctx.render({phone: response.data});
      }catch(e){
        return new Response("Error en la API");
      }
  }
}

export default (props: PageProps<Phone>) => {
  const phone = props.data.phone
  console.log(phone);
  return (
    <div>
      <Form/>
      <Phone phone={phone}/>
    </div>
  );
}