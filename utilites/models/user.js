import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    userType: { type: String, required: true },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});
userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}
userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id : this._id.toString()},process.env.JWT_SECRET_KEY, {expiresIn : '24h'});
    this.tokens = this.tokens.concat({token});

    try {
        await this.save();
    } catch (error) {
        console.error(error);
    }
    return token;
}
export const User = mongoose.models.User || mongoose.model("User",userSchema);

