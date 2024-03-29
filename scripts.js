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
        if (document.getElementById('comment').value.match(/\S/)) {
            addComment(ev);
        }
    }
});

document.getElementById('name').addEventListener('keypress', function (ev) {
    if (ev.key == 'Enter') {
        if (document.getElementById('comment').value.match(/\S/)) {
            addComment(ev);
        }
    }
});

function addComment (ev) {
    let commentText, nameText, cardDiv, cardBodyDiv, dFlexOuter, dFlexInner, likeDiv, likeButton;
    const commentBox = document.createElement('div');
    const nameBox = document.createElement('div');
    cardDiv = document.createElement('div');
    cardBodyDiv = document.createElement('div');
    dFlexOuter = document.createElement('div');
    dFlexInner = document.createElement('div');
    likeDiv = document.createElement('div');
    likeButton = document.createElement('i');
    likeCounter = document.createElement('div');
    cardDiv.className = 'card mb-4';
    cardBodyDiv.className = 'card-body';
    dFlexOuter.className = 'd-flex justify-content-between';
    dFlexInner.className = 'd-flex flex-row align-items-center';
    likeDiv.className = 'd-flex flex-row align-items-center';
    likeButton.className = 'far fa-thumbs-up mx-2 fa-xs text-white like-button';
    likeButton.setAttribute('onclick','myFunction(this)');
    /*likeCounter.className = 'small text-muted mb-0';
    likeCounter.setAttribute('id','like-counter');
    likeCounter.innerHTML = "0";*/
    nameBox.className = 'small mb-0 ms-2';
    nameText = document.getElementById('name').value;
    document.getElementById('name').value = '';
    commentText = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    nameBox.innerHTML = nameText;
    commentBox.innerHTML = commentText;
    cardBodyDiv.style.marginTop = "30px";
    dFlexInner.style.marginTop = "50px";
    likeDiv.style.marginTop = "20px";
    likeDiv.style.marginBottom = "10px";
    likeDiv.append(likeButton);
    dFlexInner.append(nameBox);
    dFlexOuter.append(dFlexInner, likeDiv);
    cardBodyDiv.append(commentBox, dFlexOuter);
    cardDiv.append(cardBodyDiv);
    commentContainer.appendChild(cardDiv);
}

function hasClass (elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.getElementById('all-comments').addEventListener('click', function (e) {
    if (e.target.className == 'd-flex flex-row align-items-center') {
        for (const child of e.target.children) {
            if (child.className == 'small text-muted mb-0') {
                child.innerHTML = Number.parseInt(child.innerHTML) + 1;
            }
        }
    }
});

function myFunction(x) {
    console.log("Before toggle:", x.classList.contains("fa-solid"));
    x.classList.toggle("fa-solid");
    console.log("After toggle:", x.classList.contains("fa-solid"));
}
