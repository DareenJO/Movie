import { z, TypeOf } from 'zod';


export const bankchema = z.object({
  body: z.object({

    id : z.string({required_error: 'ID is required'}).min(3, 'ID length most be more than 3'),

        name: z.string({required_error: 'Name is reqired'}).min(6, 'Name length most be more than 3'),

        password: z.string().regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])"), "Passwor must contain At least 1 upper case, lower case, numeric, and special character"),
        
      balance: z.number({required_error: ' most be number '}).min(0,"lmost be positiv number ")

     
  

  }),
});

export type bankSchemaType = TypeOf<typeof bankchema>['body'];