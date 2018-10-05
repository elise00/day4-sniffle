
function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var toppings = elements.toppings;

    // get selected value out of radio buttons
    var grade = elements.grade;
    console.log('grade', grade.value);

    // get selected values out of checkboxes
    var selectedToppings = '';

    for(var i = 0; i < toppings.length; i++){
        var topping = toppings[i];
        if(topping.checked) {
            selectedToppings = selectedToppings + ' ' + toppings.value;
        }
    }
    console.log(selectedToppings);
}