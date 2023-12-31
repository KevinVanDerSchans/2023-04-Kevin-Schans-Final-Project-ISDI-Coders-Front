import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../contact/contact';

const Home = lazy(() => import('../home/home'));
const MyCourses = lazy(() => import('../my.courses/my.courses'));
const Gallery = lazy(() => import('../gallery/gallery'));

const FormPage = lazy(() => import('../form/form.page'));
const ModifyForm = lazy(() => import('../edit.form/edit.form'))
const DanceCourseDetailsPage = lazy(() => import("../my.courses/list/danceCourse.details.page/danceCourse.details.page"));
const LogInAndSignUp = lazy(() => import('../logInAndSignUp/log.in.and.sign.up'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myCourses' element={<MyCourses></MyCourses>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={<Gallery></Gallery>}></Route>

        <Route path='/logInAndSignUp' element={<LogInAndSignUp></LogInAndSignUp>}></Route>
        <Route path='/details/:id' element={<DanceCourseDetailsPage></DanceCourseDetailsPage>}></Route>
        <Route path='/form' element={<FormPage></FormPage>}></Route>
        <Route path='/edit/:id' element={<ModifyForm></ModifyForm>}></Route>
      </Routes>
    </Suspense>
  );
}
