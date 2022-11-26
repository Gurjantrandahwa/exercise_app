export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8c8b3c4cbfmshd420c4cbcf76554p18735fjsn75827ec260bf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8c8b3c4cbfmshd420c4cbcf76554p18735fjsn75827ec260bf',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data
}