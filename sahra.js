document.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
		});
  
  const faqItems = document.querySelectorAll('.faq');
  
  faqItems.forEach(item => {
	item.addEventListener('click', () => {
	  console.log('FAQ item clicked');
	  item.classList.toggle('active');
	});
  });
  
  // end FAQ fun.
  
  const allStar = document.querySelectorAll('.rating .star');
  const ratingValue = document.querySelector('.rating input');
  const ratingText = document.querySelector('.rating-text');
  
  const ratings = {
	1: 'Very Sad',
	2: 'Sad',
	3: 'Neutral',
	4: 'Happy',
	5: 'Very Happy'
  };
  
  allStar.forEach((item, idx) => {
	item.addEventListener('click', function() {
	  let click = 0;
	  ratingValue.value = idx + 1;
  
	  allStar.forEach(i => {
		i.classList.replace('bxs-star', 'bx-star');
		i.classList.remove('active');
	  });
	  for (let i = 0; i < allStar.length; i++) {
		if (i <= idx) {
		  allStar[i].classList.replace('bx-star', 'bxs-star');
		  allStar[i].classList.add('active');
		} else {
		  allStar[i].style.setProperty('--i', click);
		  click++;
		}
	  }
  
	  // Display corresponding text
	  ratingText.textContent = ratings[ratingValue.value];
	});
  });
  
  // end feedback fun.
  
  var icon =document.getElementById("icon");
  icon.onclick=function(){
	document.body.classList.toggle("dark-theme");
  }
  // dark theme
  function playAlertSound() {
	var alertSound = document.getElementById('alert-sound');
	alertSound.play();
  }
  
  function purchaseCourse() {
   
	alert('Please proceed to the payment page to complete your purchase.');
	playAlertSound();
  }
  // alert 
  
  document.addEventListener('DOMContentLoaded', function() {
	  document.getElementById('subscribeButton').addEventListener('click', function() {
		  var email = document.getElementById('email').value;
		  storeEmail(email);
		  alert('Email stored: ' + email);
	  });
  
	  function storeEmail(email) {
		  var emails = localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
		  emails.push(email);
		  localStorage.setItem('emails', JSON.stringify(emails));
	  }
  });
  // local storage