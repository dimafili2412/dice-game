import './die.css';

export default function Die({ number, style }) {
  if (!number || number < 1 || number > 6) return null;
  return (
    <div
      className="die"
      style={{ backgroundImage: `url(${require(`./images/dice-${number}.png`)})`, ...style }}
      role="img"
      aria-label={`Die face number ${number}`}
    ></div>
  );
}
