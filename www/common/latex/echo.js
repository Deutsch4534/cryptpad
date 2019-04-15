// Generated by LiveScript 1.6.0
(function(){
  'use strict';
  var Echo, out$ = typeof exports != 'undefined' && exports || this;
  out$.Echo = Echo = (function(){
    Echo.displayName = 'Echo';
    var args, prototype = Echo.prototype, constructor = Echo;
    args = Echo.args = {};
    function Echo(generator, options){}
    args.gobbleO = ['H', 'o?'];
    Echo.prototype['gobbleO'] = function(){
      return [];
    };
    args.echoO = ['H', 'o?'];
    Echo.prototype['echoO'] = function(o){
      return ["-", o, "-"];
    };
    args.echoOGO = ['H', 'o?', 'g', 'o?'];
    Echo.prototype['echoOGO'] = function(o1, g, o2){
      var x$;
      x$ = [];
      if (o1) {
        x$.push("-", o1, "-");
      }
      x$.push("+", g, "+");
      if (o2) {
        x$.push("-", o2, "-");
      }
      return x$;
    };
    args.echoGOG = ['H', 'g', 'o?', 'g'];
    Echo.prototype['echoGOG'] = function(g1, o, g2){
      var x$;
      x$ = ["+", g1, "+"];
      if (o) {
        x$.push("-", o, "-");
      }
      x$.push("+", g2, "+");
      return x$;
    };
    return Echo;
  }());
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWNrYWdlcy9lY2hvLmxzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBQUE7O2NBSWEsUUFBTixRQUFBLENBQUE7OztJQUVILElBQUssQ0FBQSxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUssQ0FBQSxDQUFBLENBQUU7SUFHZixRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsRUFBQSxPQUFBO0lBSUEsSUFBSSxDQUFDLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQSxLQUFBLElBQUE7bUJBRWYsYUFBVyxRQUFBLENBQUE7YUFBRzs7SUFJZCxJQUFJLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBRSxDQUFBLEtBQUEsSUFBQTttQkFFYixXQUFTLFFBQUEsQ0FBQSxDQUFBO2FBQ0wsQ0FBSyxLQUFFLEdBQU0sR0FBYjs7SUFHSixJQUFJLENBQUMsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFBLEtBQUEsTUFBQSxLQUFBLElBQUE7bUJBRWYsYUFBVyxRQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBOztXQUNQO01BQ3dCLElBQUcsRUFBSDtRQUFwQixFQUFFLENBQUEsS0FBUSxLQUFFLElBQU8sR0FBVDs7TUFDVixFQUFFLENBQUEsS0FBUSxLQUFFLEdBQU8sR0FBVDtNQUNVLElBQUcsRUFBSDtRQUFwQixFQUFFLENBQUEsS0FBUSxLQUFFLElBQU8sR0FBVDs7OztJQUdsQixJQUFJLENBQUMsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFBLEtBQUEsS0FBQSxNQUFBLEdBQUE7bUJBRWYsYUFBVyxRQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBOztXQUNQLENBQUssS0FBRSxJQUFPLEdBQWQ7TUFDd0IsSUFBRyxDQUFIO1FBQXBCLEVBQUUsQ0FBQSxLQUFRLEtBQUUsR0FBTyxHQUFUOztNQUNWLEVBQUUsQ0FBQSxLQUFRLEtBQUUsSUFBTyxHQUFUIiwiZmlsZSI6ImVjaG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuXG4jIG1hY3JvcyBqdXN0IGZvciB0ZXN0aW5nXG5leHBvcnQgY2xhc3MgRWNob1xuXG4gICAgYXJncyA9IEBhcmdzID0ge31cblxuICAgICMgQ1RPUlxuICAgIChnZW5lcmF0b3IsIG9wdGlvbnMpIC0+XG5cblxuXG4gICAgYXJncy5nb2JibGVPID0gPFsgSCBvPyBdPlxuXG4gICAgXFxnb2JibGVPIDogLT4gW11cblxuXG5cbiAgICBhcmdzLmVjaG9PID0gPFsgSCBvPyBdPlxuXG4gICAgXFxlY2hvTyA6IChvKSAtPlxuICAgICAgICBbIFwiLVwiLCBvLCBcIi1cIiBdXG5cblxuICAgIGFyZ3MuZWNob09HTyA9IDxbIEggbz8gZyBvPyBdPlxuXG4gICAgXFxlY2hvT0dPIDogKG8xLCBnLCBvMikgLT5cbiAgICAgICAgW11cbiAgICAgICAgICAgIC4ucHVzaCBcIi1cIiwgbzEsIFwiLVwiIGlmIG8xXG4gICAgICAgICAgICAuLnB1c2ggXCIrXCIsIGcsICBcIitcIlxuICAgICAgICAgICAgLi5wdXNoIFwiLVwiLCBvMiwgXCItXCIgaWYgbzJcblxuXG4gICAgYXJncy5lY2hvR09HID0gPFsgSCBnIG8/IGcgXT5cblxuICAgIFxcZWNob0dPRyA6IChnMSwgbywgZzIpIC0+XG4gICAgICAgIFsgXCIrXCIsIGcxLCBcIitcIiBdXG4gICAgICAgICAgICAuLnB1c2ggXCItXCIsIG8sICBcIi1cIiBpZiBvXG4gICAgICAgICAgICAuLnB1c2ggXCIrXCIsIGcyLCBcIitcIlxuIl19