var typed=new Typed(".text",{
    strings:["Frontend Developer"],
    typeSpeed:150,
    backDelay:1000,
    loop:true
})

document.getElementById("sendEmail").addEventListener("click", function() {
    var recipient = "bhavanii1924@gmail.com";
    var subject = "Hello from your website";
    var body = "This is a predefined message.";
    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
});

