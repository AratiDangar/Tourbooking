import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken;
  
  if (!token) {
    return res.json({ message: "you are valid" });
  }

  //if token exist then verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.json({ message: "token is invalid" });
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res.json({ message: "you are not authenticated!" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.json({ message: "you are not authorized!" });
    }
  });
};
