// Task 1: Create a literal object for the dog
let myDog = {
    name: "Astro",
    show: "The Jetsons",
    breed: "Great Dane",
    role: "Family dog",
    description: "A family dog in a cartoon about a futuristic family.",
    mySound: "When I bark, I am not scary.",
    
    // Method to display the dog's description
    displayInfo: function() {
        document.write(`Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the ${this.role} in ${this.description}.<br><br>`);
    }
};

// Display the literal object's description
myDog.displayInfo();


// Task 2: Create a constructor for the dog object
function Dog(name, show, breed, role, description, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;
    
    // Method to display a greeting with the dog's information
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I can't talk.";
        document.write(`Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the ${this.role} in ${this.description}. ${talkMessage}<br>`);
    };
}

// Create a new dog object using the constructor
let myDogConst = new Dog(
    "Astro", 
    "The Jetsons", 
    "Great Dane", 
    "Family dog", 
    "A family dog in a cartoon about a futuristic family.", 
    "When I bark, I am not scary.", 
    true
);

// Display the constructor object's description using the method
myDogConst.myGreeting();
