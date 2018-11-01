import route from './index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({showSpinner: true});
route.beforeEach((from, to, next) => {
    NProgress.start();
    if(to.path== '/main/home') {
        console.log(to.path);
        next({...to,replace:true});
        NProgress.done();
    }
    else {
        console.log(to.path);
        next();
        // next({path:to.path,replace:true});
        NProgress.done();
    }
})