export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-bar-wrapper">
        <div className="loader-bar" />
      </div>
    </div>
  );
}

export function FullScreenLoader() {
  return (
    <div className="full-screen-loader-container">
      <div className="loader-container">
        <div className="loader-bar-wrapper">
          <div className="loader-bar" />
        </div>
      </div>
    </div>
  );
}
