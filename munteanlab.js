/*
Color Scheme:
    Blueish Charcoal : #36454F
    White : #FFFFFF
    Light Grey : #53524E
    Gray : #3E3E3E
    Black : #101314 

Fonts: 
    font-family: 'Franklin Gothic', sans-serif;
    /*https://www.cdnfonts.com/abadi-mt-std.font*/
                                            
*/

/*ALL SECTIONS*/
header, section, footer, aside, nav, main, article, figure {
    display: block;
}
html{
    scroll-behavior: smooth;
}
body{
    margin:0;
    padding:0;
    font-family: 'Abadi MT Std', sans-serif, Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 1;
}
#wrapper{
    padding-left:30px;
    padding-right:30px;
    margin-top:20px;
    position:relative;
}
h2{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-stretch: condensed;
    font-size:30px;
    font-weight: bold;
}

.page_head h2{
    font-size:35px;
    margin-top:0px;
    margin-bottom:25px;
    text-align: center;
}

/*NAVIGATION*/
/*
.shadow{
    margin-bottom:15px;
    display:block;
    width:100%;
    z-index:100;
    height: 5px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
*/
.logo{
    position:relative;
    z-index:1;
}
.internal_logo{
    position:absolute;
    top:0px;
    opacity:0;
    z-index:100;
    transition:opacity 0.25s ease;
}

header{
    display: flex;
    justify-content: space-between;
}
.nav_links a.active{
    color:#6e97b2;
    text-decoration: underline;
}
.nav_links a{
    text-decoration: underline transparent;
    color:#101314;
    transition: color 0.25s ease, text-decoration 0.25s ease;
    font-size:18px;
    text-underline-offset: 7px;
}
.nav_links a:focus{
    color:#6e97b2;
}
.internal_logo:hover{
    opacity:1;
    transition:opacity 0.25s ease;
}

.nav_links a:hover{
    color:#6e97b2;
    transition: color 0.25s ease, text-decoration 0.25s ease;
    text-decoration:underline;
    text-decoration-color:#6e97b2;

}
nav ul{
    list-style-type:none;
}
nav li{
    display:inline;
    margin-right:25px;
}

/*HAMBURGER MENU - RESPONSIVE DESIGN*/
.hamburger{
    position: relative;
    width: 30px;
    height:4px;
    background:black;
    cursor:pointer;
    z-index: 10;
    transition:0.3s;
    top:35%;
    right:10%;
}
.hamburger:before, .hamburger:after{
    content:"";
    position:absolute;
    height:4px;
    right:0;
    background:black;
    transition:0.3s;
    z-index:10;
}
.hamburger:before{
    top:-10px;
    width:20px;
    z-index:10;
  }
.hamburger:after{
top:10px;
width:20px;
z-index:10;
}
.toggle-menu{
    position: absolute;
    width:30px;
    height:100%;
    z-index:20;
    cursor:pointer;
    opacity:0;
  }
  .nav_links input:checked ~ .hamburger{
    background:transparent;
  }
  .nav_links input:checked ~ .hamburger:before{
    top:0;
    transform:rotate(-45deg);
    width:30px;
  }
  .nav_links input:checked ~ .hamburger:after{
    top:0;
    transform:rotate(45deg);
    width:30px;
  }
  .nav_links input:checked ~ .menu{
    right:30px;
    transition:right 0.5s ease;
  }
  @media screen and (min-width:800px){
    .hamburger{
      display:none;
    }
  }
  @media screen and (max-width: 800px){
    .hamburger,.toggle-menu{
      display: block;
    }
    .menu{
      display:flex;
      justify-content: start;
      flex-direction:column;
      position: fixed;
      align-items: space-between;
      top:0;
      right:-300px;
      background:black;
      width:200px;
      height:325px;
      padding-top:25px;
      z-index:99;
      margin-top:60px;
      transition:right 0.5s ease;
      border-radius:10px;
      color:white;
    }

   .menu a{
      display:flex;
      border-style: none;
      border-radius:0;
      color:white;
      justify-content: center;
      padding-top:14px;
      
    }
    .menu li{
        margin-bottom:15px;
    }
    .nav_item{
        height:80px;
        width:200px;
        background-color: #101010;
        margin-left:-20px;
        transition: background-color 0.25s ease;
    }
    .nav_item:hover{
        background-color:#36454F;
        transition: background-color 0.25s ease;
    }
    .nav_links a:hover{
        color:white;
        transition: color 0.25s ease;
        text-decoration-color:white;
    }
  }


