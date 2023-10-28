export default function ErrorScreen({ error }) {
  return (
    <div className="error__wrapper">
      <div className="error__content__wrapper">
        <figure className="error__media__wrapper">
          <img className="error__media" src="/error.png" alt="Illustration" />
        </figure>
        <h2 className="error__message title">Ooops! Something is terrible</h2>
        <p className="error__description paragraph">{error.message}</p>
      </div>
    </div>
  );
}
