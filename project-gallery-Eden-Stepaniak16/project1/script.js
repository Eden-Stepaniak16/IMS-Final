document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions");

  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      const answerId = this.id.replace("question", "answer");
      const answer = document.querySelector(`#${answerId}`);

      answer.classList.toggle("closed-answer");
      this.classList.toggle("open");
    });
  });
});

const projectDescription = `
My topic is about Starbucks. Starbucks is my favorite coffee shop where I go and get my favorite beverage, the iced caramel macchiato. 
I also recently just got a job there. My audience is people who love Starbucks and coffee. 
My audience would learn a lot about what Starbucks is and what they bring to people as a coffee cafe.
Some changes that I made from sketch to final product is that I made the triangle icons to be displayed on the right side rather than the left side. 
I did this to make it easier for my users to click on the questions. My FAQ questions also drop down to a dark green color instead of gray.
I had some challenges with the triangles on the questions. I had to research and google them. 
I found a creative way to create them using CSS which I thought was pretty cool. 
I also had a hard time with getting the JS to open the answer, I found some stack overflow posts about it, and read about it on w3Schools and that helped me piece everything together.
`;

console.log("Project Description: ", projectDescription);

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("FAQ clicked: ", this.textContent);
  });
});
