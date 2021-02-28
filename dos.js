function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let materias;
    let promedio;
    let edad;
    
    let nombrePromedioFisica;
    let mejorPromedioFisica = 0;
    let flagPromedioFisica = 1;

    let edadAlumnaJoven;
    let FlagAlumnaJoven = 1;
    let nombreAlumnaJoven;

    let estudianteMasJoven;
    let nombreMasJoven;
    let edadMasJoven;
    let flagestudianteMasMaterias = 1;

    for(let i= 0; i < 500; i++)
    {
        nombre = prompt("Ingrese un nombre");

        carrera = prompt("Ingrese cursada quimica / fisica / sistemas: ");
		while(carrera != "quimica" && carrera !="fisica" && carrera != "sistemas")
		{
			carrera = prompt("ERROR. Ingrese cursada quimica / fisica / sistemas ");
		}

        sexo = prompt("Ingrese sexo masculino/femenino/nobinario): ");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "nobinario")
		{
			sexo = prompt("Error. Ingrese sexo masculino/femenino/nobinario): ");
		}

        materias = parseInt(prompt("Ingrese cantidad de materias entre 1 y 5: "));
        while(materias < 1 && materias > 5 && isNaN(materias))
        {
        materias = parseInt(prompt("Error. Ingrese cantidad de materias entre 1 y 5: "));
        }

        promedio = parseInt(prompt("Ingrese promedio entre 0 y 10: "));
		while(promedio < 0 || promedio > 10|| isNaN(promedio))
		{
			promedio = parseInt(prompt("Error. Ingrese promedio entre 0 y 10: "));
		}

        edad = parseInt(prompt("Ingrese su edad:"));
		while(!(edad>0) ){
			edad = parseInt(prompt("Dato inválido. Ingrese su edad:"));
		}

         // punto A

        if(carrera == "fisica" && (flagPromedioFisica || promedio > mejorPromedioFisica)){
                nombrePromedioFisica = nombre;
                mejorPromedioFisica = promedio;
                flagPromedioFisica = 0;
            }
        

        //punto B
        
        if(sexo !="masculino" && (FlagAlumnaJoven|| edad > edadAlumnaJoven)){
                edadAlumnaJoven = edad;
                nombreAlumnaJoven = nombre
                FlagAlumnaJoven = 0;
            }

        //punto D

        if(carrera !="quimica" && (flagestudianteMasMaterias || materias > estudianteMasJoven )){
                nombreMasJoven = nombre;
                edadMasJoven = edad;
                estudianteMasJoven = materias;
                flagestudianteMasMaterias = 0;
            }
		}

    alert("A- elnombre del mejor promedio de los alumnos que estudian fisica es: " + nombrePromedioFisica + " "+ promedio + "\n" +
    "B- el nombre de la alumna mas joven es: "+nombreAlumnaJoven + " "+ "y tiene años"+edadAlumnaJoven + "\n" +
    "D- la edad y nombre del estudiante que cursa mas materias que no sean quimica es : "+ " " + nombreMasJoven + " " + edadMasJoven + " " + estudianteMasJoven);

}