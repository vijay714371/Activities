import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import { SelectInputProps } from "@mui/material/Select/SelectInput";
  import {
    FieldValues,
    useController,
    UseControllerProps,
  } from "react-hook-form";
  
  // ✅ Add default <T = FieldValues>
  type Props<T extends FieldValues = FieldValues> = {
    items: { text: string; value: string }[];
    label: string;
  } & UseControllerProps<T> &
    Partial<SelectInputProps>;
  
  function SelectInput<T extends FieldValues = FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({ ...props });
  
    return (
      <FormControl fullWidth error={!!fieldState.error}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          {...field}
          label={props.label}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value ?? ""}
        >
          {props.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    );
  }
  
  export default SelectInput;
  