function Calc() {
  let text = 'see my result'

  return `
  <div class="hero-body">
    <div class="container">

      <div class="calculatrice">
        <div class="bt display">${text}</div>
        <div class="bt ac op">AC</div>
        <div class="bt divi op">/</div>
        <div class="bt mult op">x</div>
        <div class="bt min op">-</div>
        <div class="bt add op">+</div>
        <div class="bt equ op">=</div>
        <div class="bt seven">7</div>
        <div class="bt eight">8</div>
        <div class="bt nine">9</div>
        <div class="bt for">4</div>
        <div class="bt five">5</div>
        <div class="bt six">6</div>
        <div class="bt one">1</div>
        <div class="bt two">2</div>
        <div class="bt three">3</div>
        <div class="bt zero">0</div>
        <div class="bt dec">.</div>
      </div>

    </div>
  </div>
  `
}

export default Calc
