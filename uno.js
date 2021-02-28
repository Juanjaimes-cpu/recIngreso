
/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

*/
function mostrar()
{

let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let promProgramador;
let promAnalista;
let promQa;
let contProgramador = 0;
let contAnalista = 0;
let contQa = 0;
let acumProgramador = 0;
let acumAnalista = 0;
let acumQa = 0;
let sexoConMayorSueldo;
let mayorSueldo;
let flagSueldo = 1;
let flagProgramador = 1;
let flagAnalista = 1;
let flagQa = 1;
let flagEmpleadoF = 1;
let nombreFem;
let sueldomaxFem;
let contNobinarios = 0;



do{

nombre = prompt("Ingrese su nombre: ");

edad = parseInt(prompt("Ingrese su edad:"));
while(!(edad>0) ){
edad = parseInt(prompt("Dato inválido. Ingrese su edad:"));
}

sexo = prompt("ingrese sexo femenino/masculino/no binario: ");
   while(sexo != "femenino" && sexo != "masculino" && sexo != "nobinario"){
     sexo = prompt("Error, Ingrese sexo femenino/masculino/no binario: ");
   }
puesto = prompt("ingrese puesto programador/analista/Qa: ");
while(puesto != "programador" && puesto != "analista" && puesto != "qa"){
  puesto = prompt("Error, ingrese puesto programador/analista/Qa: ");
}
sueldo = parseInt(prompt("Ingrese sueldo: "))
while(sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)){
   sueldo = parseInt(prompt("Error, ingrese sueldo: "));
}

//punto A
if(puesto == "programador"){
	acumProgramador += sueldo;
	contProgramador++;
	flagProgramador = 0;
}
else if(puesto == "analista"){
	acumAnalista += sueldo;
	contAnalista++;
	flagAnalista = 0;
}
else
{
	acumQa += sueldo;
	contQa++;
	flagQa = 0;
}

//punto B
if(flagSueldo || (sueldo > mayorSueldo)){
	mayorSueldo += sueldo;
	flagSueldo = 0;
	sexoConMayorSueldo = sexo;
}


//punto C
if(flagEmpleadoF || (sexo == "femenino" && sueldo > sueldomaxFem)){
	sueldomaxFem = sueldo;
	nombreFem = nombre;
	flagEmpleadoF = 0;
}

if(puesto == "nobinario" && sueldo >= 20000 && sueldo <= 55000 && puesto == "programador"){
	contNobinarios++; 
}



seguir = prompt("quiere ingresar otro empleado? ");
   }while (seguir == "s");
   //fin do while

   if(contProgramador != 0){
    promProgramador = acumProgramador / contProgramador;
  }
  if(contAnalista != 0){
    promAnalista = acumAnalista / contAnalista;
  }
  if(contQa != 0){
    promQa = acumQa / contQa;
  }


  alert("El promedio por puesto en programador es: " + promProgramador + "\n" +
  "El promedio por puesto en analista es: " + promAnalista + "\n" +
  "El promedio por puesto en Qa es: " + promQa + "\n" + "\n" +

  "Sexo con mas sueldo: " + sexoConMayorSueldo + "\n" + "\n" +

  "El sueldo mas alto femenino es: " + nombreFem + " con un sueldo de: " + sueldomaxFem + "\n" + "\n" +

  "La cantidad de programadores Nobinarios es: " + contNobinarios);


}



