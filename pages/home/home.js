document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle the menu when clicking the icon
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
  
  document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('show');
    }
  }); 

  // Hardcoded local test data (or fetch from API)
  const dummyData = [
    {
      id: 1,
      name: "Lauryn Hackett",
      price: 7187024,
      images: [
        "https://www.chiltons.com/cdn/shop/products/Table_Shaker_Heirloom_85053.jpg?v=1634308239"
      ],
    },
    {
      id: 2,
      name: "Dr Frieda",
      price: 3973847,
      images: [
        "https://woodsala.com/cdn/shop/products/SGHWS0773_4.jpg?v=1613061618"
      ]
    },
    {
      id: 3,
      name: "Brenna Kutch",
      price: 7247928,
      images: [
        "https://homestyledepot.com.ph/wp-content/uploads/2019/11/Toya-Icons-Sophia-4-seater.jpg"
      ]
    },
    {
      id: 4,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://homemakersfurniture.scene7.com/is/image/HomemakersFurniture/PABW745703_D?&wid=622&hei=490&fit=fit,1"
      ]
    },
    {
      id: 5,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://images-cdn.ubuy.co.in/66802aaaf3a57a0c564a6b5f-79-39-39-modern-dining-table-set-for.jpg"
      ]
    },
    {
      id: 6,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://www.orangetree.in/cdn/shop/files/LinnCoffeeTableLifestyle4.jpg?v=1722850287"
      ]
    },
    {
      id: 7,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Writing_table_%28bureau_plat%29_MET_DP105403.jpg/275px-Writing_table_%28bureau_plat%29_MET_DP105403.jpg"
      ]
    },
    {
      id: 8,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://ventofurniture.com/wp-content/uploads/2024/01/Legno-Center-Table.webp"
      ]
    },
    {
      id: 9,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://m.media-amazon.com/images/I/71ot0H1YEpL._AC_UF1000,1000_QL80_.jpg"
      ]
    },
  ];

  renderFurnitureList(dummyData);
});

function renderFurnitureList(furnitureArray) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  furnitureArray.forEach(item => {
    const { id, name, price, images } = item;

    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
      <img src="${images[0]}" alt="${name}" />
      <div class="product-info">
        <h2>${name}</h2>
        <p class="price">${price.toLocaleString('uz-UZ')} UZS</p>
      </div>
    `;

    // Click event to navigate to product details page
    card.addEventListener('click', () => {
      window.location.href = `../product/product.html?id=${id}`;
    });

    container.appendChild(card);
  });
}
