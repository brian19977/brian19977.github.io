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
        title: "Concert Review: Yefim Bronfman, 4 April 2019",
        link: "reviews/190404-bronfman.html",
        image: "reviews/190404-bronfman.jpg",
        description: "Your correspondent"+
        " folded his doubts and welcomed Mr. Bronfman, and he is glad he did so: today's recital was one of the most delightful and enjoyable" +
        " concerts in recent memory.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Review: Semyon Bychkov with the New York Philharmonic, 24 April 2019",
        link: "reviews/190424-bychkov.html",
        image: "reviews/190424-bychkov.jpeg",
        description: "Mr. Bychkov [...] "+
        "gave an unfocused and occasionally confusing performance that failed to live up to "+
        "the majesty of Brahms’s last symphony.",
        tags: ["review", "music", "orchestra"]
    },
    {
        title: "Concert Review: Evgeny Kissin, 16 May 2019",
        link: "reviews/190516-kissin.html",
        image: "reviews/190516-kissin.jpeg",
        description: "Musicians must earn their reviews with every performance," +
        " but Mr. Kissin so easily reaffirmed his status as his generation’s greatest pianist that one wonders " +
        "why he even bothers to tour at all.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Review: Paul Lewis: 24 October 2019",
        link: "reviews/191024-lewis.html",
        image: "reviews/191024-lewis.jpeg",
        description: "Though the program is one of your correspondent's favorites this season, " +
        "oversights—interpretive, technical, and performative—led to an ultimately lackluster and even "+ 
        "displeasing evening.",
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
        title: "Book Review: Amy Waldman, <span style='font-style: italic;'>The Submission</span>",
        link: "reviews/review-waldman-the-submission.html",
        image: "reviews/review-waldman-the-submission.jpeg",
        description: "Ms. Waldman has succeeded in calling upon our most"+
        " unforgettable—and most televised—tragedy as the backdrop to this deeply felt and tenderly" +
        " moving narrative.",
        tags: ["review", "literature"]
    },
    {
        title: "Theater Review: <span style='font-style: italic;'>Usual Girls</span> by Ming Peiffer at the Roundabout Theater Company",
        link: "reviews/review-peiffer-roundabout-usual-girls.html",
        image: "reviews/review-peiffer-roundabout-usual-girls.jpg",
        description: "Ming Peiffer crafts a bold and unwavering narrative of childhood's innocence and adulthood's indignities in her"+
        " new play, <span style='font-style: italic;'>Usual Girls</span>.",
        tags: ["review", "theater", "play"]
    },
    {
        title: "Theater Review: <span style='font-style: italic;'>Merry Wives</span> by William Shakespeare at Shakespeare in the Park",
        link: "reviews/review-shakespeare-publictheater-merry-wives.html",
        image: "reviews/review-shakespeare-publictheater-merry-wives.jpeg",
        description: "<span style='font-style: italic;'>Merry Wives</span> does both too little and too much to be the broadly"+
        " welcoming act it wants to be. It's joyful and appealing, sure—but not much of anything else.",
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
    {
        title: "<span style='font-style: italic;'>Moments Musicaux</span>: Regarding a note in Chopin's Prelude in B Minor",
        link: "more/moments-musicaux-chopin-prelude-b-minor.html",
        image: "more/moments-musicaux-chopin-prelude-b-minor.jpeg",
        description: "My favorite moment in Chopin's preludes—maybe in all of Chopin—is a single note, good enough to hold"+
        " one's breath for.",
        tags: ["moments-musicaux","music"]
    },
    {
        title: "<span style='font-style: italic;'>Moments Musicaux</span>: Madrid 1998",
        link: "more/moments-musicaux-madrid-1998.html",
        image: "more/moments-musicaux-madrid-1998.jpeg",
        description: "A piano recital of infrequent note stands in my mind as the greatest concert ever put to record: "+
        "Grigory Sokolov in Madrid, 1998.",
        tags: ["moments-musicaux","music"]
    },
    {
        title: "Fiction: Dearest",
        link: "more/fiction-2020-dearest.html",
        image: "",
        description: "I’m sorry that I still haven’t figured out how to love, but I love you.",
        tags: ["fiction"]
    },
    {
        title: "Open Letters: In Response to \"The Case Against College Admissions Counselors\"",
        link: "essays/open-letter-college-admissions-counselors.html",
        image: "essays/open-letter-college-admissions-counselors.jpeg",
        description: "I found the article smudging evidence to support the argument or going long on rhetoric when data was short.",
        tags: ["essays","open-letters","education"]
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