
let calculateSum = () => {
  let photosQty = $('#photos-qty').text() * 1
  let adultsTicketsQty = $('#adults-qty').text() * 1
  let kidsTicketsQty = $('#kids-qty').text() * 1

  let photosPrice = photosQty * 5
  let adultPrice = adultsTicketsQty * 17
  let kidsPrice = kidsTicketsQty * 11.90
  $('#total-price').text((photosPrice + adultPrice + kidsPrice).toFixed(2))
}

let increaseQty = (event) => {
  let qtyField = $(`#${event.parentNode.parentNode.firstElementChild.id}`)
  let value = Number(qtyField.text())

  if (qtyField[0].id === 'photos-qty') {
    let kidsTicketsQty = $('#kids-qty').text() * 1
    let adultsTicketsQty = $('#adults-qty').text() * 1
    if (kidsTicketsQty + adultsTicketsQty <= value) {
      return
    }
  }
  qtyField.text(value + 1)
  calculateSum()
}

let decreaseQty = (event) => {
  let qtyField = $(`#${event.parentNode.parentNode.firstElementChild.id}`)
  let newValue = Number(qtyField.text())
  if (newValue > 0) {
    qtyField.text(newValue - 1)
  }
  calculateSum()
}

$('#submit').click((e) => {
  e.preventDefault()
  let name = $('#name')
  let mail = $('#email')
  let checked = $('#checkmark')
  let isChecked = $('#radio').prop('checked')
  let datePicker = $('#datepicker')
  let timePicker = $('#hour')
  let success = true

  let validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  
  name.css('border-color', 'white')
  mail.css('border-color', 'white')
  checked.css('border-color', 'white')
  datePicker.css('border-color', 'white')
  timePicker.css('border-color', 'white')

  if (!name.val()) {
    name.css('border-color', 'red')
    success = false
  }

  if (!validateEmail(mail.val())) {
    mail.css('border-color', 'red')
    success = false
  }

  if (!isChecked) {
    checked.css('border-color', 'red')
    success = false
  }

  if (!datePicker.val()) {
    datePicker.css('border-color', 'red')
    success = false
  }

  if (!timePicker.val()) {
    timePicker.css('border-color', 'red')
    success = false
  }

  if (success) {
    $('#submit').val('ПРИЯТНО ГЛЕДАНЕ')
  }
})
