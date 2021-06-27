<template>
  <div id="app">
  <div class="btns">
            <a href="#">Home</a>
            <a href="#">Profile</a>
        </div>
  <div id="Help-center-page">
    <div class="content">
      <h2 class="Title" data-text="How can we help you?">
          How can we help you?
      </h2>
      <div class="Help-center">
        <div class="faqs">
          <FAQ 
            v-for="(faq, i) in faqs" 
            :faq="faq" 
            :index="i" 
            :key="i"
            :open="faq.open"
            @toggleOpen="toggleOpen"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FAQ from './components/FAQ.vue';

export default {
  name: 'app',
  components: {
    FAQ
  },
  data () {
    return {
      faqs: [
        {
          question: "How do I post status?",
          answer: "Step 1: Type your status into the compose box at the top of your timeline. Step 2: You can include photo or video. Step 3: Click the post button to post the status to your profile or Homepage.",
          open: false
        },
        {
          question: "How do I delete status?",
          answer: "Step 1: Go to your Profile. Step 2: Locate the status you want to delete. Step 3: Click the delete button.",
          open: false
        },
        {
          question: "How to search profile?",
          answer: "Step 1: Go to homepage. Step 2: Click on Search bar. Step 3: input @ and type the username.",
          open: false
        },
        {
          question: "How do I change username?",
          answer: "Step 1: Go to your Profile. Step 2: Locate the status you want to delete. Step 3: Click the delete button.",
          open: false
        },
        {
          question: "How do I change password",
          answer: "Step 1: Go to your Profile. Step 2: Locate the status you want to delete. Step 3: Click the delete button.",
          open: false
        },
        {
          question: "How do I update my bio",
          answer: "Step 1: Go to your Profile. Step 2: Locate the status you want to delete. Step 3: Click the delete button.",
          open: false
        },
        {
          question: "How do I change profile picture?",
          answer: "Step 1: Go to your Profile. Step 2: Locate the status you want to delete. Step 3: Click the delete button.",
          open: false
        },
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    }
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.Help-center {
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
}
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.4s linear;
  text-align: left;
}

.faq .question::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url('./arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
  text-align: left;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}

body{
    height: 100px;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
}

#Help-center-page {
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
}
#Help-center-page .content{
    max-width: 600px;
    text-align: center;
}

.content h2.Title{
    font-size: 50px;
    line-height: 1em;
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
  
}
.content h2.Title:after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 10s ease-in-out infinite;
}
@keyframes animate {
    0%{
    background-position: 0 0;
    }
    25%{
    background-position: 100% 0;
    }
    50%{
    background-position: 100% 100%;
    }
    75%{
    background-position: 0% 100%;
    }
    100%{
    background-position: 0% 0%;
    }
}
.btns{
    margin: 25px 0;
    display: inline-flex;
    color: #3498db;
}
.btns a{
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    border: 2px solid white;
    color: white;
    background-color: transparent;
    font-weight: 500;
    padding: 10px 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}
</style>
