const blog = require("./../todoModal/blogModal")

exports.getAllBlogs = async(req,res) =>{
    try {
        const result = await blog.find()

        res.json({
            success: true,
            message:"get all blog successfully",
            result
        })
    } catch (error) {
        res.json({
            success:false,
            massage: "error" + error
        })
    }
}