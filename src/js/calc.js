function Calc() {
  return `
  <div class="hero-body">
    <div class="container">

      <div class="calculatrice">
        <div class="bt display" id="display">0</div>
        <div class="bt ac op" id="clear">AC</div>
        <div class="bt divi op" id="divide">/</div>
        <div class="bt mult op" id="multiply">x</div>
        <div class="bt min op" id="subtract">-</div>
        <div class="bt add op" id="add">+</div>
        <div class="bt equ op" id="equals">=</div>
        <div class="bt seven" id="seven">7</div>
        <div class="bt eight" id="eight">8</div>
        <div class="bt nine" id="nine">9</div>
        <div class="bt for" id="four">4</div>
        <div class="bt five" id="five">5</div>
        <div class="bt six" id="six">6</div>
        <div class="bt one" id="one">1</div>
        <div class="bt two" id="two">2</div>
        <div class="bt three" id="three">3</div>
        <div class="bt zero" id="zero">0</div>
        <div class="bt dec" id="decimal">.</div>
      </div>

    </div>
  </div>
  `
}

export default Calc
