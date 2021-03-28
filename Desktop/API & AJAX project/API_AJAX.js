$(document).ready(function(){
    $('.random').click(function(){
        console.log('It Clicked!')
        let movieNum = Math.floor((Math.random() * 20) +1);
        console.log('finally!')
        $.get("https://ghibliapi.herokuapp.com/films" , function(res){
                console.log(res)
            // for(var i = 0; i < res.length; i++){ *DID NOT NEED BUT WANT IT THERE TO REMEMBER*
            $('.movies').html(
                `<tr>
                    <th>Movie Title</th>
                    <th>Original Title</th>
                    <th>Director</th>
                    <th>Description</th>
                    <th>Release Date</th>
                </tr>
                <tr>
                    <td>${res[movieNum].title}</td>
                    <td>${res[movieNum].original_title}</td>
                    <td>${res[movieNum].director}</td>
                    <td>${res[movieNum].description}</td>
                    <td>${res[movieNum].release_date}</td>
                </tr>`
                )
            // }**
        })
    })
    $('.clear').click(function(){
        $('.movies').html('')
        console.log('CLEARED!')
    })
})