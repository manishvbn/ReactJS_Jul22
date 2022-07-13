export default class Employee {
    constructor(name) {
        this._name = name;
    }

    setName(value) {
        this._name = value;
    }

    getName() {
        return this._name;
    }
}

// // 104 bytes (52 bytes / instance)

// --------------------------------------------
// export default class Employee {
//     constructor(name) {
//         this._name = name;
//     }

//     setName = function (value) {
//         this._name = value;
//     }

//     getName = function () {
//         return this._name;
//     }
// }

// // 264 bytes (132 bytes / instance)

// --------------------------------------------
// export default class Employee {
//     constructor(name) {
//         this._name = name;
//     }

//     setName = (value) => {
//         this._name = value;
//     }

//     getName = () => {
//         return this._name;
//     }
// }

// 288 bytes (144 bytes / instance)