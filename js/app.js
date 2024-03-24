const navigation = document.querySelector('[data-id="menu"]');

navigation.addEventListener("click", function(e){
    const currentElement = e.target;

    if( currentElement.matches('[data-info="dropdown"], [data-info="dropdown"] *') ){
        const parentLi = currentElement.closest("li");
        
        if(parentLi.matches("[data-toggle]")){
          
            parentLi.removeAttribute("data-toggle", "");
        }else{
            parentLi.setAttribute("data-toggle", "");
        }

    }

});