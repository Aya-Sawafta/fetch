
async function pizza(){
 const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
 const data = await response.json();
 //console.log(data);
 const contents = data.recipes;
 const content = contents.map( function(ele){
    return `
    <div class="pizza-item">
    <h2> ${ele.title}</h2>
    <img src="${ele.image_url}"/>
    </div>
    `
 }).join('');
document.querySelector(".pizz-items").innerHTML += content;
}

pizza();