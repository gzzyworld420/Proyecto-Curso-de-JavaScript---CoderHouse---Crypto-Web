class Cotizador {
  constructor(cantidadComprada, factorMoneda, factorCripto, costoTransaccion) {
      this.cantidadComprada = parseInt(cantidadComprada) || 1
      this.factorMoneda = parseFloat(factorMoneda) || 1
      this.factorCripto = parseFloat(factorCripto) || 1
      this.costoTransaccion = parseFloat(costoTransaccion) || 1
  }
  cotizar() {
      return (this.cantidadComprada * this.factorMoneda * this.factorCripto * this.costoTransaccion).toFixed(2)
  }
}