(() => {
  const app = {
    init() {
      console.log('Initializing!')
      this.cacheElements()
      this.generateLines()
    },
    cacheElements() {
      this.$lines = document.querySelectorAll('.bg_lines')
    },
    generateLines() {
      this.$lines.forEach(line => {
        line.innerHTML = `
              <div style="transform: rotate(${Math.floor(Math.random() * 360)}deg);" class="bg_line color__blue"></div>
              <div style="transform: rotate(${Math.floor(Math.random() * 360)}deg);" class="bg_line color__yellow"></div>
              <div style="transform: rotate(${Math.floor(Math.random() * 360)}deg);" class="bg_line color__orange"></div>
              <div style="transform: rotate(${Math.floor(Math.random() * 360)}deg);" class="bg_line color__green"></div>`
      })
      const $lines = document.querySelectorAll('.bg_line')
      document.addEventListener('scroll', () => {
        $lines.forEach(line => {
          if (this.data.scrollY < window.scrollY) {
            line.style.transform = `rotate(${Number(line.style.transform.match(/\d/g).join('')) + 1}deg)`
          } else {
            line.style.transform = `rotate(${Number(line.style.transform.match(/\d/g).join('')) - 1}deg)`
          }
        })
        this.data.scrollY = window.scrollY;
      });
    },
    data: {
      scrollY: 0,
      direction: 0
    }
  }
  app.init()
})()