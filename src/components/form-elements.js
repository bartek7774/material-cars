import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export const FormM = ({ onSubmit, children, className }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export const InputM = ({
  name,
  value,
  onChange,
  children,
  className,
  options
}) => {
  return (
    <>
      <InputLabel htmlFor={name}>{children}</InputLabel>
      <Input
        value={value}
        id={name}
        name={name}
        className={className}
        onChange={evt => onChange(evt.target.value)}
        {...options}
      />
    </>
  );
};

export const SelectM = ({ name, value, onChange, children, items }) => {
  return (
    <TextField
      id={name}
      name={name}
      select
      value={value}
      onChange={evt => onChange(evt.target.value)}
    >
      {items.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const ButtonM = ({ type = "submit", children, className, options }) => {
  return (
    <Button type={type} {...options} className={className}>
      {children}
    </Button>
  );
};

export const FormControlM = ({
  options = { margin: "normal", required: true, fullWidth: true },
  children
}) => {
  return <FormControl {...options}>{children}</FormControl>;
};

export const CheckboxM = ({
  name,
  value,
  onChange,
  className,
  options,
  label
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={value}
          onChange={evt => onChange(evt.target.checked)}
          className={className}
          {...options}
        />
      }
      label={label}
    />
  );
};
