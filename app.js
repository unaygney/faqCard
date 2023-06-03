const icons = document.querySelectorAll('.icon')



icons.forEach(icon => {

    icon.addEventListener('click', () => {
        const section = icon.parentNode;
        const heading = section.querySelector('h3');
        const paragraph = section.querySelector('p');


        heading.classList.toggle('active-head');
        paragraph.classList.toggle('active')


    })

});



