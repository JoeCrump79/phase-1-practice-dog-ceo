console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function (response) {
    console.log(response);

    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const dogPics = data.message 
    console.log(dogPics);
    const dogPicBucket = document.getElementById('dog-image-container')
    console.log(dogPicBucket);
    
    dogPics.forEach(function(url) {
        const img = document.createElement('img')
        img.src = url
        dogPicBucket.append(img)
    })
  });
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    const dogBreeds = data.message
    const dogBreedsBucket = document.getElementById('dog-breeds')
    for (let key in dogBreeds){
        console.log(key)
        const li = document.createElement('li')
        li.textContent = key
        dogBreedsBucket.append(li)

        li.addEventListener('click', function(){
        li.style.color = 'blue'
        });
    }
  })
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('click', function(){
    const dropDownValue = dropDown.value;
    console.log(dropDownValue)
    const dogBreedsList = document.getElementById('dog-breeds')
    for (let breed of dogBreedsList.children){
        console.log(breed)
        breed.hidden = false 
        if (!breed.textContent.startsWith(dropDownValue) ){
            breed.hidden = true
        }
    }
    })