const cardOnproductBebida = `

<div class="product-container">
    <div class="mini-card-product-pizza">
        <div class="mini-card-content-product-pizza">
        <div class="container-mini-card-image-product-bebida">
            <img src="./images/img-icon-bebida.png" alt="" class="mini-card-image" />
        </div>
        <div class="mini-card-container-informations-product-pizza">
            <div class="mini-card-content-information-product-pizza">
            <div class="title-pizza-container">
                <span class="title-mini-card-product-pizza">${drink}</span>
            </div>
            <span class="ingredientes-representation-product-pizza">Quantidade </span>
            <span class="ingredientes-components-product-pizza">${size}</span>
            </div>
            <div class="price-container-product-pizza">
            <span class="preco-product-pizza">${price}</span>
            </div>
        </div>
        </div>
    </div>
</div>

`

document.body.innerHTML = cardOnproductBebida

const cardOnproductPizza = `
<div class="product-container">
    <div class="mini-card-product-pizza">
        <div class="mini-card-content-product-pizza">
            <div class="container-mini-card-image-product-pizza">
                <img src="./images/img-icon-pizza.png" alt="" class="mini-card-image" />
            </div>
            <div class="mini-card-container-informations-product-pizza">
                <div class="mini-card-content-information-product-pizza">
                    <div class="title-pizza-container">
                    <span class="title-mini-card-product-pizza">${pizza}</span>
                </div>
                <span class="ingredientes-representation-product-pizza">ingredientes: </span>
                <span class="ingredientes-components-product-pizza">${ingredient}</span>
            </div>
                <div class="price-container-product-pizza">
                    <span class="preco-product-pizza">${price}</span>
                </div>
            </div>
        </div>
    </div>
</div>

`

document.body.innerHTML = cardOnproductPizza






