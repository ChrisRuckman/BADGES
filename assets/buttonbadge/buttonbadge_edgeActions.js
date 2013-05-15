
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'gear_arm'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop(2);});
//Edge binding end
})("gear_arm");
//Edge symbol end:'gear_arm'
})(jQuery,AdobeEdge,"EDGE-13680025");