import express from "express";
import cors from "cors";
import questionRoutes from "./api-routes/questionRoutes";

const app = express();

app.use(
  cors(
    (cors.CorsOptions = {
      origin: "http://localhost:3000",
    })
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", questionRoutes);

app.listen(process.env.PORT || 7777);
