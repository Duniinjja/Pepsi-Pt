document.addEventListener("DOMContentLoaded", function() {
    const produtosLink = document.querySelector('.bar-link a[href="#produtos"]');

    produtosLink.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const produtosSection = document.getElementById('produtos');

        // Faz o scroll suave até a seção de produtos
        produtosSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});