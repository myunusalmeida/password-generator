function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+{}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
  const length = document.getElementById("passwordLength").value;
  const hasUppercase = document.getElementById("uppercase").checked;
  const hasLowercase = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("number").checked;
  const hasSymbol = document.getElementById("symbol").checked;
  const result = document.getElementById("result");

  result.innerText = generatePassword(
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(uppercase, lowercase, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lowercase + uppercase + number + symbol;
  const typeArr = [{ lowercase }, { uppercase }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// COPY TO CLIPBOARD
let copyClipboard = document.getElementById("clipboardBtn");
copyClipboard.addEventListener("click", (e) => {
  e.preventDefault();
  document.execCommand(
    "copy",
    false,
    document.getElementById("result").select()
  );
});
