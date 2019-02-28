function Calc() {
  return `
  <div class="hero-body">
    <div class="container">

      <div class="calculatrice">
        <div class="bt screen">
          <div class="input-line" id="input">0</div>
          <div class="display" id="display">0</div>
        </div>
        <div class="bt ac op clear" id="clear">AC</div>
        <div class="bt divi op" id="divide">/</div>
        <div class="bt mult op" id="multiply">x</div>
        <div class="bt min op" id="subtract">-</div>
        <div class="bt add op" id="add">+</div>
        <div class="bt equ op" id="equals">=</div>
        <div class="bt seven num" id="seven">7</div>
        <div class="bt eight num" id="eight">8</div>
        <div class="bt nine num" id="nine">9</div>
        <div class="bt four num" id="four">4</div>
        <div class="bt five num" id="five">5</div>
        <div class="bt six num" id="six">6</div>
        <div class="bt one num" id="one">1</div>
        <div class="bt two num" id="two">2</div>
        <div class="bt three num" id="three">3</div>
        <div class="bt zero num" id="zero">0</div>
        <div class="bt dec" id="decimal">.</div>
        <button class="button" value="value of the button" onclick="boum">theButton</button>
      </div>

    </div>
  </div>
  `
}

export default Calc
