// Инициализация анимаций
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-quad'
});

// Плавный скролл
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Загрузка товаров из БД
async function loadProducts() {
  try {
      const response = await fetch('http://localhost:5000/api/products');
      const products = await response.json();
      
      const container = document.getElementById('product-container');
      container.innerHTML = products.map(product => `
          <div class="product-card" data-aos="zoom-in">
              <div class="image-container">
                  <img src="${product.image_url}" alt="${product.name}" class="product-img">
              </div>
              <h3>${product.name}</h3>
              <p class="product-price">${product.price.toLocaleString()} ₽</p>
          </div>
      `).join('');

      // Обновляем AOS для новых элементов
      AOS.refresh();

  } catch (error) {
      console.error('Ошибка загрузки товаров:', error);
      container.innerHTML = '<p class="error">Товары временно недоступны</p>';
  }
}

// Проверка изображений
function checkImages() {
  document.querySelectorAll('.product-img').forEach(img => {
      if (!img.complete || img.naturalWidth === 0) {
          img.src = 'images/placeholder.jpg';
      }
  });
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  window.addEventListener('load', checkImages);
});