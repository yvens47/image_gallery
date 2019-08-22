
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

         var attr = '[data-city-name='+value+"]";
         var n = document.querySelector(attr);

         // TODO: write function to highlight image base filter string from option
         n.style.background="#333";
       }

    })
    
  return {
    init: function(){
      // pass application anme to navbar
      ux.init(appName);
    //  events();


    }
  }



})(UIController);

AppController.init();
