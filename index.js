// Add your code here
const myEach = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
};

const myMap = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        result.push(callback(value));
    }
    return result;
};

const myReduce = (collection, callback, acc) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    let startIndex = acc !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
};

const myFind = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
};

const myFilter = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        if (predicate(value)) result.push(value);
    }
    return result;
};

const mySize = (collection) => {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
};

const myFirst = (array, n = 1) => {
    return n === 1 ? array[0] : array.slice(0, n);
};

const myLast = (array, n = 1) => {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
};

const mySortBy = (array, callback) => {
    return [...array].sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
};

const myFlatten = (array, shallow = false, newArr = []) => {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, false, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
};

const myKeys = (object) => {
    return Object.keys(object);
};

const myValues = (object) => {
    return Object.values(object);
};

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
    });
};

