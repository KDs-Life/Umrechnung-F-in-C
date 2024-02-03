// var ENVIRONMENT_NAME = "Ambient Temperature";
// var METRIC;
// var unit;

// function setup() {
//   IoEClient.setup({
//     type: "Temperature Monitor", // The name of the device type
//     states: [
//       {
//         name: "Temperature", // The name of the state
//         type: "number",
//         unit: "&deg;C",
//         imperialUnit: "&deg;F", 
//         toImperialConversion: "x*1.8+32",
//         toMetricConversion: "(x-32)/1.8",
//         decimalDigits: 1,
//       },
//     ],
//   });

//   measurementSystemChangeEvent();
// }

// function loop() {
//   detect();
//   delay(1000);
// }

// function measurementSystemChangeEvent() {
//   METRIC = isUsingMetric();
//   unit = METRIC ? "C" : "F";
//   detect();
// }

function detect() {
  var value = Environment.get(ENVIRONMENT_NAME);

  setCustomText(30, 25, 200, 20, convertTemperature(value) + "F");

  IoEClient.reportStates(value);
  setDeviceProperty(getName(), "level", value);
}

function convertTemperature(value) {
  if (METRIC) return value.toFixed(2);
  else return (value * 1.8 + 32).toFixed(2);
}

//HIER WURDE NUR EIN CODE HINZUGGEFÜGT; DER REST IST VON DER VORHERIGEN AUFGABE: DIESER CODE IST FÜR DIE UMRECHNUNG VON FAHRENHEIT IN CELSIUS

function convertToFahrenheit() {
  const fahrenheitValue = parseFloat(
    //parseFloat wandelt den String in eine Zahl um. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat?retiredLocale=de
    // nutzen const, weil sich der Wert nicht verändern wird.
    document.getElementById("fahrenheitInput").value
  );
  let celsiusValue = (fahrenheitValue - 32) / 1.8; //Umrechnung von Fahrenheit in Celsius. Die Formel ist: (F - 32) / 1.8.
  //nutzen let, weil sich der Wert verändern wird.
  document.getElementById("celsiusOutput").textContent = //celsiusOutput ist das Element, in dem das Ergebnis angezeigt wird. siehe im html-Code.
    celsiusValue.toFixed(2); //toFixed(2) rundet die Zahl auf 2 Nachkommastellen. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed?retiredLocale=de
  //(2) zwei nachkommerstellen
}

function convertToCelsius() {
  const celsiusValue = parseFloat(
    document.getElementById("celsiusInput").value
  );
  let fahrenheitValue = celsiusValue * 1.8 + 32; //Umrechnung von Celsius in Fahrenheit. Die Formel ist: C * 1.8 + 32.
  document.getElementById("fahrenheitOutput").textContent =
    fahrenheitValue.toFixed(2);
}
