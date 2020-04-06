'use strict'
document.getElementById('getJsonButton').addEventListener('click', getJson)

function getJson () {
  // console.log(123)
  window.fetch('../data/file.json')
    .then((res) => res.json())
    .then((data) => {
      // creates the tree-viewer
      console.log(data)
      $('#container').jstree({
        core: {
          data: [data]
        },
        plugins: ['sort', 'wholerow', 'types'],
        sort: function (a, b) {
          const a1 = this.get_node(a)
          const b1 = this.get_node(b)
          if (a1.icon === b1.icon) {
            return (a1.text.toLowerCase() > b1.text.toLowerCase()) ? 1 : -1
          } else {
            return (a1.icon > b1.icon) ? 1 : -1
          }
        }
      }
      )
      // document.getElementById('output').innerHTML = output
    }
    )
}

$('#container').on('changed.jstree', (e, file) => {
  const printLocation = document.getElementById('printLocation')
  if (file.node) {
    printLocation.innerHTML = file.node.data
  }
})

$('#container').on('open_node.jstree', function (event, data) {
  $.jstree.reference('#container').set_icon(data.node, 'far fa-folder-open fa-fw')
})

$('#container').on('close_node.jstree', function (event, data) {
  $.jstree.reference('#container').set_icon(data.node, 'far fa-folder fa-fw')
})
