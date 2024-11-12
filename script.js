var a=  + prompt("enter number")

document.write("<h1>Table of " + a +"</h1>") ;
document.write("<table border='1' width='200'>")
for (let i = 1; i <= 10; i++) {
  document.write("<tr>")
  document.write("<td>" + a +"</td>") ;
  document.write("<td>" + "x" +"</td>") ;
  document.write("<td>" + "=" +"</td>") ;
  document.write("<td>" + i +"</td>") ;
  document.write("<td>" + a * i +"</td>") ;
  document.write("</tr>")
}
document.write("</table>")
  