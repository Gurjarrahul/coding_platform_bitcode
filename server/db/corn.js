const mongoose=require("mongoose");
console.log("SDFSKJFNSDFNSDMFDSN",process.env.DB);
mongoose.connect("mongodb+srv://rahulsingh:Rahulgur08@cluster0.3urwqn6.mongodb.net/questionbank?retryWrites=true&w=majority",{
      useNewUrlParser:true,
      useUnifiedTopology:true
  })
  .then(()=>{
        console.log("connected");
      }).catch((e)=>{
        console.log(e);
console.log("not connected");
  })

// mongoose.connect('mongodb://127.0.0.1/quetionbank',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//   }).then(()=>{
//     console.log("connected");
//   }).catch((e)=>{
// console.log("not connected");
//   })