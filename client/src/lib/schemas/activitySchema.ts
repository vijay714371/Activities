
import {z} from 'zod';

const requiredString =(fieldName:string) => 
    z.string({required_error:`${fieldName} is requireed`})
     .min(1,{message:`${fieldName} is requireed`})
export const activitySchema=z.object({
    title: requiredString('Title'),
    description: requiredString('Description'),
    category: requiredString('Category'),
    date: z.coerce.date({
        message:'Date is required'
    }),
    venue: requiredString('Venue'),
    city: requiredString('City'),
   
})

export type ActivitySchema =z.infer<typeof activitySchema>;