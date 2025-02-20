// function alignCode(){
//     console.log(document.getElementById('aligncode').checked)
//     console.log(document.getElementById('just-code-align'))
//     var justCodeAlignEle = document.getElementById('just-code-align')
//     var isChecked = document.getElementById('aligncode').checked
//     if(isChecked){
//         justCodeAlignEle.classList.add("align-code")
//         console.log("added")
//     } else {
//         justCodeAlignEle.classList.remove("align-code");
//         console.log("removed")
//     }
// }
const logoTitle = ''
function mainDom(data) {

    const collection = document.getElementsByClassName("inside-nav-bar");


    // arr.slice(-1)[0] or arr.slice(-1).pop() // reove last eleent
    // header
    document.getElementById("header").innerHTML = navHeader
    typeof subHeader !== 'undefined' ? document.getElementById('subHeader').innerHTML = subHeader : ''

    if(document.getElementById('link1') || document.getElementById('link2')) {
        const eleLink1 = document.getElementById('link1').getAttribute("href");
        console.log(eleLink1.split('.')[0] === isHighlighted)
        if(eleLink1.split('.')[0] === isHighlighted){
            document.getElementById('link1').setAttribute("class","active"); 
        }
    
        const eleLink2 = document.getElementById('link2').getAttribute("href");
        console.log(eleLink2.split('.')[0] === isHighlighted)
        if(eleLink2.split('.')[0] === isHighlighted){
            document.getElementById('link2').setAttribute("class","active"); 
        }
    }

    data.map(el => {
        // left menu links
        let leftLinks = document.getElementById("myLinks");
        let leftMenuD_FlexDiv = document.createElement('div');

        let leftMenu = el.section ?
            `<div class="left-menu-list">
                    <div style="background:#aca0a1; padding:3px;">${el.section}</div>
                    <a href="#${el.title}">${el.title}</a>
                </div>` : `
                <div class="left-menu-list">
                    <a href="#${el.title}">${el.title}</a>
                </div>
                `
        leftMenuD_FlexDiv.innerHTML = leftMenu;
        leftLinks.appendChild(leftMenuD_FlexDiv)

        // main content 
        let cardsContainer = document.getElementById("cards");
        let coreSnp = typeof el.note === "object" && el.note.map(k => {
            const isImgExist = typeof k.img !== 'undefined' ? `<img src="${k.img}" style="width:100%;"/>` : ''
            return (
                k.code1 ?
                    `<div>
                <p class="notes-text">
                    ${k.text1} ${isImgExist}
                </p>
                <pre class="code-prre">
                    <code class="align-code hljs language-javascript py-0 px-2"> 
                            ${k.code1} 
                    </code>
                </pre>
            </div>` : `<div>
            <p class="notes-text">
                ${k.text1} ${isImgExist}
            </p>
            </div>`
            )
        }).join('') || []

        let innerContent = `
            <li class="li-main-box">
                <div class="card-content">
                    <strong id="${el.title}">${el.title}</strong>
                    <div>${coreSnp}</div>
                </div>
            </li>
            `;
        let card = document.createElement('ul');
        card.className = 'list-style-remove';
        card.innerHTML = innerContent;
        cardsContainer.appendChild(card);
    });
} 