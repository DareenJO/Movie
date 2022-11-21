"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stuschema = void 0;
const zod_1 = require("zod");
exports.stuschema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required' }).min(3, 'ID length most be more than 3'),
        name: zod_1.z.string({ required_error: 'Name is reqired' }).min(3, 'Name length most be more than 3'),
        major: zod_1.z.enum(['IT', 'IS', 'CS', 'SWE'], { required_error: 'major is required' }),
        level: zod_1.z.number({ required_error: ' most be number ' }).min(1, "level most be between 1-8").max(8, "level most be between 1-5"),
        gpa: zod_1.z.number({ required_error: 'GPA  is  required' }).min(0, "GPA most be between 0-5").max(5, "GPA most be between 0-5"),
    }),
});
