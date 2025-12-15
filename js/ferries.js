// Все данные о переправах
const allFerries = [
    // Албания
    { country: "Албания", route: "Дуррес ⟷ Анкона", distance: 580 },
    { country: "Албания", route: "Дуррес ⟷ Бари", distance: 225 },
    
    // Германия
    { country: "Германия", route: "Росток ⟷ Гедсер", distance: 65 },
    { country: "Германия", route: "Росток ⟷ Треллеборг", distance: 180 },
    { country: "Германия", route: "Травемюнде ⟷ Хельсинки", distance: 1256 },
    { country: "Германия", route: "Травемюнде ⟷ Лиепая", distance: 730 },
    { country: "Германия", route: "Травемюнде ⟷ Привалл", distance: 1 },
    
    // Дания
    { country: "Дания", route: "Гедсер ⟷ Росток", distance: 65 },
    { country: "Дания", route: "Эсбьерг ⟷ Кингстон-апон-Халл (Гримсби)", distance: 615 },
    { country: "Дания", route: "Фредериксхавн ⟷ Гётеборг", distance: 95 },
    { country: "Дания", route: "Хиртсхальс ⟷ Берген", distance: 591 },
    { country: "Дания", route: "Хиртсхальс ⟷ Ставангер", distance: 386 },
    { country: "Дания", route: "Хиртсхальс ⟷ Кристиансанн", distance: 146 },
    
    // Великобритания
    { country: "Великобритания", route: "Тайн (Ньюкасл-апон-Тайн) ⟷ Эймёйден (Амстердам)", distance: 509 },
    { country: "Великобритания", route: "Кингстон-апон-Халл (Гримсби) ⟷ Эсбьерг", distance: 615 },
    { country: "Великобритания", route: "Кингстон-апон-Халл (Гримсби) ⟷ Европорт (Роттердам)", distance: 370 },
    { country: "Великобритания", route: "Харидж (Филикстоу) ⟷ Европорт (Роттердам)", distance: 207 },
    { country: "Великобритания", route: "Дувр ⟷ Кале", distance: 49 },
    { country: "Великобритания", route: "Фолкстон (Дувр) ⟷ Кале(жд)", distance: 60 },
    { country: "Великобритания", route: "Плимут ⟷ Роскоф", distance: 196 },
    { country: "Великобритания", route: "Плимут ⟷ Бильбао", distance: 842 },
    { country: "Великобритания", route: "Плимут ⟷ Сантандер", distance: 846 },
    
    // Греция
    { country: "Греция", route: "Игуменица (Янина) ⟷ Бари", distance: 446 },
    { country: "Греция", route: "Игуменица (Янина) ⟷ Анкона", distance: 811 },
    { country: "Греция", route: "Игуменица (Янина) ⟷ Триест", distance: 1026 },
    { country: "Греция", route: "Игуменица (Янина) ⟷ Аргостолион", distance: 246 },
    { country: "Греция", route: "Патры ⟷ Бари", distance: 600 },
    { country: "Греция", route: "Патры ⟷ Анкона", distance: 961 },
    { country: "Греция", route: "Патры ⟷ Триест", distance: 1200 },
    { country: "Греция", route: "Патры ⟷ Аргостолион", distance: 131 },
    { country: "Греция", route: "Ханья ⟷ Пирей (Афины)", distance: 290 },
    { country: "Греция", route: "Ханья ⟷ Каламата", distance: 290 },
    { country: "Греция", route: "Ираклион ⟷ Пирей (Афины)", distance: 320 },
    { country: "Греция", route: "Родос ⟷ Пирей (Афины)", distance: 480 },
    { country: "Греция", route: "Хиос ⟷ Кавала", distance: 350 },
    { country: "Греция", route: "Хиос ⟷ Пирей (Афины)", distance: 290 },
    { country: "Греция", route: "Хиос ⟷ Митилена", distance: 120 },
    { country: "Греция", route: "Митилена ⟷ Кавала", distance: 370 },
    { country: "Греция", route: "Ликсури ⟶ Аргостолион", distance: 6 },
    
    // Испания
    { country: "Испания", route: "Бильбао ⟷ Плимут", distance: 842 },
    { country: "Испания", route: "Сантандер ⟷ Плимут", distance: 846 },
    { country: "Испания", route: "Барселона ⟷ Порто-Торрес (Сассари)", distance: 578 },
    { country: "Испания", route: "Барселона ⟷ Неаполь", distance: 1050 },
    { country: "Испания", route: "Валенсия ⟷ Палермо", distance: 1250 },
    
    // Италия
    { country: "Италия", route: "Порто-Торрес (Сассари) ⟷ Аяччо", distance: 135 },
    { country: "Италия", route: "Порто-Торрес (Сассари) ⟷ Барселона", distance: 578 },
    { country: "Италия", route: "Кальяри ⟷ Неаполь", distance: 500 },
    { country: "Италия", route: "Кальяри ⟷ Палермо", distance: 420 },
    { country: "Италия", route: "Мессина ⟷ Вилла-Сан-Джованни", distance: 8 },
    { country: "Италия", route: "Палермо ⟷ Валенсия", distance: 1250 },
    { country: "Италия", route: "Палермо ⟷ Неаполь", distance: 335 },
    { country: "Италия", route: "Неаполь ⟷ Барселона", distance: 1050 },
    { country: "Италия", route: "Триест ⟷ Анкона", distance: 251 },
    { country: "Италия", route: "Триест ⟷ Бари", distance: 735 },
    { country: "Италия", route: "Триест ⟷ Игуменица (Янина)", distance: 1026 },
    { country: "Италия", route: "Триест ⟷ Патры", distance: 1200 },
    { country: "Италия", route: "Анкона ⟷ Сплит", distance: 240 },
    { country: "Италия", route: "Анкона ⟷ Дуррес", distance: 580 },
    { country: "Италия", route: "Анкона ⟷ Игумениция (Янина)", distance: 811 },
    { country: "Италия", route: "Анкона ⟷ Патры", distance: 961 },
    { country: "Италия", route: "Бари ⟷ Дуррес", distance: 225 },
    { country: "Италия", route: "Бари ⟷ Игуменица (Янина)", distance: 446 },
    { country: "Италия", route: "Бари ⟷ Патры", distance: 600 },
    
    // Нидерланды
    { country: "Нидерланды", route: "Эймёйден (Амстердам) ⟷ Тайн (Ньюкасл-апон-Тайн)", distance: 509 },
    { country: "Нидерланды", route: "Европорт (Роттердам) ⟷ Кингстон-апон-Халл (Гримсби)", distance: 370 },
    { country: "Нидерланды", route: "Европорт (Роттердам) ⟷ Харидж (Филикстоу)", distance: 207 },
    
    // Норвегия
    { country: "Норвегия", route: "Берген ⟷ Хиртсхальс", distance: 591 },
    { country: "Норвегия", route: "Ставангер ⟷ Хиртсхальс", distance: 386 },
    { country: "Норвегия", route: "Кристиансанн ⟷ Хиртсхальс", distance: 146 },
    { country: "Норвегия", route: "Осло ⟷ Фредериксхавн", distance: 291 },
    { country: "Норвегия", route: "Богнес (Будё) ⟷ Скарбергет (Нарвик)", distance: 11 },
    { country: "Норвегия", route: "Свольвер ⟷ Скутвик (Будё)", distance: 41 },
    
    // Польша
    { country: "Польша", route: "Гдыня (Гданьск) ⟷ Карлскруна", distance: 325 },
    { country: "Польша", route: "Гданьск ⟷ Нюнесхамн", distance: 515 },
    
    // Финляндия
    { country: "Финляндия", route: "Наантали ⟷ Капельшер", distance: 207 },
    { country: "Финляндия", route: "Хельсинки ⟷ Таллин", distance: 82 },
    { country: "Финляндия", route: "Хельсинки ⟷ Травемюнде", distance: 1256 },
    { country: "Финляндия", route: "Вааса ⟷ Умео", distance: 101 },
    
    // Франция
    { country: "Франция", route: "Кале ⟷ Дувр", distance: 49 },
    { country: "Франция", route: "Кале(жд) ⟷ Фолкстон (Дувр)", distance: 60 },
    { country: "Франция", route: "Роскоф ⟷ Плимут", distance: 196 },
    { country: "Франция", route: "Марсель ⟷ Барселона", distance: 368 },
    { country: "Франция", route: "Марсель ⟷ Порто-Веккью", distance: 460 },
    { country: "Франция", route: "Аяччо ⟷ Порто-Торрес (Сассари)", distance: 135 },
    
    // Швеция
    { country: "Швеция", route: "Гётеборг ⟷ Фредериксхавн", distance: 95 },
    { country: "Швеция", route: "Треллеборг ⟷ Росток", distance: 180 },
    { country: "Швеция", route: "Карлскруна ⟷ Гдыня (Гданьск)", distance: 325 },
    { country: "Швеция", route: "Нюнесхамн ⟷ Гданьск", distance: 515 },
    { country: "Швеция", route: "Нюнесхамн ⟷ Вентспилс", distance: 276 },
    { country: "Швеция", route: "Капельшер ⟷ Палдиски", distance: 284 },
    { country: "Швеция", route: "Капельшер ⟷ Наантали", distance: 207 },
    { country: "Швеция", route: "Умео ⟷ Вааса", distance: 101 },
    
    // Эстония
    { country: "Эстония", route: "Таллин ⟷ Хельсинки", distance: 82 },
    { country: "Эстония", route: "Палдиски ⟷ Капельшер", distance: 284 },
    
    // Латвия
    { country: "Латвия", route: "Вентспилс ⟷ Нюнесхамн", distance: 276 },
    { country: "Латвия", route: "Лиепая ⟷ Травемюнде", distance: 730 },
    
    // Хорватия
    { country: "Хорватия", route: "Сплит ⟷ Анкона", distance: 240 }
];

