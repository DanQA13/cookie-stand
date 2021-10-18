

let seattleList = document.getElementById('seattlecookies');
let tokyoList = document.getElementById('tokyocookies');
let dubaiList = document.getElementById('dubaicookies');
let parisList = document.getElementById('pariscookies');
let limaList = document.getElementById('limacookies');
let hours = [
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
];

let seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;

  },

  renderList: function() {
    
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      seattleList.appendChild(li);

    }
  

  }



};

let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;

  },

  renderList: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      tokyoList.appendChild(li);

    }
 

  }



};

let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;

  },

  renderList: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      dubaiList.appendChild(li);

    }}



};

let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;

  },

  renderList: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      parisList.appendChild(li);

    }
 

  }



};

let limaLocation = {
  name: 'Paris',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;

  },

  renderList: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      limaList.appendChild(li);

    }
  }



};



seattleLocation.renderList();
tokyoLocation.renderList();
dubaiLocation.renderList();
parisLocation.renderList();
limaLocation.renderList(); 