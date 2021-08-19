const menuBtn  = document.querySelectorAll('.menu-top button');
const sections = document.querySelectorAll('.content section');
const menuPort = document.querySelectorAll('.portofolio .menu button');
const itemImgs = document.querySelectorAll('.img-details-cont .list .item');
const listImgs = document.querySelectorAll('.grid-container .list-prtf');
const detail   = document.querySelector('.img-details-cont');
const content  = document.querySelector('.content');
const btnLeft  = document.getElementById('left');
const btnRight = document.getElementById('right');
const btnClose = document.getElementById('close');
const form     = document.getElementById("my-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "<span><i class='fas fa-check-circle'></i></span> Thanks for your submission!";
    form.reset()
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

let imgIdx;

btnRight.addEventListener('click', () => {
    imgIdx += 1;
    
    if(imgIdx > itemImgs.length -1) {
        imgIdx = 0;
    }

    removeActive(itemImgs);
    itemImgs[imgIdx].classList.add('active');
})

btnLeft.addEventListener('click', () => {
    imgIdx -= 1;
    
    if(imgIdx < 0) {
        imgIdx = itemImgs.length -1;
    }

    removeActive(itemImgs);
    itemImgs[imgIdx].classList.add('active');
})

btnClose.addEventListener('click', () => {
    detail.classList.remove('show');
})

listImgs.forEach((img, idx) => {
    img.addEventListener('click', () => {
        imgIdx = idx;
        removeActive(itemImgs);
        detail.classList.add('show');
        itemImgs[imgIdx].classList.add('active');
    })
})


menuPort.forEach(btn => {
    btn.addEventListener('click', (e) => {
        removeActive(menuPort);
        btn.classList.add('active');

        if(e.target.classList.contains('all-prtf')) {
            $('.list-prtf').fadeIn(0);
        } else if(e.target.classList.contains('design-prtf')) {
            $('.list-prtf:not(.design)').fadeOut(0);
            $('.list-prtf.design').fadeIn(0);
        } else if(e.target.classList.contains('web-prtf')) {
            $('.list-prtf:not(.web)').fadeOut(0);
            $('.list-prtf.web').fadeIn(0);
        } else {
            $('.list-prtf:not(.photos)').fadeOut(0);
            $('.list-prtf.photos').fadeIn(0);
        }
    })
})

menuBtn.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {

        animShow();

        removeActive(menuBtn);
        removeActive(sections);

        sections.forEach(section => section.style.transitionDelay = '1.7s')

        btn.classList.add('active');
        sections[idx].classList.add('active');
    })
})

function animShow() {
    content.classList.remove('show');
    setTimeout(() => {
        content.classList.add('show');
    }, 1800);
}

function removeActive(els) {
    els.forEach(el => el.classList.remove('active'));
}