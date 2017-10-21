particlesJS('particles-js',

{
"particles": {
  "number": {
    "value": 120,
    "density": {
      "enable": true,
      "value_area": 800
    }
  },
  "color": {
    "value": "#08fdd8"
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#000000"
    },
    "polygon": {
      "nb_sides": 5
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 0.5584124417625833,
    "random": false,
    "anim": {
      "enable": false,
      "speed": 1,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 3,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 10,
      "size_min": 0.1,
      "sync": false
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 166.6902811231592,
    "color": "#08fdd8",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 4,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "grab"
    },
    "onclick": {
      "enable": true,
      "mode": "bubble"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 152.02702702702692,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 114.02027027027019,
      "size": 6,
      "duration": 0.7601351351351346,
      "opacity": 1,
      "speed": 2
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
}
);




$(document).ready(function(){
  
//Header Social Hover Effect =================
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var HoverButton = function () {
    function HoverButton(el) {
      _classCallCheck(this, HoverButton);

      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }

    HoverButton.prototype.attachEventsListener = function attachEventsListener() {
      var _this = this;

      window.addEventListener('mousemove', function (e) {
        return _this.onMouseMove(e);
      });
      window.addEventListener('resize', function (e) {
        return _this.calculatePosition(e);
      });
    };

    HoverButton.prototype.calculatePosition = function calculatePosition() {
      TweenMax.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      var box = this.el.getBoundingClientRect();
      this.x = box.left + box.width * 0.5;
      this.y = box.top + box.height * 0.5;
      this.width = box.width;
      this.height = box.height;
    };

    HoverButton.prototype.onMouseMove = function onMouseMove(e) {
      var hover = false;
      var hoverArea = this.hover ? 0.7 : 0.5;
      var x = e.clientX - this.x;
      var y = e.clientY - this.y;
      var distance = Math.sqrt(x * x + y * y);
      if (distance < this.width * hoverArea) {
        hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
      }

      if (!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    };

    HoverButton.prototype.onHover = function onHover(x, y) {
      TweenMax.to(this.el, 0.4, {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: Power2.easeOut
      });
      this.el.style.zIndex = 10;
    };

    HoverButton.prototype.onLeave = function onLeave() {
      TweenMax.to(this.el, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Elastic.easeOut.config(1.2, 0.4)
      });
      this.el.style.zIndex = 1;
    };

    return HoverButton;
  }();

 /* var btn1 = document.querySelector('.fb');
  new HoverButton(btn1);*/

   new HoverButton(document.querySelector('.fb1'));

  new HoverButton(document.querySelector('.fb2'));

   new HoverButton(document.querySelector('.fb3'));
  


  //End Hover effect=====================






//Portfolio Hover effect=================
  var nodes  = document.querySelectorAll('sec-3-item'),
      _nodes = [].slice.call(nodes, 0);

  var getDirection = function (ev, obj) {
      var w = obj.offsetWidth,
          h = obj.offsetHeight,
          x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
          y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
          d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
      return d;
  };

  var addClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
    class_suffix = "";
    obj.className = "";
    
    switch (direction) {
      case 0 : class_suffix = '-top';    break;
      case 1 : class_suffix = '-right';  break;
      case 2 : class_suffix = '-bottom'; break;
      case 3 : class_suffix = '-left';   break;
    }
    obj.classList.add( state + class_suffix);
  };


  _nodes.forEach(function (el) {
      el.addEventListener('mouseover', function (ev) {
          addClass( ev, this, 'in' );
      }, false);

      el.addEventListener('mouseout', function (ev) {
          addClass( ev, this, 'out' );
      }, false);
  });
  //End Portfolio Hover effect===============

});