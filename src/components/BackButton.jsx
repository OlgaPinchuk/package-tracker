export default function BackButton ({ history }) {
  return (
    <button className="back-button" onClick={() => history.goBack()}>❮ Back</button>
  );
};