// Управление навигацией и плавными переходами
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики для всех внутренних ссылок
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        
        if (link && 
            link.href && 
            !link.href.startsWith('http') && 
            !link.href.startsWith('//') &&
            !link.hasAttribute('target') &&
            link.getAttribute('href') !== '#' &&
            !link.getAttribute('href').startsWith('#')) {
            
            // Это внутренняя ссылка
            e.preventDefault();
            
            // Добавляем эффект загрузки
            document.body.classList.add('page-transition');
            
            // После небольшой задержки переходим по ссылке
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        }
    });
    
    // Убираем класс перехода при загрузке новой страницы
    window.addEventListener('pageshow', function() {
        document.body.classList.remove('page-transition');
    });
});