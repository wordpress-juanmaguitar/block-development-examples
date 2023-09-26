function getRandomHexCode() {
    const letters = "0123456789ABCDEF";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += letters[Math.floor(Math.random() * 16)];
    }
    return code.toLowerCase();
  }
  
  const randomHexCode = getRandomHexCode();
  
module.exports = getRandomHexCode;