function generate_links(category, oldestToNewest = true) {
    var sections = document.getElementsByClassName("content");
    var id_arr = [];
    var i = 0;

    for(; i < sections.length; i++)
        id_arr.push(sections[i].id);
    i = 0;

    var section_arr = Array(id_arr.length);
    for(; i < id_arr.length; i++)
        section_arr[i] = document.getElementById(id_arr[i]);

    if(oldestToNewest) {
        i = 0;
        for(; i < articles.length; i++) {
            create_links(category, section_arr, id_arr, i);
        }
    } else {
        i = articles.length - 1;
        for(; i > -1; i--) {
            create_links(category, section_arr, id_arr, i);
        }
    }
}

function create_links(category, section_arr, id_arr, i) {
    var tag_set = new Set(articles[i].tags);
    
    for(var j = 0; j < section_arr.length; j++) {
        if(
                (tag_set.has(id_arr[j])) && 
                (category.length > 0 ? tag_set.has(category) : true)) {

            var link = document.createElement("a");
            link.href = articles[i].link.substring(articles[i].link.indexOf("/")+1);
            var text = document.createElement("p");
            text.innerHTML = articles[i].title;
            link.appendChild(text);
            section_arr[j].appendChild(link);
        }
    }
}