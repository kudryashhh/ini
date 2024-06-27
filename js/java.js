
document.addEventListener("DOMContentLoaded", function(){
    
    let myFunction = function(){ // Тело функции -
    }; myFunction(); // Вызов функции
    
    
    let i = document.getElementById("back_to_menu");
    let ii = document.getElementById("back_to_menu_on"); // Задали переменную, query потому что это класс
   
    i.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    ii.style.display = "block"; 
    });

    i.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
        ii.style.display = "none"; 
        });

    let shop = document.getElementById("shop");
    let shop_on = document.getElementById("shop_on"); // Задали переменную, query потому что это класс
   
    shop.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    shop_on.style.display = "block"; 
    });

    shop.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    shop_on.style.display = "none"; 
    });

    let space = document.getElementById("space");
    let space_on = document.getElementById("space_on"); // Задали переменную, query потому что это класс
   
    space.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    space_on.style.display = "block"; 
    });

    space.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    space_on.style.display = "none"; 
    });

    let manifesto = document.getElementById("manifesto");
    let manifesto_on = document.getElementById("manifesto_on"); // Задали переменную, query потому что это класс
   
    manifesto.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    manifesto_on.style.display = "block"; 
    });

    manifesto.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    manifesto_on.style.display = "none"; 
    });
    

    let ceremony = document.getElementById("ceremony");
    let ceremony_on = document.getElementById("ceremony_on"); // Задали переменную, query потому что это класс
   
    ceremony.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    ceremony_on.style.display = "block"; 
    });

    ceremony.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    ceremony_on.style.display = "none"; 
    });


    let events = document.getElementById("events");
    let events_on = document.getElementById("events_on"); // Задали переменную, query потому что это класс
   
    events.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    events_on.style.display = "block"; 
    });

    events.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    events_on.style.display = "none"; 
    });

    let notebook = document.querySelector(".notebook");
    let notebook_g = document.querySelector(".notebook_g");
    let notebook_text = document.querySelector(".notebook_text");
    let notebook_buy = document.querySelector(".notebook_buy"); // Задали переменную, query потому что это класс
   
    notebook.addEventListener("mouseenter", function(){ 
    notebook_g.style.display = "block"; 
    notebook_text.style.display = "block"; 
    notebook_buy.style.display = "block"; 
    });

    notebook.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    notebook_g.style.display = "none"; 
    notebook_text.style.display = "none"; 
    notebook_buy.style.display = "none"; 
    
    });

    let tea = document.querySelector(".tea");
    let tea_g = document.querySelector(".tea_g"); // Задали переменную, query потому что это класс
    let tea_text = document.querySelector(".tea_text");
    let tea_buy = document.querySelector(".tea_buy");

    tea.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    tea_g.style.display = "block"; 
    tea_text.style.display = "block"; 
    tea_buy.style.display = "block"; 
    });

    tea.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    tea_g.style.display = "none"; 
    tea_text.style.display = "none"; 
    tea_buy.style.display = "none"; 
    });

    let disk = document.querySelector(".disk");
    let disk_g = document.querySelector(".disk_g");
    let disk_text = document.querySelector(".disk_text");
    let disk_buy = document.querySelector(".disk_buy"); // Задали переменную, query потому что это класс
   
    disk.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
    disk_g.style.display = "block"; 
    disk_text.style.display = "block"; 
    disk_buy.style.display = "block"; 
    });

    disk.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
    disk_g.style.display = "none"; 
    disk_text.style.display = "none"; 
    disk_buy.style.display = "none"; 
    });


    let breloki = document.querySelector(".breloki");
    let brelok_g = document.querySelector(".brelok_g");
    let brelok_text = document.querySelector(".brelok_text");
    let brelok_buy = document.querySelector(".brelok_buy"); // Задали переменную, query потому что это класс
   
    breloki.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
        brelok_g.style.display = "block"; 
        brelok_text.style.display = "block"; 
        brelok_buy.style.display = "block"; 
    });

    breloki.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
        brelok_g.style.display = "none"; 
        brelok_text.style.display = "none"; 
        brelok_buy.style.display = "none"; 
    });

    let menu = document.querySelector(".menu");
    let menu_g = document.querySelector(".menu_g");
    let menu_text = document.querySelector(".menu_text");
    let menu_buy = document.querySelector(".menu_buy"); // Задали переменную, query потому что это класс
   
    menu.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
        menu_g.style.display = "block"; 
        menu_text.style.display = "block"; 
        menu_buy.style.display = "block"; 
    });

    menu.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
        menu_g.style.display = "none"; 
        menu_text.style.display = "none"; 
        menu_buy.style.display = "none"; 
    });

    let envelope = document.querySelector(".envelope");
    let envelope_g = document.querySelector(".envelope_g");
    let envelope_text = document.querySelector(".envelope_text");
    let envelope_buy = document.querySelector(".envelope_buy"); // Задали переменную, query потому что это класс
   
    envelope.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
        envelope_g.style.display = "block"; 
        envelope_text.style.display = "block"; 
        envelope_buy.style.display = "block"; 
    });

    envelope.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
        envelope_g.style.display = "none"; 
        envelope_text.style.display = "none"; 
        envelope_buy.style.display = "none"; 
    });

   
});

