<template>
  <div>
    <section id="Chat" ref="content" class="contact min-h-screen flex flex-col justify-center mb-0 px-12">
    <div class = "chat">
      <div ref="chatWindow" class="chat-window relative">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.from">
          {{ message.message }}
          <div v-if="message.link !== undefined" ><a :href="message.link">{{ message.link }}</a></div>
        </div>
      </div>
      <textarea ref="area" @keyup.enter="sendMessage" type="text" name="chatInput" id="" placeholder="Ask whatever you want here!" v-model="input"> </textarea>
      <div class="loading" v-if="loading">
        <div class ="loader"></div>
        <div> The bot typically responds within 15 seconds...</div>
      </div>
    </div>    
  </section>
  <section id="currentKnowledge" class="knowledge">
    <h2>Knowledge</h2>
    <div >
      <p>I am Denis. I'm a Softwareengeneer with a degree in mediatechnology. </p> 
      <p>My name is Denis Mathan </p> 
      <p>I was born on July 2, 1994 </p> 
      <p>I played soccer / football for the first time when I learned to walk </p> 
      <p>At the age of 6, I started playing soccer at the Fc Neuhadern club </p> 
      <p>At the age of 12, I started playing guitar </p> 
      <p>I'm playing Tennis since I was a teenager </p> 
      <p>I completed my Abitur at the Max-Planck-Gymnasium in Munich! </p> 
      <p>My Abitur was moderately successful with an average grade of 3.1 </p> 
      <p>My first attempt to study was the Environmental Engineering program at TU Munich. I dropped out after 2 semesters! </p> 
      <p>My second attempt to study was Secondary School Teaching with the subjects Mathematics and Sports </p> 
      <p>My last and successfull attempt to study was mediatechnology at the Technische Hochschule Deggendorf </p> 
      <p>I completed a Bachelor of Engineering at the Deggendorf Institute of Technology with an average grade of 1.9 </p> 
      <p>My bachelor's thesis was about a songwriting app that allowed users to both record lyrics and collaborate with their bandmates </p> 
      <p>My enthusiasm for programming developed during my studies in Media Technology at THD </p> 
      <p>I have very diverse hobbies! On the one hand, I really enjoy playing sports games like soccer, tennis, and volleyball. But I am also very passionate about music. I play guitar and sing, which I have tried with several bands! </p> 
      <p>My favourite bands are the White Stripes, Bukahara and most of the old rockbands </p> 
      <p>When I was younger I loved to read books, I mean I still like it but I'm not reading that often anymore </p> 
    </div>
  </section>
  </div>
</template>

<script>
import {request} from '@/js/requests.js'
export default {
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'On this page you can communicate with a chatbot who interacts as Denis Mathan'
    }]
  },
  data() {
    return {
      messages: [],
      input: "",
      loading: false
    }
  },
  methods: {
    async sendMessage(e){
      if(e.shiftKey) {
        return
      }
      this.messages.push({from: "user", message: this.input})
      this.loading = true;
      this.$refs.area.blur()
      let response = {};
      try {
        let answer = await request(this.input);
        response = {message: answer}
      } catch (error) {
        console.log(error)
        response = {message: "I'm really sorry but this service seems to be offline currently :/ \nFor more information about me go to", link: window.location + "bot"};
      }
      this.input = ''
      this.receiveResponse(response)
    },
    receiveResponse(response) {
      this.addMessage({from: "chat-bot", message: response.message, link: response.link})
      this.loading = false
      this.$refs.area.focus()
    },
    addMessage(newMessage) {
      this.messages.push(newMessage)
      this.$nextTick(() => {
        this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight
      });
    }
  }
}
</script>

<style>

a {
  color: #062d20;
}
.loading {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 42, 42, 0.5);
  width: calc(100% - 2rem);
  height: calc(100% - 4rem);
}
.loading div {
  color:white;
  font-size: 2rem;
}
.chat {
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* background-color: rgba(242, 9, 9, 0.5); */
  border-radius: 10px;
  padding: 1rem;
  height: 100vh;
  overflow: hidden;
}
textarea{
    /* min-height: 3rem;  */
    min-height:2rem;
    height: auto;
    max-height: 6rem;
    width: 100%;
    padding: 1rem;
    text-align: right;
    border-radius: 10px;
    background-color: rgb(42, 42, 42, 1);
    resize: vertical;
    color: white;
    overflow: hidden;
}
label{
    width: 20%;
    height: 3rem;
    line-height: 3rem;
    color:white;
}
.chat-window {
  width: 100%;
  height: 80vh;
  border-radius: 10px;
  background-color: rgb(10, 37, 65, 0.75);
  margin-bottom: 0.3rem;
  color:white;
  white-space: pre-line;
  overflow: auto;
}
.message {
  position: relative;
  background-color: rgb(14 245 177);
  color: black;
  width: 80%;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem
}
.message::after {
  content: '';
  position: absolute;
  left: 0rem;
  top: 0.0rem;
  /* bottom: 0; */
  /* left: -10px; Ändere zu 'right: -10px;' für rechte Seite */
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: rgb(14 245 177);
  border-bottom: 0;
  border-left: 0;
  margin-left: 0;
  margin-bottom: -10px;
}
.user {
  margin-left: auto;
  margin-right: 0.5;
}
.chat-bot::after {
 transform: scaleX(-1);
  left: -0.1rem;
}
.user::after {
  left: auto;
  right: -0.1rem;
}


/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgb(19 104 137);
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
.knowledge{
  color:white;
  padding: 3rem;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>