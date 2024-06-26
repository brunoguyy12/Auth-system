import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      message:
        "User not authenticated from Middleware ! No token found in headers",
      success: false,
    });
  }
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("THe user from the token is: ", user);
    req.userId = user.id;
    const expiresIn = user.exp - user.iat;
    next();
  } catch (error) {
    console.log("Error ! Invalid Token Here");
    console.log(error);
    return res.json({
      message: "Invalid token! Login again to get a new token",
      success: false,
    });
  }
};

export default authMiddleware;
