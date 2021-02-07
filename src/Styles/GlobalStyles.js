import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
   font-family:'Montserrat', sans-serif;
   width:100%;
 h2{
     font-family:'Abril Fatface', cursive;
     font-weight:lighter;
     font-size:3rem;
     color:#333;
 }
 h3{
     font-size:1.3rem ;
     padding:1.5rem 0rem;
     color:#333;

 }
 p{
     font-size:1.2rem;
     line-height:200%;
     color:#696969;
 }
 a{
     text-decoration:none;
     color:#fff;
 }
 img{
     display:block;
 }
 input{
    font-family:'Montserrat', sans-serif;
   font-weight:bold;
 }
 button{
     font-family:'Montserrat', sans-serif;
 }
}
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:16px;
            height:16px;
        }
        &::-webkit-scrollbar-track{
            background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
        }
        &::-webkit-scrollbar-thumb{
            background-color:#434343;
            border-radius:16px;
            box-shadow:inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
        }
    }
`;

export default GlobalStyle;
