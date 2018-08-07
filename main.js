let whatsapp = [
    {
         image : `image/d.p-1.jpg`,
         name: ` Saira Mehatb `,
         lastMsgStatus :`sent`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Tommorrow`,
         phoneNumber : `0301-1010101`,
         email:` <i class="fas fa-phone"></i> abc@gmail.com`,
         status:`  <i class="far fa-envelope"></i> I Love My Mother.`
     },
     {
         image : `image/d.p2.jpg`,
         name: ` Rohma Khan `,
         lastMsgStatus :`seen`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Yesterday`,
         phoneNumber : `0301-2020202`,
         email:` <i class="fas fa-phone"></i> xyz@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Father.`
     },
      {
         image : `image/d.p3.png`,
         name: `Javeria Zia`,
         lastMsgStatus :`clock`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Tommorrow`,
         phoneNumber : `0301-3030303`,
         email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Mother.`
     },
     {
         image : `image/d.p4.jpg`,
         name: `Jehanzib Khan`,
         lastMsgStatus :`sent`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Yesterday`,
         phoneNumber : `0301-4040404`,
         email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Father.`
     },
     {
         image : `image/d.p5.png`,
         name: `Abdul Aziz`,
         lastMsgStatus :`seen`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Tommorrow`,
         phoneNumber : `0301-5050505`,
         email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Mother.`
     },
     {
         image : `image/d.p6.jpg`,
         name: `Ayesha khan`,
         lastMsgStatus :`clock`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Yesterday`,
         phoneNumber : `0301-6060606`,
         email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Father.`
     },
     {
         image : `image/d.p8.png`,
         name: `Amna Pasha`,
         lastMsgStatus :`sent`,
         lastMsg : `Hello how are you ?.......`,
         Time : `Tommorrow`,
         phoneNumber : `0301-7070707`,
         email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
         status:` <i class="far fa-envelope"></i> I Love My Mother.`
     },
     {
        image : `image/d.p9.jpg`,
        name: `Hasham Khan`,
        lastMsgStatus :`seen`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Yesterday`,
        phoneNumber : `0301-8080808`,
        email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Father.`
    },
     {
        image : `image/d.p.10.jpg`,
        name: `Mustafa Khan`,
        lastMsgStatus :`sent`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Tommorrow`,
        phoneNumber : `0301-9090909`,
        email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Mother.`
    },
     {
        image : `image/d.p11.jpg`,
        name: `Osama Ali`,
        lastMsgStatus :`clock`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Today`,
        phoneNumber : `0301-1010101`,
        email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Father.`
    },
    {
        image : `image/d.p.12.jpg`,
        name: `Wirsa Yasir`,
        lastMsgStatus :`sent`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Tommorrow`,
        phoneNumber : `0301-1000000`,
        email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Mother.`
    },
    {
        image : `image/d.p13.jpg`,
        name: `Muniba Ismail`,
        lastMsgStatus :`seen`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Yesterday`,
        phoneNumber : `0301-20000000`,
        email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Father.`
    },
    {
        image : `image/d.p14.jpg`,
        name: `Noor-ul-Huda`,
        lastMsgStatus :`clock`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Tommorrow`,
        phoneNumber : `0301-3000000`,
        email:`  <i class="fas fa-phone"></i> abc@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Mother.`
    },
    {
        image : `image/d.p15.jpg`,
        name: `Areeba Khan`,
        lastMsgStatus :`sent`,
        lastMsg : `Hello how are you ?.......`,
        Time : `Today`,
        phoneNumber : `0301-4000000`,
        email:`  <i class="fas fa-phone"></i> xyz@gmail.com`,
        status:` <i class="far fa-envelope"></i> I Love My Father.`
    }

 ];
 
function initialize() {
    let whatsappListEl = document.querySelector("#contact-list")
   for (let i = 0 ; i <whatsapp.length ; i++){

    let icon;

    if (whatsapp[i].lastMsgStatus === "seen") {
        icon = "check-double";
    }
    else if (whatsapp[i].lastMsgStatus === "sent"){
        icon = "check";
    }
    else{
        icon = "clock";
    }



    whatsappListEl.innerHTML +=
    `
    <section class="person-item" onclick="changeDetail(${i})">
        <div class="person-img"  style="background-image: url(${whatsapp[i].image})"></div>
        <div class="after-person-img">
        <div class="content-center">
            <h4 class="name">${whatsapp[i].name}</h4>
        <div class="msg-container">
            <i class="fas fa-${icon}"></i>
            <p class="msg">${whatsapp[i].lastMsg}</p>
        </div>
        </div>
            <p class="time">${whatsapp[i].Time}</p>
        </div>
  </section>
    `
   }    
   changeDetail(0);
}

function changeDetail(celeIndex){
    document.querySelector("#cont-name").innerHTML = whatsapp[celeIndex].name;
    document.querySelector("#cont-phone").innerHTML = whatsapp[celeIndex].phoneNumber;
    document.querySelector("#contact-img").style["background-image"]=`url(${whatsapp[celeIndex].image})`;
    document.querySelector("#cont-status").innerHTML= whatsapp[celeIndex].status;
    document.querySelector("#read-email").innerHTML=  whatsapp[celeIndex].email; 
    
}