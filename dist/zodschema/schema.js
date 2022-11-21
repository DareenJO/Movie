"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieschema = void 0;
const zod_1 = require("zod");
//Movie : ID, name , genre , rating , duration
exports.movieschema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required' }).min(3, 'ID length most be more than 3'),
        name: zod_1.z.string({ required_error: 'Name is reqired' }).min(3, 'Name length most be more than 3'),
        //Drama|Action|Comedy
        genre: zod_1.z.enum(['drama', 'action', 'comedy'], { required_error: 'Type is required' }),
        rating: zod_1.z.number({ required_error: ' most be number ' }).min(1, "rate most be between 1-5").max(5, "rate most be between 1-5"),
        duration: zod_1.z.number({ required_error: 'duration  is  required' }).min(60, "must be more than 60 min"),
    }),
});
