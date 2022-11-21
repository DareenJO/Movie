import express from "express";
import validstu from "../middleware/validstu";
import { stuschema, StuSchemaType } from "../zodschema/zodstu";

const routstu = express.Router();


let stu: StuSchemaType[] = [];

routstu.get("/", (req, res) => {
  return res.json(stu);
});

routstu.post("/", validstu(stuschema), (req, res, next) => {
  const stunew = req.body as StuSchemaType;

  stu.push(stunew);
  return res.status(201).json({ message: "student was added !" });
});

routstu.put("/:id", validstu(stuschema), (req, res) => {
  const update = req.body as StuSchemaType;

  const { id} = req.params;

  for (let i = 0; i < stu.length; i++) {
    if (stu[i].id === id) {
        stu[i] = update;
      return res.status(200).json({
        message: "student updated succsessfully ",
      });
    } else {
      return res.status(400).json({
        message: "student  is not found",
      });
    }
  }
});


routstu.put("/level", validstu(stuschema), (req, res) => {
    const update2 = req.body as StuSchemaType;
  
    let level:number = req.body;
  
    for (let i = 0; i < stu.length; i++) {
      if (stu[i].level === level) {
          stu[i] = update2;
        return res.status(200).json({
          message: "level updated succsessfully ",
        });
      } else {
        return res.status(400).json({
          message: "level  is not found",
        });
      }
    }
  });










routstu.delete("/:id", (req, res) => {
  const { id } = req.params;

  for (let i = 0; i < stu.length; i++) {
    if (stu[i].id === id) {
        stu.splice(i, 1);
      return res.status(200).json({
        message: "student has been  deleted succsessfully ",
      });
    } else {
      return res.status(404).json({
        message: "student is not found :)",
      });
    }
  }
});

routstu.get("/:major", (req, res) => {
  const { major } = req.params;
  let z = major.toLowerCase() || major.toLowerCase();
  stu.map((search) => {
    return search.major.toLowerCase() === z || search.major.toUpperCase() === z
      ? res.json(search)
      : "Not Found";
  });
});










export default routstu;
