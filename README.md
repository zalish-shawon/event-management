# Social Event Management

- https://event-managment-21266.web.app/

# Project Features

- Users can check what types of services they are providing.
- Users can check new services and details about them on a private route.
- If users want to see service details, they should be logged in first.
- Users can also create an account or register on this site.
- Users can also check which types of packages they are providing, such as starter, company, and enterprise.
- After logging in to the website, users can see their name and profile picture.


<h1>MCQ TEST</h1>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 


<i>answer is C. here greeting variable is using let keyword, but in the next line 'greetign' is typo variable name and its containg empty object and also not declare which type of variable it is like let, var,const etc.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>answer will C. because here implicit js type conversion. whenever using + operator it will convert "1" as string. after that it will concanate with "2" </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>answer will A. doesn,t affect in result, because they are in seperate variable. the info object holds reference value from the food array initially.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

<i>answer will B. because here sayHi function didn't pass any argument</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>answer will C. because here has truthy value and falsy value. when forEach loop iterate over in numbs. count has intial value 0 it has falsy value, next increment by 1 it has truthy value go next 2 it will also truthy value and finally also 3 is truthy and final result will 3</i>
</p>
</details>

