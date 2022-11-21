import { z, TypeOf } from 'zod';


export const stuschema = z.object({
  body: z.object({

    id : z.string({required_error: 'ID is required'}).min(3, 'ID length most be more than 3'),

        name: z.string({required_error: 'Name is reqired'}).min(3, 'Name length most be more than 3'),

      major: z.enum(['IT', 'IS', 'CS','SWE'], {required_error: 'major is required'}),
        
      level: z.number({required_error: ' most be number '}).min(1,"level most be between 1-8").max(8,"level most be between 1-5"),

      gpa: z.number({required_error: 'GPA  is  required'}).min(0,"GPA most be between 0-5").max(5,"GPA most be between 0-5"),
    
  

  }),
});

export type StuSchemaType = TypeOf<typeof stuschema>['body'];