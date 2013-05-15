/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("#Stage").css("margin: auto","width:1024px;","height:auto","text-align: center")

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_gear_waves2}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Waves").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_COACH}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Coach").show();
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_RW}", "click", function(sym, e) {
         // insert code for mouse click here// Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_GTemp}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://ete.cet.edu/gcc/?/globaltemp/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_ROVER}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://badges.cet.edu/LunarRover/ ", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_COACH}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_waves2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasa.gov/pdf/434481main_LP3-MakingWaves_508.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_IW}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_top52}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_MENTOR}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_grandprize}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_EVAL}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasarealworldinworld.org/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_FLIGHT}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nasa.gov/offices/education/programs/national/dln/events/Can_A_Shoebox_Fly_Challenge_part_1.html", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene32}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://selene.cet.edu", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene72}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://selene.cet.edu", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_MarsCuriosity}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://goo.gl/3qz0Q", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_ROVER}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Rover3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_ROVER}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Rover3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_RW}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_RW").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_RW}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_RW").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_COACH}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Coach").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_top52}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_top5").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_top52}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_top5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_grandprize}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Champ").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_grandprize}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Champ").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_MENTOR}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Mentor").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_MENTOR}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Mentor").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_EVAL}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Judge").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_EVAL}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Judge").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_FLIGHT}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Flight").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_FLIGHT}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Flight").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_waves2}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Waves").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_GTemp}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_ETE").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GEAR_GTemp}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_ETE").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_IW}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_IW").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_IW}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_IW").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene32}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_3star").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene32}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_3star").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene72}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_7star").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene72}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_7star").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_MarsCuriosity}", "mouseover", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Mars").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_MarsCuriosity}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_Mars").hide();
         

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'gear_XL'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_XL}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("gear_XL");
   //Edge symbol end:'gear_XL'

   //=========================================================
   
   //Edge symbol: 'gear_L'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_L4}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_L");
   //Edge symbol end:'gear_L'

   //=========================================================
   
   //Edge symbol: 'gear_M'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_M}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_M");
   //Edge symbol end:'gear_M'

   //=========================================================
   
   //Edge symbol: 'gear_XXL'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_XXL}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "beforeDeletion", function(sym, e) {
         // insert code to be run just before a symbol is deleted here
         
      });
      //Edge binding end

   })("gear_XXL");
   //Edge symbol end:'gear_XXL'

   //=========================================================
   
   //Edge symbol: 'gear_coach'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_XL_coach}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("gear_coach");
   //Edge symbol end:'gear_coach'

   //=========================================================
   
   //Edge symbol: 'gear_waves'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_waves}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("gear_waves");
   //Edge symbol end:'gear_waves'

   //=========================================================
   
   //Edge symbol: 'GEAR_GTEMP'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_GT}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("GEAR_GTEMP");
   //Edge symbol end:'GEAR_GTEMP'

   //=========================================================
   
   //Edge symbol: 'gear_Selene3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene3}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_Selene3");
   //Edge symbol end:'gear_Selene3'

   //=========================================================
   
   //Edge symbol: 'gear_Selene7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_Selene7}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_Selene7");
   //Edge symbol end:'gear_Selene7'

   //=========================================================
   
   //Edge symbol: 'GEAR_GLIGHT'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_FLIGHT}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("GEAR_GLIGHT");
   //Edge symbol end:'GEAR_GLIGHT'

   //=========================================================
   
   //Edge symbol: 'gear_MarsCuriosity'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_CURIOSITY}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_MarsCuriosity");
   //Edge symbol end:'gear_MarsCuriosity'

   //=========================================================
   
   //Edge symbol: 'gear_IW'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_XL_IW}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_IW");
   //Edge symbol end:'gear_IW'

   //=========================================================
   
   //Edge symbol: 'GEAR_ROVER'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_ROVER}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      

   })("GEAR_ROVER");
   //Edge symbol end:'GEAR_ROVER'

   //=========================================================
   
   //Edge symbol: 'GEAR_GTemp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_GTEMP}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("GEAR_GTemp");
   //Edge symbol end:'GEAR_GTemp'

   //=========================================================
   
   //Edge symbol: 'gear_top5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_top5}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_top5");
   //Edge symbol end:'gear_top5'

   //=========================================================
   
   //Edge symbol: 'GEAR_EVAL'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_EVAL}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("GEAR_EVAL");
   //Edge symbol end:'GEAR_EVAL'

   //=========================================================
   
   //Edge symbol: 'GEAR_MENTOR'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_MENTOR}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("GEAR_MENTOR");
   //Edge symbol end:'GEAR_MENTOR'

   //=========================================================
   
   //Edge symbol: 'gear_grandprize'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_grandPrize}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("gear_grandprize");
   //Edge symbol end:'gear_grandprize'

   //=========================================================
   
   //Edge symbol: 'GEAR_COACH'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_COACH}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("GEAR_COACH");
   //Edge symbol end:'GEAR_COACH'

   //=========================================================
   
   //Edge symbol: 'gear_GrandPrize'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_XXL_GP}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("gear_GrandPrize");
   //Edge symbol end:'gear_GrandPrize'

   //=========================================================
   
   //Edge symbol: 'GEAR_RW'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_RW2}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_RW").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_RW2}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Desc_RW").hide();
         

      });
      //Edge binding end

   })("GEAR_RW");
   //Edge symbol end:'GEAR_RW'

   //=========================================================
   
   //Edge symbol: 'gear_arm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here// stop the timeline at the given position (ms or label)
         sym.stop(2);

      });
      //Edge binding end

   })("gear_arm");
   //Edge symbol end:'gear_arm'

   //=========================================================
   
   //Edge symbol: 'BUTTON-about'
   (function(symbolName) {   
   
   })("BUTTON-about");
   //Edge symbol end:'BUTTON-about'

   //=========================================================
   
   //Edge symbol: 'Button-about_white'
   (function(symbolName) {   
   
   })("Button-about_white");
   //Edge symbol end:'Button-about_white'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover'
   (function(symbolName) {   
   
   })("Desc_Rover");
   //Edge symbol end:'Desc_Rover'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
   })("Desc_RW");
   //Edge symbol end:'Desc_RW'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_Coach");
   //Edge symbol end:'Desc_Coach'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_IW");
   //Edge symbol end:'Desc_IW'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_top5");
   //Edge symbol end:'Desc_top5'

   //=========================================================
   
   //Edge symbol: 'Desc_top5_1'
   (function(symbolName) {   
   
      })("Desc_Champ");
   //Edge symbol end:'Desc_Champ'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_Mentor");
   //Edge symbol end:'Desc_Mentor'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_Judge");
   //Edge symbol end:'Desc_Judge'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_Flight");
   //Edge symbol end:'Desc_Flight'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_Waves");
   //Edge symbol end:'Desc_Waves'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_ETE");
   //Edge symbol end:'Desc_ETE'

   //=========================================================
   
   //Edge symbol: 'Desc_Rover_1'
   (function(symbolName) {   
   
      })("Desc_3star");
   //Edge symbol end:'Desc_3star'

   //=========================================================
   
   //Edge symbol: 'Desc_3star_1'
   (function(symbolName) {   
   
      })("Desc_7star");
   //Edge symbol end:'Desc_7star'

   //=========================================================
   
   //Edge symbol: 'Desc_RW_1'
   (function(symbolName) {   
   
      })("Desc_Mars");
   //Edge symbol end:'Desc_Mars'

   //=========================================================
   
   //Edge symbol: 'gear_AA'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gear_AA}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gear_AA}", "mouseover", function(sym, e) {
         sym.play();
         
         
         

      });
      //Edge binding end

   })("gear_AA");
   //Edge symbol end:'gear_AA'

   //=========================================================
   
   //Edge symbol: 'Desc_ETE_1'
   (function(symbolName) {   
   
         })("Desc_AA");
   //Edge symbol end:'Desc_AA'

})(jQuery, AdobeEdge, "EDGE-182707976");