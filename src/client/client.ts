
onNet('_boilerplate:showNui', () => {
  console.log('got it')
  SendNuiMessage(JSON.stringify({
    show: true
  }))
  SetNuiFocus(true, true)
})

onNet('_boilerplate:hideNui', () => {
  console.log('got it')
  SendNuiMessage(JSON.stringify({
    show: false
  }))
  SetNuiFocus(false, false)
})
