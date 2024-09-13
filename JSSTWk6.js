// Constructor for creating dog objects
function Dog(name, show, breed, role, description, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display the dog's information
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the ${this.role} in ${this.description}. ${talkMessage}`;
    };
}

// Create two dog objects
let astro = new Dog("Astro", "The Jetsons", "Great Dane", "Family dog", "A family dog in a cartoon about a futuristic family.", "When I bark, I am not scary.", true);
let brian = new Dog("Brian", "Family Guy", "Beagle", "Talking dog", "A dog with a human-like personality in a satirical cartoon.", "I have a witty and sarcastic bark.", true);

// Store the dogs in an array
let dogs = [astro, brian];

// Prompt the user to select a dog by typing the name
let selectedDogName = prompt("Please select a dog: Astro or Brian");

// Find the selected dog in the list
let selectedDog = dogs.find(dog => dog.name.toLowerCase() === selectedDogName.toLowerCase());

if (selectedDog) {
    // If the dog exists, display its properties using a for...in loop and its myGreeting method
    let dogInfo = selectedDog.myGreeting();
    document.getElementById("output").innerHTML = dogInfo;
} else {
    // If the dog doesn't exist, display an error message
    document.getElementById("output").innerHTML = "Error: The dog you selected does not exist.";
}
