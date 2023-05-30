function disableHorizontalScroll(event) {
  // Sprawdź kod klawisza
  var keyCode = event.keyCode || event.which;
  
  // 37 to kod klawisza strzałki w lewo, a 39 to kod klawisza strzałki w prawo
  if (keyCode === 37 || keyCode === 39) {
    // Zatrzymaj domyślne zachowanie przewijania strony
    event.preventDefault();
  }
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollBtn = document.querySelector(".scroll-to-top");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
    
    scrollBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

document.querySelector('.subscribe-block__form').addEventListener('submit', function(event) {
	  event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza
  
	  var emailInput = document.querySelector('.subscribe-block__input');
	  var successMessage = document.querySelector('.subscribe-block__success');
	  var errorMessage = document.querySelector('.subscribe-block__error');
  
	  // Sprawdzanie, czy adres e-mail został wprowadzony
	  if (emailInput.value !== '') {
		// Tutaj można dodać dodatkową logikę, np. wysłanie formularza do serwera
		// Po pomyślnym wysłaniu formularza
		successMessage.classList.remove('hidden');
		errorMessage.classList.add('hidden');
		emailInput.value = ''; // Wyczyszczenie pola e-mail
	  } else {
		errorMessage.classList.remove('hidden');
		successMessage.classList.add('hidden');
	  }
	});

  