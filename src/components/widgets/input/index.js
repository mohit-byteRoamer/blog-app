import "./index.css";
const Input = ({ state, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      value={state}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search articles..."
    />
  );
};
export default Input;
