// Generated by LiveScript 1.6.0
(function(){
  'use strict';
  var Hyperref, out$ = typeof exports != 'undefined' && exports || this;
  out$.Hyperref = Hyperref = (function(){
    Hyperref.displayName = 'Hyperref';
    var args, prototype = Hyperref.prototype, constructor = Hyperref;
    args = Hyperref.args = {};
    function Hyperref(generator, options){}
    args['href'] = ['H', 'o?', 'u', 'g'];
    Hyperref.prototype['href'] = function(opts, url, txt){
      return [this.g.create(this.g.link(url), txt)];
    };
    args['url'] = ['H', 'u'];
    Hyperref.prototype['url'] = function(url){
      return [this.g.create(this.g.link(url), this.g.createText(url))];
    };
    args['nolinkurl'] = ['H', 'u'];
    Hyperref.prototype['nolinkurl'] = function(url){
      return [this.g.create(this.g.link(), this.g.createText(url))];
    };
    return Hyperref;
  }());
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWNrYWdlcy9oeXBlcnJlZi5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUFBOztrQkFFYSxZQUFOLFFBQUEsQ0FBQTs7O0lBRUgsSUFBSyxDQUFBLENBQUEsQ0FBRSxRQUFDLENBQUEsSUFBSyxDQUFBLENBQUEsQ0FBRTtJQUdmLFFBQUEsQ0FBQSxRQUFBLENBQUEsU0FBQSxFQUFBLE9BQUE7SUFLQSxJQUFJLENBQUMsTUFBRCxDQUFPLENBQUEsQ0FBQSxDQUFTLENBQUEsS0FBQSxNQUFBLEtBQUEsR0FBQTt1QkFDcEIsVUFBc0IsUUFBQSxDQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQTthQUFvQixDQUFFLElBQUMsQ0FBQSxDQUFDLENBQUMsT0FBTyxJQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssR0FBRCxHQUFPLEdBQWQsQ0FBWjs7SUFFMUMsSUFBSSxDQUFDLEtBQUQsQ0FBTSxDQUFBLENBQUEsQ0FBVSxDQUFBLEtBQUEsR0FBQTt1QkFDcEIsU0FBc0IsUUFBQSxDQUFBLEdBQUE7YUFBUyxDQUFFLElBQUMsQ0FBQSxDQUFDLENBQUMsT0FBTyxJQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssR0FBRCxHQUFPLElBQUMsQ0FBQSxDQUFDLENBQUMsV0FBVyxHQUFELENBQTNCLENBQVo7O0lBRS9CLElBQUksQ0FBQyxXQUFELENBQVksQ0FBQSxDQUFBLENBQUksQ0FBQSxLQUFBLEdBQUE7dUJBQ3BCLGVBQXNCLFFBQUEsQ0FBQSxHQUFBO2FBQVMsQ0FBRSxJQUFDLENBQUEsQ0FBQyxDQUFDLE9BQU8sSUFBQyxDQUFBLENBQUMsQ0FBQyxLQUFJLEdBQUksSUFBQyxDQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUQsQ0FBeEIsQ0FBWiIsImZpbGUiOiJoeXBlcnJlZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgY2xhc3MgSHlwZXJyZWZcblxuICAgIGFyZ3MgPSBAYXJncyA9IHt9XG5cbiAgICAjIENUT1JcbiAgICAoZ2VuZXJhdG9yLCBvcHRpb25zKSAtPlxuXG5cbiAgICAjIHBhY2thZ2U6IGh5cGVycmVmXG5cbiAgICBhcmdzLlxcaHJlZiA9ICAgICAgICA8WyBIIG8/IHUgZyBdPlxuICAgIFxcaHJlZiAgICAgICAgICAgICAgIDogKG9wdHMsIHVybCwgdHh0KSAtPiBbIEBnLmNyZWF0ZSBAZy5saW5rKHVybCksIHR4dCBdXG5cbiAgICBhcmdzLlxcdXJsID0gICAgICAgICA8WyBIIHUgXT5cbiAgICBcXHVybCAgICAgICAgICAgICAgICA6ICh1cmwpIC0+IFsgQGcuY3JlYXRlIEBnLmxpbmsodXJsKSwgQGcuY3JlYXRlVGV4dCh1cmwpIF1cblxuICAgIGFyZ3MuXFxub2xpbmt1cmwgPSAgIDxbIEggdSBdPlxuICAgIFxcbm9saW5rdXJsICAgICAgICAgIDogKHVybCkgLT4gWyBAZy5jcmVhdGUgQGcubGluaygpLCBAZy5jcmVhdGVUZXh0KHVybCkgXVxuXG5cbiAgICAjIFRPRE9cbiAgICAjIFxcaHlwZXJiYXNldXJsICBIViB1XG5cbiAgICAjIFxcaHlwZXJyZWZbbGFiZWxde2xpbmsgdGV4dH0gLS0tIGxpa2UgXFxyZWZ7bGFiZWx9LCBidXQgdXNlIFwibGluayB0ZXh0XCIgZm9yIGRpc3BsYXlcbiAgICAjIGFyZ3MuXFxoeXBlcnJlZiA9ICAgIDxbIEggbz8gZyBdPlxuICAgICMgXFxoeXBlcnJlZiAgICAgICAgICAgOiAobGFiZWwsIHR4dCkgLT4gWyBAZy5yZWYgbGFiZWwgXVxuIl19