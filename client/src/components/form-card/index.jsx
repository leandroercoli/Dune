export default function FormCard({
  iconLabel,
  label,
  children,
  className = "",
  ...props
}) {
  return (
    <div className={`form-card ${className}`} {...props}>
      <div className="form-card-title-icon">
        <h3>{iconLabel}</h3>
      </div>
      <h2>{label}</h2>
      <div className="form-card-content">{children}</div>
    </div>
  );
}
