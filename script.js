
function show() {
    console.log("Chal rha he")
    let html = "";
    playCards.forEach((element) => {
        html += `<article class="article-card">
                    <div class="card-img">
                        <img src="${element.img}" alt="">
                    </div>
                    <div class="card-info">
                        <h2 class="card-head">${element.title}</h2>
                        <h4 class="card-title">${element.para}</h4>
                    </div> 
                </article>`;
    });
    let text = document.getElementById("article-cards");
    if (playCards.length != 0) {
        text.innerHTML = html;
    } else {
        text.innerHTML = "will not show anything";
    }
}

show();

//search bar operation
document.getElementById('search-button').addEventListener('click', function () {
    let input = document.getElementById('search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.article-card');

    cards.forEach(card => {
        let title = card.querySelector('.card-head').innerText.toLowerCase();
        // let description = card.querySelector('.card-title').innerText.toLowerCase();

        console.log(`Title: ${title}, Input: ${input}`);

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    console.log("working");
});
