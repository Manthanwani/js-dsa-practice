# Hoisting in JavaScript
## what is not hosting 
- Hoisting means JavaScript moves code to the top

## What is Hoisting
- JavaScript moves declarations to the top during memory creation phase
- Only declarations are hoisted, not initializations

## var
- Hoisted and initialized as undefined
- Accessible before declaration

## let and const
- Hoisted but NOT initialized
- Exist in Temporal Dead Zone (TDZ)
- Access before declaration causes ReferenceError

## Functions
- Function declarations are fully hoisted
- Function expressions behave like variables
