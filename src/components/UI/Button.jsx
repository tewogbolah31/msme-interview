export default function Button({children, style, onClick}) {
  return <button className={`btn ${style}`} onClick={onClick}>{children}</button>;
}
