## An npm module which replaces any plain text link within string with anchor tag

### How to install 
  $ npm i convert-plain-text-into-links

### How to use 

`import convertPlainTextIntoLinks from 'convert-plain-text-into-links'`
 
 `const htmlString = convertPlainTextIntoLinks('For more info visit our website https://www.freetrail.com or www.example.com',    '_blank', 'white')` 
 
  `console.log(htmlString)` 
  
  `OUTPUT--> For more info visit our website<pre> </pre><a href="https://www.freetrail.com" target="_blank"     style="color:white;">https://www.freetrail.com</a> or<pre> </pre><a href="http://www.example.com" target="_blank"  style="color:white;" >www.example.com</a>`
