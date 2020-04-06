
document.getElementById('getJsonButton').addEventListener('click', getJson)

function getJson () {
  // console.log(123)
  window.fetch('file.json')
    .then((res) => res.json())
    .then((data) => {
      // creates the tree-viewer
      console.log(data)
      $('#container').jstree({
        core: {
          data: [data],
          plugins: ['sort', 'search', 'wholerow', 'types'],
          types: {
            default: { icon: 'fas fa-angle-right fa-fw' },
            'f-open': { icon: 'fas fa-folder-open fa-fw' },
            'f-closed': { icon: 'fas fa-folder fa-fw' }
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
  printLocation.innerHTML = file.node.data
})

$('#jstree_menu').on('open_node.jstree', function (event, data) {
  data.instance.set_type(data.node, 'f-open')
})
$('#jstree_menu').on('close_node.jstree', function (event, data) {
  data.instance.set_type(data.node, 'f-closed')
})