/*HOME PAGE*/
.homebutton{
    font-size:20px;
    background-color: #101010;
    height:30px;
    width:fit-content;
    padding:5px 20px;
    display:flex;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:50px;
    justify-content: center;
    align-items: center;
    margin-top:10px;
    z-index:99;
    border:1px solid black;
    transition: background-color 0.25s ease;
    letter-spacing: 2px;
    font-weight: 300;
    
}
.homebutton a{
    color: white;
    text-decoration: none;
    transition: color 0.25s ease;
}
.homebutton a:hover{
    color:black;
    transition: color 0.25s ease;
}
.homebutton:hover{
    color:black;
    background-color:white;
    transition: background-color 0.25s ease;
}
.homepic1 img{
    margin-top: 20px;
    display:block;
    margin-right: auto;
    margin-left:auto;
    width:90%;
    margin-bottom:70px;
}
.homepic1 .arrow img{
    width:35px;
}
hr{
    height:1px;
    background-color:#919191;
    border:none;
    width:90%;
}
.slider_cont{
    display:flex;
    justify-content: center;
    width:100vw;
    height:700px;
    margin-top:5px;
    z-index:1;
    
}
.slider{
   display:block;
   width: 90vw;
   height:700px;
   overflow:hidden;
   background-color:white;
}
.slides{
    width:506%;
    height:700px;
    display:flex;
    background-color: none;
    /* #111518 */
}
.slides input{
  display:none;
}
.slide{
    width:20%;
    transition:2s;
}
.slide img{
    height:100%;
    z-index:5;   
}
.image_l{
    display:block;
    transition:display 0.1s ease;
}
.image_s{
    display:none;
    transition:display 0.1s ease;
}
.navigation-manual{
    left:44%;
    position: absolute;
    width:fit-content;
    margin-top:-35px;
    display:flex;
    justify-content:center;
    align-items: center;
}

.manual-btn{
    border:2px solid rgba(255, 255, 255, 0.25);
    padding:5px;
    border-radius:10px;
    cursor:pointer;
    transition: 1s;
}
.manual-btn:not(:last-child){
    margin-right:40px;
}
.manual-btn:hover{
    background:rgba(255, 255, 255, 0.3s);
}
#radio1:checked ~ .first{
    margin-left:0;
}
#radio2:checked ~ .first{
    margin-left:-20%;
}
#radio3:checked ~ .first{
    margin-left:-40%;
}
#radio4:checked ~ .first{
    margin-left:-60%;
}

/*css for automatic navigation*/
.navigation-auto{
    position:absolute;
    display:flex;
    width:fit-content;
    justify-content:center;
    left:44%;
    margin-top:665px;
}
.navigation-auto div{
    border:2px solid rgba(255, 255, 255, 0.25);
    padding:5px;
    border-radius:10px;
    transition:1s;
}
.navigation-auto div:not(:last-child){
    margin-right:40px;
}
#radio1:checked ~ .navigation-auto .auto-btn1{
    background: rgba(255, 255, 255, 0.7);
}

#radio2:checked ~ .navigation-auto .auto-btn2{
    background: rgba(255, 255, 255, 0.7);
}
#radio3:checked ~ .navigation-auto .auto-btn3{
    background: rgba(255, 255, 255, 0.7);
}
#radio4:checked ~ .navigation-auto .auto-btn4{
    background: rgba(255, 255, 255, 0.7);
}

