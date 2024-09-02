// const userMediaFollowers = document.getElementById('user-media-followers');
// const mediaCard = ({username,subcount,mediatype})=>{
//     const cardContainer = document.createElement('div');
//     const headingContainer = document.createElement('div');
//     const logoIcon = document.createElement('img');
//     const userName = document.createElement('span');
//     const followersContainer = document.createElement('div');
//     const followers =document.createElement('h1');
//     const followersText = document.createElement('span');
//     const variationContainer = document.createElement('div')
//     const variationType = document.createElement('img');
//     const variationToday = document.createElement('span');
// }
const html = document.getElementsByTagName('html')
const toggleHandler = document.getElementById('toggle-handler');
const toggle = document.getElementById('toggle');
const toggleCircle = document.getElementById('toggle-circle');

toggleHandler.addEventListener('click', () => {
    toggle.checked = true;
    html[0].classList.toggle('dark')
    console.log(html[0])
})