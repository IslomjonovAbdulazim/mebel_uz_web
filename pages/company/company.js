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

    // Use mock data instead of fetching from an API
    const mockCompany = {
      instagramChannel: "https://instagram.com/company",
      telegramChannel: "https://t.me/company",
      website: "https://company.com",
      telegramBot: "https://t.me/companyBot",
      phoneNumbers: ["+998 90 123 45 67", "+998 93 987 65 43"],
      adminName: "Abduazim Islomjonov",
      lat: 41.2995,
      lon: 69.2401,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
      ]
    };
  
    renderCompanyDetail(mockCompany);
  });
  
  function renderCompanyDetail(company) {
    // Social/media links
    document.getElementById("instagram-link").href = company.instagramChannel;
    document.getElementById("telegram-link").href = company.telegramChannel;
    document.getElementById("website-link").href = company.website;
    document.getElementById("telegram-bot-link").href = company.telegramBot;
  

    const phoneContainer = document.getElementById("company-phones");
    phoneContainer.innerHTML = company.phoneNumbers
      .map(num => `<p class="phone-number">📞 ${num}</p>`)
      .join("");
  
    // Map button & embedded map
    document.getElementById("map-link").href =
      `https://www.google.com/maps?q=${company.lat},${company.lon}`;
    const locationContainer = document.getElementById("company-location");
    locationContainer.innerHTML = `
      <iframe 
        src="https://www.google.com/maps?q=${company.lat},${company.lon}&output=embed" 
        width="100%" 
        height="200" 
        frameborder="0">
      </iframe>
    `;
  }
  