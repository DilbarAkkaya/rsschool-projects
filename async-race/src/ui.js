import { getCar, getCars, createCar, deleteCar, updateCar, getWinners, deleteWinner} from './api';
import store from './store';
import { generateRandomCars } from './utils';
let selectedCar = null;
const renderCarImage = (color) => `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="981.000000pt" height="550.000000pt" viewBox="0 0 981.000000 550.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)"
style="fill:${color}" stroke="none">
<path d="M3040 5491 c-432 -7 -412 -4 -543 -73 -81 -43 -263 -223 -346 -343
-34 -49 -143 -227 -242 -396 -253 -428 -360 -571 -489 -657 -117 -79 -139 -83
-465 -93 -390 -11 -511 -37 -658 -142 -161 -115 -249 -265 -278 -472 -15 -110
-23 -1398 -11 -1702 10 -238 10 -243 39 -305 54 -115 144 -200 278 -265 95
-45 149 -53 429 -61 l239 -7 38 -118 c83 -256 233 -467 442 -623 458 -341
1106 -287 1517 125 156 157 248 321 315 563 l16 58 1584 0 c872 0 1585 -2
1585 -4 0 -21 69 -228 96 -285 171 -371 556 -641 969 -680 466 -45 931 224
1155 669 18 35 49 116 70 180 l37 115 229 8 c126 4 262 14 303 22 97 19 194
77 288 171 97 99 140 186 153 309 12 116 13 1212 0 1328 -12 113 -40 166 -150
277 -106 107 -228 189 -435 290 -365 179 -810 329 -1414 476 -146 36 -290 76
-320 90 -142 64 -457 380 -861 864 -264 317 -435 473 -615 567 -134 69 -216
93 -345 103 -144 11 -2077 18 -2610 11z m1080 -976 l0 -585 -1111 0 c-837 0
-1108 3 -1103 12 4 6 32 45 62 87 30 42 120 186 199 321 199 335 272 452 337
539 60 82 138 166 170 184 29 17 248 23 894 25 l552 2 0 -585z m1653 529 c51
-26 112 -60 137 -77 85 -58 253 -232 450 -467 183 -218 261 -307 436 -497 l67
-73 -1172 0 -1171 0 0 587 0 586 580 -6 581 -7 92 -46z m1930 -1570 c716 -179
1168 -342 1499 -540 130 -78 180 -124 198 -185 10 -33 14 -176 17 -578 5 -590
1 -643 -48 -710 -51 -72 -64 -75 -323 -75 l-228 -1 -37 115 c-111 345 -345
613 -652 748 -202 88 -381 120 -575 101 -170 -16 -272 -43 -407 -110 -124 -62
-194 -114 -317 -238 -169 -170 -259 -319 -316 -523 l-27 -98 -1583 0 -1583 0
-11 43 c-60 233 -152 398 -315 566 -243 251 -508 365 -845 364 -313 -1 -615
-132 -837 -366 -136 -143 -220 -287 -283 -485 l-38 -117 -138 -3 c-177 -4
-351 11 -392 32 -70 36 -67 -1 -70 816 -3 804 4 1041 36 1112 25 58 74 113
131 146 l46 27 930 6 c512 3 2059 6 3438 7 l2508 2 222 -56z m-5351 -1535 c62
-13 191 -75 257 -123 178 -131 298 -338 320 -551 36 -355 -151 -661 -499 -816
-53 -23 -63 -24 -275 -24 l-220 0 -79 38 c-195 93 -324 225 -425 436 l-36 76
-3 167 c-4 192 4 244 54 349 102 213 283 374 499 445 50 16 333 18 407 3z
m5483 0 c148 -27 342 -163 451 -314 56 -79 110 -193 125 -263 6 -33 10 -121 7
-221 l-3 -166 -36 -76 c-100 -210 -231 -344 -425 -436 l-79 -38 -197 -3 c-223
-4 -258 2 -374 64 -419 222 -557 731 -304 1117 69 106 202 227 303 277 45 22
111 47 147 54 79 17 304 20 385 5z"/>
</g>
</svg>
`;

