document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById("navbar-toggle");
  var navList = document.getElementById("nav-list");

  navbarToggle.addEventListener("click", function () {
      navList.classList.toggle("active");
  });

  var navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = this.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop - 60, // Adjust based on navbar height
              behavior: 'smooth'
          });

          // Close the navigation menu for mobile view
          navList.classList.remove("active");
      });
  });
});

  



    function openTab(tabName) {
      const tabContents = document.querySelectorAll('.tab-content');
      const tabButtons = document.querySelectorAll('.tab-btn');
  
      tabContents.forEach(content => content.classList.remove('active'));
      tabButtons.forEach(button => button.classList.remove('active'));
  
      document.getElementById(tabName).classList.add('active');
      event.target.classList.add('active');
  }
  