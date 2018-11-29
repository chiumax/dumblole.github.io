import React from "react";

import Img from "gatsby-image";

export default ({ type, pic }) => {
  console.log(pic, "hiasdhifhasif");
  switch (type) {
    case "myself":
      return (
        <div>
          <div className={"aboutTitle"}>ME</div>
          <div>
            Where I come from doesn't matter. It's the time we have now that matters. But if you
            really want to know...My name is Max (dumblole) and I'm currently a sophmore {"(15)"} in
            the Science, Math, and Computer Science program (SMCS) at Poolesville High School.
            Anyways, welcome to my website! It's my pride and joy.
          </div>
          <div>
            I really love programming, gaming, video editing, and my fair share of rap. Feel free to
            find out more about me via the method you got here!
          </div>
          <div>
            Whenever I work on something relatively big, it can usually be found under my Projects
            page. Want to know what I think about various topics? Either contact me or go snoop
            around in my Blogs page!
          </div>
          <Img fluid={pic.b} />
        </div>
      );
    case "coding":
      return (
        <div>
          <div className={"aboutTitle"}>CODING</div>
          <div>
            My journey in programming had a pretty rough start. Although I was lucky enough to land
            a computer science class early on in middle school, I didn't feel like the teachers who
            taught said subject were very good at teaching. Or maybe I'm just stupid. Now that I am
            more invested in programming, I've come around to appreciating the things around us a
            LOT more than I did when I didn't know how to program.
          </div>
          <div>
            When I started investing myself (spending my own time) into computer science, I actually
            got into doing CTFs. Not only are CTFs fun competitions, they're also a great way to
            learn a wide variety of things: Cybersecurity, Cryptography, Forensics, Reverse
            Engineering, just to name a few.
          </div>
          <div>
            I really enjoy coding because you can really take your own path when you go about
            things. What I really meant was that for any given problem, there are seemingly infinite
            ways to solve them. Now how you solve that problem is up to you. It's a very long
            process but equally rewarding.
          </div>
          <div>
            In the future I hope I can pursue a career in artificial learning. More specifically,
            deep learning. If not, maybe I could work for Elon Musk, spearhead the way into
            interplanetary travel.
          </div>
          <div>
            <div>
              Python, my first real programming language (Had been playing around with Scratch and
              Alice in school), I was "taught" this language in 8th grade. Although I can't argue
              that this class didn't fuel my interest in programming, I had a pretty difficult time
              with this language starting out. Because the curriculum wasn't designed well, it was
              difficult to learn many concepts and develop a way of thinking that is required to be
              a good programmer. A lot of the journey is discovering on your own. Now that I have
              learned other languages and other programming things, I hope to return to python again
              soon to work in Artificial Intelligence.
            </div>
            <div>
              I started to learn this language in the summer at the end of 9th grade (high school
              whooo). Along with Javascript came about a bunch of other terms: Angular, React, Vue,
              object destructuring, computed property names. Self-learning this was a PAIN in the
              ass. I started to learn javascript because I wanted to build myself a website (this
              website!). From what I've heard, people either really like JS or hate it. I happen to
              really like it. It's a really flexible language and that may be a good thing or a bad
              thing.
            </div>
            <div>
              Learning Javscript was difficult for me because I really didn't know where to start.
              ReactJS was something that I kept hearing over and over when learning Javascript.
              Although I haven't worked with Angular or Vue yet, I've enjoyed my time working with
              React. A big part of learning react was also learning HTML, CSS, webpack, babel, and
              working with multiple files.
            </div>
            <div>
              I don't think I do much with NodeJS. I just know that it lets me install and use
              modules and that it's helpful. I put it here to make me look good... Does it make me
              look good?
            </div>
            <div>
              SCSS, basically CSS but with a lot helpful features added, also allows you to use
              vanilla CSS. CSS is something that isn't hard to understand, but in my opinion, it is
              hard to master. Everything you see on my website is the result of SCSS/CSS styling.
              Evidently, I still have ways to go.
            </div>
            <div>
              I'm learning Java this year (10th grade) in school. My teacher there is a fucking
              legend. I really wish I had him as a teacher earlier. Though I don't find Java as
              riveting. I haven't really found a use case where I would need to know Java, but I
              guess its something different. My first OOP. I have found that the whole brackets and
              defining variables deal to be pretty similar to Javascript.
            </div>
          </div>
          I'm working on a couple projects right now. You can see my finished ones over at the
          Projects page.
        </div>
      );
    case "gaming":
      return (
        <div>
          <div className={"aboutTitle"}>GAMING</div>
          <div>
            Ever since I started to program on my own time, I've come to really appreciate the
            intricate mastery of the people that program games.
          </div>
        </div>
      );
    case "editing":
      return (
        <div>
          <div className={"aboutTitle"}>EDITING</div>
        </div>
      );
    default:
      return null;
  }
};
