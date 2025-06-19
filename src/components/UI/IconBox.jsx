export default function IconBox({ text, Icon, style }) {
  return (
    <div className={`iconBox ${style}`}>
      <Icon className="icon" />
      <p>{text}</p>
    </div>
  );
}