document.addEventListener("DOMContentLoaded", function(){
    let myFunction = function(){ // Тело функции -
    }; myFunction();

    let page_1 = document.querySelector(".page_1");

    page_1.addEventListener("click", function(){
    page_1.style.display = "none";
    });

    let page_2 = document.querySelector(".page_2");

    page_2.addEventListener("click", function(){
    page_2.style.display = "none";
    });

    let page_3 = document.querySelector(".page_3");

    page_3.addEventListener("click", function(){
    page_3.style.display = "none";
    });

    let page_4 = document.querySelector(".page_4");

    page_4.addEventListener("click", function(){
    page_4.style.display = "none";
    });

    let page_5 = document.querySelector(".page_5");

    page_5.addEventListener("click", function(){
    page_1.style.display = "block";
    page_2.style.display = "block";
    page_3.style.display = "block";
    page_4.style.display = "block";
    });

});

document.addEventListener("DOMContentLoaded", function(){
    let myFunction = function(){ // Тело функции -
    }; myFunction();

    let ceremony = document.querySelector(".start_ceremony")
    let ceremony_on = document.querySelector(".start_ceremony_on")

    ceremony.addEventListener("mouseenter", function(){
    ceremony_on.style.display = "block";
    });

    ceremony.addEventListener("mouseleave", function(){
        ceremony_on.style.display = "none";
        });
});


