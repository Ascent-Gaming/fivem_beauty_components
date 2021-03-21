
RegisterCommand(
  'show',
  (source, args, raw) => {
    emitNet('_boilerplate:showNui', source)
  },
  false
)

RegisterCommand(
  'hide',
  (source, args, raw) => {
    emitNet('_boilerplate:hideNui', source)
  },
  false
)
