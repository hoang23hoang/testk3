import userModel from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
        return res.status(400).send("REGISTRATION FAILED: username already exists!");
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            username,
            password: hashedPassword,
        });

        res.status(200).send(user);
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send("An error occurred during registration.");
    }
}

export const login = async(req,res) =>{
    const { username, password } = req.body;
    try {
        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(404).send("Username or password is incorrect!");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send("Username or password is incorrect!");
        }

        const payload = {
            id: user._id.toString(),
            username: user.username,
        }

        const accessToken = jwt.sign(payload, JWT_ACCESS_TOKEN, {
            expiresIn: "20m",
        });

        const refreshToken = jwt.sign(payload,JWT_REFRESH_TOKEN, {
            expiresIn: "1d",
        });

        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
}
