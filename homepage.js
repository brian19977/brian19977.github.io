/* note: var `articles` is stored in ~/articles.js */

function random_articles() {
    var art_set = new Set();
    while(art_set.size < 3) {
        // get an int range [0, len) and add to set
        // nature of set prevents duplicates
        art_set.add(Math.floor(Math.random() * articles.length));
    }

    // `...' is spread operator
    var art_indices = [...art_set];

    var art_array = [];
    var one   = document.createElement("div");
    var two   = document.createElement("div");
    var three = document.createElement("div");

    art_array.push(one);
    art_array.push(two);
    art_array.push(three);

    // div where cards will be appended
    var elem = document.getElementById("suggested_articles");

    for(var i=0; i < art_array.length; i++) {
        // create all elements
        // use appendChild() in reverse order to add them, matroyshka doll-style
        var cur_art = art_indices[i];

        var cur = art_array[i];
        cur.classList.add("card");
        cur.style.setProperty("margin-bottom","12px");

        var card_block = document.createElement("div");
        card_block.classList.add("card-block");

        var row_div = document.createElement("div");
        row_div.classList.add("row");

        var first_col = document.createElement("div");
        first_col.classList.add("col-md-4");
        first_col.classList.add("col-6");

        var link_img = document.createElement("a");
        link_img.classList.add("mycard");
        link_img.href = articles[cur_art].link;

        var hasImage = false;
        var img = document.createElement("img");
        if(articles[cur_art].image.length > 0) {   
            img.src = articles[cur_art].image;
            img.style.cssText = "object-fit: cover; max-height: 100%; max-width: 100%;";
            hasImage = true;
        }

        var second_col = document.createElement("div");
        second_col.classList.add("col-md-8");
        second_col.classList.add("col-6");

        var link_text = document.createElement("a");
        link_text.classList.add("mycard");
        link_text.href = articles[cur_art].link;

        var card_title = document.createElement("p");
        card_title.classList.add("card-title");
        card_title.classList.add("courier");
        card_title.innerHTML = articles[cur_art].title;

        var card_text = document.createElement("p");
        card_text.classList.add("card-text");
        card_text.classList.add("lilsmaller");
        card_text.innerHTML = articles[cur_art].description;

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

        elem.appendChild(cur);
    }

    return articles;
}