function calcularCarbono(){

    // ======================
    // CAPTURA DOS DADOS
    // ======================

    let area =
    Number(
        document.getElementById("area").value
    );

    let arvores =
    Number(
        document.getElementById("arvores").value
    );

    let fertilizante =
    Number(
        document.getElementById("fertilizante").value
    );

    let bio =
    Number(
        document.getElementById("bio").value
    );

    // ======================
    // VALIDAÇÃO
    // ======================

    if(
        area <= 0 ||
        arvores <= 0
    ){

        alert(
        "Preencha os campos corretamente."
        );

        return;
    }

    // ======================
    // CÁLCULO ESG
    // ======================

    let carbonoSequestrado =
        (area * 180) +
        (arvores * 0.05);

    let emissao =
        fertilizante * 25;

    let bonusBio =
        bio * 8;

    let indice =
        carbonoSequestrado +
        bonusBio -
        emissao;

    // ======================
    // CLASSIFICAÇÃO
    // ======================

    let selo = "";
    let nivel = "";

    if(indice >= 2500){

        selo = "🏆 OURO";
        nivel = "Excelente";

    }

    else if(indice >= 1200){

        selo = "🥈 PRATA";
        nivel = "Muito Bom";

    }

    else{

        selo = "🥉 BRONZE";
        nivel = "Em Desenvolvimento";

    }

    // ======================
    // RESULTADO
    // ======================

    document.getElementById(
        "resultado"
    ).innerHTML =

    `
    <h2>${selo}</h2>

    <p>
    Carbono sequestrado:
    <strong>
    ${carbonoSequestrado.toFixed(2)}
    kg CO₂
    </strong>
    </p>

    <p>
    Emissões estimadas:
    <strong>
    ${emissao.toFixed(2)}
    kg CO₂
    </strong>
    </p>

    <p>
    Índice ESG:
    <strong>
    ${indice.toFixed(0)}
    </strong>
    </p>

    <p>
    Nível:
    <strong>
    ${nivel}
    </strong>
    </p>
    `;

    // ======================
    // CERTIFICADO
    // ======================

    document.getElementById(
        "certificado"
    ).innerHTML =

    `
    <h2>
    CERTIFICADO ECOAGRO 2026
    </h2>

    <p>

    Esta propriedade recebeu o selo

    <strong>${selo}</strong>

    por suas práticas sustentáveis.

    </p>

    <p>

    Índice ESG:
    ${indice.toFixed(0)}

    </p>

    `;

    // ======================
    // ÁRVORE ESG
    // ======================

    const arvore =
    document.getElementById(
        "arvore3d"
    );

    let tamanho =
    100 + (indice / 12);

    if(tamanho > 320){

        tamanho = 320;

    }

    arvore.style.fontSize =
    tamanho + "px";

    if(indice >= 2500){

        arvore.innerHTML = "🌳";

    }

    else if(indice >= 1200){

        arvore.innerHTML = "🌲";

    }

    else{

        arvore.innerHTML = "🌱";

    }

    // ======================
    // BARRAS ESG
    // ======================

    let ambiental =
    Math.min(
        100,
        Math.round(
            indice / 30
        )
    );

    let social =
    Math.min(
        100,
        Math.round(
            60 + bio / 2
        )
    );

    let governanca =
    Math.min(
        100,
        Math.round(
            50 + area / 4
        )
    );

    document.getElementById(
        "ambiental"
    ).style.width =
    ambiental + "%";

    document.getElementById(
        "social"
    ).style.width =
    social + "%";

    document.getElementById(
        "governanca"
    ).style.width =
    governanca + "%";

    document.getElementById(
        "ambiental"
    ).style.background =
    "#2D6A4F";

    document.getElementById(
        "social"
    ).style.background =
    "#52B788";

    document.getElementById(
        "governanca"
    ).style.background =
    "#95D5B2";

    document.getElementById(
        "txtAmbiental"
    ).innerHTML =
    ambiental + "%";

    document.getElementById(
        "txtSocial"
    ).innerHTML =
    social + "%";

    document.getElementById(
        "txtGovernanca"
    ).innerHTML =
    governanca + "%";

    // ======================
    // FAZENDA INTERATIVA
    // ======================

    const lago =
    document.getElementById(
        "lago"
    );

    const floresta =
    document.getElementById(
        "floresta"
    );

    const biodiversidade =
    document.getElementById(
        "biodiversidade"
    );

    if(indice >= 2500){

        lago.innerHTML =
        "💧💧💧";

        floresta.innerHTML =
        "🌳🌳🌳🌳🌳";

        biodiversidade.innerHTML =
        "🦋🦋🦋🦋";

    }

    else if(indice >= 1200){

        lago.innerHTML =
        "💧💧";

        floresta.innerHTML =
        "🌳🌳🌳";

        biodiversidade.innerHTML =
        "🦋🦋";

    }

    else{

        lago.innerHTML =
        "💧";

        floresta.innerHTML =
        "🌳";

        biodiversidade.innerHTML =
        "🦋";

    }

}