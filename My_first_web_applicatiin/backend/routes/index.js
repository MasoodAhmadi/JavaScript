/*import {Router} from 'express';
import chance from '../controllers/chance.js';
import cityy from '../controllers/cityy.js';
import StudentController from '../controllers/studentController.js';
const routes = Router();
console.log('routes', routes)
routes.get('/', chance.welcome);
routes.get('/random/city', cityy.city);
routes.get('/students', StudentController.getAllStudents);
routes.get('/students/random', StudentController.random);
routes.get('/students/:id', StudentController.getSingleStudent);
export default routes;*/

import {
    Router
} from 'express';
import chance from '../controllers/chance.js';
import cityy from '../controllers/cityy.js';
import studentController from '../controllers/studentController.js';
import students from '../dummy/students.js';
const routes = Router();
console.log('routes', routes)
routes.get('/', chance.welcome);
routes.get('/', cityy.city);
routes.get('/random/city', cityy.city);
routes.get('/students', studentController.getAllStudents);
routes.get('/students/random', studentController.random);
routes.get('/students/:id', studentController.getSingleStudent);
export default routes;