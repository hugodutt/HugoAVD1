import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }

body{
 background-color: #C1C1C1;
 background-image:url("public/imgs/bghugo.jpg");
}
  body, input, button {
    font: 18px 'Montserrat', sans-serif, arial;
  }

  button {
    size: 100px, 60px;
    cursor: pointer;
    border-radius:5px;
    height:60px;
    width:300px;
    background-color:white;
    border-color: #4169E1;
    color: #4169E1;
    font-size:20px;
    font-family:Arial, Helvetica, sans-serif;
  }
  button:hover{
    background-color: #4169E1;
    color: white;
  }
h1{
  text-align:center;
  color: white;
  background-color: #1A1A1A;
  width:100%;
  height: 100%;
}
.form-input{

}
p{
  text-align:center;
  margin: 25px;
}
a{
  color:#1A1A1A;
  font-family:arial;
  font-size: 20px;

}
a:hover{
  color: white;
}
`;
