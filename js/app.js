document.addEventListener("DOMContentLoaded", function(){
    const url =("https://api.spoonacular.com/recipes/random/?apiKey=ab699af5aef64fa7afd3a88b41e8d9c2");

    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data=>{
        console.log(data.recipes)
        const recipe = data.recipes;
        const title = recipe[0].title;
        console.log(title);
        var myImage = new Image(1000, 500);
            myImage.src = 'img/magi.jpg';
            document.body.appendChild(myImage);

            function Foo() {};
            let foo = new Foo();
            
            if (foo.constructor.name === 'Foo') {
              console.log("I love eat");
            } else {
              console.log('Oops!');
            }
            
        var CookingTime = 54;
        console.log(CookingTime);
    });
});

//title

//exendedIngredients[] -> name -> amout -> units ->measures (in metric) -> amount -> unitShort
//Image
//summary
//instructions


