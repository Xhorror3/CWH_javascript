let a = document.getElementsByTagName('div')[0]

// a.innerHTML=a.innerHTML+'<h1>Hello world!</h1>'   this is one method to insert

// insertion methods are given below
let div = document.createElement('div');
div.innerHTML = '<h1>Hello world</h1>';
// a.append(div);
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)