import './Die.css';

/* 
Props: 
  number = num/str (default 1)
*/

export default function Die(props) {
  const { number = 1 } = props;
  return (
    <div
      className="die"
      style={{ backgroundImage: `url(${require(`./images/dice-${number}.png`)})` }}
      role="img"
      aria-label={`Die face number ${number}`}
    ></div>
  );
}