document.addEventListener("DOMContentLoaded", function(){
    let myFunction = function(){ // Тело функции -
    }; myFunction(); // Вызов функции
  

    let touch_1 = document.querySelector(".touch_1");
    touch_1.addEventListener("mouseenter", (e) => {
      let t = e.target;
      t.classList.add("touch_animate");
      setTimeout(() => t.classList.remove("touch_animate"), 1000);
    })
  });

  document.addEventListener("DOMContentLoaded", function(){
    let myFunction = function(){ // Тело функции -
    }; myFunction();

    let poster = document.querySelector(".poster_1");
    let poster1_1 = document.querySelector(".poster1_1");
    let poster1_2 = document.querySelector(".poster1_2");
    let poster1_3 = document.querySelector(".poster1_3"); 
    let flower_shir = document.querySelector(".poster_flower_3");// Задали переменную, query потому что это класс

    poster.addEventListener("click", function(){ 
        poster1_2.style.display = "block"; 
        poster1_1.style.display = "block"; 
        poster1_3.style.display = "block";
        poster2_2.style.display = "none"; 
        poster2_1.style.display = "none"; 
        poster2_3.style.display = "none"; 
        poster3_2.style.display = "none"; 
        poster3_1.style.display = "none"; 
        flower_shir.style.display = "none";
        poster3_1g.style.display = "none";
        g1_3.style.display = "none";
        poster3_2g.style.display = "none";
        g2_3.style.display = "none";
        poster2_2g.style.display = "none";
        g2_2.style.display = "none";
        poster2_1g.style.display = "none";
        g1_2.style.display = "none";
        poster2_3g.style.display = "none";
        g3_2.style.display = "none";
    });


    let poster_1 = document.querySelector(".poster_2");
    let poster2_1 = document.querySelector(".poster2_1");
    let poster2_2 = document.querySelector(".poster2_2");
    let poster2_3 = document.querySelector(".poster2_3"); // Задали переменную, query потому что это класс
   
    poster_1.addEventListener("click", function(){ // Говорим переменной что она должна сделать по клику
        poster2_2.style.display = "block"; 
        poster2_1.style.display = "block"; 
        poster2_3.style.display = "block";
        poster1_2.style.display = "none"; 
        poster1_1.style.display = "none"; 
        poster1_3.style.display = "none";
        poster3_2.style.display = "none"; 
        poster3_1.style.display = "none";  
        flower_shir.style.display = "none";
        poster1_3g.style.display = "none";
        poster1_2g.style.display = "none";
        poster1_1g.style.display = "none";
        g1.style.display = "none";
        g2.style.display = "none";
        g3.style.display = "none";
        poster3_1g.style.display = "none";
        g1_3.style.display = "none";
        poster3_2g.style.display = "none";
        g2_3.style.display = "none";
    });






    let poster_3 = document.querySelector(".poster_3");
    let poster3_1 = document.querySelector(".poster3_1");
    let poster3_2 = document.querySelector(".poster3_2");
     // Задали переменную, query потому что это класс
   
    poster_3.addEventListener("click", function(){ // Говорим переменной что она должна сделать по клику
        poster3_2.style.display = "block"; 
        poster3_1.style.display = "block"; 
        poster1_2.style.display = "none"; 
        poster1_1.style.display = "none"; 
        poster1_3.style.display = "none"; 
        poster2_2.style.display = "none"; 
        poster2_1.style.display = "none"; 
        poster2_3.style.display = "none"; 
        flower_shir.style.display = "none";
        poster1_3g.style.display = "none";
        poster1_2g.style.display = "none";
        poster1_1g.style.display = "none";
        g1.style.display = "none";
        g2.style.display = "none";
        g3.style.display = "none";
        poster2_2g.style.display = "none";
        g2_2.style.display = "none";
        poster2_1g.style.display = "none";
        g1_2.style.display = "none";
        poster2_3g.style.display = "none";
        g3_2.style.display = "none";
    });

    let poster3_1g = document.querySelector(".poster3_1g");
    let poster3_2g = document.querySelector(".poster3_2g");
    let g1_3 = document.querySelector(".g1_3");
    let g2_3 = document.querySelector(".g2_3");

    poster3_1.addEventListener("mouseenter", function(){
        poster3_1g.style.display = "block";
        g1_3.style.display = "block";
    })

    poster3_2.addEventListener("mouseenter", function(){
        poster3_2g.style.display = "block";
        g2_3.style.display = "block";
    })

    let poster1_1g = document.querySelector(".poster1_1g");
    let poster1_2g = document.querySelector(".poster1_2g");
    let poster1_3g = document.querySelector(".poster1_3g");
    let g1 = document.querySelector(".g1");
    let g2 = document.querySelector(".g2");
    let g3 = document.querySelector(".g3");

    poster1_1.addEventListener("mouseenter", function(){
        poster1_1g.style.display = "block";
        g1.style.display = "block";
    })

    poster1_2.addEventListener("mouseenter", function(){
        poster1_2g.style.display = "block";
        g2.style.display = "block";
    })

    poster1_3.addEventListener("mouseenter", function(){
        poster1_3g.style.display = "block";
        g3.style.display = "block";
    })



    let poster2_1g = document.querySelector(".poster2_1g");
    let poster2_2g = document.querySelector(".poster2_2g");
    let poster2_3g = document.querySelector(".poster2_3g");
    let g1_2 = document.querySelector(".g1_2");
    let g2_2 = document.querySelector(".g2_2");
    let g3_2 = document.querySelector(".g3_2");

    poster2_1.addEventListener("mouseenter", function(){
        poster2_1g.style.display = "block";
        g1_2.style.display = "block";
    })

    poster2_2.addEventListener("mouseenter", function(){
        poster2_2g.style.display = "block";
        g2_2.style.display = "block";
    })

    poster2_3.addEventListener("mouseenter", function(){
        poster2_3g.style.display = "block";
        g3_2.style.display = "block";
    })


    let g1_reg = document.querySelector(".g1_reg");
    let g2_reg = document.querySelector(".g2_reg");
    let g3_reg = document.querySelector(".g3_reg");
    let touchh = document.querySelector(".touch");
    let registration = document.querySelector(".registration");
    let moss_1 = document.querySelector(".moss_1");

    g1_reg.addEventListener("click", function(){
        registration.style.display = "block";
        touchh.style.display = "block";
        moss_1.style.display = "block";
    })

    g2_reg.addEventListener("click", function(){
        registration.style.display = "block";
        touchh.style.display = "block";
        moss_1.style.display = "block";
    })

    g3_reg.addEventListener("click", function(){
        registration.style.display = "block";
        touchh.style.display = "block";
        moss_1.style.display = "block";
    })


 


});

