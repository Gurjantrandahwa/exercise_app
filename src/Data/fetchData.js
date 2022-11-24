export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1a45904997msh5953a5178ce4a89p1b1ef1jsn3cdfb66640c7',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data
}