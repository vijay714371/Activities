import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

// ✅ Add default <T = FieldValues>
type Props<T extends FieldValues = FieldValues> = UseControllerProps<T> & TextFieldProps;

function TextInput<T extends FieldValues = FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({ ...props });

  return (
    <TextField
      {...field}
      {...props}
      fullWidth
      value={field.value || ''}
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
}

export default TextInput;
