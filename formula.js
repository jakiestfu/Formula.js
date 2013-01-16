;(function ($) {
  $.fn.extend({
    formula: function (options) {
      this.defaultOptions = {
      	filter: function(data){
      		return data;
      	},
        done: null
      };

      var settings = $.extend({}, this.defaultOptions, options);

      return this.each(function () {
        $(this).on('click', function(e){
          e.preventDefault();
          var _this_link = this,
              method = _this_link.dataset.method || 'GET',
              data = settings.filter(_this_link.dataset);
              
          $.ajax({
            url: _this_link.href,
            type: method,
            data: data,
            success: function(res){
              settings.done.call(_this_link, res);
            }
          });
          
        });
      });
    }
  });
})(window.jQuery);