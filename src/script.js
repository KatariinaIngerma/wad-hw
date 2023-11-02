window.onload = function() {

    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(data => {
            
            const posts = data.Posts;
            const likePic = 'res/like-icon.png';
            posts.forEach(post => {
                const div_post = document.createElement('div');
                div_post.className = 'post';

                const div_post_header = document.createElement('div');
                div_post_header.className = 'post-header';

                const div_post_profilepic = document.createElement('img');
                div_post_profilepic.className = 'profile-picture';
                div_post_profilepic.src = post.profilePic;

                const div_post_date = document.createElement('div');
                div_post_date.className = 'post-date';
                div_post_date.textContent = formatDate(post.createTime); // formating date

                const div_post_content = document.createElement('div');
                div_post_content.className = 'post-content';

                const img = document.createElement('img');
                img.src = post.img;

                const p = document.createElement('p');
                p.textContent = post.body;

                const div_post_footer = document.createElement('div');
                div_post_footer.className = 'post-footer';
                

                const div_like = document.createElement('img');
                div_like.className = 'likeButton';
                div_like.src =likePic;

                div_post_content.appendChild(img);
                div_post_content.appendChild(p);
                div_post_header.appendChild(div_post_profilepic);
                div_post_header.appendChild(div_post_date);
                div_post_footer.appendChild(div_like)
                div_post.appendChild(div_post_header);
                div_post.appendChild(div_post_content);
                div_post.appendChild(div_post_footer);


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
