export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f22d251aacmsh880fe15bd158957p101d0cjsn6c38b0ffa41b',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f22d251aacmsh880fe15bd158957p101d0cjsn6c38b0ffa41b',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data
}