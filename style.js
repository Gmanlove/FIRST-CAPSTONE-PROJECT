const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-items');

function mobileMenu() {
  if (navMenu.classList.contains('one')) {
    navMenu.classList.remove('one');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('one');
    hamburger.classList.toggle('active');
  }
}
hamburger.addEventListener('click', mobileMenu);
document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.add('one');
  hamburger.toggle('line active');
}));

const firstSpeaker = [
  {
    name: 'Yochai Benkler',
    Image: 'images/image-1.png',
    title: 'Berkman Professor of Enterpreneurial Legal Studies',
    desc: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Network in 2016',
  },
  {
    name: 'SohYeong Noh',
    Image: 'images/image-3.png',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    desc: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration',
  },
  {
    name: 'Lila Tretikov',
    Image: 'images/image-5.png',
    title: 'Executive Director of the Wikimedia Foundation',
    desc: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the organization that operates Wikipedia.',
  },
  {
    name: 'Kilman Chon',
    Image: 'images/image-2.png',
    title: '',
    desc: 'Kilman Chon helped bring the Internet to Asia and he is an outspoken advocate for the open web and digital commons in 2012, he was inducted into the inaugural class of the Internet',
  },
  {
    name: 'Julia Leda',
    Image: 'images/image-4.png',
    title: 'President of Young Pirates of Europe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda report outlining potentials',
  },
  {
    name: 'Ryan Dyrud',
    Image: 'images/image-6.png',
    title: 'Berkman Professor of Enterpreneurial Legal Studies',
    desc: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Network in 2016',
  },
];

const speakers = document.querySelector('#speak');
for (let i = 0; i < firstSpeaker.length; i += 1) {
  speakers.innerHTML += `
            <div class="maka-d" id="demo">
              <div class="maka-box">
                <div class="onye-okwu">
                    <div class="image">
                      <img src="${firstSpeaker[i].Image}" alt="speaker-image">
                    </div>
                    <div class="okwu">
                    <h2>${firstSpeaker[i].name}</h2>
                    <p><em>${firstSpeaker[i].title}</em></p>
                    <div class="line2"></div>
                    <p>${firstSpeaker[i].desc}</p>
                    </div>
                </div>
              </div>
            </div>
    `;
}