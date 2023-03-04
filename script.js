function getJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const jokeElement = document.querySelector('.joke');
        if (data.type === 'single') {
          jokeElement.textContent = data.joke;
        } else {
          jokeElement.textContent = `${data.setup}\n${data.delivery}`;
        }
      })
      .catch(error => console.error(error));
  }
  