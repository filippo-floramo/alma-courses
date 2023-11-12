import { useParams } from "@solidjs/router"



export default function Course() {

   const params = useParams();

   return(
      <>
         CIAO E BENVENUTO IN QUESTO CORSO dal nome {params.id}
      </>
   )
}