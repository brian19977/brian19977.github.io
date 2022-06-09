var articles = [
    {
        title: "Concert Review: Marc-André Hamelin, 15 November 2018",
        link: "reviews/181115-hamelin.html",
        image: "reviews/181115-hamelin.jpg",
        description: "Marc-André Hamelin, the Canadian virtuoso composer-pianist,"+
        " delivered a surpassingly excellent performance.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Review: Cho Seong-Jin, 22 January 2019",
        link: "reviews/190122-cho.html",
        image: "reviews/190122-cho.jpg",
        description: "His program tonight held great dramatic and interpretive"+
        " potential, but, excellent though he was, Mr. Cho failed to meet the high"+
        " goals which he had set for himself.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Book Review: Jonathan Franzen, <span style='font-style: italic;'>The Corrections</span>",
        link: "reviews/review-franzen-the-corrections.html",
        image: "reviews/review-franzen-the-corrections.jpeg",
        description: "Jonathan Franzen paints a searing portrait of American family life across geographies and generations "+
        "in his third novel,  <span style='font-style: italic;'>The Corrections</span>.",
        tags: ["review", "literature"]
    },
    {
        title: "Book Review: Donna Tartt, <span style='font-style: italic;'>The Secret History</span>",
        link: "reviews/review-tartt-the-secret-history.html",
        image: "reviews/review-tartt-the-secret-history.jpg",
        description: "Ms. Tartt expertly maneuvers her reader from the very first page<span>&#8212;</span>"+
        "a murder already mentioned in the first dozen words<span>&#8212;</span>to the stricken and beautiful last.",
        tags: ["review", "literature"]
    },
    {
        title: "Theater Review: Ming Peiffer's <span style='font-style: italic;'>Usual Girls</span> by the Roundabout Theater Company",
        link: "reviews/review-peiffer-roundabout-usual-girls.html",
        image: "reviews/review-peiffer-roundabout-usual-girls.jpg",
        description: "Ming Peiffer crafts a bold and unwavering narrative of childhood’s innocence and adulthood’s indignities in her"+
        " new play, <span style='font-style: italic;'>Usual Girls</span>.",
        tags: ["review", "theater", "play"]
    },
    {
        title: "Letter of Recommendation: Reading in Subways",
        link: "more/letter-of-rec-reading-in-subways.html",
        image: "more/letter-of-rec-reading-in-subways.jpeg",
        description: "The spirit of the public sphere is seeing and being seen—we are social beings, after all, "+
        "and few pleasures are as sweet as the realization that we are not alone.",
        tags: ["letter-of-rec"]
    },

]

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

        var img = document.createElement("img");
        img.src = articles[cur_art].image;
        img.style.cssText = "object-fit: cover; max-height: 100%; max-width: 100%;";

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