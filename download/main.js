const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    
    faqItem.classList.toggle("active");

    if (faqItem.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      button.innerHTML = button.innerHTML.replace("+", "−"); 
    } else {
      answer.style.maxHeight = "0";
      button.innerHTML = button.innerHTML.replace("−", "+");
    }

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = "0";
        item.querySelector(".faq-question").innerHTML = item.querySelector(".faq-question").innerHTML.replace("−", "+");
      }
    });
  });
});

