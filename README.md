# A2app (angular-cli version 1.0.0-rc.2)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

    ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.





=============================== Hướng dẫn up web app online ==========================


1. Đối với firebase  (http://codingthesmartway.com/hosting-angular-2-applications-on-firebase/)

- Ta chỉ có thể up các app dùng static file như: HTML, Angular, React ...
- Không thể up với app có Nodejs hay MongoDb 

  npm install angular-cli -g              ==> Cài đặt Angular CLI để tạo Project Angular2 dễ dàng. 
  
  ng new fb-host-test                     ==> Tạo project angular 2 mới có tên là: fb-host-test 
  
  cd fb-host-test                         ==> Vào thư mục root của app .
  
  ng serve                                ==> Chạy app 
  
  http://localhost:4200                   ==> Vào thử localhost xem nó đã chạy được chưa.
  
  ng build --prod                         ==> Build app chế độ này sẽ tối ưu code (Do Angular CLI quản lý) 
  
  https://console.firebase.google.com/    ==> Tạo project firebase mới trong này.
  
  npm install -g firebase-tools           ==> Bộ công cụ command line để tương tác với firebase qua command line 
  
  firebase --version                      ==> Kiểm tra xem cài đặt được chưa?
  
  firebase login                          ==> Lần đầu tiên thì phải đăng nhập, các lần sau thì không. (Tài khoản google) 
  
  firebase init                           
      ==> Khởi tạo dự án firebase, Nó sẽ hỏi ta chọn 1 trong 3 chức năng ( )
      ==> Ta chọn cái dùng để: Host (Hosting: Configure and deploy Firebase Hosting site).
      ==> Hỏi tiếp folder nào dùng để host? Ta gõ folder: dist (Vì Angular-CLI tự build ra folder dist) 
      ==> Hỏi tiếp nếu là SPA và có nên rewrite lại URL cho file index.html ==> chọn : yes 
      ==> Hỏi tiếp là Firebase có nên overwrite lại lại: index.html     ==> Chọn : no 
    
  firebase deploy             ==> Triển khai web, sau khi hoàn thành nó sẽ gửi lại ta cái URL (đây là web online của ta) 
  
  
- Lần sau khi sửa code xong, ta muốn cập nhật lại web thì làm như sau: 
    ng build --prod 
    firebase login    (nếu login rồi thì thôi không cần dùng nó. Login ở đây là login trên console) 
    firebase deploy 
    

2. Thay đổi tên miền cho app trên firebase. 
- Đầu tiên tìm tên miền free với: 
    https://my.freenom.com
    http://my.dot.tk/				==> nguyenhung22011995@gmail.com (ngUyen.hUng.2201)
- Tìm tên miền và đăng ký lấy 1 cái free. 
- Vào: https://console.firebase.google.com/
  + chọn cái app mà ta đang muốn thay đổi tên miền cho nó.
  + Chọn mục hosting (bên sidebar) 
  + Click: Connect Domain 
  + Gõ tên miền mà bạn vừa đăng ký thành công ở cái web: my.dot.tk kia vào. 
  + Nó sẽ trả về đoạn code gồm: Type | Host | Value 
  
  + Giờ vào lại trang: my.dot.tk, đăng nhập và vào phần các domain mà mình đã đăng ký.
  + Vào tiếp cái domain mà bạn vừa gõ ở trên (bên chỗ Connect Domain)  (Click vào chỗ : Manage Domain ấy )
  + Click vào :  Manage Freenom DNS
  + Trong phần: Add Record, ta add thêm 1 cái domain vào như sau:
  + Name để : tên miền bạn đăng ký hoặc là: @ 
  + Type thì để là: TXT (Vì cái Type mà Google vừa trả về bên trên dạng : TXT)
  + TTL (Time to live) : để là mặc định hoặc là 86400 (1 ngày) 
  + Target: Cope cái đoạn Value (Google trả về kia vào) 
  + Ấn Save Changes để add thêm 1 cái domain. 
  
  + Nếu bên trên add xong. Ta quay sang https://console.firebase.google.com/.
  + Ấn vào Verify (Để google kiểm tra xem ta đã add cái domain kia chưa)
  ==> Mục đích làm việc chỉ để kiểm tra rằng ta là chủ sở hữu cái domain name đó. 
  
  + Nếu thành công thì nó sẽ hiện cảnh báo chờ khoảng 20 phút hoặc 1h để chuyển đổi tên miền thành công.
  ==> Giờ thì bạn có thể làm việc khác. Tầm 1h sau vào domain name mà bạn đăng ký đẻ xem web lên online. 

===================>  Đã làm và thành công với website: thieunv.tk ===============================




3. Đối với Heroku 
- Ta có thể up code của Nodejs, Express, MongoDb, Angular Js.... 

a. Chỉ up các app có dùng Nodejs, Express, Angularjs (App chưa có Database) 
- https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku

- Cài đặt heroku command line trên ubuntu 
  
  heroku                              // Kiểm tra xem heroku đã được cài đặt chưa 
  heroku --version                     // Server thằng này mới chạy server online được (App nodejs) 
  heroku login                        // Đăng nhập command line 
  heroku apps --all                   // Liệt kê tất cả các app đã tạo trên web heroku 
  
  npm install -g express            
  npm install -g express-generator    // Cài đặt express để tạo web app express đơn giản.
  express nodewebapp                  // Tạo khung xương cho web app.
  npm install                         // Cài đặt các dependency 
  npm start                           // Chạy thử app 
  localhost:3000                      // Vào đây xem kết quả 
  --> Ta coi như web đã xong ở đây. Giờ up lên mạng nào.
  
  - Ta thêm 1 file: Procfile.js (Nội dung là: web: node server.js) vào folder root của app. Tại sao phải thêm file này?
  - Để khi mà mới vào web của ta, nó sẽ tự động đọc file này trước và chạy lệnh: node server.js (Nó sẽ không chạy: npm start) 
  - Do đó cái npm start thay thế cho cái gì trong script package.js thì ta phải thay thế nó vào đây. Vd: 
      Trong "scripts": "start": "ng serve && node app.js"
      Thì file Procfile.js là: web : ng serve && node app.js
      
  heroku create                                                                 // Tạo tên miền ngẫu nhiên, kho lưu cho app. 
  heroku apps:rename heroku-thieu(tên mới) --app floating-plains-23534(tên cũ)  // Đang cố gắng đổi tên miền.
  
  git add . 
  git commit -m "Up web"            // Add những thay đổi.
  
  git remote -v                     // Kiểm tra xem có những remote nào 
  
  git push heroku HEAD:master       // Push code lên heruko 
  
  heroku ps:scale web=1             // Kiểm tra xem web có đang chạy không, test rồi đấy 
  
  heroku open                       // Tự động mở trình duyệt và vào cái web của mình. 
  (Hoặc ta có thể tự vào : heroku-thieu.herokuapp.com để xem web chạy) 
  
- Mỗi khi update code, ta phải làm như sau: 
  git add . 
  git commit -m "something"
  git push heroku HEAD:master  (Thường là đến bước này là xong, sau đó ta tự vào web mà check xem được chưa) 
  heroku ps:scale web=1   
  heroku open 
  
======> Đã làm và thành công với web:  https://heroku-thieu.herokuapp.com ====================
 heroku.com				==> nguyenthieu2102@gmail.com(ngUyen.thieU)
 
 
 
b. Up app MEAN.
- https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton		==> Tao khung xương cho MEN app (mongodb, nodejs và expressjs)
- https://gist.github.com/ericbolo/ad283a5160935fbf1cad40f06ce6fc72           ==> Hướng dẫn Text (Rất chi tiết) 
- https://scotch.io/tutorials/use-mongodb-with-a-node-application-on-heroku
 
- Ta tạo 1 cái app dùng nodejs như bên trên. Thêm mongoose, các dependency vào đấy. 

- Dùng mLab.com để làm database MongoDB online. Tạo tài khoản trên trang: mlab.com 
- Tạo 1 database mới trên đó. Vd: menskeleton 
- Click vào database mới tạo, Click tiếp vào Tab: Users. Click tiếp vào : Add Database User 
- Điền thông tin: username, password. 
- Khi tạo xong 1 user nó sẽ trả về cho ta thông tin như sau: 

  To connect using the mongo shell:   mongo ds137100.mlab.com:37100/menskeleton -u <dbuser> -p <dbpassword>
  To connect using MongoDB URI:      mongodb://<dbuser>:<dbpassword>@ds137100.mlab.com:37100/menskeleton
  
- Giờ vào phần kết nối database trong cái app của bạn. Thay thế việc kết nối đến localhost bằng cái dòng URI bên trên: 
    mongoose.connect('mongodb://localhost/menskeleton');
--> mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds137100.mlab.com:37100/menskeleton');    
  (Nhớ sửa : dbuser, dbpassword: là cái thông tin bạn vừa đăng ký user đó) 
  
- Giờ ta phải thêm add-on mLab trên heroku, vì heroku chỉ có Nodejs chạy sẵn, còn lại đều là add-on của nó. 
- Vào heroku, vào cái app của ta, vào mục quản lý add-on, tìm add-on, thêm nó vào app (Phải đăng ký thẻ VISA thì nó mới cho thêm) 
- Thẻ VISA thì cứ đăng ký vào đi không sợ mất tiền. Nó chỉ check xem ta có phải real person hay không thôi.
- Khi thêm xong ta thiết lập các biến cho MongoDB của mLab 

export MONGOLAB_URI="mongodb://<dbuser>:<dbuser>@ds137100.mlab.com:37100/menskeleton"		          ==> Database online
heroku config:set MONGOLAB_URI="mongodb://<dbuser>:<dbuser>@ds137100.mlab.com:37100/menskeleton" --remote staging
heroku config:set MONGOLAB_URI="mongodb://<dbuser>:<dbuser>@ds137100.mlab.com:37100/menskeleton" --remote production

- Giờ ta bắt đầu làm lại quá trình bên trên. 
  heroku create                                                                 // Tạo tên miền ngẫu nhiên, kho lưu cho app. 
  heroku apps:rename heroku-thieu(tên mới) --app floating-plains-23534(tên cũ)  // Đang cố gắng đổi tên miền.
  
  git add . 
  git commit -m "Up web"            // Add những thay đổi.
  
  git remote -v                     // Kiểm tra xem có những remote nào 
  
  git push heroku HEAD:master       // Push code lên heruko 
  
  heroku ps:scale web=1             // Kiểm tra xem web có đang chạy không, test rồi đấy 
  
  heroku open                       // Tự động mở trình duyệt và vào cái web của mình. 


====================> Đã làm và thành công với website: https://heroku-thieunv-men.herokuapp.com ==========================
=====> https://git.heroku.com/heroku-thieunv-men.git					==> Luu tru o day


4. Đổi tên miền của heroku (Sẽ cập nhật sau) 

 
5. Các app đã up lên server 
 
 thieunv.tk                               --> App của a2app (dùng angular 2) (side_project/a2app) 
 https://heroku-thieu.herokuapp.com       --> App test dùng mỗi Nodejs và Express (side_project/heroku-node)
 https://heroku-thieunv-men.herokuapp.com --> App thêm, sửa, xóa, cập nhật user dùng cả MEN (chưa có Angular)  (side_project/express-node-mongo-skeleton) 

  



=========================== Hướng dẫn tạo website với MEAN (Angular 2) ============================================
https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

1. Tạo client side 
    npm install -g angular-cli
    
    ng new a2appfull 
    
    cd a2appfull
    
    ng serve
    
    http://localhost:4200
    
    npm install --save express body-parser
    
    
- Tạo folder: server và file: server.js ở thư mục root của app. 
- File server.js 

    // Get dependencies
    const express = require('express');
    const path = require('path');
    const http = require('http');
    const bodyParser = require('body-parser');
    
    // Get our API routes
    const api = require('./server/routes/api');
    
    const app = express();
    
    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // Point static path to dist
    app.use(express.static(path.join(__dirname, 'dist')));
    
    // Set our api routes
    app.use('/api', api);
    
    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));      //Rất quan trọng, khi vào tất cả các đường dẫn khác đều sẽ trả về file này. 
                                                                // File này do angular cli tạo ra. 
    });
    
    /**
     * Get port from environment and store in Express.
     */
    const port = process.env.PORT || '3000';
    app.set('port', port);
    
    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);
    
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, () => console.log(`API running on localhost:${port}`));


