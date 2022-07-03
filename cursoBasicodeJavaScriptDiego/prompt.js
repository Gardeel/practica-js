let edad = prompt (`Que año naciste?`);

document.write (typeof edad + `<br>`);

edad = parseInt(edad);

document.write(typeof edad);

let cal = (2022 - edad);

alert(`Tu edad es ${cal}`)