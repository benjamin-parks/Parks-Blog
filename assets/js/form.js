const submitEl = document.getElementById("submit");


const uid = document.querySelector("#username");
const title = document.querySelector("#title");
const experience = document.querySelector("#summary");
const msgDiv = document.querySelector("#msg");


// Listens for when form is submitted:
$("#form").on("submit", function (e) {
  e.preventDefault();

  // set the structure of a post
  const post = {
    username: uid.value,
    title: title.value,
    content: experience.value,
  };

  // check if input boxes are empty and error out if they are. Otherwise, add data form info to 
  // the object and save the object as a stringified JSON. 
  if (uid.value === "") {
    alert("Error! Username cannot be blank");
  } else if (title.value === "") {
    alert("Error! Title cannot be blank");
  } else if (experience.value === "") {
    alert("Error! Content cannot be blank");
  } else {
    // look for existing array of posts or make a new one if it doesn't exist.
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    // adds new post to the array
    existingPosts.unshift(post);
    // sets new array of posts to local storage
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
    alert("Blogpost Submitted");
    window.location.href = "blog.html";
  }

  // clears the form values
  uid.value = "";
  title.value = "";
  experience.value = "";
});