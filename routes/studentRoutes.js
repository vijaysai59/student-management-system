const express = require("express")
const router = express.Router()
const Student = require("../models/Student")

router.post("/students", async (req,res)=>{
 const student = new Student(req.body)
 await student.save()
 res.json(student)
})

router.get("/students", async (req,res)=>{
 const search = req.query.search || ""
 const students = await Student.find({
  name: {$regex: search, $options: "i"}
 })
 res.json(students)
})

module.exports = router