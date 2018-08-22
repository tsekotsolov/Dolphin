$( ()=> {
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
    $('#effect-header').effect(selectedEffect, 1000, callback)
    $('#effect-form-header').effect(selectedEffect, 1500, callback)
    $('#effect-form').effect(selectedEffect, 2500, callback)
    $('#effect-footer').effect(selectedEffect, 3500, callback)
  }

  $('document').ready(() => {
    runEffect()
    return false
  })
})