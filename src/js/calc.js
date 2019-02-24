function Calc() {
  return `
  <div class="hero-body">
    <div class="container">

      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-12">
          <p class="box black">result</p>
        </div>

        <div class="column is-6">
          <p class="box red">AC</p>
        </div>
        <div class="column is-3">
          <p class="box gray has-text-centered">\/</p>
        </div>
        <div class="column is-3">
          <p class="box gray has-text-centered">X</p>
        </div>

        <div class="column is-3">
          <p class="box dark-gray has-text-centered">7</p>
        </div>
        <div class="column is-3">
          <p class="box dark-gray has-text-centered">8</p>
        </div>
        <div class="column is-3">
          <p class="box dark-gray has-text-centered">9</p>
        </div>
        <div class="column is-3">
          <p class="box gray has-text-centered">-</p>
        </div>

        <div class="column is-3">
          <p class="box dark-gray has-text-centered">4</p>
        </div>
        <div class="column is-3">
          <p class="box dark-gray has-text-centered">5</p>
        </div>
        <div class="column is-3">
          <p class="box dark-gray has-text-centered">6</p>
        </div>
        <div class="column is-3">
          <p class="box gray has-text-centered">+</p>
        </div>

        <div class="column is-3">
        <p class="box dark-gray has-text-centered">1</p>
        </div>
        <div class="column is-3">
        <p class="box dark-gray has-text-centered">2</p>
        </div>
        <div class="column is-3">
        <p class="box dark-gray has-text-centered">3</p>
        </div>
        <div class="column is-3">
        <p class="box blue has-text-centered" id="equals">=</p>
        </div>

        <div class="column is-6">
        <p class="box dark-gray has-text-centered">0</p>
        </div>
        <div class="column is-3">
        <p class="box dark-gray has-text-centered">.</p>
        </div>


      </div>

    </div>
  </div>
  `
}

export default Calc
