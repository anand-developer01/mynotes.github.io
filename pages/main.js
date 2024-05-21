function mainDom(data) {
    document.getElementById("header").innerHTML = navHeader

    // let list = document.getElementById("myList");
    let leftLinks = document.getElementById("myLinks");
    // for (i = 0; i < javascriptData.javascriptNote.length; ++i) {
    // }
    let cardsContainer = document.getElementById("cards");

    data.map(el => {
        // left menu links
        let leftMenuListDiv = document.createElement('div');
        let leftMenuD_FlexDiv = document.createElement('div');
        let a = document.createElement('a');
        let linkText = document.createTextNode(el.title);

        leftMenuD_FlexDiv.className = 'd-flex'
        leftMenuD_FlexDiv.appendChild(leftMenuListDiv);

        leftMenuListDiv.className = 'left-menu-list'
        leftMenuListDiv.appendChild(a);

        a.appendChild(linkText);
        a.title = el.title;
        a.href = `#${el.title}`;
        leftLinks.appendChild(leftMenuD_FlexDiv)

        let coreSnp = typeof el.note === "object" && el.note.map(k => (
            `<div>
                <p class="notes-text">
                    ${k.text1}
                </p>
                <pre class="code-prre">
                    <code class="hljs language-javascript py-0 px-2"> 
                            ${k.code1} 
                    </code>
                </pre>
            </div>`
        )) || []

        var innerContent = `
            <li class="li-main-box">
                <div class="card-content">
                    <strong id="${el.title}">${el.title}</strong>
                    <div>${coreSnp}</div>
                </div>
            </li>
            `;
        var card = document.createElement('ul');
        card.className = 'list-style-remove';
        card.innerHTML = innerContent;
        cardsContainer.appendChild(card);
    });
} 