/*RESEARCH PAGE*/
.researchpage{
    display:flex;
    margin:25px auto;
    width: 90%;
    gap:15px;
}
.researchimg img{
    width:300px;
}
.researchcont{
    margin-left:0px;
}
.researchcont h1{
    margin-bottom:5px;
    margin-top:0;
}
.researchcont h2{
    margin-top:0;
    font-family: 'Abadi MT Std', sans-serif;
    font-size: 15px;  
    margin-bottom:8px;                              
}
.researchcont p{
    margin-top:0;
}
.researchcont a{
    text-decoration: none;
    background-color:#101314;
    padding:5px 25px;
    border:solid;
    border-color: #101314;
    color:white;
    transition: background-color 0.25s ease, color 0.25s ease;
}
.researchcont a:hover{
    text-decoration: none;
    background-color:white;
    color:#101314;
    transition: background-color 0.25s ease, color 0.25s ease;
}
.homecont{
    margin-bottom:30px;
}
.researchhead{
    text-align: center;
}




/*PEOPLE PAGE*/
/*VIDEO ON STACKING RESPONDIVE GRID https://youtu.be/sKFW3wek21Q*/

.peoplepage{
    margin-right:20px;
    margin-left:20px;
    display:block;
}
.alum_container{
    max-width:100rem;
    margin-inline:auto;
    margin-bottom:50px;
    margin-top:0;
}
.alum_head h2{
    font-size: 35px;
    text-align: center;
    margin-top:35px;
    margin-bottom:25px;
}
.team_container{
    max-width:100rem;
    margin-inline:auto;

}
.profile_grid{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    gap: 30px;
}

.profile_img{ 
    width:100%;
    aspect-ratio: 1/1.2;
    background-color:#36454F;
    overflow:hidden;
}
.profile_img img{
    width:100%;
    display:block;
}
.profile_card{
    display:grid;
    width:100%;
    aspect-ratio: 1 / 1.58;
    background-color:#f5f5f5;
}
.stacked{
    display:grid;

}
.stacked > * {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}
.card_content{
    background:white;
    align-self:end;
    margin: 10px 10px 20px;
    padding:10px;
    /*FIX THIS*/
    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.1);

}
.card_content a{
    color:#6e97b2;
}

.card_button a:hover{
    background-color: #6e97b2;
    transition: background-color 0.2s ease;
}
.card_button a{
    color:white;
    text-decoration:none;
    background-color: #101010;
    height:30px;
    justify-content: center;
    color:white;
    display:flex;
    align-items: center;
    margin-top:7px;
    transition: background-color 0.2s ease;
}
.card_content h3{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding:0;
    margin:10px 0 0 0;
    font-size: 30px;
    font-stretch: condensed;
}   
.card_content p{
    margin-top:5px;
    margin-bottom:8px;
}

.peoplepage#blur.active{
    filter:blur(20px);
    pointer-events: none;
    user-select: none;
}
/*

#muntean{
    position:fixed;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    width:700px;
    background-color: white;
    box-shadow: 0px 5px 30px rgba(0,0,0,.6);
    padding:50px;
    visibility: hidden;
    opacity:0;
    transition:0.5s;
    border-radius: 10px;
}
#muntean a{
    color:white;
    text-decoration:none;
    background-color: #101010;
    height:30px;
    padding:5px 35px;
    color:white;
    text-align: center;
    margin-top:7px;
    transition: background-color 0.2s ease;
}
#muntean a:hover{
    background-color: #6e97b2;
    transition: background-color 0.2s ease;
}
#muntean.active{
   visibility:visible;
   opacity:1;
   transition:0.5s;
}
.popup_img img{
    height:350px;
}
.popup_cont{
    display:flex;
}
.popup_rcolumn{
    margin-left:15px;
}


#sloan{
    position:fixed;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    width:700px;
    background-color: white;
    box-shadow: 0px 5px 30px rgba(0,0,0,.6);
    padding:50px;
    visibility: hidden;
    opacity:0;
    transition:0.5s;
    border-radius: 10px;
}
.popup_cont a{
    color:white;
    text-decoration:none;
    background-color: #101010;
    height:30px;
    padding:5px 35px;
    color:white;
    text-align: center;
    margin-top:7px;
    transition: background-color 0.2s ease;
}
.popup_cont a:hover{
    background-color: #6e97b2;
    transition: background-color 0.2s ease;
}
#sloan.active{
   visibility:visible;
   opacity:1;
   transition:0.5s;
       display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 10px;
    width: 70%;
    height: 80%;
    gap: 1rem;
    overflow: hidden;
}
*/

