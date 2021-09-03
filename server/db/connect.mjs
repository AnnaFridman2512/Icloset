import mongoose from 'mongoose';

//connect to DB

export const connect = () =>{
mongoose.connect('mongodb://localhost:27017/Icloset',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('mongoDB is connected'))
  .catch((err) => console.log(err));
}