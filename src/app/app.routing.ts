import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./_pages/home/home.component";
import {AboutComponent} from "./_pages/about/about.component";
import {ContactComponent} from "./_pages/contact/contact.component";
import {SignupComponent} from "./_pages/auth/signup/signup.component";
import {SigninComponent} from "./_pages/auth/signin/signin.component";
import {CategoryComponent} from "./_pages/category/category.component";
import {PostComponent} from "./_pages/post/post.component";
import {TwitterComponent} from "./_pages/twitter/twitter.component";

const APP_ROUTES: Routes = [
  {
    path: "signin", component: SigninComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "category", component: CategoryComponent
  },
  {
    path: "post", component: PostComponent
  },
  {
    path: "twitter", component: TwitterComponent
  },
  {
    path: "**", redirectTo: 'home'
  },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
