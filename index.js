
const result = document.getElementById("result")
const input = document.getElementById("input")
const main = document.querySelector("main") //Retorna a main
const root = document.querySelector(":root")
const charkeys = document.querySelectorAll(".charKey")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ", "^", "√", "π", "!"]


//Limpa o input
document.getElementById("clear").addEventListener("click", function()
{
    input.value = ""
    input.focus()
})

charkeys.forEach(function(btnKey)
{
    btnKey.addEventListener("click", function()
    {
        const value = btnKey.dataset.value
        input.value += value
    })
})



//muda o tema
document.getElementById("themeSwitch").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })
//Pesquisar como deletar elemento selecionado
  input.addEventListener("keydown", function(ev)
  {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key))
    {
        input.value += ev.key
        return
    }
    if(ev.key ==="Backspace")
    {

        input.value = input.value.slice(0, -1)
    }
    if(ev.key === "enter")
    {
        calculate()
    }
  })

document.getElementById("equal").addEventListener("click", calculate)

function calculate()
{
  //seta como valor padrão ERROR na hora de calcular, caso não retorne nenhum resultado o ERRO aparece, caso retorne o ERRO é sobrescrito pelo resultado
  result.value = "ERROR"
  //Adiciona a classe error no result, assim aplicando o estilo erro
  result.classList.add("error")

  let resultado = input.value
  
  resultado = resultado.split('');
  resultado = resultado.map(function(valor, index, arr)
  {
    //Transforma o simbolo PI em seu valo matematico
    if(valor === 'π')
    {
      return Math.PI.toString()
    }
    //Seleciona todos os numeros após a raiz e aplica o calculo
    else if (valor === '√')
    {
      let x = 1
      let raiz = ""
      //Filtra valors, condicao para quando encontra Valores (Nulos e diferentes de . "OBS:. como . é um valor essa lógica so da falsa para valores realmente NULOS") e valores vazios
      while((!isNaN(arr[index + x]) || arr[index + x] === '.') && arr[index + x] !== ' ')
      {
        raiz += arr[index + x]
        arr[index + x] = ''
        x++
      }
      return Math.sqrt(raiz).toString()
    }
    //Seleciona todos os valores após o ! e faz a operação de fatorial onde N*N-1...*1
    else if (valor === '!')
    {
      let x = 1
      let fatorial = ""
        while(!isNaN(arr[index + x]) && arr[index + x] !== ' ')
        {
          fatorial += arr[index + x]
          arr[index + x] = ''
          x++
        }
      fatorial = parseInt(fatorial)
      let fat = 1
        if(fatorial <= 0 )
        {
         return "1"
        }else
        {
          while( fatorial > 0)
        {
          fat = fat*fatorial
          fatorial--
        }
      }
      return fat.toString()
      
    }
    

    //caso não se encaixe em nenhum desses, retorna o valor ou simbolo
    else
    {
      return valor
    }
  })

  //Substitui ^ pelo operador correto de potencia achei isso no StackOverflow: replace(/\^/g, '**')
  resultado = resultado.join('').replace(/\^/g, '**')
  result.value = eval(resultado)

  //Retira a classe error
  result.classList.remove("error")
}


document.getElementById("copy").addEventListener("click", function(ev)
{
  const copiado = ev.currentTarget
  
  if(result.value != "")
  {
    copiado.classList.add("success")
    copiado.innerText = "Copiado"
    navigator.clipboard.writeText(result.value)
    //Botão espera 2 segundos antes de voltar ao normal
    setTimeout(function()
    {
      copiado.classList.remove("success")
      copiado.innerText = "Copiar"
    }, 2000)
    result.value = ""
  }else
  {
    copiado.classList.remove("success")
    copiado.innerText = "Copiar"
  }
})

