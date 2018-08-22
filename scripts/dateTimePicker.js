$(() => {
  $('#datepicker').datepicker({
    minDate: 0,
    maxDate: '+1M +10D'
  })
})

$('#hour').timepicker()