.card_button button{
    color:white;
    text-decoration:none;
    background-color: #101010;
    height:30px;
    padding:5px 35px;
    color:white;
    text-align: center;
    margin-top:7px;
    width:100%;
    transition: background-color 0.2s ease;
    font-family: 'Abadi MT Std', sans-serif, Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 1;
    font-size:15px;
    border:none;
}
.card_button button:hover{
     background-color: #6e97b2;
     transition: background-color 0.2s ease;

}
.pop-up{
   
    visibility: hidden;
    background:white;
    box-shadow:0px 5px 30px rgba(0,0,0,.6);
    height:60vh;
    width:70%;
    position:absolute;
    top:150px;
    left:15%;
    padding:20px 35px;
    display:flex;
    
}
.visible{
    visibility: visible;
}
.pop-up h3{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-stretch: condensed;
    font-size:30px;
    font-weight: bold;
}
.pop-upl{
    height:auto;

}
.pop-upl img{
    height: 100%;
    width:auto;
}
.pop-upr{
    width:60%;
    margin-left:20px;

}
/*
.pop-upr button{
    color:white;
    text-decoration:none;
    background-color: #101010;
    height:30px;
    padding:5px 35px;
    color:white;
    text-align: center;
    margin-top:7px;
    width:175px;
    transition: background-color 0.2s ease;
    font-family: 'Abadi MT Std', sans-serif, Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 1;
    font-size:15px;
    border:none;
}
.pop-upr button:hover{
    background-color: #6e97b2;
    transition: background-color 0.2s ease;
}
*/
.pop-upr button{
    border:none;
    background:none;
    background-color:transparent;
}
.pop-upr .blackx{
    height:35px;
    width:35px;
    position:relative;
    z-index:1;
}
.pop-upr h2{
    margin-bottom:0;
}
.pop-upr h4{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-stretch: condensed;
    margin-bottom:0;
}

.popup_papers p{
    margin-top:0;
}
.pop-upr .bluex{
    height:35px;
    width:35px;
    position:absolute;
    top:3%;
    right:1%;
    z-index:100;
    opacity:0;
    right:6px;
    transition:opacity 0.15s ease;
}
.pop-upr .bluex:hover{
    opacity:1;
    transition:opacity 0.15s ease;
}

.pop-upr .bluex:hover{
    height:35px;
    width:35px;
    display:block; 
}
.pop-upr button{
    border:none;
    background-color:white;
    position:absolute;
    top:3%;
    right:1%;
}

/*PAPERS*/
.pub_card{
    display:flex;
    margin-bottom:15px;
    align-items: center;
}
.pub_ref{
    margin-left:15px;
    font-size: 20px;
}
.pub_header{
    margin-bottom:10px;
    font-size: 30px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-stretch: condensed;
}
.pub_year{
    margin-bottom:35px;
}
.pub_year{
    margin-top:30px;
}
.pub_year1{
    margin-top:-20px;
    margin-bottom:35px;
}

