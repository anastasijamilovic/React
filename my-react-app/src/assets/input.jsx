import "./input.css";
const Input = ({ type, className, style, onChangeText, placeholder }) => {
  return (
    <input
      type={type}
      className={`input-field ${className}`}
      style={style}
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
