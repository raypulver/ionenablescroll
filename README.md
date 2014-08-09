ion-enable-scroll
=================

This is a directive which can be applied to <ion-content> in order to enable scrolling with the arrow keys in Ionic apps.

## Usage
Include ion-enable-scroll.js on your page:

    <script src="lib/ion-enable-scroll/ion-enable-scroll.js"></script>

Include ionic.enablescroll in your apps dependencies:

    angular.module('myApp', ['ionic', 'ionic.enablescroll'])...

Then you can apply ion-enable-scroll to an \<ion-content\> directive. Be sure to set tabindex="0" to make the \<ion-content\> focusable:

    <ion-content has-header="true" has-footer="true" padding="false" tabindex="0" ion-enable-scroll> ...

And now you can use the arrow keys to scroll your \<ion-content\>s!
