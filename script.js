let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
//let voice =document.querySelector("#voice")

function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)

}

function wishMe(){
    let day= new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours >=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good evening Sir")

    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript =event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
   //btn.Style.display="none"
   //voice.style.display="block"
})
function takeCommand(message){
     //btn.Style.display="flex"
    // voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir, what can i help you")
    }
    else if(message.includes(" Shifra Who are you")){
        speak("i am virtual assistant, created by Sachin Sir")
    }
    else if(message.includes(" What is your name")){
        speak("i am Shifra, created by Sachin Sir")
    }
    else if(message.includes("Open Youtube")){
        speak("Open YouTube....")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("Open instagram")){
        speak("Open instagram....")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("Open facebook")){
        speak("Open facebook....")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("Open google")){
        speak("Open google....")
        window.open("https://www.google.com")
    }
    else if(message.includes("Open calculator")){
        speak("Open calculator....")
        window.open("Calculator://")
    }
    else if(message.includes("Open whatsapp")){
        speak("Open whatsapp....")
        window.open("WhatsApp://")
    }
    else if(message.includes("what is time")){
       let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
       speak(date)
    }
    else if(message.includes("what is time")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
     }
    else{
        let finalText = "this is what i found on internet regarding" +message.replace("shipra", "")|| message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "")}`,"_blank")
    }

}