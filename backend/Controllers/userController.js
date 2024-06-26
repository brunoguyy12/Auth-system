import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";

// Path: backend/Controllers/userController.js

//Create a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20m",
  });
};

//Create a refresh token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

//Create a token
const createToken = async (user) => {
  const token = generateToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  // Save the refresh token to the user document in the database
  user.refreshToken = refreshToken;

  await user.save();

  return { token, refreshToken };
};

// Use the createToken function in your registerUser function
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ message: "User already exists", success: false });
    }
    const user = await userModel.create({ name, email, password });
    if (user) {
      const { token, refreshToken } = await createToken(user);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.json({
        message: "User created successfully",
        success: true,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// matchpassword method without bcrypt
// matchpassword method without bcrypt

// Login Api Controller

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user && user.password === password) {
      const { token, refreshToken } = await createToken(user);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.json({
        message: "User Logged in successfully",
        success: true,
        token,
      });
    }
    return res.json({ message: "Invalid email or password", success: false });
  } catch (error) {
    console.log(error);
  }
};

// Refresh Token Controller

export const refreshToken = async (req, res) => {

  const { refreshToken } = req.cookies;
  console.log(req.cookies);
  if (!refreshToken) {
    return res.json({ message: "User not authenticated from the refreshToken Route ! No token found in the Cookies", success: false});
  }

  try {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const userExists = await userModel.findById(user.id);
    if (!userExists) {
      return res.json({ message: "User not authenticated", success: false });
    }
    const { token, refreshToken: newRefreshToken } = await createToken(
      userExists
    );
    userExists.refreshToken = newRefreshToken;
    await userExists.save();
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({
      message: "Token refreshed successfully",
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "User not authenticated", success: false });
  }
};


// Dashboard Data

export const dashboard = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    // console.log(user);
    if (!user) {
      return res.json({ message: "User not found", success: false });
    }
    return res.json({ message: "User found", success: true, user });
  }
  catch (error) {
    console.log(error);
  }
}



// Change User data

export const changeUserData = async(req,res)=>{
  const {name,email} = req.body;
  try {
    const user = await userModel.findById(req.userId);
    if(!user){
      return res.json({message:"User not found",success:false});
    }
    user.name = name;
    user.email = email;
    await user.save();
    return res.json({message:"User data changed successfully",success:true, user:user});
  } catch (error) {
    console.log(error);
  }
}