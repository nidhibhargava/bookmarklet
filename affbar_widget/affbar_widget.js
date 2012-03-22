(function() {
  var jQuery;
  var serverFQDN = 'http://localhost:8080';
  var timeoutId, options, container;

  if (!window.affbar_widget) window.affbar_widget = {};
  affbar_widget.Widget = function(opts) {
    options = opts;
    if (!options.buttonText) {
      options.buttonText = 'This text is configurable';
    }
    container = '.widget-body';
  };

  function init() {
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.6.4') {
      //console.log('we need to load jQuery');
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type","text/javascript");
      script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.js");
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
      if (script_tag.attachEvent) {
        //console.log('oh cool, this is IE');
        script_tag.onreadystatechange = function() { // for IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
            this.onreadystatechange = null;
            scriptLoadHandler();
          }
        };
      } else {
        script_tag.onload = scriptLoadHandler;
      }
    } else {
      jQuery = window.jQuery;
      //console.log('jQuery already exists on page');
      main();
    }
  }

  function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict();
    //console.log('jQuery is now loaded');
    main();
  }
  
  function main() {
			jQuery(document).ready(function() {
			jQuery('head').append('<link href="affbar_widget/affbar_style.css" rel="stylesheet" type="text/css">');
			jQuery('head').append('<link href="affbar_widget/affbarreset.css" rel="stylesheet" type="text/css">');
			jQuery.getScript('/affbar_widget/affbar_slider.js');

      render();
    });
  }

  function render() {
    // build the widget
    var markup = '';
    markup = markup + '<div id="affbar">';
    markup = markup + '<a href="http://www.eatbmore.com"><img class="barlogo" src="eatbmorelogo.png"/></a>';
    markup = markup + '<div id="affbarcontent">';
    markup = markup + '<p class="heading">Order food online from Mothers at EatBmore.com';
    markup = markup + '<a class="orderdelivery" href="https://eatbmore.localupmenus.com/order-online-mothers-federal-hill-grille-federal-hill-american/step1.aspx">Order Delivery</a>';
    markup = markup + '<a class="ordertakeout" href="https://eatbmore.localupmenus.com/order-online-mothers-federal-hill-grille-federal-hill-american/step1.aspx"> Order Takeout</a>';
    markup = markup + '</p>';
    markup = markup + '</div>';
    markup = markup + '<div id="close">&#215;</div>';
    markup = markup + '<div id="tab">';
		markup = markup + '<p class="tabcontent"><img class="tablogo" src="eatbmorelogo.png"/>Order Online</p>';
		markup = markup + '</div>';
		
    jQuery(container).append(markup);
    // handle events
    jQuery(container);
  }
    
  init();
  
})();