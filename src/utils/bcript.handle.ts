import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (passPlane: string, passHash: string) => {
  const isCorrect = await compare(passPlane, passHash);
  return isCorrect;
};

export { encrypt, verified };
