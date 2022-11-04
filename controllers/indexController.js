const index = (req, res) => {

    const users = [
        { name: 'John', age: 20, active: true },
        { name: 'Jane', age: 30, active: false },
        { name: 'Jack', age: 40, active: true },
    ]

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            res.render('index', {
                title: 'Express',
                pokemon: data.results
            });
        })
 
}

module.exports = {
    index
}