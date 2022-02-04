


const handleSubmit = function(event){
    event.preventDefault()

const movie = {
    "name": document.getElementById("inputName").value,
    "description": document.getElementById("inputDescription").value,
    "category": document.getElementById("inputCategory").value,
    "imageUrl": document.getElementById("inputImgeUrl").value,
}

fetch(('https://striveschool-api.herokuapp.com/api/movies'), {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDM4MDEzMTIsImV4cCI6MTY0NTAxMDkxMn0.dlz2qOuGVhBvUctJZ6tPWRv6oLf_d1KGnXfKXwMn6Ys"
    ,'Content-Type': 'application/json'
    }    
})
.catch(err=>console.log(err))
console.log(movie)
     alert("your data has been added, lets g0000")
}




const fetcher = function(){
    
    fetch(('https://striveschool-api.herokuapp.com/api/movies'), {
            headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDM4MDEzMTIsImV4cCI6MTY0NTAxMDkxMn0.dlz2qOuGVhBvUctJZ6tPWRv6oLf_d1KGnXfKXwMn6Ys",
        }
      })
      .then(resp=>resp.json())
      .then(serverData =>{
        console.log(serverData)

        serverData.forEach(element => {
            const theP = document.createElement ("h4")
            theP.innerHTML= ` ${element} `

            const containerNode = document.getElementById("dynamic")
            containerNode.appendChild(theP)
        })
        
    })
    .catch(err=>console.log(err))
}


window.onload = function(){
    fetcher()
   
    
}
//hay que pillar serverData( que son las categorias ) y hacer que sea una pagina nueva 
//y hacer append alli con cada elemento


