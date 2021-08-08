// /* // comment box
// */ //

// /* // diagnostic 1

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

  .active
  background-color: different;

  canvasArea
  grid-template-columns: repeat(canvasArea, 1fr) / repeat(canvasArea, 1fr);

  onLoad()
    generateCanvas()

  generateCanvas()
    const sideLength = canvasArea.value
    const totalArea = Math.pow(sideLength, 2)
    for (let totalPixels = 1; totalPixels <= totalArea; totalPixels++) {
      canvasContainer.insert(pixel)
    }
// */ //
