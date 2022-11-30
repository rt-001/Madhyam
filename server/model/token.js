import mongoose from "mongoose";
// token save karne ke liye
const TokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const token = mongoose.model("token", TokenSchema);

export default token;
