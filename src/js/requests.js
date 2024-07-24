const alfredHost = '[2a00:1f:601:5f01:157a:ae37:703c:2dd6]:3333'
// const alfredHost = "hihi"
let request = (input)=> {
    return new Promise((res, rej)=> {

        fetch('https://' + alfredHost + '/api/chat', {
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
          console.log(data);
          res(data)
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
          rej(error)
        });
    })

}

export {request}