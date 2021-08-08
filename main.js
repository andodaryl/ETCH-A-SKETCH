// /* // comment box
// */ //

// /* // operational see diagnostic 1
const meta = {
  root: document.documentElement,
  props: {
    sideLength: "--canvas-length",
  },
  elems: {
    userInput: document.getElementById("userInput"),
    canvas: document.getElementById("canvas-container"),
    button: document.getElementById("create-canvas"),
  },
  class: {
    pixel: "pixel",
    activePixel: "pixel-active",
    activeCanvas: "canvas-active",
  },
};
const methods = {
  generateCanvas() {
    const inputValue = meta.elems.userInput.value;
    const canvas = meta.elems.canvas;
    [...canvas.childNodes].forEach((child) => child.remove());
    meta.root.style.setProperty(meta.props.sideLength, inputValue);
    canvas.classList.add(meta.class.activeCanvas);
    for (
      let totalPixels = 1, totalArea = Math.pow(inputValue, 2);
      totalPixels <= totalArea;
      totalPixels++
    ) {
      const pixel = document.createElement("div");
      pixel.classList.add(meta.class.pixel);
      pixel.addEventListener("mouseover", (detected) => {
        if (detected) pixel.classList.add(meta.class.activePixel);
      });
      canvas.appendChild(pixel);
    }
  },
};
methods.generateCanvas();
meta.elems.button.addEventListener("click", (detected) => {
  if (detected) methods.generateCanvas();
});
// */ //

/* // diagnostic 1 -- works!
const meta = {
  root: document.documentElement,
  props: {
    sideLength: "--canvas-length",
  },
  elems: {
    userInput: document.getElementById("userInput"),
    canvas: document.getElementById("canvas-container"),
    button: document.getElementById("create-canvas"),
  },
  class: {
    pixel: "pixel",
    activePixel: "pixel-active",
    activeCanvas: "canvas-active",
  },
};
const methods = {
  generateCanvas() {
    const inputValue = meta.elems.userInput.value;
    const canvas = meta.elems.canvas;
    [...canvas.childNodes].forEach((child) => child.remove());
    meta.root.style.setProperty(meta.props.sideLength, inputValue);
    canvas.classList.add(meta.class.activeCanvas);
    for (
      let totalPixels = 1, totalArea = Math.pow(inputValue, 2);
      totalPixels <= totalArea;
      totalPixels++
    ) {
      const pixel = document.createElement("div");
      pixel.classList.add(meta.class.pixel);
      pixel.addEventListener("mouseover", (detected) => {
        if (detected) pixel.classList.add(meta.class.activePixel);
      });
      canvas.appendChild(pixel);
    }
  },
};
// meta.elems.testOutput = document.createElement("p");
// document.getElementById("main-container").appendChild(meta.elems.testOutput);
// meta.elems.testOutput.innerText += "Test Output: ";
methods.generateCanvas();
meta.elems.button.addEventListener("click", (detected) => {
  if (detected) methods.generateCanvas();
});
// */ //

/* // approach

single box
  when hovered, changes color permanently
  auto resize according to space available inside container

canvas generator -- when button is pressed (re)generate canvas
  input = how many per x / y axis
  container.length / input
  container.height / input

--ideas --
main structure
  headings
  config area with slider
  canvas area

dynamic canvas
  auto create grid based on slider value
  insert pixel per grid square with .pixel for styling

div.pixel
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: inherit;
  onHover(): permanently change color by adding .active

  .pixel-active
  background-color: different;

  onLoad()
    generateCanvas()

  generateCanvas()
    const sideLength = canvasArea.value
    const totalArea = Math.pow(sideLength, 2)
    for (let totalPixels = 1; totalPixels <= totalArea; totalPixels++) {
      canvasContainer.insert(pixel)
    }
  
  process
    when page loads generateCanvas()
    when button is clicked generateCanvas()
    generateCanvas()
      update .canvas-active side-length: slider value
      add .canvas-active to #canvas-container
      create div.pixel
        add onmouseover event listeners: add .pixel-active
// */ //
