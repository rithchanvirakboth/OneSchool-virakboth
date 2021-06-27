<template>
    <div class="comment-bottom">
        <div class="commented-section1">
            <div class="comment-header">
                <div class="d-flex flex-row align-items-center voting-icons"><img class="rounded-circle mr-3" src="https://res.cloudinary.com/demo/image/upload/s--XzUAIh3B--/c_imagga_crop/bo_1px_solid_rgb:aaa,c_pad,h_200,w_200/fat_cat.jpg" width="38"><h5 class="comment-username">Chanvirakboth</h5></div>
            </div>
            <div class="comment-text"><span>wow.. amazing</span></div>
                <div class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons "><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">10</span><span class="dot ml-2"></span>
                        <a href="#" class="reply align-items-center">Reply</a><div class="d-flex flex-row align-items-center"><span class="ml-2"> {{ counter }} hours ago</span></div>
                    </div>  
                </div>
        </div>
        <div class="commented-section1">
            <div class="comment-header">
                <div class="d-flex flex-row align-items-center voting-icons"><img class="rounded-circle mr-3" src="https://res.cloudinary.com/demo/image/upload/s--XzUAIh3B--/c_imagga_crop/bo_1px_solid_rgb:aaa,c_pad,h_200,w_200/fat_cat.jpg" width="38"><h5 class="comment-username">Chanvirakboth</h5></div>
            </div>
            <div class="comment-text"><span>Awesome</span></div>
            <div class="reply-section">
                <div class="d-flex flex-row align-items-center voting-icons "><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">10</span><span class="dot ml-2"></span>
                    <a href="#" class="reply align-items-center">Reply</a><div class="d-flex flex-row align-items-center"><span class="ml-2"> {{ counter }} hours ago</span></div>
                </div>
            </div>
        </div>
        <div class="comment-part">
            <div class="d-flex flex-row"><img class="rounded-circle mr-3" src="https://res.cloudinary.com/demo/image/upload/s--XzUAIh3B--/c_imagga_crop/bo_1px_solid_rgb:aaa,c_pad,h_200,w_200/fat_cat.jpg" width="38"><input type="text" class="form-control mr-3" placeholder="Add comment"><button class="btn btn-dark" type="button">send</button></div>
        </div>
    </div>
</template>
<script>
import { } from ''

export default defineComponent({
    setup() {
        
    },
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
.comment-bottom {
    background-color: transparent ;
    border-radius: 10px;
}
.commented-section1 {
    border: 1px solid black;
    color:#FCFCFC;
    background-color: #A79BAC;
    border-radius: 10px;
    padding: 5px;
}
.comment-text {
    margin: 0px;
    padding: 10px;
    font-size: 20px;
}
.reply {
    color: white;
    margin: 10px;
}
.comment-part {
    background-color: #A79BAC;
    border-radius: 15px;
    border: 1px solid black;
    padding: 10px;
    margin: 0px;
}
.form-control {
    border-radius: 15px;
    border: 0px;
    background-color: #FCFCFC;
}
</style>
