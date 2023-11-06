<template lang="" style="position:relative">
    <div class="flex flex-column" style="display:flex; align-items: center;flex-direction:column; height:calc(100vh - 8rem); width: calc(100vw - 8rem); margin: auto">
        <div style="height:90%; width:100%">
            <iframe :src="embeddedUrl" frameborder="0" style="width:100%; height: 100%" allowfullscreen></iframe>
        </div>
        <div style="height:10%; width: 100%">
            <input class="in" style="" :value="videoURL" placeholder=" Youtube-Link (and feel free to use your add-blocker ;)" @input="updateURL" v-on:keyup.enter="btnClick">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videoURL: "",
            embeddedUrl: "https://www.youtube.com/embed/RxsiEo42iB0?feature=oembed",
        }
    },
    methods: {
        updateURL(e) {
            this.videoURL = e.target.value
        },
        btnClick(e) {
            console.log()
            const request = new Request("https://www.youtube.com/oembed?url=" + this.videoURL + "&format=json", {method: "GET"})
            var res = e.target.value.split("=");
            this.embeddedUrl = "https://www.youtube.com/embed/"+res[1];
            fetch(request).then(async (response)=>{
                if(response.status === 200) {
                    return response.json()
                } else {
                    console.log("something went wrong!")
                }
            }).then(info => {
                res = /(?<=src=").*?(?=")/gm.exec(info.html)
                this.embeddedUrl = res[0]
                this.videoURL = ""
            })
        }
    }
    
}
</script>
<style lang="css">
    .in {
        outline: none;
        height: 100%; 
        width: 100%; 
        background-color: #171717; 
        border: #001f17 2px solid; 
        color:#35ebbc;
        padding-left: 1rem;
    }
    .in:focus{
        border: #35ebbc 1px solid;
    }
</style>