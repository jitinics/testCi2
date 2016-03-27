var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: false })
var nightmare2 = Nightmare({ show: false })
var nightmare3 = Nightmare({ show: false })
var nightmare4 = Nightmare({ show: false })
var nightmare5 = Nightmare({ show: false })
var url = 'http://localhost:8080/'
var radix = 10
console.log('f2')
describe('test ', function () {
  it('should find the nightmare github link first', function () {
    nightmare
      .goto(url)
      .wait(500)
      .click('#listB001')
      .wait(500)
      .click('#listB001')
      .wait(500)
      .click('#listB002')
      .wait(1000)
      .evaluate(function () {
        var result = document.getElementsByClassName('result')[0]
        var qty = result.getElementsByClassName('TotalQty')[0].getElementsByClassName('number')[0].innerHTML
        var price = result.getElementsByClassName('TotalPrice')[0].getElementsByClassName('number')[0].innerHTML
        var discount = result.getElementsByClassName('Discount')[0].getElementsByClassName('number')[0].innerHTML
        var net = result.getElementsByClassName('NetPrice')[0].getElementsByClassName('number')[0].innerHTML
        return [qty, price, discount, net]
      })
      .then(function (result) {
        var qty = result[0]
        var price = result[1]
        var discount = result[2]
        var net = result[3]
        if (parseInt(qty, radix) === 3) {
          true
        } else {
          false
        }
        console.log('Total price Check :')
        if (parseInt(price, radix) === 300) {
          true
        } else {
          false
        }
        console.log('Discount Check :')
        if (parseInt(discount, radix) === 20) {
          true
        } else {
          false
        }
        console.log('Netprice Check :')
        if (parseInt(net, radix) === 280) {
          true
        } else {
          false
        }
      })
    nightmare.end()
  })
})
