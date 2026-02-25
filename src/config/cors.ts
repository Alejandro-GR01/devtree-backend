import { CorsOptions } from "cors";



export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whiteList = [process.env.FRONTEND_URL];
    //si se ejecuta desde el escript de desarrollo pnpm ru dev:api permite el origin undefined
    if(process.argv[2] === '--api'){
      console.log("Permitiendo origin undefined para desarrollo")
      whiteList.push(undefined)
    }

    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
