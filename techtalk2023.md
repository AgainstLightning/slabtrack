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
- Rise of the libraries: (!!add date!!) 
  - Devs gonna dev
	- Addresses complexities like:
		- Cross-browser compatibility
		- DOM Manipulation
		- AJAX simplification
		- Much more
	- Tools like jQuery, MooTools and Handlebars become popular
    - JavaScript is taking on a larger role

Speaking of...

((Jared's personal history with the backend))

cpanel lamp wamp proxies
very distant until our next tech

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
    - SEO is hard
		- JavaScript domination complete

Oh my who's this? *Mark Zuckerberg appears and gives us our first checkmark. 

Oh thank you Mr. Zuckerberg, that must mean we reached our first tech stack item. We've taken a long road to get here but we've made it, and the others should be arriving much more quickly now.

- React.js (2013)
  - My BFF
  - Developed by Facebook
  - Component-based library (let's unpack)
    - Discrete, reusable UI
    - Just the view layer
    - No routing, state management, etc
  - JavaScript XML (JSX)
    - HTML-like syntax {{comparison slide}}
    - Compiles to JavaScript
  - Virtual DOM

Oh Mr. Berg you're back! So soon. Thank you, thank you we're making great progress here. I wasn't quite ready to jump to the next one but FAANG knows best I suppose.

- GraphQL (2012/2015)
  - Developed by Facebook
  - Query language for APIs
    - Declarative data
      - What data you want
      - No over/under-fetching
    - Strongly typed
  - Single endpoint

Bill Gates shows up, looking angry. Yeah okay I know I said FAANG know best, my bad. What do you want me to do? Bill Gates hands us a checkmark. Ahhhh alright.

- TypeScript (2012)
  - Developed by Microsoft
  - JavaScript is dynamically typed
  - Adds static typing to development
  - Made all the "real" devs happy

Phew, that's a lot of progress; we're almost there. Let's take stock: It's 2015, Uptown Funk and The Force Awakens are doing gangbusters, (Left shark, the dress, fury road) and the web has fully come into its own. Web 1.0 is a bad memory and it's now a place where real people get real stuff done in real time, really. It is integral to our lives, the web isn't a tool or a platform, it's a human right. The internet is now a necessity for how modern first-world life operates and at the heart of it, is JavaScript. It's the most popular language in the world and the jokes of a new JavaScript library or framework every day are not far from the truth. The web is a place of constant change, and it's only getting faster. I personally cannot to see what's NEXT...JS

Speaking of...

Cannot speak on Next.js, without speaking on Vercel.

- Vercel (2015)
  - Founded by Guillermo Rauch
  - Framework-specific deployment platform
    - Global CDN
    - Edge functions
    - Focus on DX
  - Used by Github, Airbnb & Uber

- Next.js (2016)
  - Framework for React
    - File-based routing
  - Server-side rendering (SSR)
    - SEO friendly
    - Performant, leveraging the server
    - Full circle? 
  - API routes (2018)
    - Serverless functions
  - React 18 (2021)
    - Server components


Now, that's a lot of history but we also managed to traverse 20 something years. If you remember, way back before Al Gore, I mentioned a small app I've built for the purposes of seeing all of this come together, to experience what modern-ish web development looks like. So, let's talk about that.

But before we do...

This is a comic book. This is that same book, graded, in what we call a slab. This comic has many properties, name, series, page quality, signatures, etc. but the primary service that CGC provides is the grading of the quality of a book. The grade of 9.8 is often sought as the highest a book gets. While a 9.9 and a 10 are possible, they are exceedingly rare.

This is my comic book. This is my comic room and these are my graded comics. I've been wanting a database of all my slabs so for todays app, I have built out SlabTrack using the technologies we have discussed today.

((Demo of app and code))
- show this file and say hi to past me
  - you're welcome!
  - (hope it's going well, future me!)
- show react components
- show graphql queries
- show routes
- show api routes
- show server components

Hasura
- GraphQL engine
  - Postgres database
  - Generate GraphQL API
  - Resolvers are auto-generated
- Realtime subscriptions
- TypeScript integration

Keeping pace with modern web development is hard, which I'm sure you can now commiserate. The lines of frontend and backend have blurred, flipped and flopped, and took me with them. I have raw SQL living right next to my css in js. It has gotten weird. This rate of change, of innovation, this was all pre-AI/LLM! The web is a canary in this regard, the field in which I work so that I can comment on it, but it's not alone. This curve we're on, it will only get faster within our lifetimes.

Web 3.0
- WebAssembly
  - Low-level bytecode
  - C/C++/Rust in the browser
- HTMX
  - HTML over the wire; not JSON
  - Server-side rendering
  - Async
- Decentralization
  - Federated Web
    - Autonomous but interoperable
  - Blockchain
  - IPFS

Thank you for listening
