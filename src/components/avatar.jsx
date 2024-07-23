function Avatar({ selectedItems, handleReset }) {
  return (
    <div className="avatar-area">
      <div className="avatar-wrapper">
        <div className="avatar">
          <img
            className="parts"
            src={`/character/body/${selectedItems.body - 1}.png`}
            style={{ zIndex: 0 }}
          />
          <img
            className="parts"
            src={`/character/eyes/${selectedItems.eyes - 1}.png`}
            style={{ zIndex: 1 }}
          />
          <img
            className="parts"
            src={`/character/hair/${selectedItems.hair - 1}.png`}
            style={{ zIndex: 6 }}
          />
          <img
            className="parts"
            src={`/character/mouths/${selectedItems.mouths - 1}.png`}
            style={{ zIndex: 4 }}
          />
          <img
            className="parts"
            src={`/character/eyebrows/${selectedItems.eyebrows - 1}.png`}
            style={{ zIndex: 4 }}
          />
          <img
            className="parts"
            src={`/character/accessories/hats/${selectedItems.hats - 1}.png`}
            style={{ zIndex: 6 }}
          />
          <img
            className="parts"
            src={`/character/accessories/glasses/${
              selectedItems.glasses - 1
            }.png`}
            style={{ zIndex: 1 }}
          />
          <img
            className="parts"
            src={`/character/clothes/layer_1/${selectedItems.cloth1 - 1}.png`}
            style={{ zIndex: 2 }}
          />
          <img
            className="parts"
            src={`/character/clothes/layer_2/${selectedItems.cloth2 - 1}.png`}
            style={{ zIndex: 3 }}
          />
          <img
            className="parts"
            src={`/character/clothes/layer_3/${selectedItems.cloth3 - 1}.png`}
            style={{ zIndex: 4 }}
          />
        </div>
        <button className="random-btn" onClick={handleReset}>
          Randomize!
        </button>
      </div>
    </div>
  );
}
export default Avatar;
