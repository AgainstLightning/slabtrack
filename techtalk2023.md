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

In short: JavaScript. In long: this talk. Keeping pace with web development is hard. I've been doing it professionally for 7 years. JavaScript is a flexible, permissive language that is easy to adopt, some would call that a foot gun, others opportunity. The explosion of the web has led to what was originally a scripting language for the browser to become the dominant programming language of the planet in under 25 years. From the frontend, to the backend, to the database it reads from; even the primary code editor of the field, VS Code, is written with javascript. We write our JavaScript using JavaScript so that it may be served with JavaScript. Well unless you're using TypeScript. Bah dum tsh.

So how did this happen? What does modern web development look like in a world like that and where is it going from here?

Well, to get there, I'd like to use the tech stack of my current client as an example; A goal for us to get to. It is, in the scheme of web dev, relatively modern for 2023 and we just launched our MVP after four months of dev time with it:

- TypeScript
- React
- Next.js
- GraphQL
- Hasura

The stack looks like this. There will not be a test. I don't have an interest in teaching you technologies that you won't use, nor would I be the best teacher for them if you do. However by building up to this list, I believe it will give us a sense of the complexity of the web, how it got there and where we may be going.

And no, having mentioned TypeScript already will not count as a check mark yet, that was for a joke, but I appreciate your enthusiasm.

At the end I've built a small app for today using the same technologies listed here but we will get back to that.

History Time

Before we get to where we ARE in web dev, it would behoove us for a not-so-brief but hopefully interesting, heavily summarized history of where the web has BEEN to get here. Pay special interest to the role of JavaScript in this story.

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
  - Response to the browser wars
  - Netscape and Microsoft are competing for dominance
  - JavaScript is standardized
- PHP hits 1% of all domains (1997)
	- Server-side languages evolve
	- 60,000+ servers report having PHP installed
	- hints at the future of backend
- iframe permits dynamic resources (1997)
  - hints at the future of frontend
	- dynamic resources

Okay, let's take stock. What did the web look and feel like at this time? Well, the web is stable, relatively quick and being adopted vigorously; but it's static. The server gets a request and fulfills it. Want new content? Make a new request and refresh the page. The idea of a like button is a twinkle in the eye of a young Mark Zuckerberg off making some poor middle school just that much more awkward. The web is a place to get information, not really to interact with it.

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
  - Devs gonna dev
	- Addresses complexities like:
		- Cross-browser compatibility
		- DOM Manipulation
		- AJAX simplification
		- Much more
	- Tools like jQuery, MooTools and Handlebars become popular
    - JavaScript is taking on a larger role

Speaking of...


Spotlight slide!

  - NodeJS (2009)
    - Created by Ryan Dahl
    - Google's V8 allows Just-In-Time (JIT) compilation (2008)
      - previously, JavaScript was interpreted
        - slow, inefficient, browser-specific engines
      - open source, written in C++
        - fast, efficient, portable
        - faster execution of more complex code on more devices
    - Add Event-driven, non-blocking I/O
      - asynchronous and scalable
    - Node Package Manager (NPM)
      - package manager for JavaScript
      - largest software registry in the world
      - node_modules is the heaviest object in the universe

Speaking of node_modules...

- Frameworks and Single-Page Applications (Early '10s)
  - Frontend said "hold my red bull"
	- AngularJS (2010) 
		- made by Google
		- introduces Single-Page Applications (SPAs)
    - {{SPA slide}}
      - The whole thing
      - All of it
      - Make everything JavaScript
    - Why SPAs?
      - Complex web applications
        - Data-driven
        - Stateful
        - Dynamic
      - Rich experience, desktop-like
      - Reduced server load
      - Attempt at standardization
    - SEO is hard
		- JavaScript domination is now complete

Oh my who's this? *Mark Zuckerberg appears and gives us our first checkmark. 

Oh thank you Mr. Zuckerberg, that must mean we reached our first tech stack item. We've taken a long road to get here but we've made it, and the others should be arriving much more quickly now.

- React.js (2013)
  - My BFF
  - Developed by Facebook
  - Component-based library (let's unpack that)
    - Discrete, reusable pieces of UI
    - Just the view layer
    - No routing, state management or data fetching
  - JavaScript XML (JSX)
    - HTML-like syntax {{comparison slide}}
    - Compiles to JavaScript
  - Virtual DOM
    - DOM manipulation is expensive
    - In-memory Lightweight representation
    - Diffing algorithm to update the real DOM

Oh Mr. Berg you're back! So soon. Thank you, thank you we're making great progress here. I wasn't quite ready to jump to the next one but FAANG knows best I suppose.

- GraphQL (2012/2015)
  - Developed by Facebook
  - Query language for APIs
    - Declarative data
      - What data you want
      - No over-fetching
      - No under-fetching
    - Strongly typed
    - Client-specified queries
  - Single endpoint

Bill Gates shows up, looking angry. Yeah okay I know I said FAANG know best, my bad. What do you want me to do? Bill Gates hands us a checkmark. Ahhhh alright.

- TypeScript (2012)
  - Developed by Microsoft
  - JavaScript is a dynamically typed language
  - Superset, adding static typing during development
  - compiles to JavaScript
  - Made all the "real" devs happy

Phew, that's a lot of progress; we're almost there. Let's take stock: It's 2015, Uptown Funk and The Force Awakens are doing gangbusters, (Left shark, the dress, fury road) and the web has fully come into its own. Web 1.0 is a bad memory and it's now a place where real people get real stuff done in real time, really. It is integral to our lives, the web isn't a tool or a platform, it's a human right. The internet is now a necessity for how modern first-world life operates and at the heart of it, is JavaScript. It's the most popular language in the world and the jokes of a new JavaScript library or framework every day are not far from the truth. The web is a place of constant change, and it's only getting faster.

Speaking of...

Cannot speak on Next.js, without speaking on Vercel.

- Vercel
  - ???

- Next.js (2016)
  - Framework for React
    - File-based routing
  - Server-side rendering (SSR)
    - Pre-rendering
    - SEO friendly
    - Performant, leveraging the server
    - We've come full circle? 
  - Static site generation (SSG)
  - Incremental Static Regeneration (ISR)
  - React 18 (2021)
    - Server components


