angular.module('ionic.enablescroll', ['ionic']).directive('ionEnableScroll', function ($ionicScrollDelegate) {
  var SCROLLSIZE = 100;
  function pageUp (scrollview) {
    scrollview.scrollBy(0, -5 * SCROLLSIZE, true);
  }
  function pageDown (scrollview) {
    scrollview.scrollBy(0, 5 * SCROLLSIZE, true);
  }
  function scrollUp (scrollview) {
    scrollview.scrollBy(0, -SCROLLSIZE, true);
  }
  function scrollDown (scrollview) {
    scrollview.scrollBy(0, SCROLLSIZE, true);
  }
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var scrollView = $ionicScrollDelegate.getScrollView(scope);
      element.bind("keydown keypress", function (event) {
        event.preventDefault();
        switch (event.which) {
          case 38: scrollUp(scrollView); break;
          case 40: scrollDown(scrollView); break;
          case 33: pageUp(scrollView); break;
          case 34: pageDown(scrollView); break;
        }
      });
      element[0].focus();
    }
  };
});
