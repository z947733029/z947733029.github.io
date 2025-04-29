document.addEventListener('DOMContentLoaded', function () {
    // 搜索功能
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchEngine = document.getElementById('searchEngine');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchInputValue = searchInput.value;
        if (searchInputValue.trim() !== '') {
            window.open(searchEngine.value + encodeURIComponent(searchInputValue), '_blank');
        }
    });

    // 搜索功能
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchForm.dispatchEvent(new Event('submit'));
        }
    });

    // 分类切换功能
    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('href').substring(1); // 获取分类id

            // 平滑滚动到分类内容
            document.querySelector(`#${category}`).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加页面加载后延迟显示分类内容的效果
    const categories = document.querySelectorAll('.category');
    categories.forEach((category, index) => {
        setTimeout(() => {
            category.style.display = 'block';
            setTimeout(() => {
                category.classList.add('show');
            }, 100);
        }, index * 200);
    });
});