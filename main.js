let numeroKilometri = parseFloat (prompt ('Quanti kilometri devi fare?'));
let eta = parseFloat (prompt ('Quanti anni hai?'));

const prezzoAlKilometro = 0.21;

let costo = numeroKilometri * prezzoAlKilometro

if(eta < 18){
    costo *= 0.80;
    document.writeln(`Il costo del biglietto per i minorenni è ${costo.toFixed(2)}€`)
} else if(eta > 65){
    costo *= 0.60;
    document.writeln(`Il costo del biglietto per gli over 65 è ${costo.toFixed(2)}€`)
} else {
    document.writeln(`Il costo del biglietto per i maggiorenni è ${costo.toFixed(2)}€`)
}

console.log (parseFloat (costo.toFixed(2) ) )