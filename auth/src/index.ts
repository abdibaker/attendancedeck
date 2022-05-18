import {app} from './app'
import mongoose from 'mongoose';
import cors from 'cors';

app.use(cors());

(async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@attendancedeck.o2mg0.mongodb.net/user?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.error(err);
  }
  app.listen(process.env.PORT || 5000, () => {
    console.log('Listen on port 5000!');
  });
}
)();