import React from "react";
import "./Error.scss";
function Error({ error, setError }) {
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [error]);

  return (
    <div className={error ? "alert active" : "alert"}>
      <div className="alert__wrapper">
        <div className="alert__close">
          <div className="alert__close-body" onClick={() => setError(null)}>
            &times;
          </div>
        </div>
        <div className="alert__text">
          Авторизируйтесь, чтобы добавлять в избранное
        </div>
      </div>
    </div>
  );
}

export default Error;
