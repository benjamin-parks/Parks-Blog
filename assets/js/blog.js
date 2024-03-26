// pull blogposts from localStorage and parse it back into an object. Or, if no localStorage, create a blank
const blogposts = JSON.parse(localStorage.getItem("blogPosts")) || [];
console.log("I have posts", blogposts);

//looks at blogpost array or the empty one made if there were no entries, then creates an H2 saying no posts yet if the array is empty. 
if (blogposts.length === 0){
    const div = $("#root");
    const nopost = $("<h2>");
    nopost.text("No posts yet");
    div.append(nopost);
}

// loop to create divs for every blog post in localStorage
for (const blogpost of blogposts){
    const div = $("#root");
    const newdiv = $("<div>")
    const content = $("<p>");
    const title = $("<h3>");
    const username = $("<h6>");
    content.text(blogpost.content);
    title.text(blogpost.title);
    username.text(`posted by: ${blogpost.username}`)
    newdiv.append(title);
    newdiv.append(username);
    newdiv.append(content);
    div.append(newdiv);
}