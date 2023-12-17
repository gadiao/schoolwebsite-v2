import { TextField } from "@mui/material";
import { useController, useForm } from "react-hook-form";

export { InputTextField };

const InputTextField = ({ control, name }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const nameLabel = field.name.charAt(0).toUpperCase() + field.name.slice(1);
  
  return (
    <TextField 
      margin="normal"
      hidden
      fullWidth
      autoFocus
      label={nameLabel}
      autoComplete={field.name}
      onChange={field.onChange} // send value to hook form 
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
  );
}