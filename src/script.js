window.onload = function() {

    fetch('../res/json/myjson.json')
        .then((response) => response.json())
        .then(data => {
            
            const posts = data.Posts;
            posts.forEach(post => {
                const div_post = document.createElement('div');
                div_post.className = 'post';

                const div_post_header = document.createElement('div');
                div_post_header.className = 'post-header';

                const div_post_profilepic = document.createElement('div');
                div_post_profilepic.className = 'profile-picture';

                const div_post_date = document.createElement('div');
                div_post_date.className = 'post-date';
                div_post_date.textContent = formatDate(post.createTime); // formating date

                const div_post_content = document.createElement('div');
                div_post_content.className = 'post-content';

                const img = document.createElement('img');
                img.src = post.img;

                const p = document.createElement('p');
                p.textContent = post.body;

                div_post_content.appendChild(img);
                div_post_content.appendChild(p);

                div_post_header.appendChild(div_post_date);

                div_post.appendChild(div_post_header);
                div_post.appendChild(div_post_content);

                document.getElementById('column2').appendChild(div_post);

            });

        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })


}

// Function to format post date
function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    return date.toLocaleDateString('en-EE', options);
}

// Displaying dropdown menu on click
document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.getElementById("myDropdown");

    dropbtn.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});







