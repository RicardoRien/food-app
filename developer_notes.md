### Eslint main rules:
- No console.log
- JsDoc is required if you create a function with more than 6 lines of code.

### JsDoc:
- Read documentarion here https://jsdoc.app/

#### JsDoc example:
```javascript
/**
 * @description Generates a random string containing numbers and letters
 * @returns {string} return a string, random letters and numbers
 */

export default const uniqueId = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(16),
  ).replace(/\./g, '')
```

```javascript
/**
 * @description This function rounds a number to 2 digits after decimal point.
 * @param {number} amount The amount of pay
 * @returns {number} The amount in the format xx.yy
 */
export default function formatPayRange(amount) {
  if (typeof amount === 'number' && !Object.is(NaN, amount)) {
    return amount.toFixed(2)
  }
}
```
```javascript
/**
 * @description This function returns only 15 words from any string.
 * @param {string} text Description of a post
 * @param {number} maxLength number max number of sentenses
 * @returns {string}
 */
export default function truncateText(text, maxLength) {
  return text.split(' ').splice(0, maxLength).join(' ')
}
```