.pub_year:last-child{
    margin-bottom:100px;
}
.publications{
    margin-left:7%;
    margin-right:7%;
}
.publications hr{
    margin:0;
    width:100%;
}
.author{
    font-weight:400;
    display:inline;
}
.pub_title{
    color:#6e97b2;
    display: inline;
    text-decoration:none;
    font-weight: 300;

}
.pub_title:hover{
    text-decoration:underline; 
}

.pub_img img{
    box-shadow:none;
    transition: box-shadow 0.25s ease;
}
.pub_img img:hover{
    
    box-shadow:5px 5px 3px #363636;
    transition: box-shadow 0.25s ease;
}


/*CONTACT PAGE*/
.contactbox{
    margin-bottom:100px;
    position:relative;

}
.contactbox img{
    width: 97%;
    display:block;
    margin-left: auto;
    margin-right:auto;
    opacity:1;
    transition: opacity 0.25s ease;
}
.contactcont {
    position:absolute;
    left:65%;
    right:5%;
    top:10%;
    color:white;
    transition: left 0.25s ease;
    
}
.contactcont a{
    text-decoration: none;
    color:white;
    font-style:italic;
    transition: color 0.1s ease;
}

.contactcont a:hover{
    color:#6e97b2;
    transition: color 0.1s ease;
}

/*UP ICON*/
.up_icon{
    height:50px;
    width:50px;
    border-radius: 50px;
    text-align: center;
    background-color:rgb(0, 0, 0, 0.05);
    color:black;
    position:fixed;
    bottom:5%;
    right:5%;
}

.up_icon.active{
    background-color:red;
}

.up_icon:hover{
    background-color: rgb(0, 0, 0, 0.5);
    transition: background-color 0.25s ease;
}



/*FOOTER*/

.footer{
    height: 30px;
    background-color:#101314;
    width:100%;
    margin:0px;
    color:white;
    text-align: right;
    padding-top:35px;
    font-size: 10px;
    bottom:0;
}

.cfooter{
    position: absolute;
    bottom:0;
    height: 30px;
    background-color:#101314;
    width:100%;
    margin:0px;
    color:white;
    text-align: right;
    padding-top:35px;
    font-size: 10px;
}

.footer p{
    margin-right:20px;
}
.cfooter p{
    margin-right:20px;
}

/*RESPONSIVE DESIGN*/
@media (max-width:650px){
    .researchpage{
        display:block;
    }
    .researchimg{
        text-align: center;
        height:auto;
        width:100%;
        margin-bottom:30px;
    }
    .researchimg img{
        height:auto;
        width:100%;
    }

}
@media (max-width:750px){
    .contactbox h2{
        color: black;
    }
    .contactcont{
        color:black;
        left:0%;
        transition: left 0.25s ease;
    }
    .contactcont a{
        color:black;
    }
    .contactbox img{
        opacity:0;
        transition: opacity 0.25s ease;
    }
    .pub_card{
        align-items: flex-start;
    }
    .slider_cont{
        width:100%;
        height:525px;

    }
    .slider{
        height:525px;
    }
    .slides{
        height: 525px;
    }
    .slide img{
        margin-right:auto;
        margin-left:auto;
    }
    .image_l{
        display:none;
        transition:display 0.1s ease;
    }
    .image_s{
        display:block;
        transition:display 0.1s ease;
    }
    .navigation-auto{
        left:38%;
        margin-top:490px;
    }
    .navigation-manual{
        left:38%;
    }
    .homebutton{
        margin-top:20px;
        margin-bottom:125px;
    }
    .pop-up{
        display:block;
        height:auto;
        left:8%;  
    }
    .pop-up img{
        width:100%;
        margin-top:35px;
    }
    .pop-up button{
        background-color: transparent;
    }
    .pop-upr button{
        top:-3%;
        right:1%;
    }
    
}
@media (max-width:400px){
    .navigation-auto{
        left:28%;
        margin-top:490px;
    }
    .navigation-manual{
        left:28%;
    }
}
