 // Business logic not included because it will remain the same.




  function multiply(number1, number2) {
return number1*number2
 }

 function add(number1, number2) {
  return number1+number2
   }
   function subtract(number1, number2) {
    return number1-number2
     }
     function divide(number1, number2) {
      return number1/number2
       }
       function modulus(number1, number2) {
        return number1%number2
         }



// user logic
  $(document).ready(function() {
    $("form#calculator").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      let result;
      if (operator === "add") {
        result = add(number1, number2);
      } else if (operator === "subtract") {
        result = subtract(number1, number2);
      } else if (operator === "multiply") {
        result = multiply(number1, number2);
      } else if (operator === "divide") {
        result = divide(number1, number2);
      } else if (operator === "modulus") {
        result = modulus(number1, number2);
      }
      $("#output").text(result);
    });


    
  });

/*let fav = "cherry"
  let fruit = ["apple", "banana", "orange", "guava", "carrot", "grape"]
  fruit.unshift("melon")
  fruit.pop();
  fruit.push(fav);
  //looping through each element of the array

  let flen = fruit.length;
  let text = "<ol>"
  //for loop

  
  for (let i= 0; i < flen; i++) {
    text+= "<li>" + fruit[i] + "</li>";
    
  }

  text+= "</ol>";
  document.write(text);

 for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
 } */