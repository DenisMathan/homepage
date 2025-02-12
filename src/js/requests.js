const alfredHost = 'https://pi.denis-mathan.com'
// const alfredHost = 'http://localhost:3333'
let request = (input)=> {
    return new Promise((res, rej)=> {
        fetch(alfredHost + '/api/chat', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({"question": input}),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          res(data)
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
          rej(error)
        });
    })
}

const getKnowledge = () => {
  return new Promise((res, rej) => {
    fetch(alfredHost + '/api/getKnowledge', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }).then(response=>{
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data=>{
      res(data)
    }).catch(error => {
      console.error('There was a problem with the server:', error);
      res(['Sorry this bot is currently not reachable! :('])
    });
  })
}

export {request, getKnowledge}