- Đường dẫn: /api route trỏ đến file:  ./server/routes/api.js. Giờ ta tạo file này: 
server/routes/api.js

    const express = require('express');
    const router = express.Router();
    
    /* GET api listing. */
    router.get('/', (req, res) => {
      res.send('api works');
    });
    
    module.exports = router;
    

- Giờ ta viết 1 "scripts" trong file package.json : "start": "ng build && node server.js"
- Đầu tiên phải build ra file: dist/index.html rồi sau đó mới phục vụ bằng node server 
- Giờ vào: http://localhost:3000  --> Sẽ thấy app load. 
- Còn vào: http://localhost:3000/api  --> Sẽ thấy api load. 


2. Tạo Fake Server Data 

  npm install --save axios      // Tạo request 
  
- Cập nhật lại code của: server/routes/api.js

    const express = require('express');
    const router = express.Router();
    
    // declare axios for making http requests
    const axios = require('axios');
    const API = 'https://jsonplaceholder.typicode.com';
    
    /* GET api listing. */
    router.get('/', (req, res) => {
      res.send('api works');
    });
    
    // Get all posts
    router.get('/posts', (req, res) => {
      // Get posts from the mock api
      // This should ideally be replaced with a service that connects to MongoDB
      axios.get(`${API}/posts`)
        .then(posts => {
          res.status(200).json(posts.data);
        })
        .catch(error => {
          res.status(500).send(error)
        });
    });
    
    module.exports = router;
        
