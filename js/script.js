/*  // Business logic not included because it will remain the same.

$(document).ready(function() {
    $("form#calculator").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      const result = add(number1, number2);
      $("#output").text(result);
    });
  }); */


  /* // business logic code not included here because we're not changing it

$(document).ready(function() {
    $("form#calculator").submit(function() {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      console.log("1st number: " + number1);  // for debugging
      console.log("2nd number: " + number2);  // for debugging
      console.log("operator: " + operator);  // for debugging
      const result = add(number1, number2);
      $("#output").text(result);
    });
  }); */



  $(document).ready(function() {
    $("form#calculator").submit(function() {
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
      }
      $("#output").text(result);
    });
  });