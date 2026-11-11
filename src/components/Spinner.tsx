
interface SpinnerProps {
  message?: string;
}

function Spinner({ message = "Loading..." }: SpinnerProps) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default Spinner;
