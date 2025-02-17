document.addEventListener('DOMContentLoaded', async () => {
    const detailContainer = document.getElementById('product-detail');

    try {
        const item = await fetchFurnitureDetail(1);
        renderProductDetail(item);
    } catch (err) {
        console.error("Error fetching product:", err);
        console.warn("Using mock data instead.");

        const mockFurniture = {
            id: 1,
            name: "Mountain Landscape Painting",
            price: 150,
            description: "A beautiful mountain landscape painting with vibrant colors.".repeat(3),
            weight: 2.5,
            height: 60,
            width: 40,
            material: "Leather va Steel",
            images: [
                "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
                "https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg",
                "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg"
            ],
        };

        renderProductDetail(mockFurniture);
    }
});

function renderProductDetail(item) {
    const detailContainer = document.getElementById('product-detail');
    detailContainer.innerHTML = `
        <div class="image-gallery">
            <img id="main-image" class="main-image" src="${item.images[0]}" alt="${item.name}" />
            <div class="thumbnail-container">
                ${item.images.map((img, index) => `<img class="thumbnail" src="${img}" data-index="${index}" alt="Thumbnail ${index + 1}">`).join('')}
            </div>
        </div>

        <div class="product-info">
            <h2>${item.name}</h2>
            <p class="price">${item.price} UZS</p>
        </div>

        <div class="specs">
            <div class="specs-item"><strong>Bo'yi</strong> <span>${item.height}cm</span></div>
            <div class="specs-item"><strong>Eni</strong> <span>${item.width}cm</span></div>
            <div class="specs-item"><strong>Vazni</strong> <span>${item.weight}kg</span></div>
            <div class="specs-item"><strong>Material</strong> <span>${item.material}</span></div>
        </div>

        <p class="description">${item.description}</p>

        <button id="buy-btn" class="buy-btn">🛒 Xarid qilish</button>
    `;

    // Handle image selection
    document.querySelectorAll('.thumbnail').forEach(img => {
        img.addEventListener('click', (e) => {
            document.getElementById('main-image').src = e.target.src;
        });
    });

    // Handle navigation to company page
    document.getElementById('buy-btn').addEventListener('click', () => {
        window.location.href = "../company/company.html";
    });
}
