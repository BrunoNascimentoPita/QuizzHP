<script  type="text/javascript" language="javascript">

    var inicio=window.alert('Bem-Vindo ao QuizHP Voce tem certeza de que quer participar?');
    var sair = "<html><head><title>Voce não quis participar </title></head><body>Você não quis participar :(<br></body></html>";
    if(inicio==false){document.write(sair);}
    else{ window.alert('Que comece o QuizzHP, Clique em Ok abaixo para começar (obs: apenas use letras minusculas e espaços^^!)');
    //Inicio do quiz
    var certo = "<b style='color:#4bff01;'>Correta</b>"; var errado = "<b style='color:red;'>Incorreta</b>";var o = new Array();
    var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
    var t=10; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
    // LISTA DE PERGUNTAS
 p[1] = "Qual o nome completo do pai de Harry Potter (na versão original)? (responda apenas com a letra)                                                      a)thiago potter  b)harrry thiago potter  c)james potter";
    r[1] = 'c';
    p[2] = "Qual o nome completo do pai de Severus Snape?";
    r[2] = 'tobias snape';
    p[3] = "Qual objeto foi a SEGUNDA Horcrux a ser destruida?(resposta: um(a)..)";
    r[3] = 'anel';
    p[4] = "Quem o nome completo do responsável pela perda de um dos olhos de Alastor Moody?";
    r[4] = 'evan rosier';
    p[5] = "Em que ano foi publicado o primeiro livro da saga HP?";
    r[5] = 1997;
    p[6] = "Em que ano foi lançado o primeiro filme da saga HP?";
    r[6] = 2001;
    p[7] = "Quem perdeu a orelha Fred Weasley ou Jorge?";
    r[7] ='jorge';
    p[8] = "Qual deve ser a medida do ângulo de um triangulo equilátero?";
    r[8] = 1;
    p[9] = "Quantos nomes tinha D. Pedro I?";
    r[9] = 1;
    p[10] = "Quantos nomes tinha D. Pedro II?";
    r[10] = 1;
 
    //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
     for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
     for(var i=1;i<=10;i++)          //embaralha a sequencia 10 vezes
     {
      n=Math.round(t*(Math.random())); 
      m=Math.round(t*(Math.random()));
      if(m==0){m++;}
      if(n==0){n++;}
      var temp = o[n];
      o[n]=o[m];
      o[m]=temp;
     } 
    for(var i=1;i<=t;i++)
    {
      respostas[o[i]] = prompt(p[o[i]],"");
       if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}

     }
{
if(acertos==0)
document.write('<img src="img/sangueruim.jpg">');
}
{if(acertos>0&&acertos<4)
document.write('<img src="img/trouxa.jpg">');
}
{if(acertos>=4&&acertos<7)
document.write('<img src="img/meiobruxomeiotrouxa.jpg">');
}
{if(acertos>=7&&acertos<=9)
document.write('<img src="img/bruxo.jpg">');
}

{if(acertos==10)
document.write('<img src="img/bruxoexcellent.jpg">');
}
    //fim do quiz
  
    document.write("<ol>");
    //document.write("<p style='color:red'>text</p>");
    for(var i=1;i<=t;i++)
    {

    document.write("<li >"+respostas[o[i]]);}
    document.write("</ol>");
    document.write("<br>Total de acertos: "+acertos);
    document.write("<br>Total de erros: "+erros);
    document.write("<br><br><input type=button value='Confira as respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
    document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");

    for(var i=1;i<=t;i++)
     { document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
    document.write("</ol></div>");
   }
  </script>