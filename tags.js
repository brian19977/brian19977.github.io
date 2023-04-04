/* note: var `articles` is stored in articles.js at ~/ */

var tags_section = document.getElementById("tags");
var tags_set = new Set();

// get set of all tags
for(var i=0; i < articles.length; i++) {
    for(var j=0; j < articles[i].tags.length; j++)
        tags_set.add(articles[i].tags[j]);
}

// make list of tags and add articles with each tag
var tags_list = [...tags_set];
tags_list.sort();

// necessary vars
var link_base = "writing/";

for(var i=0; i < tags_list.length; i++) {
    var bullet_list = document.createElement("ul");
    bullet_list.classList.add("myindent");
    
    var tag = document.createElement("p");
    tag.innerHTML = tags_list[i];
    
    for(var j=0; j < articles.length; j++) {
        if(articles[j].tags.includes(tags_list[i])) {
            var list_item = document.createElement("li");
            list_item.classList.add("space");
            
            var link = document.createElement("a");
            link.href = link_base + articles[j].link;
            link.innerHTML = articles[j].title;

            list_item.append(link);

            bullet_list.append(list_item);
        }

    }

    tags_section.append(tag)
    tags_section.append(bullet_list);
}