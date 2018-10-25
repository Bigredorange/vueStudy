import route from './index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({showSpinner: true});
route.beforeEach((from, to, next) => {
    NProgress.start();
    if(to.path== '/home') {
        next();
        NProgress.done();
    }
    else {
        next();
        NProgress.done();
    }
})