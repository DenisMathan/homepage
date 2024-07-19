<template>
  <section id="Chat" ref="content" class="contact min-h-screen flex flex-col justify-center mb-0 px-12">
    <div class = "chat">
      <div class="chat-window relative">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.from">
          {{ message.message }}
        </div>
      </div>
      <textarea ref="area" @keyup.enter="sendMessage" type="text" name="chatInput" id="" placeholder="Input your message here!" v-model="input"> </textarea>
      <div class="loading" v-if="loading">
        <div class ="loader"></div>
      </div>
    </div>

    
  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
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
    sendMessage(e){
      if(e.shiftKey) {
        return
      }
      this.messages.push({from: "user", message: this.input})
      this.input = ''
      this.loading = true;
      this.$refs.area.blur()
    }
  }
}
</script>

<style>
.loading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 42, 42, 0.5);
  width: calc(100% - 2rem);
  height: calc(100% - 4rem);
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
  background-color: rgb(42, 42, 42, 1);
  margin-bottom: 0.3rem;
  color:white;
  white-space: pre-line;
}
.message {
  position: relative;
  background-color: rgb(255, 255, 255, 1);
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
  border-top-color: rgb(255, 255, 255);
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
@keyframes l3 {to{transform: rotate(1turn)}}
</style>