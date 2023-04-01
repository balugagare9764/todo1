const { getAllTodosController, AddAllTodosController,deleteTodosController, upDateTodosController } = require("../controller/todoController")

const router = require("express").Router()


router.get("/",getAllTodosController)
router.post("/add-todo",AddAllTodosController)
router.delete("/:id",deleteTodosController)
router.put("/:id",upDateTodosController)

module.exports = router