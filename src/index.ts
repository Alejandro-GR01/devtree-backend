import colors from "colors";
import server from "./sever";

const PORT  = process.env.PORT || "4000";


server.listen(PORT, () => {
  console.log(
    colors.blue.italic.bold(" Servidor Funcionando en el puerto : " + PORT)
  );
});
