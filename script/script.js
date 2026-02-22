const text = "Hello everyone, I'm Nada Alafify — a Computer and Communication Engineering student at Mansoura University, Egypt. I'm also a Network Engineer and a passionate Web Developer.";
    let index = 0;
    let isDeleting = false;
    const speed = 40;
    const pause = 1500; // وقت التوقف بعد كتابة النص
  
    function typeWriter() {
      const element = document.getElementById("typed-text");
  
      if (!isDeleting) {
        element.innerHTML = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
          isDeleting = true;
          setTimeout(typeWriter, pause);
          return;
        }
      } else {
        element.innerHTML = text.substring(0, index - 1);
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
  
      setTimeout(typeWriter, isDeleting ? 20 : speed);
    }
  
    window.onload = typeWriter;  

/// first section end

const skills = document.querySelectorAll('.skill');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;
const skillsPerPage = 3;
const totalSkills = skills.length;

const radius = 55;
const circumference = 2 * Math.PI * radius;

skills.forEach(skill => {
    const percentage = skill.getAttribute('data-percentage');
    const progress = skill.querySelector('.circle-progress');
    const dashArray = circumference;
    const dashOffset = circumference * (1 - percentage / 100);
    progress.setAttribute('stroke-dasharray', `${dashArray} ${dashArray}`);
    progress.setAttribute('stroke-dashoffset', dashOffset);
});

function updateSkills() {
    skills.forEach((skill, index) => {
        const skillIndex = parseInt(skill.getAttribute('data-index')) - 1;
        if (skillIndex >= currentIndex && skillIndex < currentIndex + skillsPerPage) {
            skill.classList.add('active');
            if (currentIndex === 0 && window.loaded) {
                skill.classList.add('load');
            }
        } else {
            skill.classList.remove('active', 'load');
        }
    });

    leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
    rightArrow.style.display = currentIndex + skillsPerPage > totalSkills ? 'none' : 'block';
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSkills();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex + skillsPerPage <= totalSkills) {
        currentIndex += 1;
        updateSkills();
    }
});

window.addEventListener('load', () => {
    window.loaded = true;
    currentIndex = 0;
    updateSkills();
});



//second section end

const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    pages.forEach(page => {
      page.classList.remove('fade-in');
      setTimeout(() => {
        page.classList.remove('show');
      }, 300); // يدي فرصة للأنيميشن يخلص
    });

    setTimeout(() => {
      const targetPage = document.getElementById(targetId);
      targetPage.classList.add('show');
      setTimeout(() => {
        targetPage.classList.add('fade-in');
      }, 10); // مهم جدًا عشان يشتغل الترانزيشن
    }, 300);
  });
});

//third section end
//no forth-section
//no fifth-section


