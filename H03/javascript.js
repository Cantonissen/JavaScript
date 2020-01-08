const pics = ["chevelle","daytona","fury","mustang","pista","rx7","skyline","supersnek","trueno"];
let output = "";
let random = 0;
let length = pics.length;
for (let i = 0; i < length; i++) {
    random = Math.floor(Math.random() * pics.length);
    output += "<img src='img/" + pics[random] + ".jpg' alt='img'>";
    pics.splice(random, 1);
}