var articles = [
    {
        title: "article",
        link: "art_link",
        image: "img_link",
        description: "yada yada",
        tags: ["foo", "bar"]
    },
    {
        title: "article",
        link: "art_link",
        image: "img_link",
        description: "yada yada",
        tags: ["foo", "bar"]
    },
    {
        title: "article",
        link: "art_link",
        image: "img_link",
        description: "yada yada",
        tags: ["foo", "bar"]
    },

]

function random_articles() {
    var art_set = new Set();
    while(art_set.size < 3) {
        art_set.add(Math.floor(Math.random() * articles.length));
    }

    var art_array = [];
    var one   = document.createElement("div");
    var two   = document.createElement("div");
    var three = document.createElement("div");

    art_array.push(one);
    art_array.push(two);
    art_array.push(three);

    for(var i=0; i < art_array.length; i++) {
        // create all elements
        // use appendChild() in reverse order to add them, matroyshka doll-style

        var cur = art_array[i];
        cur.classList.add("card");
        cur.style.setProperty("margin-bottom","12px");

        var card_block = document.createElement("div");
        card_block.classList.add("card-block");

        var row_div = document.createElement("div");
        row_div.classList.add("row");

        var first_col = document.createElement("div");
        first_col.classList.add("col-lg-4");
        first_col.classList.add("col-6");

        var link_img = document.createElement("a");
        link_img.classList.add("mycard");
        link_img.href = "#";

        var img = document.createElement("img");
        img.src = "../photo-1451921100017-17aca480c659.avif";
        img.style.cssText = "object-fit: cover; max-height: 100%; max-width: 100%;";

        var second_col = document.createElement("div");
        second_col.classList.add("col-lg-8");
        second_col.classList.add("col-6");

        var link_text = document.createElement("a");
        link_text.classList.add("mycard");
        link_text.href = "#";

        var card_title = document.createElement("p");
        card_title.classList.add("card-title");
        card_title.classList.add("courier");
        var title = document.createTextNode("Special title treatment");
        card_title.appendChild(title);

        var card_text = document.createElement("p");
        card_text.classList.add("card-text");
        card_text.classList.add("lilsmaller");
        var text = document.createTextNode("With supporting text below as a natural lead-in to additional content.");
        card_text.appendChild(text);

        // matroyshka time
        link_img.appendChild(img);

        link_text.appendChild(card_title);
        link_text.appendChild(card_text);

        first_col.appendChild(link_img);
        second_col.appendChild(link_text);

        row_div.appendChild(first_col);
        row_div.appendChild(second_col);

        card_block.appendChild(row_div);

        cur.appendChild(card_block);
    }

    var elem = document.getElementById("suggested_articles");

    for(var i=0; i < art_array.length; i++) {
        elem.appendChild(art_array[i]);
    }

    return articles;
}