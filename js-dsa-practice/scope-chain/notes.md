# Scope Chain in JavaScript

## What is Scope
Scope determines where a variable or function can be accessed in the code.

JavaScript has:
- Global Scope
- Function Scope
- Block Scope (let, const)

---

## Lexical Environment
- Every execution context has a lexical environment
- It contains:
  1. Environment Record (variables/functions of that scope)
  2. Reference to outer lexical environment

Lexical environment is decided at **code writing time**, not runtime.

---

## Scope Chain
- Scope chain is the mechanism by which JavaScript looks up variables
- When a variable is used, JS searches:
  1. Current (local) scope
  2. Parent scope
  3. Global scope
- If not found → ReferenceError

---

## How Scope Chain Works
- Inner functions can access variables of outer functions
- Outer functions cannot access variables of inner functions
- This happens because inner scope holds a reference to outer lexical environment

---

## Block Scope
- Variables declared with `let` and `const` are block scoped
- `var` is function scoped
- Block scope exists inside `{}`

---

## Important Points
- Scope chain is different from call stack
- Scope chain depends on where code is written, not how it is called
- Scope chain explains `undefined` and `ReferenceError`

