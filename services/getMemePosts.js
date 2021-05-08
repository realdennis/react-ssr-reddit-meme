import 'isomorphic-fetch'

export default async()=>{
    const response = await fetch('https://www.reddit.com/r/meme/top/.json?count=20')
    const data = await response.json();
    return data;
}