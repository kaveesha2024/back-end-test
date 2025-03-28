import app from "./app.js";
import mongoose from "mongoose";
import router from "./router.js";
const port = 5000;
const mongoUri =
  "mongodb+srv://admin:admin@cluster0.oto87.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("connected to mongo db");
  } catch (err) {
    console.log(err);
  }
};
connectDb();

app.use("/api", router);

app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
