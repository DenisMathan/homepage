<template>
  <div>
    <section id="Chat" ref="content" class="contact min-h-screen flex flex-col justify-center mb-0 px-12">
    <div class = "chat">
      <div ref="chatWindow" class="chat-window relative">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.role">
          {{ message.content }}
          <div v-if="message.link !== undefined" ><a :href="message.link">{{ message.link }}</a></div>
        </div>
      </div>
      <textarea ref="area" @keyup.enter="sendMessage" type="text" name="chatInput" id="" placeholder="Type here!" v-model="input"> </textarea>
      <div class="loading" v-if="loading || notavailable">
        <div v-if="loading" class ="loader"></div>
        <div v-if="loading"> The bot typically responds within 3 seconds...</div>
        <div v-if="notavailable">Sorry, the service is not available :(</div>
      </div>
    </div>    
  </section>
  <section id="currentKnowledge" class="knowledge">
    <dynContent :title="'Knowledge'" :phrases="this.knowledge"></dynContent>
  </section>
  </div>
</template>

<script>
import {request, getKnowledge} from '@/js/requests.js'
import dynContent from '../components/dynContent.vue';
export default {
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'On this page you can communicate with a chatbot who interacts as Denis Mathan'
    }]
  },
  components:{
    dynContent
  },
  data() {
    return {
      // messages: [{role:'user', content: 'hi'}, {role:'assistant', content: 'Hi,\nhowcan I assist you today?'}],
      messages: [],
      input: "",
      loading: false,
      notavailable: false,
      title: "Knowledge",
      knowledge: [],
    }
  },
  mounted() {
    this.requestKnowledge();
  },
  methods: {
    async requestKnowledge(){
      this.knowledge = await getKnowledge();
      this.notavailable = this.knowledge.length === 1;
    },
    async sendMessage(e){
      if(e.shiftKey) {
        return
      }
      this.messages.push({role: "user", content: this.input})
      this.loading = true;
      this.$refs.area.blur()
      let response = {};
      try {
        let answer = await request(this.messages);
        response = {message: answer}
      } catch (error) {
        console.log(error.type)
        response = {message: "I'm really sorry something went wrong :/ \nEither the server is offline currently, or your networks nameserver didn't find the proper address. \nFor more information about me go to", link: window.location + "bot"};
      }
      this.input = ''
      this.receiveResponse(response)
    },
    receiveResponse(response) {
      this.addMessage({role: "assistant", content: response.message, link: response.link})
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
.assistant::after {
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