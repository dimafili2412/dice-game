import './Button.css';

/* 
Props: 
  text = str/num (default empty str)
  icon = str (default none) must be one icons array
  className = str (default empty string)
  Adding new icons can be done by adding the icon.png to the icons folder and adding the icon name to the icons array :)
*/

const icons = ['hold', 'new', 'roll'];

export default function Button(props) {
  const { icon, text, className = '' } = props;
  const img = icons.includes(icon) ? <img src={require(`./icons/${icon}.png`)} alt={`${icon} icon`} /> : null;
  return (
    <button className={`button ${className}`}>
      {img}
      <span>{text}</span>
    </button>
  );
}
