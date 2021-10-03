fetch("https://www.reddit.com/r/popular.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    data.data.children.forEach((element) => console.log(element));

    let a = document.getElementById("list");

    let list = ` `;

    for (let i = 0; i < data.data.children.length; i++) {
      list += `<a href="${data.data.children[i].data.url}"><li class="listItem"> 
      ${data.data.children[i].data.title}<br>
     ${data.data.children[i].data.ups} by ${data.data.children[i].data.subreddit}  ${data.data.children[i].data.num_comments} comments</li></a>`;
    }
    a.insertAdjacentHTML("afterend", list);
  });
