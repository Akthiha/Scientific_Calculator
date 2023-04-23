
```````````````````````

 _______________________
|                       |
|        Calculator     |
|                       |
|    _________________  |
|   |                 | |
|   |                 | |
|   |                 | |
|   |                 | |
|   |                 | |
|   |_________________| |
|   | AC  (  )  %   / | |
|   |  7   8   9   x  | |
|   |  4   5   6   -  | |
|   |  1   2   3   +  | |
|   |  0    .  Ans  = | |
|   | sin  cos  tan ln| |
|   |_________________| |
|_______________________|


``````````````````````
The calculator app uses React and state management to update and display the input field 
and calculation result.When a user clicks a button, it triggers the corresponding event 
handler, which updates the calculation state. If the user clicks on a number or operator button,
the calculation state is updated with the new value.If the user clicks on the "AC" button, the 
calculation state is reset to an empty string.


When the user clicks on the "=" button, the handleCalculate event handler is triggered, 
which evaluates the calculation state using the built-in JavaScript eval() function.
If the evaluation is successful, the result is set as the new calculation state and displayed in 
the input field. If the evaluation fails, the calculation state is set to "Error" and displayed in 
the input field.

The app also includes event handlers for trigonometric and logarithmic functions, as well as buttons for constants
like Pi and e, and buttons for square root and exponentiation. These event handlers update the calculation state 
with the corresponding mathematical expression.

