fetch("https://www.reddit.com/r/popular.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    data.data.children.forEach((element) => console.log(element));
    (function () {
      var old = console.log;
      var logger = document.getElementById("list");
      console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] == "object") {
            logger.innerHTML +=
              (JSON && JSON.stringify
                ? JSON.stringify(arguments[i], undefined, 2)
                : arguments[i]) + "<br />";
          } else {
            logger.innerHTML += arguments[i] + "<br />";
          }
        }
      };
    })();
  });
