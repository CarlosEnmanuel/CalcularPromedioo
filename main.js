function Promedio(){
  // Obtener los valores de las notas como cadenas de texto
  let nota1Str = document.getElementById('nota1').value;
  let nota2Str = document.getElementById('nota2').value;
  let nota3Str = document.getElementById('nota3').value;
  let mostrar = document.getElementById('result');
  
  // Convertir las cadenas de texto en números
  let nota1 = parseFloat(nota1Str);
  let nota2 = parseFloat(nota2Str);
  let nota3 = parseFloat(nota3Str);

  // Verificar si las notas son valores numéricos válidos
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
   alert("Por favor, llenar todos los campos.");
    return; // Detener la ejecución si hay notas inválidas
  }


  if((nota1 > 0 && nota1 < 10) && (nota2 > 0 && nota2 < 10) && (nota3 > 0 && nota3 < 10)){
    // Calcular el promedio
    let result = (nota1 + nota2 + nota3) / 3;

    // Mostrar el resultado
    mostrar.textContent = result.toFixed(2); // Mostrar el resultado con dos decimales
  }else{
    alert("Ingresar notas comprendidas entre 0-10")
  }
  //ok

 

}
