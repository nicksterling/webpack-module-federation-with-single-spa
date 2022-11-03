// You can write your own logic here to determine the actual url
window.app1Url = 'http://localhost:3002';
window.utilsUrl = 'http://localhost:3003';
window.headerUrl = 'http://localhost:3004';
window.navUrl = 'http://localhost:3005';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
