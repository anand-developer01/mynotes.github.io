function mainDom(data) {
    // console.log()
    const pathname = new URL(window.location.href).pathname;
    // url = initial_url .split( '/' );
console.log(pathname.split( '/' ))
console.log(pathname.split( '/' ).slice(-1).pop())

// arr.slice(-1)[0] or arr.slice(-1).pop() // reove last eleent
    // header
    document.getElementById("header").innerHTML = navHeader
    typeof subHeader !== 'undefined' ? document.getElementById('subHeader').innerHTML = subHeader  : ''

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
        let coreSnp = typeof el.note === "object" && el.note.map(k => (
            k.code1 ? 
            `<div>
                <p class="notes-text">
                    ${k.text1}
                </p>
                <pre class="code-prre">
                    <code class="hljs language-javascript py-0 px-2"> 
                            ${k.code1} 
                    </code>
                </pre>
            </div>` :  `<div>
            <p class="notes-text">
                ${k.text1}
            </p>
            </div>`
        )).join('') || []

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