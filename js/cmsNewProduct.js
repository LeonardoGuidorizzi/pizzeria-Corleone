const getForm = () => {
    const productName = document.getElementById('product-name-input').value
    const productIngredients = document.getElementById('product-ingredients-input').value
    const productSizeSelect = document.getElementById('product-size-select').value
    const productTypeSelect = document.getElementById('product-type-select').value
    const discountCheck = document.getElementById('yes-discount-option')
    let productDiscount

    if (discountCheck.checked) {
        productDiscount = removeAttribute('disabled')
        productDiscount = document.getElementById('product-discount').value

    }




}

const pizzas = await pizzas()



document.querySelector('#save-button').addEventListener('click', () => {
    getForm()
})