document.addEventListener('DOMContentLoaded', () => {
    const userId = 5;
  
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(user => {
        console.log('User data:', user);
  
    
        document.querySelector('.profile-name').textContent = user.name;
        document.querySelector('.profile-bio').textContent = user.company.catchPhrase;
      })
      .catch(error => console.error('Error fetching user details:', error));
  });

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => {
        const tweetList = document.getElementById('tweet-list');
        posts.forEach(post => {
          const tweet = document.createElement('li')
          tweet.classList.add('tweet')

          const username = document.createElement('div')
          username.classList.add('username')
          username.textContent = user.username
          tweet.appendChild(username)

          const tweetText = document.createElement('div')
          tweetText.classList.add('tweet-text')
          tweetText.textContent = post.body
          tweet.appendChild(tweetText)

          tweetList.appendChild(tweet)
        })
      })

   .catch(error => console.error('Error fetching user data:', error))