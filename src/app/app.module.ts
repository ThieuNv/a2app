import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { CategoryComponent } from './_pages/category/category.component';
import { PostComponent } from './_pages/post/post.component';
import { SigninComponent } from './_pages/auth/signin/signin.component';
import { SignupComponent } from './_pages/auth/signup/signup.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { AboutComponent } from './_pages/about/about.component';
import { HeaderComponent } from './_pages/common/header/header.component';
import { FooterComponent } from './_pages/common/footer/footer.component';
import { NavigationComponent } from './_pages/common/navigation/navigation.component';
import {routing} from "./app.routing";

import {ContactService} from "./_pages/contact/contact.service";
import { AutoGrowDirective } from './_directives/auto-grow.directive';
import { StarComponent } from './_pages/common/star/star.component';
import { VoteComponent } from './_pages/common/vote/vote.component';
import { TwitterComponent } from './_pages/twitter/twitter.component';
import { TwitterBoxComponent } from './_pages/twitter/twitter-box/twitter-box.component';
import {TwitterService} from "./_pages/twitter/twitter.service";
import { SummaryPipe } from './_pipes/summary.pipe';
import { CapitalizeFirstPipe } from './_pipes/capitalize-first.pipe';
import { CapitalizeAllPipe } from './_pipes/capitalize-all.pipe';
import { TwitterChapterComponent } from './_pages/twitter/twitter-chapter/twitter-chapter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AutoGrowDirective,
    StarComponent,
    VoteComponent,
    TwitterComponent,
    TwitterBoxComponent,
    SummaryPipe,
    CapitalizeFirstPipe,
    CapitalizeAllPipe,
    TwitterChapterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ContactService, TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
