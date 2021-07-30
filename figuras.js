// Código del cuadrado

function perimetroCuadrado (lado){
    return lado*4;
} 

function areaCuadrado (lado){
   return lado *lado;
} 

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
        return (base*altura)/2;
}


// Código del círculo

function diametroCirculo (radio) {
    return radio*2;
}


const PI= Math.PI;
                    
function perimetroCirculo (radio) {
    const diametro= diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo (radio) {
    return (radio*radio)*PI;
}



// Aqui interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
   const input= document.getElementById("InputCuadrado");
   const value= input.value;

   const perimetro= perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value;
 
    const area= areaCuadrado(value);
    alert(area);
}

// Triángulo
function calcularPerimetroTriangulo() {
    const input1= document.getElementById("InputLado1");
    const value1= Number(input1.value);

    const input2= document.getElementById("InputLado2");
    const value2= Number(input2.value);

    const inputB= document.getElementById("InputBase");
    const valueBase= Number(inputB.value);
 
    const perimetro= perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
 }
 
 function calcularAreaTriangulo() {
     const inputB= document.getElementById("InputBase");
     const valueBase= Number(inputB.value);

     const inputH= document.getElementById("InputAltura");
     const valueH= Number(inputH.value);
  
     const area= areaTriangulo(valueBase, valueH );
     alert(area);
 }
// Círculo 
function calcularPerimetroCirculo() {
    const input= document.getElementById("InputCirculo");
    const value= input.value;
 
    const perimetro= perimetroCirculo(value);
    alert(perimetro);
 }
 
 function calcularAreaCirculo() {
     const input= document.getElementById("InputCirculo");
     const value= input.value;
  
     const area= areaCirculo(value);
     alert(area);
 }