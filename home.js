fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    const productList = document.getElementById('product-list');
    
    data.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-3 ';

        const card = document.createElement('div');
        card.className = 'card h-100 text-center cards-hover';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = product.image; // Image from the API
        img.alt = product.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = product.title;

     
        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        productList.appendChild(col);
    });
})
.catch(error => console.error('Error fetching the products:', error));