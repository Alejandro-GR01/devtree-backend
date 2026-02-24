import { CorsOptions } from "cors";
console.log(process.argv)


export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whiteList = [process.env.FRONTEND_URL];
    //si se ejecuta desde el escript de desarrollo pnpm ru dev:api permite el origin undefined
    if(process.argv[2] === '--api'){
      console.log('Ejecutando en modo desarrollo, permitiendo origin undefined')
      whiteList.push(undefined)
    }

    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
