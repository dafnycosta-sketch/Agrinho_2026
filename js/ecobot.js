function adicionarMensagem(texto, classe){

    const chatbox =
    document.getElementById("chatbox");

    chatbox.innerHTML +=
    `
    <div class="${classe}">
        ${texto}
    </div>
    `;

    chatbox.scrollTop =
    chatbox.scrollHeight;
}

function responder(){

    const campo =
    document.getElementById("pergunta");

    let pergunta =
    campo.value.trim();

    if(pergunta === ""){

        return;

    }

    adicionarMensagem(
        pergunta,
        "user-msg"
    );

    let resposta = "";

    let texto =
    pergunta.toLowerCase();

    if(
        texto.includes("esg")
    ){

        resposta =
        "ESG significa Ambiental, Social e Governança. É um conjunto de práticas que ajuda empresas e propriedades rurais a serem mais sustentáveis.";

    }

    else if(
        texto.includes("compostagem")
    ){

        resposta =
        "A compostagem transforma resíduos orgânicos em adubo natural rico em nutrientes para o solo.";

    }

    else if(
        texto.includes("carbono")
    ){

        resposta =
        "A agricultura pode ajudar a capturar carbono através do plantio de árvores, preservação de florestas e manejo sustentável do solo.";

    }

    else if(
        texto.includes("água")
        ||
        texto.includes("agua")
    ){

        resposta =
        "Sensores de umidade e irrigação inteligente podem reduzir significativamente o desperdício de água.";

    }

    else if(
        texto.includes("bioinsumo")
    ){

        resposta =
        "Bioinsumos são produtos biológicos usados para melhorar o solo e controlar pragas de forma sustentável.";

    }

    else if(
        texto.includes("plantio direto")
    ){

        resposta =
        "O plantio direto reduz a erosão do solo e ajuda a conservar a umidade e a matéria orgânica.";

    }

    else if(
        texto.includes("rotação")
    ){

        resposta =
        "A rotação de culturas melhora a fertilidade do solo e reduz a incidência de pragas.";

    }

    else if(
        texto.includes("reciclagem")
    ){

        resposta =
        "A reciclagem reduz a quantidade de resíduos enviados para aterros e contribui para a preservação ambiental.";

    }

    else if(
        texto.includes("polinização")
    ){

        resposta =
        "Abelhas e outros polinizadores são essenciais para a produção de muitos alimentos.";

    }

    else if(
        texto.includes("clima")
        ||
        texto.includes("mudanças climáticas")
    ){

        resposta =
        "Práticas sustentáveis ajudam a reduzir os impactos das mudanças climáticas e aumentam a resiliência da agricultura.";

    }

    else{

        resposta =
        "Ainda estou aprendendo 🌱. Tente perguntar sobre ESG, compostagem, carbono, água, bioinsumos ou sustentabilidade.";

    }

    setTimeout(() => {

        adicionarMensagem(
            resposta,
            "bot-msg"
        );

    }, 500);

    campo.value = "";

}

function perguntaRapida(texto){

    document.getElementById(
        "pergunta"
    ).value = texto;

    responder();

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
        .getElementById("pergunta")
        .addEventListener(
            "keypress",
            function(event){

                if(
                    event.key === "Enter"
                ){

                    responder();

                }

            }
        );

    }
);