<template>
  <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://res.cloudinary.com/demo/image/upload/s--XzUAIh3B--/c_imagga_crop/bo_1px_solid_rgb:aaa,c_pad,h_200,w_200/fat_cat.jpg" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="name">Chanvirakboth </div>
                                    <div class="username">@Chanvirakboth_1231</div>
                                </div>
                                <div class="timer">11/12/2012</div>
                            </div>
                            <div>
                              <p>{{ counter }} likes </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Hi this is my first post!!
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link1"><i class="far fa-heart"></i> Like</a>
                        <a href="#" class="card-link2"><i class="fa fa-comment"></i> Comment</a>
                    </div>
                </div>
</template>

<script>
import { } from ''

export default ({
    name: '',
    props: {
        msg: String
    },
    computed: {
        return : {},
    },
    methods: {
        return: {},
    }

})
</script>
<style scoped>

@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

.card {
  background-color: #A79BAC;
  border-radius: 10px;
}
.card-header {
  color: white;
  background-color: transparent;
  border: 0px;
  border-radius: 20px;
  height: 60px;
}
.name {
  font-size: 15px;
}
.username {
  margin-top: 0px;
  color: lightgray;
  font-size: 15px;
}
.card-body{
  background-color: transparent;;
  color: white;
}
.card-footer {
  background-color: transparent;
  border-radius: 20px;
  border: 0px;
}
.card-link1{
  margin: 10px;
  color: white;
}
.card-link2 {
  color: white;
  margin: 10px; 
}
.timer{ 
  text-align: right;
  font-size: 10px;
  color: white;
}
</style>