// Добавляем поисковый текст для каждого элемента
allFerries.forEach(ferry => {
    ferry.searchText = `${ferry.country} ${ferry.route} ${ferry.distance}`.toLowerCase();
});

// Функции для работы со страницей переправ
function initFerriesPage() {
    let filteredFerries = [...allFerries];
    let currentPage = 1;
    const itemsPerPage = 20;
    let currentSort = 'country-asc';
    let currentSearch = '';
    let currentCountry = '';

    function applyFilters() {
        // Применяем фильтры
        filteredFerries = allFerries.filter(ferry => {
            // Фильтр по поиску
            if (currentSearch && !ferry.searchText.includes(currentSearch.toLowerCase())) {
                return false;
            }
            
            // Фильтр по стране
            if (currentCountry && ferry.country !== currentCountry) {
                return false;
            }
            
            return true;
        });
        
        // Применяем сортировку
        applySorting();
        
        // Обновляем таблицу
        updateTable();
        
        // Обновляем пагинацию
        updatePagination();
        
        // Обновляем счетчик
        updateResultsCount();
    }
    
    function applySorting() {
        const [field, direction] = currentSort.split('-');
        
        filteredFerries.sort((a, b) => {
            let compareA, compareB;
            
            if (field === 'distance') {
                compareA = a.distance;
                compareB = b.distance;
            } else if (field === 'country') {
                compareA = a.country.toLowerCase();
                compareB = b.country.toLowerCase();
            } else {
                compareA = a.route.toLowerCase();
                compareB = b.route.toLowerCase();
            }
            
            if (direction === 'asc') {
                return compareA > compareB ? 1 : -1;
            } else {
                return compareA < compareB ? 1 : -1;
            }
        });
    }
    
    function updateTable() {
        const tableBody = document.getElementById('ferriesTableBody');
        if (!tableBody) return;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageFerries = filteredFerries.slice(startIndex, endIndex);
        
        if (pageFerries.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="no-results">
                        <i class="fas fa-search"></i>
                        <div>Ничего не найдено. Попробуйте изменить параметры поиска.</div>
                    </td>
                </tr>
            `;
            return;
        }
        
        let html = '';
        
        pageFerries.forEach((ferry, index) => {
            html += `
                <tr>
                    <td class="country-cell">
                        ${ferry.country}
                    </td>
                    <td class="route-cell">
                        ${ferry.route.replace(' ⟷ ', '<span class="route-separator">⟷</span>')}
                    </td>
                    <td class="distance-cell">
                        ${ferry.distance.toLocaleString()} км
                    </td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = html;
    }
    
    function updatePagination() {
        const pagination = document.getElementById('pagination');
        if (!pagination) return;
        
        const totalPages = Math.ceil(filteredFerries.length / itemsPerPage);
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }
        
        let html = '';
        
        // Кнопка "Назад"
        html += `
            <button class="page-btn" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
        
        // Номера страниц
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            html += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </button>
            `;
        }
        
        // Кнопка "Вперед"
        html += `
            <button class="page-btn" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        pagination.innerHTML = html;
        
        // Добавляем обработчики событий
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    applyFilters();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    applyFilters();
                }
            });
        }
        
        document.querySelectorAll('.page-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', () => {
                currentPage = parseInt(btn.dataset.page);
                applyFilters();
            });
        });
    }
    
    function updateResultsCount() {
        const resultsCount = document.getElementById('resultsCount');
        if (!resultsCount) return;
        
        if (filteredFerries.length === 0) {
            resultsCount.textContent = 'Нет данных для отображения';
        } else {
            const start = (currentPage - 1) * itemsPerPage + 1;
            const end = Math.min(currentPage * itemsPerPage, filteredFerries.length);
            resultsCount.textContent = `Показано ${start}-${end} из ${filteredFerries.length} переправ`;
        }
    }
    
    // Обработчики событий
    const searchInput = document.getElementById('searchInput');
    const countryFilter = document.getElementById('countryFilter');
    const sortSelect = document.getElementById('sortSelect');
    const resetBtn = document.getElementById('resetBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value;
            currentPage = 1;
            applyFilters();
        });
    }
    
    if (countryFilter) {
        countryFilter.addEventListener('change', function(e) {
            currentCountry = e.target.value;
            currentPage = 1;
            applyFilters();
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            currentSort = e.target.value;
            applyFilters();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            if (countryFilter) countryFilter.value = '';
            if (sortSelect) sortSelect.value = 'country-asc';
            
            currentSearch = '';
            currentCountry = '';
            currentSort = 'country-asc';
            currentPage = 1;
            
            applyFilters();
        });
    }
    
    // Сортировка по клику на заголовок таблицы
    document.querySelectorAll('.ferries-table th[data-sort]').forEach(th => {
        th.addEventListener('click', function() {
            const sortField = this.dataset.sort;
            const currentDir = currentSort.includes('asc') ? 'asc' : 'desc';
            
            // Если кликаем по тому же полю, меняем направление
            if (currentSort.startsWith(sortField)) {
                currentSort = `${sortField}-${currentDir === 'asc' ? 'desc' : 'asc'}`;
            } else {
                currentSort = `${sortField}-asc`;
            }
            
            // Обновляем выпадающий список
            if (sortSelect) sortSelect.value = currentSort;
            
            // Обновляем иконки сортировки
            document.querySelectorAll('.ferries-table th i').forEach(icon => {
                icon.className = 'fas fa-sort';
            });
            
            this.querySelector('i').className = `fas fa-sort-${currentSort.includes('asc') ? 'up' : 'down'}`;
            
            applyFilters();
        });
    });
    
    // Инициализация
    applyFilters();
}

// Инициализация страницы переправ
if (document.getElementById('ferriesTableBody')) {
    initFerriesPage();
}