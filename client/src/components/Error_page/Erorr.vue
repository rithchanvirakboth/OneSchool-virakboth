<template>
    <nav>
        <ul class="nav_links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Log out</a></li>
        </ul>
    </nav>
<div id="error-page">
    <div class="content">
        <h2 class="header" data-text="404">
        404
        </h2>
        <h4 data-text="Opps! Page not found">
            Opps! Page not found
        </h4>
        <p>We're sorry, the page you requested could not be found. Please go back to Homepage or report the problem.</p>
        <div class="btns">
            <a href="">return home</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
    top: 0%;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

li, a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    color: #edf0f1;
    text-decoration: none;
}
nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10%;
}
.nav_links {
    list-style: none;
}
.nav_links li {
    display: inline-block;
    padding: 0px 20px;
}
.nav_links li a { 
    transition: all 0.3s ease 0s;
}
.nav_links li a:hover {
    color: #71b7e6;
} 
body{
    height: 100px;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
}
#error-page{
    position: absolute;
    top: 15%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
}
#error-page .content{
    max-width: 600px;
    text-align: center;
}
.content h2.header{
    font-size: 18vw;
    line-height: 1em;
    position: relative;
}
.content h2.header:after{
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
.content h4{
    font-size: 1.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000;
    font-size: 2em;
    max-width: 600px;
    position: relative;
}
.content h4:after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.content p{
    font-size: 1.2em;
    color: grey;
}
.content .btns{
    margin: 25px 0;
    display: inline-flex;
}
.content .btns a{
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    border: 2px solid #69a6ce;
    color: #69a6ce;
    font-weight: 500;
    padding: 10px 25px;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}
</style>
