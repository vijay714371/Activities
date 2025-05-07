
import { FieldValues, UseControllerProps ,useController} from "react-hook-form";
import {DateTimePicker,DateTimePickerProps} from '@mui/x-date-pickers'

type Props<T extends FieldValues = FieldValues> = UseControllerProps<T> & DateTimePickerProps<Date>;

function DateTimeInput<T extends FieldValues = FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({ ...props });

  return (
    <DateTimePicker 
    {...props}
    value={field.value? new Date(field.value):null}
    onChange={value =>{
        field.onChange(new Date(value!))
    }}
    sx={{width:'100%'}}
    slotProps={{
      textField:{
        onBlur:field.onBlur,
        error:!!fieldState.error,
        helperText:fieldState.error?.message
      }
    }}
    />

   
  )
}

export default DateTimeInput


