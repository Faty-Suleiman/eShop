const router = require("express").Router();
const { generateToken, isAdmin, isAuth } = require("../util/util");
const expressAsyncHandler = require("express-async-handler");

const {
  topSeller,
  updateUser,
  loginUser,
  registerUser,
  getSingleUser,
  updateProfile,
  getAllUser,
  deleteUser,
} = require("../controller/userController");

// Get top seller route
router.get("/top-seller", expressAsyncHandler(topSeller));

// Update user by ID route
router.put("/:id", isAuth, isAdmin, expressAsyncHandler(updateUser));

// Login User route
router.post("/signin", generateToken, expressAsyncHandler(loginUser));

// Register user route
router.post("/register", expressAsyncHandler(registerUser));

// Get single user route
router.get("/:id", expressAsyncHandler(getSingleUser));

// Update profile route
router.put("/profile", isAuth, expressAsyncHandler(updateProfile));

// Get all user
userRouter.get("/", isAuth, isAdmin, expressAsyncHandler(getAllUser));

// Delete user route
userRouter.delete("/:id", isAuth, isAdmin, expressAsyncHandler(deleteUser));

// Review product route
router.post("/:id/reviews", isAuth, expressAsyncHandler(productReview));
