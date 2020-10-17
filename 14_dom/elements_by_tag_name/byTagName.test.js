'use strict';

const byTagName = require('./byTagName');

const htmlToTest = `<h1>Heading with a <span>span</span> element.</h1>
							  <p>A paragraph with <span>one</span>, <span>two</span>
  							   spans.</p>`;

test('Check h1 count is 1', () => {	
	document.body.innerHTML = htmlToTest;	
	
	expect(byTagName(document.body, "h1").length).toBe(1);	
	expect(document.getElementsByTagName("h1").length).toBe(1);
	expect(document.getElementsByTagName("h1").length).toBe(byTagName(document.body, "h1").length);	
});


test('Check span count is 3', () => {	
	document.body.innerHTML = htmlToTest;		
	
	expect(document.getElementsByTagName("span").length).toBe(3);
	expect(byTagName(document.body, "span").length).toBe(3);		
	expect(byTagName(document.body, "span").length).toBe(document.getElementsByTagName("span").length);		
});