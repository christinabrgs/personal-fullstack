const trash = document.getElementsByClassName("fa-trash");


function makeReq(){
    let newFood = document.querySelector('input').value
    let newRecipe = document.querySelector('input').value
    console.log (newRecipe, newFood)
  
    fetch('/search', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'newFood' : newFood,
        'newRecipe': newRecipe,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
}
  

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText
      // const img = this.parentNode.parentNode.childNodes[1].innerText
      // const recipe = this.parentNode.parentNode.childNodes[5].innerText
      console.log(name)
      fetch('search', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          // 'recipe': recipe,
          // 'img': img,
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
});
  
  // document.querySelector('#submit').addEventListener('click', makeReq)