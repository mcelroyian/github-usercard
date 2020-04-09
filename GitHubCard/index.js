/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/mcelroyian')
  .then( res => {
    const container = document.querySelector('.cards')
    container.appendChild(getUser(res.data))
    debugger
  })
  .catch( err => {
    debugger
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/




/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function getUser(userData) {
  //create html elements
  const make = (el) => document.createElement(el)
  const card = make('div')
  const img = make('img')
  const cardInfo = make('div')
  const title = make('h3')
  const username = make('p')
  const location = make('p')
  const profile = make('p')
  const profLink = make('a')
  const followers = make('p')
  const following = make('p')
  const bio = make('p')
  
  //attach elements
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(title)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
 
  //add attributes and classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  title.classList.add('name')
  username.classList.add('username')
  profile.textContent = `Profile: ${profLink}`

  //Add arguement data
  img.src = userData.avatar_url
  title.textContent = userData.name
  username.textContent = userData.login
  location.textContent = `Location ${userData.location}`
  profLink.href = userData.html_url
  profLink.textContent = userData.html_url
  
  profile.appendChild(profLink)
  followers.textContent = `Followers: ${userData.followers}`
  following.textContent = `Following: ${userData.following}`
  if (userData.bio === null) {
    userData.bio = "Sorry, this user has not written a bio yet"
  }
  bio.textContent = `Bio: ${userData.bio}`

  return card
} 

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
