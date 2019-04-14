//Buttons to toggle Cards
const toggleCardEarlyYears = document.getElementById('toggleCardEarlyYears');
const toggleEducation = document.getElementById('toggleCardEarlyYears');
const toggleProfessionalExperience = document.getElementById('toggleCardEarlyYears');

//Cards
const cardEarlyYears = document.getElementById('earlyYears');
const cardEducation = document.getElementById('education');
const cardProfessionalExperience = document.getElementById('professionalExperience');

//Reaction, if User uses Button for "Early Years"
toggleCardEarlyYears.addEventListener('click', () => {
  if (cardEarlyYears .style.display == 'none') {
    toggleCardEarlyYears.textContent = 'Hide Early Years';
    cardEarlyYears .style.display = 'block';
  } else {
    toggleCardEarlyYears.textContent = 'Show Early Years';                        
    cardEarlyYears .style.display = 'none';
  }                         
});

//Reaction, if User uses Button for "Education"
toggleCardEducation .addEventListener('click', () => {
  if (cardEducation .style.display == 'none') {
    toggleCardEducation .textContent = 'Hide Education';
    cardEducation .style.display = 'block';
  } else {
    toggleCardEducation .textContent = 'Show Education';                        
    cardEducation .style.display = 'none';
  }                         
});

//Reaction, if User uses Button for "Professional Experience"
toggleCardProfessionalExperience.addEventListener('click', () => {
  if (cardProfessionalExperience .style.display == 'none') {
    toggleCardProfessionalExperience.textContent = 'Hide Professional Experience';
    cardProfessionalExperience .style.display = 'block';
  } else {
    toggleCardProfessionalExperience.textContent = 'Show Professional Experience';                        
    cardProfessionalExperience .style.display = 'none';
  }                         
});