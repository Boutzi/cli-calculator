//No copilot here, I'm alone in the cockpit.

const express = require('express');
const app = express();
app.use(express.static('public'));
const html = `

<!DOCTYPE html>
<html>
<head>
  <title>JS Calculator</title>
</head>
<body>
<form>
  <input type="number" id="integerInput1" name="integerInput"></input>
  <label>
    <input type="radio" name="operation" value="add" id="add" checked>+
  </label>
  <label>
    <input type="radio" name="operation" value="sub" id="sub">-
  </label>
  <label>
    <input type="radio" name="operation" value="multiply" id="multiply">*
  </label>
  <label>
    <input type="radio" name="operation" value="divide" id="divide">/
  </label>
  <input type="number" id="integerInput2" name="integerInput"></input>
  <button type="button" onclick="calculate()">Go</button>
  <span id="result" >0<span>
</form>
<script>

function calculate() {
    let first = document.getElementById("integerInput1").value;
    let second = document.getElementById("integerInput2").value;
    let result = 0;
    if (document.getElementById('add').checked) {
        console.log("addition");
        result = parseFloat(first) + parseFloat(second);
        document.getElementById("result").innerText = result;
    }
    else if (document.getElementById('sub').checked) {
        console.log("substraction");
        result = parseFloat(first) - parseFloat(second);
        document.getElementById("result").innerText = result;
    }
    else if (document.getElementById('multiply').checked) {
        console.log("multiplication");
        result = parseFloat(first) * parseFloat(second);
        document.getElementById("result").innerText = result;
    }
    else if (document.getElementById('divide').checked) {
        console.log("division");
        result = parseFloat(first) / parseFloat(second);
        document.getElementById("result").innerText = result;
    }
};

</script>
</body>
</html>
`;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html)
global.document = dom.window.document;


app.get('/', (req, res,) => {
    res.send(html);
});


app.listen(3000, () => {
    console.log("server running");
});

/*
Ce que j'ai appris de Javascript :

    1.

*/