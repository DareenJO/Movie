import  express  from "express";
import sturuter from "./routs/sturuter"
import movierouters from "./routs/movieroute";
import routbank from "./routs/bank";
const app = express();

app.use(express.json());

app.use('/movie', movierouters);
app.use('/student', sturuter);
app.use('/bank', routbank);
app.listen(5001);