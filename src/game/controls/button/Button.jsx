import './Button.css';

const icons = ['hold', 'new', 'roll'];

export default function Button({ icon = '', className = '', onClick = () => {}, style = {}, disabled = false, children = [] }) {
  const img = icons.includes(icon) ? <img src={require(`./icons/${icon}.png`)} alt={`${icon} icon`} /> : null;
  return (
    <button className={`button ${className}`} onClick={onClick} style={style} disabled={disabled}>
      {img}
      {children}
    </button>
  );
}
