sap.ui.define(function(){"use strict";return{timeouts:[],intervals:[],setTimeout:function(t,e){var i=setTimeout(t,e);this.timeouts.push(i);return i},setInterval:function(t,e){var i=setInterval(t,e);this.intervals.push(i);return i},clearAllTimeout:function(){for(var t=0;t<this.timeouts.length;t++){window.clearTimeout(this.timeouts[t])}this.timeouts=[]},clearAllIntervals:function(){for(var t=0;t<this.intervals.length;t++){window.clearInterval(this.intervals[t])}this.intervals=[]},clearAll:function(){this.clearAllTimeout();this.clearAllIntervals()}}});