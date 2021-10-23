// fetch('https://api.imgflip.com/get_memes')
// .then(data=>data.json)
// .then(memedata=>{
//   const memeImage=memedata.
//
// }
const getData = async() => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  const memeImg = document.getElementById('memeImg');
  console.log(memeImg);
  memeImg.src = data.data.memes[Math.floor(Math.random() * 100)].url;
}
getData();
