document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('i');
    const sideNav = document.querySelector('ul');
    const sections = document.querySelectorAll('section > h2');

    menuIcon.addEventListener('click', function() {
        sideNav.classList.toggle('ul_show');
        document.querySelector('section').classList.toggle('slide_image');
    });

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < (sectionTop + sectionHeight)) {
                const id = section.getAttribute('id');
                document.querySelector('ul li.active').classList.remove('active');
                document.querySelector(`ul li a[href="#${id}"]`).parentElement.classList.add('active');
            }
        });
    });
});
