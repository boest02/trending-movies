import "../css/loader.css";

type LoaderProps = {
  /** Optional short message shown below the spinner */
  message?: string;
};

const Loader = ({
  message = "Please wait while we load the movie",
}: LoaderProps) => {
  return (
    <div
      className="ml-container"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="ml-actions">
        <div className="ml-spinner" aria-hidden="true" />
        <div className="ml-message">
          <span className="visually-hidden" data-testid="loading-test">
            Loading
          </span>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Loader;
