var e=document.querySelector("tbody"),t=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),l=document.querySelector(".append-row"),n=document.querySelector(".remove-row");document.addEventListener("click",function(o){if(o.target===t&&function(){var e=document.querySelectorAll("tr"),l=!0,n=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var d=u.value;if(10===d.cells.length)return;9===d.cells.length&&t.setAttribute("disabled","true"),2===d.cells.length&&r.removeAttribute("disabled");var a=document.createElement("td");d.append(a)}}catch(e){n=!0,o=e}finally{try{l||null==c.return||c.return()}finally{if(n)throw o}}}(),o.target===r&&function(){var e=document.querySelectorAll("tr"),l=!0,n=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var d=u.value;if(2===d.cells.length)return;3===d.cells.length&&r.setAttribute("disabled","true"),10===d.cells.length&&t.removeAttribute("disabled"),d.cells[d.cells.length-1].remove()}}catch(e){n=!0,o=e}finally{try{l||null==c.return||c.return()}finally{if(n)throw o}}}(),o.target===l&&function(){var t=document.querySelectorAll("tr");if(10!==t.length){9===t.length&&l.setAttribute("disabled","true"),2===t.length&&n.removeAttribute("disabled");var r=document.querySelector("tr").cloneNode(!0);e.append(r)}}(),o.target===n){var u;2!==(u=document.querySelectorAll("tr")).length&&(3===u.length&&n.setAttribute("disabled","true"),10===u.length&&l.removeAttribute("disabled"),u[u.length-1].remove())}});
//# sourceMappingURL=index.4d7ca066.js.map
