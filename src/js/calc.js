function Calc() {
  let text = ["0"]

  return `
  <div class="hero-body">
    <div class="container">

      <div class="calculatrice">
        <div class="bt display">${text[0]}</div>
        <div class="bt ac clear">AC</div>
        <div class="bt divi op">/</div>
        <div class="bt mult op">x</div>
        <div class="bt min op">-</div>
        <div class="bt add op">+</div>
        <div class="bt equ">=</div>
        <div class="bt seven num">7</div>
        <div class="bt eight num">8</div>
        <div class="bt nine num">9</div>
        <div class="bt for num">4</div>
        <div class="bt five num">5</div>
        <div class="bt six num">6</div>
        <div class="bt one num">1</div>
        <div class="bt two num">2</div>
        <div class="bt three num">3</div>
        <div class="bt zero num">0</div>
        <div class="bt dec num">.</div>
        <button class="button" mouseclick="()=>{alert('boum !')}">a boutton</button>
      </div>

    </div>
  </div>
  `
}

export default Calc
