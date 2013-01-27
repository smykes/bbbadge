bbbadge
=======

###Introduction

bbbadge is a simple jQuery plugin for displaying <a href="http://www.Dribbble.com/">dribbble</a> player stats on a personal website or portfolio.

###Usage

Include a link to the bbbadge.js file inside the HTML file you wish to display the bbbadge instance in:
  
```
<script src="js/bbbadge.js"></script>
```
Make sure you also include a link to the latest version of jQuery.  Being a jQuery plugin, the library is necessary.

Include the following Div inside of your HTML file, where data-id is equal to the id of the users stats you want to display.  The div can be named anything you want, you could even change it to a class if you really wanted to.

```
<div id="myDiv" class='badge' data-id="username"></div>
```

Last initiate the plugin: 
```
$('document').ready(function() {
	$("#myDiv").bbbadge({});
});
```

###Notes 
This is my first time using Git for version control, I appologize if there are a bunch of junk files in the project, I'm trying to learn as I go.

###Disclaimer
Dribbble belongs to Dribbble, LLC, if you use this adhere to their rules.  If this plug-in breaks anything, it's not my fault.  User beware.