import { z, TypeOf } from 'zod';

//Movie : ID, name , genre , rating , duration
export const movieschema = z.object({
  body: z.object({

    id : z.string({required_error: 'ID is required'}).min(3, 'ID length most be more than 3'),

        name: z.string({required_error: 'Name is reqired'}).min(3, 'Name length most be more than 3'),
//Drama|Action|Comedy
      genre: z.enum(['drama', 'action', 'comedy'], {required_error: 'Type is required'}),
        
      rating: z.number({required_error: ' most be number '}).min(1,"rate most be between 1-5").max(5,"rate most be between 1-5"),

      duration: z.number({required_error: 'duration  is  required'}).min(60,"must be more than 60 min"),
    
  

  }),
});

export type MovieSchemaType = TypeOf<typeof movieschema>['body'];