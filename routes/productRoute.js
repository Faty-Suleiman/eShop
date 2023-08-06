const { isAdmin, isAuth, isSellerOrAdmin } = require("../util/util");

const {
  productReview,
  deleteProduct,
  editProduct,
  createProduct,
  getSingleProduct,
  getProductByCategory,
  getAllProducts,
} = require("../controller/productController");

const router = require("express").Router();

// Get all products
router.get("/", expressAsyncHandler(getAllProducts));

// Get products by category
router.get("/categories", expressAsyncHandler(getProductByCategory));

// Get single product route
router.get("/:id", expressAsyncHandler(getSingleProduct));

// Create product route
router.post("/", isAuth, isSellerOrAdmin, expressAsyncHandler(createProduct));

// Edit product route
router.put("/:id", isAuth, isSellerOrAdmin, expressAsyncHandler(editProduct));

// Delete product route
router.delete("/:id", isAuth, isAdmin, expressAsyncHandler(deleteProduct));

// Review product route
router.post("/:id/reviews", isAuth, expressAsyncHandler(productReview));
