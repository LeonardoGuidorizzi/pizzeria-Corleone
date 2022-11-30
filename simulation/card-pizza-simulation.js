// const cardPizza = `
// <div class ="card-produto">
//     <span class ="pizzaTitle">Muzzarela</span>
// </div>
// `

const cardPizza = document.createElement('div');
cardPizza.innerHTML = `
<div class ="card-produto">
    <span class ="pizzaTitle">Muzzarela</span>
</div>
`;


document.querySelector('.esquerda').appendChild(cardPizza);