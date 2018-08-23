$(() => {
  // run the currently selected effect
  let runEffect = () => {
    // get effect type from
    let selectedEffect = 'slide'

    // Callback function to bring a hidden box back
    let callback = () => {
      setTimeout(function () {
        $('#effect').removeAttr('style').fadeIn()
      }, 2000)
    }

    // Run the effect
    $('#video').effect(selectedEffect, 3000, callback)
    $('#effect-header').effect(selectedEffect, 3500, callback)
    $('#effect-form-header').effect(selectedEffect, 4000, callback)
    $('#effect-form').effect(selectedEffect, 4500, callback)
    $('#effect-footer').effect(selectedEffect, 5000, callback)
  }

  $('document').ready(() => {
    runEffect()
    return false
  })
})
