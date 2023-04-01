const todo = require("./../todoModal/todoModal")

exports.getAllTodosController =async (req,res) =>{
    try {
      const result = await todo.find()
      res.json({
        success:true,
        message:"Todo Fastch successfully",
        result
      })
    } catch (error) {
        res.json({
            success:false,
            message:"error" + error
        })
    }
}

exports.AddAllTodosController =async (req,res) =>{
  console.log(req.body);
    try {
      // const result = await todo.create({
      //   title:"Todo",
      //   desc:"todo 1 descripation",
      //   priority:1
      // })
      const result = await todo.create(req.body)

      res.json({
        success:true,
        message:"Todo Added successfully",
        
      })
    } catch (error) {
        res.json({
            success:false,
            message:"error" + error
        })
    }
}

exports.deleteTodosController =async (req,res) =>{
  // console.log(req.body);
  console.log(req.params);
  const {id} = req.params
    try {
      
      const result = await todo.findByIdAndDelete(id)

      res.json({
        success:true,
        message:"Todo deleted successfully",
        
      })
    } catch (error) {
        res.json({
            success:false,
            message:"error" + error
        })
    }
}

exports.upDateTodosController =async (req,res) =>{
  // console.log(req.body);
  console.log(req.params);
  const {id} = req.params
    try {
      
      const result = await todo.findByIdAndUpdate(id,req.body)

      res.json({
        success:true,
        message:"Todo updated successfully",
        
      })
    } catch (error) {
        res.json({
            success:false,
            message:"error" + error
        })
    }
}