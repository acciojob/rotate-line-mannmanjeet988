//your JS code here. If required.
function rotateLine() {
      const line = document.getElementById('line');
      let rotation = 0;

      setInterval(() => {
        rotation += 1;
        line.style.transform = `rotate(${rotation}deg)`;
      }, 10);
    }

    // Call the rotateLine function
    rotateLine();