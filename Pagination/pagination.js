document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector('.pagination');
    const pages = Array.from(pagination.querySelectorAll('li:not(.icon)'));
    const prevButton = pagination.querySelector('.icon:first-child');
    const nextButton = pagination.querySelector('.icon:last-child');
    let currentPage = 1;

    function updatePagination() {
        pages.forEach((page, index) => {
            page.classList.remove('active');
            if (index + 1 === currentPage) {
                page.classList.add('active');
            }
        });

    
        prevButton.classList.toggle('disabled', currentPage === 1);


        nextButton.classList.toggle('disabled', currentPage === pages.length);
    }

    function goToPage(pageNumber) {
        if (pageNumber < 1 || pageNumber > pages.length) return;
        currentPage = pageNumber;
        updatePagination();
    }

    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            goToPage(index + 1);
        });
    });

    prevButton.addEventListener('click', () => {
        goToPage(currentPage - 1);
    });


    nextButton.addEventListener('click', () => {
        goToPage(currentPage + 1);
    });
    updatePagination();
});
