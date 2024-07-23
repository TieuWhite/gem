import "./App.css";
import Avatar from "../components/partlist/avatar.jsx";
import RenderListSection from "../components/partlist/ListSection.jsx";

import { useState } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const handleReset = () => {
    setSelectedItems({
      body: Math.ceil(Math.random() * total.body + 1),
      eyes: Math.ceil(Math.random() * total.eyes + 1),
      hair: Math.ceil(Math.random() * total.hair + 1),
      mouths: Math.ceil(Math.random() * total.mouth + 1),
      eyebrows: Math.ceil(Math.random() * total.eyebrows + 1),
      hats: Math.ceil(Math.random() * total.hat + 1),
      glasses: Math.ceil(Math.random() * total.glasses + 1),
      cloth1: Math.ceil(Math.random() * total.clothing1 + 1),
      cloth2: Math.ceil(Math.random() * total.clothing2 + 1),
      cloth3: Math.ceil(Math.random() * total.clothing3 + 1),
    });
  };

  const [selectedItems, setSelectedItems] = useState({
    body: Math.ceil(Math.random() * total.body + 1),
    eyes: Math.ceil(Math.random() * total.eyes + 1),
    hair: Math.ceil(Math.random() * total.hair + 1),
    mouths: Math.ceil(Math.random() * total.mouth + 1),
    eyebrows: Math.ceil(Math.random() * total.eyebrows + 1),
    hats: Math.ceil(Math.random() * total.hat + 1),
    glasses: Math.ceil(Math.random() * total.glasses + 1),
    cloth1: Math.ceil(Math.random() * total.clothing1 + 1),
    cloth2: Math.ceil(Math.random() * total.clothing2 + 1),
    cloth3: Math.ceil(Math.random() * total.clothing3 + 1),
  });

  const handleItemSelect = (category, index) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [category]: index + 1,
    }));
  };

  return (
    <>
      <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
        <div className="game-container">
          <Avatar selectedItems={selectedItems} handleReset={handleReset} />
          <div className="customize-area">
            <RenderListSection
              value={total.body}
              name="Body"
              onItemSelect={(index) => handleItemSelect("body", index)}
              selectedIndex={selectedItems.body - 1}
            />
            <RenderListSection
              value={total.eyes}
              name="Eyes"
              onItemSelect={(index) => handleItemSelect("eyes", index)}
              selectedIndex={selectedItems.eyes - 1}
            />
            <RenderListSection
              value={total.hair}
              name="Hair"
              onItemSelect={(index) => handleItemSelect("hair", index)}
              selectedIndex={selectedItems.hair - 1}
            />
            <RenderListSection
              value={total.mouth}
              name="Mouths"
              onItemSelect={(index) => handleItemSelect("mouths", index)}
              selectedIndex={selectedItems.mouths - 1}
            />
            <RenderListSection
              value={total.eyebrows}
              name="Eyebrows"
              onItemSelect={(index) => handleItemSelect("eyebrows", index)}
              selectedIndex={selectedItems.eyebrows - 1}
            />
            <RenderListSection
              value={total.hat}
              name="Accessories/hats"
              onItemSelect={(index) => handleItemSelect("hats", index)}
              selectedIndex={selectedItems.hats - 1}
            />
            <RenderListSection
              value={total.glasses}
              name="Accessories/glasses"
              onItemSelect={(index) => handleItemSelect("glasses", index)}
              selectedIndex={selectedItems.glasses - 1}
            />
            <RenderListSection
              value={total.clothing1}
              name="Clothes/layer_1"
              onItemSelect={(index) => handleItemSelect("cloth1", index)}
              selectedIndex={selectedItems.cloth1 - 1}
            />
            <RenderListSection
              value={total.clothing2}
              name="Clothes/layer_2"
              onItemSelect={(index) => handleItemSelect("cloth2", index)}
              selectedIndex={selectedItems.cloth2 - 1}
            />
            <RenderListSection
              value={total.clothing3}
              name="Clothes/layer_3"
              onItemSelect={(index) => handleItemSelect("cloth3", index)}
              selectedIndex={selectedItems.cloth3 - 1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
