export default function RenderListSection({
  name,
  value,
  onItemSelect,
  selectedIndex,
}) {
  let partList = [];
  for (let i = 1; i <= value; i++) {
    partList.push(
      <div
        key={i + name}
        className={`list-item ${i === selectedIndex ? "selected" : ""}`}
        onClick={() => onItemSelect(i)}
      >
        <img className="img-center" src={`public/character/${name}/${i}.png`} />
      </div>
    );
  }

  return (
    <>
      <div className="list-section">
        <h1>{name}</h1>
        <div className="list">{partList}</div>
      </div>
    </>
  );
}
