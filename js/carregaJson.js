 //@author: Vinícius Felisberto
 //

        function lerJSON(callback) {

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'potions.json', true); //ARQUIVO JSON
               xobj.onreadystatechange = function () {
                    if (xobj.readyState == 4 && xobj.status == "200") {
                      // chamada anonima, se não abri retorna indefinido
                       callback(xobj.responseText);
                    }
                };
                xobj.send(null);
         }

        function escreve() {
            lerJSON(function(response) {
             // Parse JSON no objeto
               var dadosJSON = JSON.parse(response);
               var Quantidade = Object.keys(dadosJSON.potions).length;
               for(var i=1; i <= Quantidade; i++){
                  console.log("potion"+i); //teste

                  var div = document.getElementById(i);
                  div.innerHTML = "<img src='products/" + dadosJSON.potions[i].image + " ' /> ";
                  div.innerHTML += '<h2>' + dadosJSON.potions[i].name + ' - <span>$'+dadosJSON.potions[i].price +'</span>';


               }


            });
        }

    function Clique(id){
        lerJSON(function(response) {
          var dadosJSON = JSON.parse(response);

        var div = document.getElementById(id);
        div.innerHTML = "<div id='light' class='white_content'><br><a href='' onclick='Fechar();'><i class='fa fa-times'></i></a>" +
         "<img src='products/" + dadosJSON.potions[id].image +
          " ' id='imgLightbox'/> "
        +'<h2>'+dadosJSON.potions[id].name+'</h2>' + '<br><h2>Use/Effect:</h2>' + '<p>'
        +dadosJSON.potions[id].effect
        +'</p>' + '<h2>Ingredients:</h2>' + '<p>'+dadosJSON.potions[id].ingredients+
        '<p>'+'<br><h2>Price:</h2>'+'<p style="color: #d73b1e">$'+dadosJSON.potions[id].price+'</p><button class="btn">ADD TO CART</button></div>';
        div.innerHTML += "<div id='fade' class='black_overlay'></div>";

        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block';
        document.querySelector('#myNav').scrollIntoView();
  });
      }

    function Fechar(){
      document.getElementById('light').style.display='none';
      document.getElementById('fade').style.display='none';
    }

        escreve();