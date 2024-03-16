const bikeCategories = document.querySelectorAll('#bike');
const bikeImage = document.getElementById('image_bike');

bikeCategories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.textContent.trim();
        let imagePrefix = '';
        switch (categoryName) {
        case 'Mountain Bikes':
            imagePrefix = 'mountain_bike';
            break;
        case 'Road Bikes':
            imagePrefix = 'road_bike';
            break;
        case 'Hybrid Bikes':
            imagePrefix = 'hybrid_bike';
            break;
        case 'Kids Bikes':
            imagePrefix = 'kids_bike';
            break;
        }
        bikeImage.src = `img/${imagePrefix}5.png`;

    });
});