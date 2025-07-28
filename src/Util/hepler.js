export const give_dash=(string)=>{
    return string.replace(/ /g, "-").toLowerCase();
}
export const makeSimpleWord=(word)=>{
    return word.toLowerCase().replace(/'/g, "");

}
export const extractId=(url)=>{
    const match = url.match(/rest(\d+)/);

    if (match) {
        return  (match[1]); 
    }

}

export const Url=(id)=>{
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.10205&lng=72.9087744&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
}