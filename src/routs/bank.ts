import express from "express";
import validstu from "../middleware/validstu";
import { bankchema, bankSchemaType } from "../zodschema/banksec";

const routbank = express.Router();


let bank: bankSchemaType[] = [];

routbank.get("/", (req, res) => {
  return res.json(bank);
});

routbank.post("/", validstu(bankchema), (req, res, next) => {
  const stunew = req.body as bankSchemaType;

  bank.push(stunew);
  return res.status(201).json({ message: " added !" });
});

routbank.put("/:id", validstu(bankchema), (req, res) => {
  const update = req.body as bankSchemaType;

  const { id} = req.params;

  for (let i = 0; i < bank.length; i++) {
    if (bank[i].id === id) {
        bank[i] = update;
      return res.status(200).json({
        message: " updated succsessfully ",
      });
    } else {
      return res.status(400).json({
        message: " not found",
      });
    }
  }
});



routbank.delete("/:id", (req, res) => {
  const { id } = req.params;

  for (let i = 0; i < bank.length; i++) {
    if (bank[i].id === id) {
        bank.splice(i, 1);
      return res.status(200).json({
        message: " deleted succsessfully ",
      });
    } else {
      return res.status(404).json({
        message: " not found :)",
      });
    }
  }
});
export default routbank;