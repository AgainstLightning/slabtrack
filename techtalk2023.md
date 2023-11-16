2023 Tech Talk

Frontend Is Fullstack

Abstract:

- intro story
- introduction
- So what does that mean clickbaity title? How can the FE be FS?
- quick fire terms
  - Frontend
    - what the user sees, the client device
  - Backend
    - the persistent information, the server
  - Fullstack
    - works on the "full stack", ie both

How can the FE be FS?

In short: JavaScript. In long: this talk. Keeping pace with web development is hard. I've been doing it professionally for 7 years. JavaScript is a flexible, permissive language that is easy to adopt, some would call that a foot gun, others opportunity. The explosion of the web has led to what was originally a scripting language for the browser to become the dominant programming language of the planet in under 25 years. From the frontend, to the backend, to the database it reads from; even the primary code editor of the field, VS Code, is written with javascript. We write our JavaScript using JavaScript so that it may be served with JavaScript. Well unless you're using TypeScript.

So how did this happen? What does modern web development look like and where is it going from here?

Well, to get there, I'd like to use the tech stack of my current client as an example; A goal for us to get to. It is, in the scheme of web dev, relatively modern for 2023 and we just launched our MVP after four months of dev time with it:

- React
- Next.js
- TypeScript
- GraphQL
- Apollo
- Hasura
- Postgres

The stack looks like this. There will not be a test. I don't have an interest in teaching you technologies that you won't use, nor would I be the best teacher for them if you do. However by building up to this list, I believe it will give us a sense of the complexity of the web, how it got there and where we may be going.

At the end I've built a small app for today using the same technologies listed here but we will get back to that.

History Time

Before we get to where we ARE in web dev, it would behoove us for a brief summary of where we've BEEN:
#### Web 1.0
- Al Gore creates the internet (???)
- Sir Tim Berners-Lee introduces HTML (1991)
	- First website: was about the web
	- {{HTML slide}}
		- The bones, the relationships
- Server-side scripting (1993)
	- CGI & Perl
	- Dynamic but whole, static pages
- World Wide Web Consortium (1994)
	- Created at MIT
	- Berners-Lee integral in development
- Brendan Eich creates JavaScript (1995)
	- Created at NetScape...In 10 days
	- Great success, no complaints
	- {{JS Slide}}
		- The function, the dynamic
- W3C releases CSS (1996)
	- {{CSS slide}}
		- The form, the feel
- ECMAScript Standardization (1997)
  - The browser wars are in full swing
  - Netscape and Microsoft are competing for dominance
  - JavaScript is standardized
- PHP hits 1% of all domains (1997)
	- Server-side languages evolve
	- 60,000+ servers report having PHP installed
	- hints at the future of backend
- iframe permits dynamic resources (1997)
  - hints at the future of frontend
	- dynamic resources

Okay, let's take stock. What did the web look and feel like at this time? Well, the web is stable, relatively quick and being adopted vigorously; but it's static. The server gets a request and fulfills it. Want new content? Make a new request and refresh the page. The idea of a like button is a twinkle in the eye of a young Mark Zuckerberg off making some middle school just that much more awkward. The web is a place to get information, not really to interact with it.

#### Web 2.0
- AJAX brings dynamic content mainstream (Mid '00s)
	- Gmail, Google Maps, Outlook
	- Javascript is integral to your grandma's happiness
	- XMLHttpRequest
		- Standardized by W3C in 2006
	- Async means we cannot guarantee the state of a user
- Social Media and Layouts Explosion (Mid '00s)
	- Facebook ('04)
  - YouTube ('05)
  - Twitter ('06)
	- Laptops, iPhone (2007), Widescreen Monitors
  - Complexity of the web increases
    - asking more of it 
    - more often
    - from more varied devices
- Rise of the libraries: 
	- Addresses complexities like:
		- Cross-browser compatibility
		- DOM Manipulation
		- AJAX simplification
		- Much more
	- Tools like jQuery, MooTools and Handlebars become popular
    - JavaScript is taking on a larger role

Speaking of...

  - NodeJS (2009)
    - Ryan Dahl
    - JavaScript on the backend
    - JavaScript is now a fullstack language


Okay, this is a good time to take a stop. A lot has happened the last 10 years, what does the web look like now?


- Modern JavaScript Frameworks and SPAs (Early '10s)
	- AngularJS (2010) 
		- made at Google
		- introduces Single-Page Applications (SPAs)
		- javascript domination is now complete
	- React.js (2013)
		- made at Facebook
		- popularizes components - reusable and isolated pieces of UI.
	- **Vue.js (2014)**
		- made at ??????
		- ??????????????



