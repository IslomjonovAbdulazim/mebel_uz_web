document.addEventListener('DOMContentLoaded', async () => {
    const detailContainer = document.getElementById('product-detail');

    try {
        const item = await fetchFurnitureDetail(1);
        renderProductDetail(item);
    } catch (err) {
        console.error("Маҳсулот маълумотларини олишда хатолик юз берди:", err);
        console.warn("Синов маълумотларидан фойдаланилмоқда.");

        const mockFurniture = {
            id: 1,
            name: "Чиройли Ёғочли Стол",
            price: 1_500_000,
            description: "Юқори сифатли ёғочдан ясалган ва мустаҳкам тузилмага эга стол.".repeat(2),
            weight: 2.5,
            height: 75,
            width: 120,
            material: "Ёғоч ва Металл",
            images: [
                "https://www.chiltons.com/cdn/shop/products/Table_Shaker_Heirloom_85053.jpg?v=1634308239",
                "https://woodsala.com/cdn/shop/products/SGHWS0773_4.jpg?v=1613061618",
                "https://homestyledepot.com.ph/wp-content/uploads/2019/11/Toya-Icons-Sophia-4-seater.jpg"
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
                ${item.images.map((img, index) => `<img class="thumbnail" src="${img}" data-index="${index}" alt="Миниатюра ${index + 1}">`).join('')}
            </div>
        </div>

        <div class="product-info">
            <h2>${item.name}</h2>
            <p class="price">${item.price.toLocaleString('uz-UZ')} UZS</p>
        </div>

        <div class="specs">
            <div class="specs-item"><strong>Бўйи:</strong> <span>${item.height} см</span></div>
            <div class="specs-item"><strong>Эни:</strong> <span>${item.width} см</span></div>
            <div class="specs-item"><strong>Вазни:</strong> <span>${item.weight} кг</span></div>
            <div class="specs-item"><strong>Материал:</strong> <span>${item.material}</span></div>
        </div>

        <p class="description">${item.description}</p>

        <button id="buy-btn" class="buy-btn">🛒 Саватга қўшиш</button>
    `;

    // Расмни танлашни бошқариш
    document.querySelectorAll('.thumbnail').forEach(img => {
        img.addEventListener('click', (e) => {
            document.getElementById('main-image').src = e.target.src;
        });
    });

    // Харид қилиш тугмасини бошқариш
    document.getElementById('buy-btn').addEventListener('click', () => {
        window.location.href = "../company/company.html";
    });
}
