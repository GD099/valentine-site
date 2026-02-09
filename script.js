const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const mainBox = document.getElementById("mainBox");
const loveLetter = document.getElementById("loveLetter");
const typedText = document.getElementById("typedText");
const slideshow = document.getElementById("slideshow");

let yesClicks = 0;

const yesMessages = [
 "Are you sure?",
 "Dekh la ?",
 "you're gonna be stuck with me for a while, Hajje v Soch la",
 "Pakki Gall aa Fer?",
 "I annoy you so much, Shannu. Are you sure about this?",
 "Say Yes one more time, i am having fun with this"
];

// NO button runs away
noBtn.addEventListener("mouseover", () => {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const x = Math.random() * (window.innerWidth - btnWidth);
    const y = Math.random() * (window.innerHeight - btnHeight);
    noBtn.style.position = "fixed"; // ensure position stays fixed
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button logic
yesBtn.addEventListener("click", () => {
    if (yesClicks < yesMessages.length) {
        question.innerText = yesMessages[yesClicks];
        yesClicks++;
    } else {
    mainBox.style.display = "none";
    loveLetter.style.display = "block";
    document.getElementById("photoContainer").style.display = "block"; // show photos
    startTypewriter();
}
});

// FULL LOVE LETTER
const message = `Happy Valentines Darling!

First things first, I wanna say I miss you tons, probably more then you can imagine. Everyday feels so heavy and stressful without you but at the same time when I talk to you it feels like everything is gonna be fine. I kid you not when I say that I wanted to spend this day with you and dedicate it entirely to you. I am sorry I could not make it there. Gursharan, I want you to be my one and only Valentine. I adore you so much that I don’t feel like looking for anyone else. I got my sights set on you. As much as I hate to admit this but I have to tell you this that I have never done anything like this before for anyone and nor I am going to. Heck, even I can’t believe that I am coding website for you now. You have changed me into a lover boy that I probably thought was dead inside me Consider it my first official Love Letter to you, there are things that I wanna say to you which I have been keeping on my mind about you. Let me start.

I Can’t change the way you were treated in the past but I will make damn sure you won’t ever be treated like that ever again. My intentions are very pure. I just want you to be genuinely happy and consistently make you feel that you’re cared for.

I know I am not perfect but trust me I’ll do the best I can for you and never give up on you. I will always be the person you can talk to about anything. And I’d never judge you, because I know how difficult life can be.

I don’t care who had you first and I don’t care who had you the longest, because the truth is, you look better with me anyways. And I am gonna take care of you and your heart better then anybody in your past ever did.

Respectfully, I wanna show affection for you in front of the people that didn’t. I want them to see how much you glow when you are treated right.

This is my promise to you I'm not with you for the short term I'm not here to waste your time I'm here to build a life a future and the story with you i want to spend my life waking up next to you.

I don't always know the perfect thing to say but here's what I do know, I'll show up for you not just when things feel easy but when days get complicated and you need someone who won't leave. I'll pay attention to the things that matter.

Life is feeling better with you Gursharan and you know I love the way we don't have to try with each other we can be awkward funny loud or quiet and it always feels right every inside joke every late night call every random text it's not about being perfect it's about being real and with you real feels extraordinarily magical.

Be clingy with me I don't want space I want you text me when you miss me even if it's every 5 minutes, call me just to breathe on the line, send me selfies you almost delete. Tell me about your day the little things, Even the things that you think are nothing important, I want to know it all. let me feel you in quiet moments too I don't get tired of you.

Pinky Promise that whenever things get heavy, you will talk to me about it. Because I’d rather have you crying in my comfort instead of you feeling alone.

Be my forever Valentine!
XOXO`;

// TYPEWRITER EFFECT
let index = 0;
function startTypewriter() {
    if (index < message.length) {
        typedText.innerHTML += message.charAt(index);
        index++;
        setTimeout(startTypewriter, 20);
    }
}

// HEARTS
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);

// SLIDESHOW
const photos = ["images/photo1.jpg", "images/photo2.jpg"];
let photoIndex = 0;

setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    slideshow.style.opacity = 0;
    setTimeout(() => {
        slideshow.src = photos[photoIndex];
        slideshow.style.opacity = 1;
    }, 1000);
}, 5000);



