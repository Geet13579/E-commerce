import {  configureStore } from "@reduxjs/toolkit";
import authReducers from "../redux_toolkit/features/auth/authSlice.jsx";
import customerReducer from "../redux_toolkit/features/customers/customersSlice.js"
import productReducer from "../redux_toolkit/features/product/productSlice"
import productCategoryReducer from "../redux_toolkit/features/prodcategory/proSlice.js"
import brandReducer from "../redux_toolkit/features/brand/brandSlice";
import colorReducer from "../redux_toolkit/features/color/colorSlice.js";
import uploadReducer from "../redux_toolkit/features/upload/uploadSlice.js";
import enquiryReducer from "../redux_toolkit/features/enquiry/EnqSlice.js";
import couponReducer from "../redux_toolkit/features/coupon/couponSlice";
import blogReducer from "../redux_toolkit/features/blogs/blogSlice.jsx";
import blogCategoriesReducer from "../redux_toolkit/features/blogcategory/blogCategorySlice.jsx";




export const store = configureStore({
    reducer: {
      auth: authReducers,
      customer: customerReducer,
      product:productReducer,
      productCategory:productCategoryReducer,
      brands:brandReducer,
      colors:colorReducer,
      images:uploadReducer,
      enquiries:enquiryReducer,
      coupons:couponReducer,
      blogs:blogReducer,
      blogCategories:blogCategoriesReducer
    },
});