# Formula.js

Formula.js is a tiny abstraction for turning links into ajax requests, useful for transferring more data with every link click. Additional data parameters are stored on the link in data attributes, and the method attribute will be used to define the type of request.

## Usage

```html
<a href="http://mysite.com/ajax/like" data-method="POST" data-foo="foo" data-bar="bar">Like</a>
```

```javascript
$('a[data-method]').formula({
  filter: function(data){
  	
  	// Add any additional bits of data before sending it off
  	data.hello = "world";
  	
  	return data;
  }
  done: function(res){
  	// Continue your logic
  },
});
```

## Defaults

* `data-method`: String, "GET" || "POST", Type of request to send. ("GET" by default)
* `filter`: Function, Function to modify data before sending. Default: `function(data){ return data; }`
* `done`: Function, Called after ajax request (`success`). Default: `null`

## Notes
The `this` keyword in the `done` function will represent the element or link that was clicked.