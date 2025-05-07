import { DateArg, format } from "date-fns";

export function formateDate(date:DateArg<Date>){
    return format(date,'dd MMM yyyy h:mm a')
}