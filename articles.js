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
        title: "Top 10 Books of 2019",
        link: "reviews/2019-top-ten-books.html",
        image: "reviews/2019-top-ten-books.jpeg",
        description: "10: The Underground Railroad<br>9: Immortality<br>8: Tender is the Night<br>7: In Cold Blood<br>" +
        "6: On Chesil Beach && A Sense of an Ending<br>5: Rules of Civility<br>4. Purity<br>3. The Idiot<br>2. Hamlet<br>1. A Little Life",
        tags: ["review", "literature", "listicle"]
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
        title: "Top 10 Books of 2020",
        link: "reviews/2020-top-ten-books.html",
        image: "reviews/2020-top-ten-books.jpeg",
        description: "10: Les Misérables && The Bonfire of the Vanities<br>9: [Honeybees and Thunder]<br>8: Evicted<br>7: Oblivion<br>" +
        "6: Invisible Man<br>5: The Fate of Africa<br>4. Absalom, Absalom!<br>3. Giovanni's Room<br>2. Normal People<br>1. Blood Meridian",
        tags: ["review", "literature", "listicle"]
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
        link: "essays/2023-open-letter-college-admissions-counselors.html",
        image: "essays/2023-open-letter-college-admissions-counselors.jpeg",
        description: "I found the article smudging evidence to support the argument or going long on rhetoric when data was short.",
        tags: ["essay","open-letters","education","general-essay"]
    },
    {
        title: "Top 10 Books of 2022",
        link: "reviews/2022-top-ten-books.html",
        image: "reviews/2022-top-ten-books.jpeg",
        description: "10: To Paradise<br>9: World Order<br>8: The Twenty-Seventh City<br>7: [Human Acts]<br>" +
        "6: The Book of Salt<br>5: Brief Interviews with Hideous Men<br>4. On Such a Full Sea<br>3. Blindness<br>"+
        "2. The Thousand Autumns of Jacob de Zoet<br>1. The Goldfinch",
        tags: ["review", "literature", "listicle"]
    },
    {
        title: "Concert Reviews: Mitsuko Uchida, 24 February 2023; Richard Goode, 26 February 2023",
        link: "reviews/230224-230226-uchida-goode.html",
        image: "reviews/230224-230226-uchida-goode.jpg",
        description: "These <span style='font-style: italic;'>éminences grises</span> felt the weight of the challenge, but also undertook it with "+
        "aplomb and finesse. [...] Dame Uchida and Mr. Goode are not just good for their age—they are good, they are excellent, they very much are still on top of it.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Dispatch: Yefim Bronfman and Rafael Payare with the Montréal Symphony Orchestra (OSM), 8 March 2023",
        link: "reviews/230308-bronfman-payare.html",
        image: "reviews/230308-bronfman-payare.jpg",
        description: "Rafael Payare led his eager, nimble ensemble through this hefty evening with verve and "+
        "elegance. Though not every crucial moment was together, the musicians put together a splendid performance "+
        "that had its audience smiling on the way out.",
        tags: ["review", "music", "orchestra"]
    },
    {
        title: "Concert Review: Benjamin Grosvenor, 14 March 2023",
        link: "reviews/230314-grosvenor.html",
        image: "reviews/230314-grosvenor.jpeg",
        description: "Mr. Grosvenor's performance, out of the seventy-plus piano recital attendances" +
        " of your correspondent's life, was the finest by some distance.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Dispatch: Xavier Foley and Jonathon Heyward with the Baltimore Symphony Orchestra, 20 May 2023",
        link: "reviews/230520-foley-heyward.html",
        image: "reviews/230520-foley-heyward.jpeg",
        description: "A recent night's visit to the Baltimore Symphony Orchestra, [...] " +
        "featuring perhaps the most fun concerto your correspondent has ever heard, was the most "+
        "ringing affirmation of the expanding \"classical\" canon in recent memory.",
        tags: ["review", "music", "orchestra"]
    },
    {
        title: "Difficult, L.L.P.—or: the Worth of Doing Challenging Things",
        link: "essays/2023-difficult-llp.html",
        image: "essays/2023-difficult-llp.jpeg",
        description: "The habit of putting oneself, even occasionally, in the discomfort zone—of investing time, money, and emotions; "+
        "of pulling hair and losing sleep; of trying and risking failure—is not only a worthwhile part of, but essential to human flourishing.",
        tags: ["essay", "personal-essay", "social-criticism"]
    },
    {
        title: "Concert Review: Boris Giltburg, 29 November 2023",
        link: "reviews/231129-giltburg.html",
        image: "reviews/231129-giltburg.jpg",
        description: "Mr. Giltburg made light work of [...] ferocious, intimidating works; despite a program without a moment of respite, he consistently "+
        "projected sensitivity, humor, and passion.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Dispatches: Yannick Nézét-Séguin with the Staatskapelle Berlin, 30 November and 1 December 2023",
        link: "reviews/231130-231201-nezet-seguin.html",
        image: "reviews/231130-231201-nezet-seguin.jpg",
        description: "Over two nights, the Staatskapelle gave the most muscular, passionate, and refreshing performances of every Brahms symphony in your correspondent's memory.",
        tags: ["review", "music", "orchestra"]
    },
    {
        title: "Top 10 Books of 2023",
        link: "reviews/2023-top-ten-books.html",
        image: "reviews/2023-top-ten-books.jpeg",
        description: "10: A Confederacy of Dunces<br>9: Exhalation && Stories of Your Life<br>8: New York 2140 && The Ministry for the Future<br>7: The Street<br>" +
        "6: Babel<br>5: All the Light We Cannot See<br>4. I, Claudius<br>3. The Known World<br>2. On Earth We're Briefly Gorgeous<br>1. Infinite Jest",
        tags: ["review", "literature", "listicle"]
    },
    {
        title: "Leafing Me Disappointed: Cadence and the Dubious Future of Restaurant Veganism",
        link: "essays/2024-leafing-me-disappointed.html",
        image: "essays/2024-leafing-me-disappointed.jpg",
        description: "Is vegan soul food possible? Does Cadence’s food “put health first” and put diners “in control of their well-being?” Can it “start a revolution?”"+
        "<br><br>It is not. It does not. It cannot.",
        tags: ["essay","general-essay","food","review"]
    },
    {
        title: "Concert Review: Igor Levit, 7 March 2024",
        link: "reviews/240307-levit.html",
        image: "reviews/240307-levit.jpg",
        description: "Mr. Levit juggled these colossal, unwieldy works without apparent strain, moving from the bitterness of the Suite to the " + 
        "<span style='font-style: italic;'>weltschmerz</span> of the Adagio to the heroism of the \"Eroica\" as if they were the most natural trio of works.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Dispatches: Alisa Weilerstein, 3 April 2024; Yo-Yo Ma and Kathryn Stott, 11 April 2024",
        link: "reviews/240403-240411-weilerstein-ma.html",
        image: "reviews/240403-240411-weilerstein-ma.jpg",
        description: "Ms. Weilerstein was excellent in almost every way, holding forth on four strings, as vulnerable as a musician can be. "+
        "Mr. Ma, [...] gave an effortful, inconsistent performance; your correspondent regrets not having heard him earlier in his career.",
        tags: ["review", "music", "recital"]
    },
    {
        title: "Concert Reflections from May 2024",
        link: "reviews/monthly-concerts-2024-05.html",
        image: "reviews/monthly-concerts-2024-05.jpg",
        description: "On Sir Simon Rattle with the Bavarian Radio Symphony Orchestra, Yuja Wang, and <span style='font-style: italic;'>The Hours</span>.",
        tags: ["review", "monthly-music"]
    },
    {
        title: "Book Review: Gabrielle Zevin, <span style='font-style: italic;'>Tomorrow, and Tomorrow, and Tomorrow</span>",
        link: "reviews/review-zevin-t-and-t-and-t.html",
        image: "reviews/review-zevin-t-and-t-and-t.jpeg",
        description: "[The great characters] unfortunately do not make up for the uneven reading experience that is <span style='font-style: italic;'>T&T&T</span>, with its inability to enliven video games, its self-indulgent writing, its essential rudderlessness.",
        tags: ["review", "literature"]
    },
    {
        title: "Concert Reflections from October 2024",
        link: "reviews/monthly-concerts-2024-10.html",
        image: "reviews/monthly-concerts-2024-10.png",
        description: "On Víkingur Ólafsson and Manfred Honeck with the New York Philharmonic, Krystian Zimerman, and Midori and Andris Nelsons with the Vienna Philharmonic.",
        tags: ["review", "monthly-music"]
    },
    {
        title: "Top 10 Books of 2024",
        link: "reviews/2024-top-ten-books.html",
        image: "",
        description: "10: Nobody is Watching You<br>"+
        "9: Table for Two<br>"+
        "8: The Little Friend<br>"+
        "7: Claudius the God<br>" +
        "6: The Brief Wondrous Life of Oscar Wao<br>"+
        "5: The Bone Clocks<br>"+
        "4. The Overstory && Bewilderment<br>"+
        "3. Cloud Cuckoo Land<br>"+
        "2. Bullshit Jobs && The Age of Insecurity<br>"+
        "1. The Prince of Tides",
        tags: ["review", "literature", "listicle"]
    },
    {
        title: "Concert Reflections from April 2025",
        link: "reviews/monthly-concerts-2025-04.html",
        image: "reviews/monthly-concerts-2025-04.jpg",
        description: "On Alban Gerhardt and Yunchan Lim.",
        tags: ["review", "monthly-music"]
    },
    {
        title: "Concert Reflections from November 2025",
        link: "reviews/monthly-concerts-2025-11.html",
        image: "",
        description: "On Kyung-Wha Chung and Kevin Kenner, Beatrice Rana, and Hayato Sumino.",
        tags: ["review", "monthly-music"]
    }
]