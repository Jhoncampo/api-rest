// import { Auth } from "../interfaces/auth.interface"
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcript.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) return "ALREADY_USER";

  console.log("checkIs de Login ", checkIs.password);

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  console.log("isCorrect ", isCorrect);
  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email)

  const data = {
    token,
    user: checkIs
  }

  return data;
};

export { registerNewUser, loginUser };
