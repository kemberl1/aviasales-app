export default function Button({ description, onClick }) {
  return <button onClick={onClick} className="button" type="button">{description}</button>
}
