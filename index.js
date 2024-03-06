const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
app.use(cors());
app.use(express.json());
const MonthlyTotal=require("./model/monthwisedata")
const DailyRecord=require("./model/dailyRecordSchema ")
mongoose
  .connect("mongodb+srv://nikhikpal173:nikhilpal173@cluster0.ihzbiqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database running..."))
  .catch((err) => console.log(err));

app.get("/getmonthwisedata",async(req,res)=>{
    try {
        const data = await MonthlyTotal.find();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})
app.post('/addmonthwisedata', async (req, res) => {
    try {
      const { year, month, totalCollection } = await req.body;
      const newData = new MonthlyTotal({
        year,
        month,
        totalCollection}
      );   
      await newData.save();
      res.status(201).json("success");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
app.post("/adddailyData",async(req,res)=>{
    try{
        const {date,collection}=await req.body;
        const newData=new DailyRecord({
            date,collection
        });
        await newData.save();
        res.status(201).json("success");
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
  });