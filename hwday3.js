class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Boy extends Person {
  handsome;
  constructor(handsome, name, age) {
    super(name, age);
    this.handsome = handsome;
  }
}

class Girl extends Person {
  beauty;
  constructor(beauty, name, age) {
    super(name, age);
    this.beauty = beauty;
  }
}

class Relationship {
  a;
  b;

  constructor(a, b) {
    if (a instanceof Person && b instanceof Person) {
      this.a = a;
      this.b = b;
    }
  }
}
class Group {
  people;
  relationship;

  constructor() {
    this.people = [];
    this.relationship = [];
  }

  addPerson(friend) {
    if (friend instanceof Person) {
      this.people.push(friend);
    }
    console.log(this.people);
  }

  addRelationship(a, b) {
    if (a instanceof Person && b instanceof Person && a != b) {
      let foundRelationship = this.relationship.find((relation) => {
        return (
          (relation.a == a) & (relation.b == b) ||
          (relation.b == a && relation.a == b)
        );
      });
      if (!foundRelationship) {
        let newRelationship = new Relationship(a, b);
        this.relationship.push(newRelationship);
      }
    }
    console.log(this.relationship);
  }

  findFriend(a) {
    const Friends = [];
    for (let i = 0; i < this.relationship.length; i++) {
      if (a instanceof Person && a.name == this.relationship[i].a.name) {
        Friends.push(this.relationship[i].b.name);
      }
      if (a instanceof Person && a.name == this.relationship[i].b.name) {
        Friends.push(this.relationship[i].a.name);
      }
    }
    console.log(Friends);
  }

  findBoyFriends(a) {
    const BoyFriends = [];
    for (let i = 0; i < this.relationship.length; i++) {
      if (
        a instanceof Person &&
        a.name == this.relationship[i].a.name &&
        this.relationship[i].b instanceof Boy
      ) {
        BoyFriends.push(this.relationship[i].b.name);
      }

      if (
        a instanceof Person &&
        a.name == this.relationship[i].b.name &&
        this.relationship[i].a instanceof Boy
      ) {
        BoyFriends.push(this.relationship[i].a.name);
      }
    }
    console.log(BoyFriends);
  }

  findGirlFriends(a) {
    const GirlFriends = [];
    for (let i = 0; i < this.relationship.length; i++) {
      if (
        a instanceof Person &&
        a.name == this.relationship[i].a.name &&
        this.relationship[i].b instanceof Girl
      ) {
        GirlFriends.push(this.relationship[i].b.name);
      }
      if (
        a instanceof Person &&
        a.name == this.relationship[i].b.name &&
        this.relationship[i].a instanceof Girl
      ) {
        GirlFriends.push(this.relationship[i].a.name);
      }
    }
    console.log(GirlFriends);
  }

  findGirlBeauty(a) {
    const GirlFriendsBeauty = [];
    for (let i = 0; i < this.relationship.length; i++) {
      if (
        a instanceof Person &&
        a.name == this.relationship[i].a.name &&
        this.relationship[i].b instanceof Girl &&
        this.relationship[i].b.beauty > 5
      ) {
        GirlFriendsBeauty.push(this.relationship[i].b.name);
      }
      if (
        a instanceof Person &&
        a.name == this.relationship[i].b.name &&
        this.relationship[i].a instanceof Girl &&
        this.relationship[i].a.beauty > 5
      ) {
        GirlFriendsBeauty.push(this.relationship[i].a.name);
      }
    }
    console.log(GirlFriendsBeauty);
  }
}
let person1 = new Boy(10, "Vu", 18);
let person2 = new Girl(8, "Lan", 18);
let person3 = new Boy(8, "Minh", 17);
let person4 = new Girl(4, "Hoa", 20);
let person5 = new Boy(6, "Tung", 15);
let person6 = new Boy(5, "Huy", 13);

let myRelationship = new Group();
myRelationship.addPerson(person1);
myRelationship.addPerson(person2);
myRelationship.addPerson(person3);
myRelationship.addPerson(person4);
myRelationship.addPerson(person5);
myRelationship.addPerson(person6);

myRelationship.addRelationship(person1, person2);
myRelationship.addRelationship(person2, person3);
myRelationship.addRelationship(person3, person4);
myRelationship.addRelationship(person4, person5);
myRelationship.addRelationship(person5, person6);
myRelationship.addRelationship(person6, person1);

//find friends

myRelationship.findFriend(person1);
myRelationship.findFriend(person3);

//find boy friends
myRelationship.findBoyFriends(person2);

//find girl friends
myRelationship.findGirlFriends(person3);

// Find Girl Friends with beauty > 5

myRelationship.findGirlBeauty(person3);
