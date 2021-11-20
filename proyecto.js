const url="https://emilyayaladorantes.github.io/proyectos-web-m/proyecto.json"
function 
 
var jsonStr = JSON.stringify(jsonVar);
.then(function(data){
    long=data.results.length;
    console.log("lenght:"+ long);
    console.log(data.results);

    for (i = 0; i < long; i++) {
        var div=crearNodo("div");
        var div2=crearNodo("div");
        var id=crearNodo("p");
        var poster=crearNodo("img");
        var blog=crearNodo("a")

        id.innerHTML=" ["+data.results[i].mal_id+ "]:";
        poster.src=data.results[i].image_url;
        blog.innerHTML=" Blog ";
        blog.setAttribute("href",data.results[i].url);
        blog.target="_blanck";
        
        adjuntar(div,poster);
        adjuntar(div,div2)
        adjuntar(div2,id);
        adjuntar(div2,blog);
        adjuntar(element,div); 