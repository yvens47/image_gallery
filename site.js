
var UIController =(function(){

  var brand = document.querySelector('.navbar-brand');
  var filterCategory = []

    return {
      // get data attr value and  create an option
      // append to select;
      category_list:function(){
          return filterCategory;
      },
      category :function(n){

        filterCategory.push(n) ;
        var node = document.createElement("option");
        node.setAttribute('option',n) ;
        // Create a <li> node
        var textnode = document.createTextNode(n);         // Create a text node
        node.appendChild(textnode);
        document.querySelector('.filter').appendChild(node);

      },
       init:function(x){

         brand.innerText = x;
       }
    }

})()





var AppController =(function(ux){
  
  window.onscroll =  function(){
    const  scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //todo hide filter_wrap div
    // based on some calculation
    
    console.log(scrollable);
  }

  const appName = "ImageXd";
  //fitler by category;
  var city = document.getElementsByClassName('img_city');
  //console.log(city);
  for(var i =0; i<city.length; i++){    

    ux.category(city[i].attributes[1].value)
  }

    var filter_select = document.querySelector('.filter');
    filter_select.addEventListener('change', function(){

      const value = (this.value);
      var data = ux.category_list();
       //var value ="hello";
       if(data.indexOf(value) >-1){
        // select an individual image base on value      

         filter(value);

         // TODO: write function to highlight image base filter string from option

         
       }

    })

    function filter(value){
      if(value ==='China'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=China]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }

      if(value ==='Tokyo'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=Tokyo]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }

      if(value ==='Washington'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=Washington]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }

      if(value ==='London'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=London]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }
      if(value ==='Georgia'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=Georgia]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }
      if(value ==='California'){
        console.log(value);
        var attr = '[data-city-name='+value+"]";
        var n = document.querySelector(attr);
        n.style.background="#333";
      }else{
        var attr = '[data-city-name=California]';
        var n = document.querySelector(attr);
        n.style.background="white";
      }




     
      
     
    }

  
    
  return {
    init: function(){
      // pass application anme to navbar
      ux.init(appName);
   


    }
  }



})(UIController);

AppController.init();
