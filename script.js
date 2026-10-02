document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

const elementos = document.querySelectorAll(
    '.atuacao, .sobre, .contato'
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});

const botaoMenu = document.getElementById("menu-mobile");
const menu = document.querySelector("nav");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

// ==========================================
// ANIMAÇÃO DOS ELEMENTOS DA SEÇÃO SOBRE
// ==========================================

const sobre = document.querySelector(".sobre");
const fotoSobre = document.querySelector(".sobre-foto");
const conteudoSobre = document.querySelector(".sobre-conteudo");
const cardsSobre = document.querySelectorAll(".sobre .destaque-item");

if (sobre) {

    const observadorSobre = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                fotoSobre?.classList.add("foto-animada");
                conteudoSobre?.classList.add("conteudo-animado");

                cardsSobre.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("card-animado");
                    }, 300 + (index * 150));
                });

                observadorSobre.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.20
    });

    observadorSobre.observe(sobre);
}

// ==========================================
// ANIMAÇÃO DOS CARDS - ÁREAS DE ATUAÇÃO
// ==========================================

const secaoAtuacao = document.querySelector(".atuacao");
const cardsAtuacao = document.querySelectorAll(".atuacao .card");

if (secaoAtuacao) {

    const observadorAtuacao = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                cardsAtuacao.forEach((card, index) => {

                    setTimeout(() => {
                        card.classList.add("card-atuacao-animado");
                    }, index * 150);

                });

                observadorAtuacao.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.15
    });

    observadorAtuacao.observe(secaoAtuacao);
}