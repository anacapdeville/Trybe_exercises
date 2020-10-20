let peca="Cavalo";
let peca2=peca.toLowerCase();
if (peca2=="rei"){
  console.log("horizontal, vertical e diagonal")
}
else if (peca2=="rainha"){
  console.log("horizontal, vertical e diagonal")
}
else if (peca2=="bispo"){
  console.log("diagonal")
}
else if (peca2=="cavalo"){
  console.log("duas casas em sentido horizontal e maus uma na vertical ou vice-versa")
}
else if (peca2=="torre"){
  console.log("vertical ou horizontal")
}
else if (peca2=="peao"){
  console.log("diagonal")
}
else{
  console.log("erro")
}