import jwt from "jsonwebtoken";
export const jwtmaker = async (res, id) => {
  try {
    var token = await jwt.sign({ id }, process.env.privatekey, {
      expiresIn: "700d",
    });
    res.cookie("jwt", token, {
      httpOnly: true, // Prevents client-side JavaScript access
      secure: process.env.NODE_ENV === "production", // Ensures secure cookies in production
      sameSite: "Strict",
      maxAge: 700 * 24 * 60 * 60 * 1000, // 700 days in milliseconds
    });
    return true;
  } catch (err) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

export const jwtcleaner = async (res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "Strict",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed" });
  }
};
