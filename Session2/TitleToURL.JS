// exc 2.5 From Title to URL
// this function converts a title string into a URL slug
function urlSlug(title){
    return title.toLowerCase().trim().split(/\s+/).join("-")
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));