// Martín Romero

const { log }  = require('console');
const getFiguras = require('./collectibles')


const collectibles = {
unifiedCollectibles : [...getFiguras(1), ...getFiguras(2), ...getFiguras(3)],
listFigures : function (array = this.unifiedCollectibles) {
    array.forEach(({marca,nombre,precio,stock}) => {
    console.log(`
    ------------------------
    Marca: ${marca}
    Nombre: ${nombre} 
    Precio: ${precio} 
    Stock: ${stock}
    ------------------------
    `);
});
},
figuresByBrand: function (marca) {
    const filteredFigures = this.unifiedCollectibles.filter(
    (figura) => figura.marca.toLowerCase() === marca.toLowerCase());
    return filteredFigures;
    
    }  
}

const listFiguresCollection = collectibles.figuresByBrand("Bandai");
console.log("Figuras de Bandai:");
collectibles.listFigures(listFiguresCollection);

//console.log("Todas las figuras:");
//console.log(collectibles.listFigures()); // trae todas las figuras
