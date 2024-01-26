export default function Button(props) {
  const { className, type, text, children, ...other } = props;

  return (
    <button
      type={type || "button"}
      className={` ${className} bg-secondary text-light rounded-md hover:bg-amber-500 active:bg-amber-600`}
      {...other}
    >
      {children || text || "Button"}
    </button>
  );
}
