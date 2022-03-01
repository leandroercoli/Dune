export default function Input({
  endAdornment,
  label,
  onChange = () => {},
  onBlur = () => {},
  ...props
}: {
  endAdornment?: any;
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  [prop: string]: any;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onBlur(event.target.value);
  };

  return (
    <div
      className={`input-wrapper ${label ? "input-with-label" : ""} ${
        props.disabled ? "input-disabled" : ""
      }`}
    >
      {label && <label>{label}</label>}
      <input {...props} onChange={handleChange} onBlur={handleBlur} />
      {endAdornment ? (
        <div className="end-adornment">{endAdornment}</div>
      ) : null}
    </div>
  );
}
