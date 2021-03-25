var main = (function() 
{
    "use strict";
    var openNewTab = function(element){
        window.open(element.dataset.url, '_blank');
    }

    var scrollFast = function(element){
        const elementToGo = document.getElementById(element.dataset.id);
        elementToGo.scrollIntoView();
    }
    var setEvents = function(selector, callBack){
        const elements = document.querySelectorAll(selector);
        for(let element of elements){
            element.addEventListener('click',function(event){
                callBack(event.target);
            });
        }
    }    
    var init = function () {
        setEvents('[data-event-url]', openNewTab);
        setEvents('[data-event-scroll]', scrollFast);
    }
    return{
        init : init
    }
  }());
  main.init();