- Chạy lại : npm run start và vào: http://localhost:3000/api/posts (Sẽ thấy json trả về) 
    

3. Angular route, component and provider (client side) 
     ng generate component posts    // Tạo ra 1 PostsComponent trong src/app và đồng thời nó tự import vào trong Declaration của app.module.ts 
     
     
- Tạo router trong app.module.ts và dùng luôn trong đó. 

    const ROUTES = [      // Define the routes
      {
        path: '', redirectTo: 'posts', pathMatch: 'full'        // Bất cứ khi nào zô: localhost:3000 -->tự chuyển đến: localhost:3000/posts 
      },
      {
        path: 'posts', component: PostsComponent
      }
    ];
    
    @NgModule({
      imports: [
        RouterModule.forRoot(ROUTES)   // Add routes to the app
      ],
      
- Kiểm tra xem đã có thẻ: <base href="/"> trong src/index.html trên phần head tag chưa. Chưa có thì thêm vào. 
- Để nó nói cho angular biết file index.html này tương ứng với route: localhost:3000 
- Thêm thẻ <router-outlet> vào trong src/app/app.component.html để nói angular biết ta sẽ dùng route quản lý bắt đầu từ đây.

    src/app/app.component.html
    
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>      
         
- Chạy lại: npm run start và vào http://localhost:3000  --> Nó sẽ tự động chuyển sang: http://localhost:3000/posts 



4. Connecting Component to Express API (Dùng service để gửi request dữ liệu các kiểu con đà điểu )

    ng generate service posts     // Tự động Tạo posts service trong folder:  src/app 
    
- Thêm nó vào add.module.ts :   providers: [PostsService], // Add the posts service

- Tạo request gửi lên api để lấy dữ liệu:  src/app/posts.service.ts

    import { Injectable } from '@angular/core';
    import { Http } from '@angular/http';
    import 'rxjs/add/operator/map';
    
    @Injectable()
    export class PostsService {
    
      constructor(private http: Http) { }
    
      // Get all posts from the API
      getAllPosts() {
        return this.http.get('/api/posts')
          .map(res => res.json());
      }
    }

- Giờ thì import Service vào Post Component: src/app/posts/posts.component.ts

    import { Component, OnInit } from '@angular/core';
    import { PostsService } from '../posts.service';
    
    @Component({
      selector: 'app-posts',
      templateUrl: './posts.component.html',
      styleUrls: ['./posts.component.css']
    })
    export class PostsComponent implements OnInit {
      
      posts: any = [];        // instantiate posts to an empty array
    
      constructor(private postsService: PostsService) { }
    
      ngOnInit() {
        
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(posts => {
          this.posts = posts;
        });
      }
    }
    

- Cuối cùng thì hiển thị ra view thôi. Ở đây ta sử dụng bootstrap 4 (Có thể dùng cdn hoặc npm) : src/app/posts/posts.component.html
  
  <div class="container">
    <div class="row" *ngFor="let post of posts">
      <div class="card card-block">
        <h4 class="card-title">{{ post.title }}</h4>
        <p class="card-text">{{post.body}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>

- Nếu dùng cdn thì thêm vào : src/index.html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.css">


- Chạy app : npm run build --- >Vào: localhost:3000 



5. Kết nối MongoDB sử dụng mongoose 
- Cài đặt và gọi 

  npm install mongoose --save         // Cài đặt mongoose 
  
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/myappdatabase');

- Định nghĩa Model (Dùng để xử lý CRUD) : mongoose Model. Nó đại diện cho documents trong Collections trong Database 
- Có thẻ dùng: 
  + Mongoose Schema: Định nghĩa các thuộc tính của Documents. 
  + Mongoose Methods : Định nghĩa các hàm trong mongoose schema.
  


