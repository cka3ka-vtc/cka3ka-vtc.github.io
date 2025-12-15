// Компоненты сайта
const Components = {
    // Конфигурация компонентов для разных страниц
    pageConfig: {
        'index.html': {
            subtitle: 'VIRTUAL TRUCKING COMPANY',
            footerText: 'Присоединяйтесь к нашей компании и откройте мир виртуальных грузоперевозок!'
        },
        'ferries.html': {
            subtitle: 'ПЕРЕПРАВЫ И МАРШРУТЫ',
            footerText: 'Присоединяйтесь к нашей компании и откройте мир виртуальных грузоперевозок!'
        },
        '': { // Для корневой страницы
            subtitle: 'VIRTUAL TRUCKING COMPANY',
            footerText: 'Присоединяйтесь к нашей компании и откройте мир виртуальных грузоперевозок!'
        }
    },
    
    // Загрузка компонента
    async loadComponent(componentName) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
            return '';
        }
    },
    
    // Загрузка всех компонентов
    async loadAllComponents() {
        // Загружаем заголовок
        const headerHTML = await this.loadComponent('header');
        if (headerHTML) {
            document.getElementById('header-container').innerHTML = headerHTML;
        }
        
        // Загружаем навигацию
        const navigationHTML = await this.loadComponent('navigation');
        if (navigationHTML) {
            document.getElementById('navigation-container').innerHTML = navigationHTML;
            this.setActiveNavigation();
        }
        
        // Загружаем футер
        const footerHTML = await this.loadComponent('footer');
        if (footerHTML) {
            document.getElementById('footer-container').innerHTML = footerHTML;
            this.updatePageContent();
        }
        
        // Показываем основной контент после загрузки компонентов
        this.showMainContent();
    },
    
    // Установка активной навигации
    setActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        
        // Определяем текущую страницу
        let currentPage = 'home'; // По умолчанию
        
        if (currentPath.includes('ferries.html') || 
            currentPath.endsWith('/ferries') ||
            currentPath === '/ferries') {
            currentPage = 'ferries';
        }
        
        // Устанавливаем активный класс
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    },
    
    // Обновление контента страницы (подзаголовок и футер)
    updatePageContent() {
        const currentPath = window.location.pathname;
        const filename = currentPath.split('/').pop() || '';
        
        // Получаем конфигурацию для текущей страницы
        const config = this.pageConfig[filename] || this.pageConfig['index.html'];
        
        // Обновляем подзаголовок
        const subtitleElement = document.getElementById('page-subtitle');
        if (subtitleElement && config.subtitle) {
            subtitleElement.textContent = config.subtitle;
        }
        
        // Обновляем текст футера
        const footerTextElement = document.getElementById('footer-text');
        if (footerTextElement && config.footerText) {
            footerTextElement.textContent = config.footerText;
        }
    },
    
    // Показ основного контента
    showMainContent() {
        // Показываем основной контент
        const mainContent = document.querySelector('main.content');
        if (mainContent) {
            mainContent.style.display = 'block';
            this.initAnimations();
        }
    },
    
    // Инициализация анимаций
    initAnimations() {
        // Показываем все элементы с анимациями
        const animatedElements = document.querySelectorAll('.animate, .delay-1, .delay-2, .delay-3, .delay-4');
        
        animatedElements.forEach(el => {
            // Устанавливаем начальное состояние
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            // Анимируем появление
            const delay = el.classList.contains('delay-1') ? 200 :
                         el.classList.contains('delay-2') ? 400 :
                         el.classList.contains('delay-3') ? 600 :
                         el.classList.contains('delay-4') ? 800 : 0;
            
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        });
        
        // Анимация для логотипа
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', function() {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            });
        }
    },
    
    // Инициализация компонентов
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.loadAllComponents();
        });
    }
};

// Инициализация компонентов
Components.init();