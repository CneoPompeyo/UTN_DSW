var tipoDni = [];
var dni = [];
var verificador = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
var algoritmo = [];
var q = 0;
var e = 0;
var total = 0;

for (i = 0; i < 8; i++) {
  dni[i] = prompt('Ingrese el dígito número ' + (i + 1) + ':');
  if (validarDni(dni[i]) == false) {
    console.log('El dígito ingresado no es válido');
  }
}

var tipo = prompt('Ingrese el sexo femenino (f) o masculino (m):');
if (tipo === 'f') {
  tipoDni = [2, 7];
} else if (tipo === 'm') {
  tipoDni = [2, 0];
} else {
  console.log('Ingrese un sexo válido');
  return;
}

for (j = 0, m = 0, k = 0; k < tipoDni.length; k++) {
  algoritmo[m] = verificador[j] * tipoDni[k];
  j++;
  m++;
}

for (i = 0; i < dni.length; i++) {
  algoritmo[m] = dni[i] * verificador[j];
  j++;
  m++;
}

for (m = 0; m < algoritmo.length; m++) {
  total += algoritmo[m];
}
var promedio = Math.round(total / 11);
var numer = total - (promedio * 11);
var z = 11 - numer;

console.log('El CUIT calculado es:');

while (q !== tipoDni.length) {
  console.log(tipoDni[q]);
  q++;
}

while (e !== dni.length) {
  console.log(dni[e]);
  e++;
}

console.log(z);

function validarDni(dni) {
  var exRegDni = /^\d{1}$/;
  return exRegDni.test(dni);
}
