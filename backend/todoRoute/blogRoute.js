const { getAllBlogs } = require("../controller/blogController")

const router = require("express").Router()


router.get("/" ,getAllBlogs)

module.exports = router