import {model, Schema, Model, Types} from "mongoose"
import { User } from "../interfaces/user.interface"

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "Soy la descripción"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model("users", UserSchema)

export default UserModel