const renderCar = ({id, name, color, isEngineStarted}) => `
<div class = "general-buttons">
<button class="button select-button" id="select-car-${id}">Select</button>
<button class="button remove-button" id="remove-car-${id}">Remove</button>
<span class="car-name">${name}</span>
</div>
<div class="road">
<div class="launch-pad">
  <div class="control-panel">
    <button class="icon start-engine-button" id="start-engine-car-${id}" ${isEngineStarted ? 'disabled' : ''}>A</button>
    <button class="icon stop-engine-button" id="stop-engine-car-${id}" ${!isEngineStarted ? 'disabled' : ''}>B</button>
  </div>
  <div class="car" id="car-${id}">
    ${renderCarImage(color)}
  </div>
</div>
<div class="flag" id="flag-${id}">🚩</div>
</div>`;

const renderGarage = () => `
<h1>Garage (${store.carsCount})</h1>
<h2>Page #${store.carsPage}</h2>
<ul class="garage">
  ${store.cars.map((car) => `
  <li>${renderCar(car)}</li>`).join('')}
</ul>`;

const renderWinners = () => `
<h1>Winners (${store.winnersCount})</h1>
<h2>Page #${store.winnersPage}</h2>
<table class="table" cellspacing="0" border="0" cellpadding="0"></table>
<thead>
  <th>Number</th>
  <th>Car</th>
  <th>Name</th>
  <th class="table-button table-wins ${store.sortBy === 'wins' ? store.sortOrder : ''}" id="sort-by-wins">Wins</th>
  <th class="table-button table-time ${store.sortBy === 'time' ? store.sortOrder : ''}" id="sort-by-time">Best time (seconds)</th>
</thead>
<tbody>
${store.winners.map((winner, index) => `
<tr>
    <td>${index + 1}</td>
    <td>${renderCarImage(winner.car.color)}</td>
    <td>${winner.car.name}</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
  </tr>
`).join('')}

</tbody>
</table>`;

export const render = async() => {
  const html = `
  <div class="menu">
  <button class="button garage-menu-button primary" id="garage-menu">To Garage</button>
  <button class="button winners-menu-button primary" id="winners-menu">To winners</button>
</div>
<div id="garage-view">
  <div>
    <form class="form" id="create">
      <input type="text" class="input" id="create-name" name="name">
      <input type="color" class="color" name="color" id="create-color" value="#ffffff">
      <button class="button" id="submit" type="submit">Create</button>
    </form>
    <form class="form" id="update">
      <input type="text" class="input" id="update-name" name="name" disabled>
      <input type="color" class="color" name="color" id="update-color" value="#ffffff">
      <button class="button" id="update-submit" type="submit">Update</button>
    </form>
</div>
<div class="race-controls">
  <button class="button race-button primary" id="race">Race</button>
  <button class="button reset-button primary" id="reset">Reset</button>
  <button class="button generator-button" id="generator">Generate cars</button>
</div>
<div id="garage">
  ${renderGarage()}
</div>
<div>
  <p class="message" id="message"></p>
</div>
</div>
<div id="winners-view" style="display: none">
  ${renderWinners()}
</div>
<div class="pagination">
  <button class="button primary prev-button" disabled id="prev">Prev</button>
  <button class="button primary next-button" disabled id="prev">Next</button>
</div>
  `;
  const root = document.createElement('div');
  root.innerHTML = html;
  document.body.appendChild(root);
};

export const updateStateGarage = async() => {
  const { items } = await getCars();
  const carsCount = items.length;
  store.carsCount = carsCount;

  if (store.carsPage * 7 < store.carsCount) {
    document.getElementById('next').disabled = false;
  } else {
    document.getElementById('next').disabled = true;
  }
  if (store.carsPage > 1) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }
};

/* export const updateStateWinners = async() => {
  const { items, count} = await getWinners({ page: store.winnersPage, sort: store.sortBy, order: store.sortOrder});
  store.winners = items;
  store.winnersCount = count;

  if (store.winnersPage * 10 < store.winnersCount) {
    document.getElementById('next').disabled = false;
  } else {
    document.getElementById('next').disabled = true;
  }
  if (store.winnersPage > 1) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }
}; */

export const listen = () => {
  document.body.addEventListener('click', async (event) => {
    if (event.target.classList.contains('garage-menu-button')) {
      document.getElementById('garage-view').style.display = 'block';
      document.getElementById('winners-view').style.display = 'none';
    }
    if (event.target.classList.contains('winners-menu-button')) {
      document.getElementById('winners-view').style.display = 'block';
      document.getElementById('garage-view').style.display = 'none';
      await updateStateWinners();
      document.getElementById('winners-view').innerHTML = renderWinners();
    }
  })
}

