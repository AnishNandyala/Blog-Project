window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

const commentContainer = document.getElementById('all-comments');
document.getElementById('comment').addEventListener('keypress', function (ev) {
    if (ev.key == 'Enter') {
        addComment(ev);
    }
});

function addComment (ev) {
    let commentText, cardDiv, cardBodyDiv;
    const textBox = document.createElement('div');
    cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-4';
    commentText = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    textBox.style.paddingLeft = 10;
    textBox.innerHTML = commentText;
    cardDiv.append(textBox);
    commentContainer.appendChild(cardDiv);
}