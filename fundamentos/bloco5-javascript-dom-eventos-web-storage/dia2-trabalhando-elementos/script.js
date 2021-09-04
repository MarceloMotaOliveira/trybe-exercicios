//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let titulo = document.createElement("h1");
titulo.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(titulo);

//2. Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement('main');
main.classList.add("main-content");
document.body.appendChild(main);

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let primeiraSection = document.createElement('section');
primeiraSection.classList.add('center-content');
document.querySelector('.main-content').appendChild(primeiraSection);

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let primeiroParagrafo = document.createElement('p');
primeiroParagrafo.innerText = "Estou empolgado e começando a entender a árvore DOM";
document.querySelector('.center-content').appendChild(primeiroParagrafo);

//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let segundaSection = document.createElement('section');
segundaSection.classList.add('left-content');
document.querySelector('.main-content').appendChild(segundaSection);

//6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let terceiraSection = document.createElement('section');
terceiraSection.classList.add('right-content');
document.querySelector('.main-content').appendChild(terceiraSection);

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img01 = document.createElement('img');
img01.classList.add('small-image');
img01.setAttribute('src', 'https://picsum.photos/200');
document.querySelector('.left-content').appendChild(img01);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let lista = document.createElement('ul');
let conteudoLista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
let itemLista;
for (i=0; i < conteudoLista.length; i+=1){
    itemLista = document.createElement('li');
    itemLista.innerText = conteudoLista[i];

    lista.appendChild(itemLista);
}
document.querySelector('.right-content').appendChild(lista);

//9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let outroSubtitle1 = document.createElement("h3");
document.querySelector('.main-content').appendChild(outroSubtitle1);
let outroSubtitle2 = document.createElement('h3');
document.querySelector('.main-content').appendChild(outroSubtitle2);
let outroSubtitle3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(outroSubtitle3);

//Segunda Parte

// 1.Adicione a classe title na tag h1 criada;
titulo.classList.add("title");

// 2.Adicione a classe description nas 3 tags h3 criadas;
outroSubtitle1.classList.add('description');
outroSubtitle2.classList.add('description');
outroSubtitle3.classList.add('description');

// 3.Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let sectionRemove = main.removeChild(segundaSection);

// 4.Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
terceiraSection.style.marginRight = "auto";

// 5.Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
primeiraSection.style.backgroundColor = "green";

// 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
document.querySelector('ul').lastElementChild.previousElementSibling.remove();
document.querySelector('ul').lastElementChild.remove();
