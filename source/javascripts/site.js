function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

function isVisible (ele) {
  if(isElement(ele)) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
      
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }
}



var pDiv = document.querySelectorAll('div.underwater');
var nDiv = document.querySelectorAll('section.navigation');

/**
 * 
 */
window.addEventListener('scroll', function() {
  
  // toggle site menu 
  if(isVisible(document.querySelectorAll('.trigger-dark-style')[0])) {
    removeClass(nDiv[0], 'dark-style')
  } else {
    addClass(nDiv[0], 'dark-style')
  }
  
  if(isVisible(document.querySelectorAll('#thanks')[0])) {
    removeClass(pDiv[0], 'light-on')
  } else {
    
  }
  
  // #science scence 
  if(isVisible(document.querySelectorAll('section#science')[0])) {
    removeClass(pDiv[0], 'trigger-seaotter-on')
    removeClass(pDiv[0], 'trigger-foodchain')
    removeClass(pDiv[0], 'trigger-seaurchin-on')
    removeClass(pDiv[0], 'light-on')
    console.log('css')
  } else {
  }
 
  // #history scence 
 
    // sea otter 
    if(isVisible(document.querySelectorAll('div.trigger-seaotter')[0])) {
      addClass(pDiv[0], 'trigger-seaotter-on')
    } else {
      
      if(document.querySelectorAll('div.trigger-seaotter-off').length === 1 ) {
        removeClass(pDiv[0], 'trigger-seaotter-on')
      }
      
      if(document.querySelectorAll('div.trigger-seaotter-on').length === 1 ) {
        removeClass(pDiv[0], 'trigger-seaotter-on')
      }
    }
    
    // > surface light 
    if(isVisible(document.querySelectorAll('.trigger-surface-light')[0])) {
      addClass(pDiv[0], 'light-on')
    } else {
    }
  
    // the disrupted food chain
    if(isVisible(document.querySelectorAll('.trigger-foodchain')[0])) {
      addClass(pDiv[0], 'trigger-foodchain')
      addClass(pDiv[0], 'trigger-seaurchin-on')
    } else {
      
    }
    
    
    // enter the foundation : organized team
    // enter the foundation : clearing the urchins
    
        // remove urchines
    // within days
    
     
    
    // within weeks
    // within months
    
    // how much can you restore
  
  if(isVisible(document.querySelectorAll('.trigger-restoration')[0])) {
    addClass(pDiv[0], 'trigger-restoration-on')
  } else {
    removeClass(pDiv[0], 'trigger-restoration-on')
    removeClass(pDiv[0], 'trigger-deepdive-on')
  }
  
  if(isVisible(document.querySelectorAll('.trigger-deepdive')[0])) {
    addClass(pDiv[0], 'trigger-deepdive-on')
    addClass(pDiv[0], 'trigger-seaurchin-on')
    console.log('dd')
    
    removeClass(pDiv[0], 'trigger-months')
    removeClass(pDiv[0], 'trigger-days')
    removeClass(pDiv[0], 'trigger-weeks')
  } else {
  }

  if(isVisible(document.querySelectorAll('.trigger-days-scene')[0])) {
    addClass(pDiv[0], 'trigger-days-scene')
  } else {
  }
  
 
  if(isVisible(document.querySelectorAll('.trigger-days')[0])) {
    addClass(pDiv[0], 'trigger-days');
    removeClass(pDiv[0], 'trigger-months');
    removeClass(pDiv[0], 'trigger-deepdive-on');
    removeClass(pDiv[0], 'trigger-seaurchin-on')
  } else {
  }
  
  if(isVisible(document.querySelectorAll('.trigger-weeks')[0])) {
    addClass(pDiv[0], 'trigger-weeks')
  } else {
  }
  
  if(isVisible(document.querySelectorAll('.trigger-months')[0])) {
    addClass(pDiv[0], 'trigger-months')
  } else {
  }
  
  if(isVisible(document.querySelectorAll('.trigger-howmuch')[0])) {
    removeClass(pDiv[0], 'trigger-disruption')
    removeClass(pDiv[0], 'trigger-foodchain')
    removeClass(pDiv[0], 'trigger-restoration-on')
    
    removeClass(pDiv[0], 'trigger-months')
    removeClass(pDiv[0], 'trigger-days')
    removeClass(pDiv[0], 'trigger-weeks')
    
    console.log('pop')
  } else {
  }
  
  if(isVisible(document.querySelectorAll('.trigger-thanks')[0])) {
    removeClass(pDiv[0], 'trigger-disruption')
    removeClass(pDiv[0], 'trigger-foodchain')
    removeClass(pDiv[0], 'trigger-restoration-on')
    
    removeClass(pDiv[0], 'trigger-months')
    removeClass(pDiv[0], 'trigger-days')
    removeClass(pDiv[0], 'trigger-weeks')
    
    console.log('pop')
  } else {
  }
  
  if(isVisible(document.querySelectorAll('.trigger-howmuch')[0])) {
    addClass(pDiv[0], 'trigger-howmuch-on')
  } else {
    removeClass(pDiv[0], 'trigger-howmuch-on')
  }
  
 
  // if(isVisible(document.querySelectorAll('.trigger-weeks')[0])) {
  //   addClass(pDiv[0], 'trigger-weeks')
  // } else {
  // }
  
  // if(isVisible(document.querySelectorAll('.trigger-months')[0])) {
  //   addClass(pDiv[0], 'trigger-months')
  // } else {
  // }

});






// This is where it all goes :)
// https://github.com/daneden/animate.css
// Changing the defaults
window.sr = ScrollReveal({ 
    reset: true, 
    center: true,
    afterReveal: function (domEl) {
        addClass(domEl, 'in-view')
    },
    afterReset: function (domEl) {
        removeClass(domEl, 'in-view')
    }
    
});

// Customizing a reveal set
sr.reveal('.fade-in-100', { duration: 100 });
sr.reveal('.fade-in-200', { duration: 200 });
sr.reveal('.fade-in-300', { duration: 300 });
sr.reveal('.fade-in-400', { duration: 400 });
sr.reveal('.fade-in-500', { duration: 500 });
sr.reveal('.fade-in-600', { duration: 600 });
sr.reveal('.fade-in-700', { duration: 700 });
sr.reveal('.fade-in-800', { duration: 800 });
sr.reveal('.fade-in-900', { duration: 900 });
sr.reveal('.fade-in-1000', { duration: 1000 });
sr.reveal('.fade-in-1100', { duration: 1100 });
sr.reveal('.fade-in-1200', { duration: 1200 });

// Customizing a reveal set
sr.reveal('.reveal-bg-transition', { duration: 200 });
sr.reveal('.reveal-bg-transition-0', { duration: 0 });


sr.reveal('.reveal-bg-transition-top', { 
  duration: 320, 
  origin: 'top', 
  afterReveal: function (domEl) {
    var target = document.querySelectorAll('div.underwater');
    addClass(target[0], 'light-on')
  },
  beforeReset: function (domEl) {
    var target = document.querySelectorAll('div.underwater');
    removeClass(target[0], 'light-on')
  }
});