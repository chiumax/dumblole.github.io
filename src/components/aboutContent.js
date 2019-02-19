import React from "react";
import posed from "react-pose";
import { Flipper, Flipped } from "react-flip-toolkit";
import { tween } from "popmotion";
import Img from "gatsby-image";
import cover from "../images/image/land.jpg";
// import game from "../images/game.webm";
// import code from "../images/code.webm";
// import edit from "../images/edit.webm";
import ReactPlayer from "react-player";
import { Parallax, Background } from "react-parallax";

const IconWrap = posed.div({
  stay: { scale: 1 },
  gone: { scale: 0 }
});
const IconShow = posed.div({
  stay: { scale: 0 },
  gone: { scale: 1 }
});
const IconHover = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
});
export default ({
  type,
  pic,
  codeOnFocus,
  codeContent,
  SVGcontent,
  choose,
  shuffle,
  current,
  clickExpand,
  clickedElement,
  temp
}) => {
  return (
    <div className={"aboutContainer"}>
      {/* HERO  */}

      <div className={"aboutwrap"}>
        <div className={"temp"}>
          <div className={"imageWrap"} />
          <img src={cover} className={"heroImage"} />

          <div className={"heroText"}>
            <div>D U M B L O L E</div>
            <div>
              Self-teaching the way of computers and visual effects all the while having fun on the
              way.
            </div>
          </div>
        </div>
        {/* <div className="aboutHeader">dumblole</div> */}
      </div>
      {/* INTRO PANEL */}

      {/* ABOUT ME / PIC */}

      <div className={"meAboutContainer"}>
        <div className={"aboutHeader"}>ME</div>
        <div className={"meAboutWrap"}>
          <div className={"aboutMeLeft"}>
            <div className={"aboutMeImage"}>
              <Img fluid={pic.croc} />
            </div>
          </div>
          <div className={"descText"}>
            <div>
              <div>
                Where I come from doesn't matter. It's the time we have now that matters. But if you
                really want to know...My name is Max (dumblole) and I'm currently a sophmore{" "}
                {"(15)"} in the Science, Math, and Computer Science program (SMCS) at Poolesville
                High School. Anyways, welcome to my website! It's my pride and joy.
              </div>
              <div>I really love programming, gaming, video editing, and my fair share of rap.</div>
              <div>
                Whenever I work on something relatively big, it can usually be found under my
                Projects page. Want to know what I think about various topics? Either contact me or
                go snoop around in my Blogs page.
              </div>
              <div>See you around.</div>
            </div>
          </div>
        </div>
        {/* <Img fluid={pic.b} className={"testImage"} /> */}
      </div>

      <Parallax strength={500}>
        <div className={"parallaxWrap"}>
          <div className={"aboutHeader aboutHeaderWhite"}>What I Do</div>
        </div>
        <Background>
          <div className={"imageWrap"} />
          <Img fluid={pic.group} className={"heroImage"} />
        </Background>
      </Parallax>

      {/* CODING SECTION */}
      {/* <div className={"aboutHeader"}>I&nbsp;&nbsp;&nbsp;E N J O Y</div> */}
      {/* <div className={"introAboutContainer"}>
        <div className={"introAboutWrap"}>
          <div>
            <div>Code</div>
            <div>{SVGcontent.CodeIcon}</div>
            <div>I code professionally and for fun</div>
            <div>More</div>
          </div>
          <div>
            <div>Game</div>
            <div>{SVGcontent.GamePad}</div>
            <div>When I'm not coding or editing, I'm probably gaming</div>
            <div>More</div>
          </div>
          <div>
            <div>Edit</div>
            <div>{SVGcontent.TvIcon}</div>
            <div>I edit montages and stuff for other people</div>
            <div>More</div>
          </div>
        </div>
      </div> */}

      <div className={"codeAboutContainer"}>
        <div className={"aboutHeader"}>C O D E</div>
        <div className={"editAboutWrap"}>
          <div>
            <ReactPlayer url={"https://youtu.be/r-l2UxxzhmU"} loop className={"reactPlayer"} />
          </div>

          <div className={"descText"}>
            <div>
              My journey in programming had a pretty rough start. Although I was lucky enough to
              land a computer science class early on in middle school, I didn't feel like the
              teachers who taught said subject were very good at teaching. Or maybe I'm just stupid.
              I've come around to appreciating the things around us a LOT more than I did when I
              didn't know how to program.
            </div>
            <div>
              I enjoy coding because of the problem solving. Equally frustrating as it is rewarding.
              It's kinda like cooking, you can make your own recipe or follow a cookbook but you
              won't ever make a delicious dish first try.
            </div>
            <div>
              In the future I hope I can pursue a career in artificial learning. More specifically,
              deep learning. Or maybe, I could work for Elon Musk, spearhead the way into
              interplanetary travel.
            </div>
          </div>
        </div>
      </div>

      {/* GAMING  */}

      <div className={"gameAboutContainer"}>
        <div className={"aboutHeader"}>G A M E</div>
        <div className={"gameAboutWrap"}>
          <div>
            <ReactPlayer url={"https://youtu.be/7LdMPg-EthY"} loop className={"reactPlayer"} />
          </div>
          <div className={"descText"}>
            <div>A couple games I play (not all):</div>
            <div>
              <div>
                <span className={"boldStyle"}>Minecraft.</span> It's probably my second most played
                game. I remember in my younger days I used to play singleplayer a lot (I didn't have
                a lot of friends :C). Hours and hours on end, exploring and building. Nowadays, I
                usually only play Minecraft with a couple of my bros.
              </div>
              <div>
                <span className={"boldStyle"}>Counter-Strike Global Offensive.</span> My rank in
                this game is silver... Yeah I know I suck but its a really fun game. It's also
                really fun to edit clips and montages.
              </div>
              <div>
                <span className={"boldStyle"}>Battlefield I.</span> It's a game that I can lose
                myself in. I really enjoy this game because of the feeling of large scale battles
                that are super immersive. Planetside 2 was such a game.
              </div>
              <div>
                To me, it's not the game that makes games fun; it's the teamwork, it's the banter
                with your friends. That's what makes games fun.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EDITING */}

      <div className={"editAboutContainer"}>
        <div className={"aboutHeader"}>E D I T</div>
        <div className={"editAboutWrap"}>
          <div>
            <ReactPlayer url={"https://youtu.be/mM6UmVbCdDI"} loop className={"reactPlayer"} />
          </div>

          <div className={"descText"}>
            <div>
              The first video edit I ever made was for an 8th grade week-long field trip to Boston.
              Since then, I've come a long way.
            </div>
            <div>
              From Windows Movie Maker to Adobe Premiere Pro and Adobe After Effects, editing has
              been really fun.
            </div>
            <div>
              <div>
                I used Premiere Pro for some of my first edits. It's good software and it's also
                very easy to use and learn. I'm very comfortable with Premiere Pro but I still have
                to learn how to color correct.
              </div>
              <div>
                It took a really long time to settle into After Effects because of the many tools
                and effects that are available. It's kinda cool to see that you can use Javascript
                in After Effects.
              </div>
            </div>
            <div>Check out some of the edits I made over at my Youtube channel.</div>
          </div>
        </div>
      </div>
      <Parallax strength={500}>
        <div className={"parallaxWrap"}>
          <div className={"aboutHeader aboutHeaderWhite"}>Skills</div>
        </div>
        <Background>
          <div className={"imageWrap"} />
          <Img fluid={pic.groupriver} className={"heroImage"} />
        </Background>
      </Parallax>
      <div className={"skillAboutContainer"}>
        <button
          onClick={() => {
            shuffle("");
          }}
        >
          YEET THIS SHIT
        </button>
        <button
          onClick={() => {
            shuffle("code");
          }}
        >
          YEET THIS SHIT
        </button>
        <button
          onClick={() => {
            shuffle("edit");
          }}
        >
          YEET THIS SHIT
        </button>
        <Flipper
          spring={"veryGentle"}
          className={"skillAboutWrap"}
          flipKey={current + clickedElement}
        >
          {codeContent.map(key => {
            if (clickedElement === key.name) {
              {
                return (
                  <div key={key.name} className={"skillFullScreen"} onClick={() => clickExpand("")}>
                    <Flipped flipId={`${key.name}-icon`}>
                      <div className={"skillSVG"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`} scale translate>
                      <div className={"skillHeader"}>{key.name}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-back`} spring={"noWobble"}>
                    <div className={"skillBack"}/>
                    </Flipped>
                  </div>
                );
               
              }
            }
             if(temp===key.name){
              return(
              <div key={key.name} className={"skillIcon"} onClick={() => clickExpand(key.name)}>
                  <Flipped flipId={`${key.name}-back`} spring={"noWobble"}>
                    <div className={"skillBackGone"}/>
                    </Flipped>
                    <Flipped flipId={`${key.name}-icon`}>
                      <div className={"skillTemp"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`} scale translate >
                      <div className={"skillTemp"}>{key.name}</div>
                    </Flipped>
                    
                  </div>);
            }
            if (key.skillArea.includes(current) || current === "") {
              {
                return (
                  <div key={key.name} className={"skillIcon"} onClick={() => clickExpand(key.name)}>
                  <Flipped flipId={`${key.name}-back`} spring={"noWobble"}>
                    <div className={"skillBackGone"}/>
                    </Flipped>
                    <Flipped flipId={`${key.name}-icon`}>
                      <div className={"skillHere"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`} translate scale>
                      <div className={"skillHere"}>{key.name}</div>
                    </Flipped>
                    
                  </div>
                );
                
              }
            }
           
            {
              {
                return (
                  <div key={key.name} className={"skillIcon"}>
                    <Flipped flipId={`${key.name}-icon`}>
                      <div className={"skillGone"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`}>
                      <div className={"skillGone"}>{key.name}</div>
                    </Flipped>
                  </div>
                );
              
              }
            }
          })}
        </Flipper>
      </div>
    </div>
  );
};
{
  /* <div className={"skillWrap"}>
        <div className={"skillText"}>
          {!!codeOnFocus ? codeContent[codeOnFocus].name : "< SKILLS />"}
        </div>
        <div className={"iconWrap"}>
          {Object.keys(codeContent).map(key => (
            <IconWrap
              key={key}
              style={codeOnFocus == key || !codeOnFocus ? { display: "flex" } : { display: "none" }}
              pose={codeOnFocus == key || !codeOnFocus ? "stay" : "gone"}
              className={"singleIcon"}
              onClick={() => {
                choose(key);
              }}
            >
              {console.log(codeOnFocus, codeOnFocus == key || !codeOnFocus, codeOnFocus == key)}
              <IconWrap
                pose={codeOnFocus != key || !codeOnFocus ? "stay" : "gone"}
                style={
                  codeOnFocus != key || !codeOnFocus ? { display: "block" } : { display: "none" }
                }
              >
                <IconHover>{codeContent[key].icon}</IconHover>
                <div>{codeContent[key].name}</div>
              </IconWrap>
              <IconShow
                className="showIconWrap"
                style={codeOnFocus != key ? { display: "none" } : { display: "flex" }}
                pose={codeOnFocus != key ? "stay" : "gone"}
              >
                <IconHover>{codeContent[key].icon}</IconHover>
                <div>{codeContent[key].content}</div>
              </IconShow>
            </IconWrap>
          ))}
        </div>
       </div> */
}
// switch (type) {
//   case "myself":
//     return (
//       <div>
//         <div className={"aboutTitle"}>ME</div>
//         <div>
//           Where I come from doesn't matter. It's the time we have now that matters. But if you
//           really want to know...My name is Max (dumblole) and I'm currently a sophmore {"(15)"} in
//           the Science, Math, and Computer Science program (SMCS) at Poolesville High School.
//           Anyways, welcome to my website! It's my pride and joy.
//         </div>
//         <div>
//           I really love programming, gaming, video editing, and my fair share of rap. Feel free to
//           find out more about me via the method you got here!
//         </div>
//         <div>
//           Whenever I work on something relatively big, it can usually be found under my Projects
//           page. Want to know what I think about various topics? Either contact me or go snoop
//           around in my Blogs page! See you around.
//         </div>
//         <Img fluid={pic.b} />
//       </div>
//     );
//   case "coding":
//     return (
//       <div>
//         <div className={"aboutTitle"}>
//           {"< "}CODING{" />"}
//         </div>
//         <div className="wrapEveryAbout wrapEvery">
//           <div>
//             My journey in programming had a pretty rough start. Although I was lucky enough to
//             land a computer science class early on in middle school, I didn't feel like the
//             teachers who taught said subject were very good at teaching. Or maybe I'm just stupid.
//             Now that I am more invested in programming, I've come around to appreciating the
//             things around us a LOT more than I did when I didn't know how to program.
//           </div>
//           <div>
//             When I started investing myself (spending my own time) into computer science, I
//             actually got into doing CTFs. Not only are CTFs fun competitions, they're also a great
//             way to learn a wide variety of things: Cybersecurity, Cryptography, Forensics, Reverse
//             Engineering, just to name a few.
//           </div>
//           <div>
//             I really enjoy coding because you can really take your own path when you go about
//             things. What I really meant was that for any given problem, there are seemingly
//             infinite ways to solve them. Now how you solve that problem is up to you. It's a very
//             long process but equally rewarding.
//           </div>
//           <div>
//             In the future I hope I can pursue a career in artificial learning. More specifically,
//             deep learning. If not, maybe I could work for Elon Musk, spearhead the way into
//             interplanetary travel.
//           </div>
//         </div>
//         <div className={"skillWrap"}>
//           <div className={"skillText"}>
//             {!!codeOnFocus ? codeContent[codeOnFocus].name : "< SKILLS />"}
//           </div>

//           <div className={"iconWrap"}>
//             {Object.keys(codeContent).map(key => (
//               <IconWrap
//                 key={key}
//                 style={
//                   codeOnFocus == key || !codeOnFocus ? { display: "block" } : { display: "none" }
//                 }
//                 pose={codeOnFocus == key || !codeOnFocus ? "stay" : "gone"}
//                 className={"singleIcon"}
//                 onClick={() => {
//                   choose(key);
//                 }}
//               >
//                 {console.log(codeOnFocus, codeOnFocus == key || !codeOnFocus, codeOnFocus == key)}
//                 <IconWrap
//                   className="showIconWrap"
//                   pose={codeOnFocus != key || !codeOnFocus ? "stay" : "gone"}
//                 >
//                   <IconHover>{codeContent[key].icon}</IconHover>
//                   <div>{codeContent[key].name}</div>
//                 </IconWrap>
//                 <IconShow pose={codeOnFocus != key ? "stay" : "gone"}>
//                   <div
//                     className="showIconWrap"
//                     style={codeOnFocus != key ? { display: "none" } : { display: "flex" }}
//                   >
//                     <IconHover>{codeContent[key].icon}</IconHover>
//                     <div>{codeContent[key].content}</div>
//                   </div>
//                 </IconShow>
//               </IconWrap>
//             ))}
//           </div>
//         </div>
//         I'm working on a couple projects right now. You can see my finished ones over at the
//         Projects page.
//       </div>
//     );
//   case "gaming":
//     return (
//       <div>
//         <div className={"aboutTitle"}>GAMING</div>
//         <div>
//           Ever since I started to program on my own time, I've come to really appreciate the
//           intricate mastery of the people that program games. A couple games I play.
//         </div>
//         <div>
//           <div>
//             Minecraft. It's probably my second most played game. I remember in my younger days I
//             used to play singleplayer a lot (I didn't have a lot of friends :C). Hours and hours
//             on end, exploring and building. Nowadays, I usually only play Minecraft with a couple
//             of my bros. We'd just hop on Hypixel or Mineplex and play some competitve team based
//             games. To me, it's not the game that makes the game fun; it's the teamwork, it's the
//             banter with your friends. That's what makes the game fun.
//           </div>
//           <div>
//             Counter-Strike Global Offensive. Although less of my friends play this highly
//             competitive game, I'm pretty sure this is my most played game. My rank in this game is
//             silver... Yeah I know I suck but its a really fun game. It's also really fun to edit
//             clips and montages. Teamwork is really essential to success in this game and its what
//             makes the game fun for me.
//           </div>
//           <div>
//             Clash of Clans. Yeah it is kinda a dead game but a bunch of my friends got back into
//             it after a few major updates. Most notably, the builder base update.
//           </div>
//         </div>
//         <div>Games I would like to play</div>
//         <div>
//           <div>
//             Battlefield I or V. I understand the stigma behind women in Battlefield V, but it's
//             still a game I want to play. It's a game I could really lose myself in. I really want
//             to play large scale fps games with some friends because although a couple players
//             isn't significant to the victory of the battles itself, it gives me a sense of
//             friendship and "brotherhood". It's not the significance of the whole game that
//             matters, but the significance of a couple people that really make me happy. Planetside
//             2 was such a game.{" "}
//           </div>
//         </div>
//       </div>
//     );
//   case "editing":
//     return (
//       <div>
//         <div className={"aboutTitle"}>EDITING</div>
//         <div>
//           The first video edit I ever made was for an 8th grade week-long field trip to Boston. It
//           was the end of the year and kind of like a goodbye type of deal. I've learned a lot of
//           things since then.
//         </div>
//         <div>
//           Editing for me is really fun. You can take on an edit/montage many different ways. From
//           music sync to strictly graphic animations and effects, the end result will always be
//           unique.
//         </div>
//         <div>
//           <div>
//             I used Premiere Pro for some of my first edits. It's good software and it's also very
//             easy to use and learn. I'm very comfortable with Premiere Pro but I still have to
//             learn good color correcting.
//           </div>
//           <div>
//             It took a really long time to settle into After Effects because of the many tools and
//             effects that are available to you. Not everything works the same way in After Effects
//             as it does in Premiere Pro. Keybindings are different and the whole keyframing process
//             in After Effects is much more pleasant. I rarely use Premiere Pro unless if I'm doing
//             something really simple or if I have a really big project that I may have to piece
//             together (haven't gotten to that point yet).
//           </div>
//         </div>
//         <div>
//           Check out some of the edits I made over at my Youtube channel. Or you can find some of
//           the more notable ones under my Projects section.
//         </div>
//       </div>
//     );
//   default:
//     return null;
// }
