let value = document.querySelectorAll('.value')

fetch('data.json').then((res) => {
    res.json().then((res) => {
        for(let i = 0; i < value.length; i++){
            value[i].querySelector('.title').querySelector('p').textContent = res[i]['category']
            value[i].querySelector('.title').querySelector('img').setAttribute('src', res[i]['icon'])
            value[i].querySelector('.first').textContent += res[i]['score']
        }
    })
    
})
