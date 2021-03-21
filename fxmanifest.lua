fx_version 'cerulean'
games {'gta5'}

name 'FiveM Beauty Components'
description 'FiveM NUI components created using Preact and TailwindCSS'
author 'Standal'
url 'https://github.com/Ascent-Gaming/fivem_beauty_components'

client_script 'dist/client/*.client.js'
server_script 'dist/server/*.server.js'
ui_page 'src/html/index.html'
files {
  'src/html/**/styles/dist/*.css',
  'src/html/**/*.js',
  'src/html/**/*.html'
}
