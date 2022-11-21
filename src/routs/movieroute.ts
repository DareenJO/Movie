import express from "express";
import validate from "../middleware/validate";
import { movieschema, MovieSchemaType } from "../zodschema/schema";

const router = express.Router();


let movie: MovieSchemaType[] = [];

router.get("/", (req, res) => {
  return res.json(movie);
});

router.post("/", validate(movieschema), (req, res, next) => {
  const newpostmovie = req.body as MovieSchemaType;

  movie.push(newpostmovie);
  return res.status(201).json({ message: "was added !" });
});

router.put("/:id", validate(movieschema), (req, res) => {
  const update = req.body as MovieSchemaType;

  const { id } = req.params;

  for (let i = 0; i < movie.length; i++) {
    if (movie[i].id === id) {
      movie[i] = update;
      return res.status(200).json({
        message: "movie  updated succsessfully ",
      });
    } else {
      return res.status(400).json({
        message: "movie  is not found",
      });
    }
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  for (let i = 0; i < movie.length; i++) {
    if (movie[i].id === id) {
      movie.splice(i, 1);
      return res.status(200).json({
        message: "movie has been  deleted succsessfully ",
      });
    } else {
      return res.status(404).json({
        message: "movie is not found :)",
      });
    }
  }
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  let z = name.toLowerCase() || name.toLowerCase();
  movie.map((search) => {
    return search.name.toLowerCase() === z || search.name.toUpperCase() === z
      ? res.json(search)
      : "Not Found";
  });
});

//    router.get('/genre', (req, res) => {
//     let key = req.body.genre;
//     console.log('genre',key);

//     let genre = key.replace("-"," ");
//     let searchValue = movie.filter((mov)=>{

//       return mov.genre.toLowerCase() === genre;
//     })
//     return res.json(searchValue);
//   });

// router.get("/:genre", (req, res) => {
//   const { genre } = req.params;
//   console.log(genre);
  
// //   let z = genre.toLowerCase() || genre.toLowerCase();
// //   movie.map((search) => {
// //     return search.genre.toLowerCase() === z || search.genre.toUpperCase() === z
// //       ? res.json(search)
// //       : "Not Found";
// //   });
// });

export default router;
