function generatePalette() {
  let inputColor = document.getElementById("colorPicker").value;

  // Generate palettes for each category
  generateShades("modern", inputColor, 5, [20, 40, 60, 80, 100]); // Modern shades
  generateShades("classic", inputColor, 5, [-10, -20, -30, -40, -50]); // Classic shades
  generateShades("vibrant", inputColor, 5, [40, 60, 80, 100, 120]); // Vibrant shades
  generateShades("oldSchool", inputColor, 5, [-40, -50, -60, -70, -80]); // Old School shades
  generateShades("vintage", inputColor, 5, [-50, -60, -70, -80, -90]); // Vintage shades
}

function generateShades(category, color, count, percentages) {
  const container = document.getElementById(category);
  container.innerHTML = ""; // Clear the container for new shades

  for (let i = 0; i < count; i++) {
    let shadeColorCode = shadeColor(color, percentages[i]);

    let shadeDiv = document.createElement("div");
    shadeDiv.className = "shade";
    shadeDiv.style.backgroundColor = shadeColorCode;

    let shadeCodeDiv = document.createElement("div");
    shadeCodeDiv.className = "shade-code";
    shadeCodeDiv.textContent = shadeColorCode;

    let copyButton = document.createElement("button");
    copyButton.className = "copy-btn";
    copyButton.textContent = "Copy";
    copyButton.onclick = () => copyColor(shadeColorCode);

    // Append color block and copy button to the container
    shadeDiv.appendChild(shadeCodeDiv);
    shadeDiv.appendChild(copyButton);
    container.appendChild(shadeDiv);
  }
}

// Function to adjust the brightness of the color
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

// Function to copy color code to clipboard
function copyColor(colorCode) {
  navigator.clipboard.writeText(colorCode).then(() => {
    alert(`Copied the color: ${colorCode}`);
  });
}
