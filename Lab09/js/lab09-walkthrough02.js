var stories = document.getElementById("stories");

for (var i = 0; i < stories.childNodes.length; i++) {
    var child = stories.childNodes[i];

    console.log(
        "child " + i + " = " + child +
        " nodeType = " + child.nodeType
    );

    // Chỉ đổi màu các phần tử HTML, bỏ qua text node
    if (child.nodeType === 1) {
        child.style.backgroundColor = "lightblue";
    }
}