
//Objects Chapter Exercises

// ****** Vector Class ******

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(vector){
        let u = vector.x + this.x;
        let w = vector.y + this.y;
        return new Vec(u, w)
    }

    // From Solutions:
    // plus(other) {
    //     return new Vec(this.x + other.x, this.y + other.y);
    // }

    subtract(vector){
        let u = vector.x - this.x;
        let w = vector.y - this.y;
        return new Vec(u, w)
    }

    // From Solutions
    // minus(other) {
    //     return new Vec(this.x - other.x, this.y - other.y);
    // }

    get length(){
        return (Math.sqrt(this.x * this.x + this.y * this.y))
    }
}

console.log(new Vec(1, 2).add(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).subtract(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// ****** Group class ******

class Group{
    constructor(){
        this.list = [];
    }

    add(element){
        if(!this.has(element))
            this.list.push(element);
    }

    delete(element){
          this.list = this.list.filter(e => e !== element);
    }

    has(element){
        return this.list.includes(element);
    }

    static from(iterable){
        let group = new Group;
        for(let element of iterable){
            group.add(element);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// ****** Group Iterator ******
class GroupIterator{
    constructor(group){
        this.index = 0;
        this.group = group;
    }

    next(){
        if(this.index >= this.group.list.length) {
            return {done: true};
        }
        else {
            let result = {value: this.group.list[this.index], done: false};
            this.index++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}


let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true