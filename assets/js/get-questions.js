fetch('https://stack-o-lite.herokuapp.com/api/v1/questions')
  .then(response => response.json())
  .then((data) => {
      if (data.status === 'success') {
          console.log(data.data.questions);
          // render the data of each question from the data.data.questions array on the UI
      } else {
          console.log(data.message);
          // Display data.message as error message on the screen
      }
  });