let horaElemento=document.getElementById("hora")
let imagemFundo=document.getElementById('imagemFundo')
function horaAtualizada(){
          const agora= new Date();
          const horas=String(agora.getHours()).padStart(2,"0");
          const minutos=String(agora.getMinutes()).padStart(2,"0");
          horaElemento.innerText=`${horas}:${minutos}`
}
horaAtualizada();
setInterval(horaAtualizada,1000)
let angulo=0
imagemFundo.addEventListener('change',function(){
           let url=imagemFundo.files[0]
           let inverter=document.getElementById('inverter')
           if (url){
          

                   let url_real=URL.createObjectURL(url)
                 
                  
                   
                   
                   
                       fundo.style.backgroundImage = `url("${url_real}")`;
                  
                   inverter.addEventListener('click',function(){
                     
                      angulo += 90;
                      if(angulo>=360)angulo = 0;
                          fundo.style.transform = `rotate(${angulo}deg)`;
                   })
          }

}

)