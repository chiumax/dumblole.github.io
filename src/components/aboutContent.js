import React from "react";
import posed from "react-pose";
import { tween } from "popmotion";
import Img from "gatsby-image";
import Javascript from "../icons/javascript.svg";

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
export default ({ type, pic, codeOnFocus, codeContent, choose }) => {
  console.log(pic, "hiasdhifhasif");
  return(
    <div>
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
            around in my Blogs page! See you around.
          </div>
          <Img fluid={pic.b} className={"testImage"}/>
        </div>
         <div>
          <div className={"aboutTitle"}>
            {"< "}CODING{" />"}
          </div>
          <div className="wrapEveryAbout wrapEvery">
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
          </div>
          <div className={"skillWrap"}>
            <div className={"skillText"}>
              {!!codeOnFocus ? codeContent[codeOnFocus].name : "< SKILLS />"}
            </div>

            <div className={"iconWrap"}>
              {Object.keys(codeContent).map(key => (
                <IconWrap
                  key={key}
                  style={
                    codeOnFocus == key || !codeOnFocus ? { display: "block" } : { display: "none" }
                  }
                  pose={codeOnFocus == key || !codeOnFocus ? "stay" : "gone"}
                  className={"singleIcon"}
                  onClick={() => {
                    choose(key);
                  }}
                >
                  {console.log(codeOnFocus, codeOnFocus == key || !codeOnFocus, codeOnFocus == key)}
                  <IconWrap pose={codeOnFocus != key || !codeOnFocus ? "stay" : "gone"} style={codeOnFocus != key || !codeOnFocus ? { display: "block" } : { display: "none" }}>
                    <IconHover>{codeContent[key].icon}</IconHover>
                    <div>{codeContent[key].name}</div>
                  </IconWrap>
                  <IconShow
                    style={codeOnFocus != key ? { display: "none" } : { display: "block" }}
                    pose={codeOnFocus != key ? "stay" : "gone"}
                  >
                    <IconHover>{codeContent[key].icon}</IconHover>
                    <div>{codeContent[key].content}</div>
                  </IconShow>
                </IconWrap>
              ))}
            </div>
          </div>
          I'm working on a couple projects right now. You can see my finished ones over at the
          Projects page.
        </div>
        <div>
          <div className={"aboutTitle"}>GAMING</div>
          <div>
            Ever since I started to program on my own time, I've come to really appreciate the
            intricate mastery of the people that program games. A couple games I play.
          </div>
          <div>
            <div>
              Minecraft. It's probably my second most played game. I remember in my younger days I
              used to play singleplayer a lot (I didn't have a lot of friends :C). Hours and hours
              on end, exploring and building. Nowadays, I usually only play Minecraft with a couple
              of my bros. We'd just hop on Hypixel or Mineplex and play some competitve team based
              games. To me, it's not the game that makes the game fun; it's the teamwork, it's the
              banter with your friends. That's what makes the game fun.
            </div>
            <div>
              Counter-Strike Global Offensive. Although less of my friends play this highly
              competitive game, I'm pretty sure this is my most played game. My rank in this game is
              silver... Yeah I know I suck but its a really fun game. It's also really fun to edit
              clips and montages. Teamwork is really essential to success in this game and its what
              makes the game fun for me.
            </div>
            <div>
              Clash of Clans. Yeah it is kinda a dead game but a bunch of my friends got back into
              it after a few major updates. Most notably, the builder base update.
            </div>
          </div>
          <div>Games I would like to play</div>
          <div>
            <div>
              Battlefield I or V. I understand the stigma behind women in Battlefield V, but it's
              still a game I want to play. It's a game I could really lose myself in. I really want
              to play large scale fps games with some friends because although a couple players
              isn't significant to the victory of the battles itself, it gives me a sense of
              friendship and "brotherhood". It's not the significance of the whole game that
              matters, but the significance of a couple people that really make me happy. Planetside
              2 was such a game.{" "}
            </div>
          </div>
        </div><div>
          <div className={"aboutTitle"}>EDITING</div>
          <div>
            The first video edit I ever made was for an 8th grade week-long field trip to Boston. It
            was the end of the year and kind of like a goodbye type of deal. I've learned a lot of
            things since then.
          </div>
          <div>
            Editing for me is really fun. You can take on an edit/montage many different ways. From
            music sync to strictly graphic animations and effects, the end result will always be
            unique.
          </div>
          <div>
            <div>
              I used Premiere Pro for some of my first edits. It's good software and it's also very
              easy to use and learn. I'm very comfortable with Premiere Pro but I still have to
              learn good color correcting.
            </div>
            <div>
              It took a really long time to settle into After Effects because of the many tools and
              effects that are available to you. Not everything works the same way in After Effects
              as it does in Premiere Pro. Keybindings are different and the whole keyframing process
              in After Effects is much more pleasant. I rarely use Premiere Pro unless if I'm doing
              something really simple or if I have a really big project that I may have to piece
              together (haven't gotten to that point yet).
            </div>
          </div>
          <div>
            Check out some of the edits I made over at my Youtube channel. Or you can find some of
            the more notable ones under my Projects section.
          </div>
        </div></div>);
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
            around in my Blogs page! See you around.
          </div>
          <Img fluid={pic.b} />
        </div>
      );
    case "coding":
      return (
        <div>
          <div className={"aboutTitle"}>
            {"< "}CODING{" />"}
          </div>
          <div className="wrapEveryAbout wrapEvery">
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
          </div>
          <div className={"skillWrap"}>
            <div className={"skillText"}>
              {!!codeOnFocus ? codeContent[codeOnFocus].name : "< SKILLS />"}
            </div>

            <div className={"iconWrap"}>
              {Object.keys(codeContent).map(key => (
                <IconWrap
                  key={key}
                  style={
                    codeOnFocus == key || !codeOnFocus ? { display: "block" } : { display: "none" }
                  }
                  pose={codeOnFocus == key || !codeOnFocus ? "stay" : "gone"}
                  className={"singleIcon"}
                  onClick={() => {
                    choose(key);
                  }}
                >
                  {console.log(codeOnFocus, codeOnFocus == key || !codeOnFocus, codeOnFocus == key)}
                  <IconWrap pose={codeOnFocus != key || !codeOnFocus ? "stay" : "gone"}>
                    <IconHover>{codeContent[key].icon}</IconHover>
                    <div>{codeContent[key].name}</div>
                  </IconWrap>
                  <IconShow
                    style={codeOnFocus != key ? { display: "none" } : { display: "block" }}
                    pose={codeOnFocus != key ? "stay" : "gone"}
                  >
                    <IconHover>{codeContent[key].icon}</IconHover>
                    <div>{codeContent[key].content}</div>
                  </IconShow>
                </IconWrap>
              ))}
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
            intricate mastery of the people that program games. A couple games I play.
          </div>
          <div>
            <div>
              Minecraft. It's probably my second most played game. I remember in my younger days I
              used to play singleplayer a lot (I didn't have a lot of friends :C). Hours and hours
              on end, exploring and building. Nowadays, I usually only play Minecraft with a couple
              of my bros. We'd just hop on Hypixel or Mineplex and play some competitve team based
              games. To me, it's not the game that makes the game fun; it's the teamwork, it's the
              banter with your friends. That's what makes the game fun.
            </div>
            <div>
              Counter-Strike Global Offensive. Although less of my friends play this highly
              competitive game, I'm pretty sure this is my most played game. My rank in this game is
              silver... Yeah I know I suck but its a really fun game. It's also really fun to edit
              clips and montages. Teamwork is really essential to success in this game and its what
              makes the game fun for me.
            </div>
            <div>
              Clash of Clans. Yeah it is kinda a dead game but a bunch of my friends got back into
              it after a few major updates. Most notably, the builder base update.
            </div>
          </div>
          <div>Games I would like to play</div>
          <div>
            <div>
              Battlefield I or V. I understand the stigma behind women in Battlefield V, but it's
              still a game I want to play. It's a game I could really lose myself in. I really want
              to play large scale fps games with some friends because although a couple players
              isn't significant to the victory of the battles itself, it gives me a sense of
              friendship and "brotherhood". It's not the significance of the whole game that
              matters, but the significance of a couple people that really make me happy. Planetside
              2 was such a game.{" "}
            </div>
          </div>
        </div>
      );
    case "editing":
      return (
        <div>
          <div className={"aboutTitle"}>EDITING</div>
          <div>
            The first video edit I ever made was for an 8th grade week-long field trip to Boston. It
            was the end of the year and kind of like a goodbye type of deal. I've learned a lot of
            things since then.
          </div>
          <div>
            Editing for me is really fun. You can take on an edit/montage many different ways. From
            music sync to strictly graphic animations and effects, the end result will always be
            unique.
          </div>
          <div>
            <div>
              I used Premiere Pro for some of my first edits. It's good software and it's also very
              easy to use and learn. I'm very comfortable with Premiere Pro but I still have to
              learn good color correcting.
            </div>
            <div>
              It took a really long time to settle into After Effects because of the many tools and
              effects that are available to you. Not everything works the same way in After Effects
              as it does in Premiere Pro. Keybindings are different and the whole keyframing process
              in After Effects is much more pleasant. I rarely use Premiere Pro unless if I'm doing
              something really simple or if I have a really big project that I may have to piece
              together (haven't gotten to that point yet).
            </div>
          </div>
          <div>
            Check out some of the edits I made over at my Youtube channel. Or you can find some of
            the more notable ones under my Projects section.
          </div>
        </div>
      );
    default:
      return null;
  }
};
