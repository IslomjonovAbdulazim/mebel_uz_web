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
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      ]
    },
    {
      id: 2,
      name: "Dr Frieda",
      price: 3973847,
      images: [
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      ]
    },
    {
      id: 3,
      name: "Brenna Kutch",
      price: 7247928,
      images: [
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      ]
    },
    {
      id: 4,
      name: "Archibald",
      price: 8985507,
      images: [
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      ]
    }
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
