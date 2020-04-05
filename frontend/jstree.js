document.getElementById('getJsonButton').addEventListener('click', getJson)

function getJson () {
  // console.log(123)
  window.fetch('file.json')
    .then((res) => res.json())
    .then((data) => {
      // creates the tree-viewer
      $('#container').jstree({
        core: {
          data: [data]
        }
      })
      // document.getElementById('output').innerHTML = output
    }
    )
}

$('#container').on('changed.jstree', (e, file) => {
  const printLocation = document.getElementById('printLocation')
  printLocation.innerHTML = file.node.data
})
