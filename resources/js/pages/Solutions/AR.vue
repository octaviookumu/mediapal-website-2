<template>
    <div class="parent">
        <div class="section section-1">
            <div class="section-header">
                <h1>Learn How to Use AR in Marketing</h1>

                <p>Augment Your Brand's Reality Get Inspired and Start an AR campaign.</p>
            </div>
            <div class="section-footer">
                <p>Discover thousands of AR effects</p>
                <p>icons</p>
            </div>
        </div>

        <div class="section-2">
            <article>
                <div class="phone-container">
                    <div class="video-container">
                        <video data-video="" class="video-container__video" src="https://lensthat.com/wp-content/uploads/2021/06/1_Cola.mov" poster="https://lensthat.com/wp-content/uploads/2021/06/ig-22513a.png" preload="none"></video>
                    </div>
                </div>
            </article>
            <article>
                <div class="phone-container">
                    <div class="video-container">
                        <video data-video="" class="video-container__video" src="https://lensthat.com/wp-content/uploads/2021/06/1_Cola.mov" poster="https://lensthat.com/wp-content/uploads/2021/06/ig-22513a.png" preload="none"></video>
                    </div>
                </div>
            </article>
            <article>
                <div class="phone-container">
                    <div class="video-container">
                        <video data-video="" class="video-container__video" src="https://lensthat.com/wp-content/uploads/2021/06/1_Cola.mov" poster="https://lensthat.com/wp-content/uploads/2021/06/ig-22513a.png" preload="none"></video>
                    </div>
                </div>
            </article>
            <article>
                <div class="phone-container">
                    <div class="video-container">
                        <video data-video="" class="video-container__video" src="https://lensthat.com/wp-content/uploads/2021/06/1_Cola.mov" poster="https://lensthat.com/wp-content/uploads/2021/06/ig-22513a.png" preload="none"></video>
                        <button class="video-container__play" data-video-play=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"></path></svg> </button>
                    </div>
                </div>
            </article>
        </div>

        <div class="section-3">
            
        </div>
        
  </div>
</template>

<script>

    export default {
        name: "AR",
    }
</script>

<style lang="scss" scoped>
.parent {
  /* border: 2px solid black; */
  /* padding: 3rem 0 2rem 0; */
  border: 1px solid red;
}

.section-1 {
  width: 80%;
  height: 100vh;
  /* margin-top: 30%; */
  margin: 0 auto;
  text-align: center;
  /* padding: 2rem 0 0 0; */
  /* border: 2px solid blue; */

}

.section-2{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    position: relative;
    max-width: 70%;
    margin: auto;

    article{
        display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
margin: 0 0 55px;

.phone-container{
    position: relative;
display: block;
border-radius: 25px;
background: #000;
border: 7px solid #000;
overflow: hidden;
width: calc(100% - 2rem);
max-width: 335px;
text-align: center;
margin-left: 1rem;
margin-right: 1rem;
z-index: 1;

&::after{
    position: absolute;
left: 50%;
top: -10px;
content: " ";
display: block;
width: 50%;
height: 4%;
background: #000;
border-radius: 15px;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
z-index: 1;
}

.video-container{
    position: relative;

    .video-container__play {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    border: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
}
}


    }
}

.section-3{
    border: 1px solid red;
    height: 80vh;
}

.ting{
    background: red;
}
</style>