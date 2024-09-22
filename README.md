# NAMASTE REACT
NAMASTE REACT is a process of learning react in depth by AKSHAY SAINI
### INCEPTION CLASS (class 1)
we came to learn about how to implement react without using app.jsx file instead we use CDN(content delivery network)
links are:
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

links of react to fectch the files
and write the code in script tag in  html or index.js we came to know about how to create element in react 
the syntax::
React.createElement ("tag of html", {we can assign attribute to html tags},"content inside the html tag") reactcreateelement return an object
reactDOM syntax:
ReactDOM.createRoot(document.getElementById("");
how to pass react element into html by using render keyword


### CHIT CHAT  CLASS (class 2)
 we came to learn about arrow function and how this keyword depend on how we call that function and one new thing i got to laern is 
 function.call() => which shows how we can call the function .call we call the function.prototype.call("we pass this keyword into it ") ;
 we came to learn that this keyword in arrow function points to  parent ka this ;
 we came to learn about function expression and normal function
 
### IGNITE OUR APP (CLASS 3)
in class we came to know how we can setup our mini react app using BLUNDERS parcel
step 1:: npm init is used to initialise npm and as a result we get package.json file
step 2:: npm install -D parcel it is used to install parcel package and as a result we get package.lock.json file it is used to maintain the latest version of react directly on the production as well as dev side 
step 3:: npm install react
step 4:: npm install react-dom
step 5:: to run the npm we write npx parcel lecture3.html this is the entry point of the file
we came to learn about BUNDLERS, CARET(^) ,tilde(^) and  we came to learn about transitive dependencies
and why react is fast and what we should upload to git ignore 
1.we should not but node modules to git ignore as package.json and package.lock.json is sufficient data to generate the node modules
2.package.lock should not be put into git ignore as it is already present on the server
3. we should put parcel.cache to git or not we shooould put parcel.cache into git ignore as it update itself once it is created
4.to make our app compatiable for old server we write "browserlist",["last 2 versions"];


