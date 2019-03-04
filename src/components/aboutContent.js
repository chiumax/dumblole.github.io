import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Img from "gatsby-image";
import cover from "../images/image/land.jpg";
import ReactPlayer from "react-player";
import { Parallax, Background } from "react-parallax";
import { Waypoint } from "react-waypoint";

export default ({
  pic,
  codeContent,
  SVGcontent,
  shuffle,
  current,
  clickExpand,
  clickedElement,
  temp,
  animateIn,
  animateOut,
  animateLeft,
  animateRight,
  animateTop,
  animateCenter,
  animateBottom
}) => {
  return (
    <div className={"aboutContainer"}>
      {/* HERO  */}

      <div className={"temp"}>
        <div className={"imageWrap"} />
        <img src={cover} className={"heroImage"} />

        <div className={"heroText"}>
          <div data-title data-to-animate>
            D U M B L O L E
          </div>
          <Waypoint
            onEnter={() => {
              animateBottom("data-title");
            }}
          />
          <div data-title data-to-animate>
            Self-teaching the way of computers and visual effects all the while having fun on the
            way.
          </div>
        </div>
      </div>

      {/* INTRO PANEL */}

      {/* ABOUT ME / PIC */}

      <div className={"meAboutContainer"}>
        <div className={"aboutHeader"} data-me data-to-animate>
          ME
        </div>
        <div className={"meAboutWrap"}>
          <div className={"meAboutLeft"}>
            <div className={"meAboutImage"} data-me data-to-animate>
              <Img fluid={pic.croc} />
            </div>
          </div>
          <div className={"descText"}>
            <div>
              <div data-me data-to-animate>
                My name is Max (dumblole) and I'm currently a sophmore {"(15)"} in the Science,
                Math, and Computer Science program (SMCS) at Poolesville High School. Anyways,
                welcome to my website! It's my pride and joy.
              </div>
              <div data-me data-to-animate>
                I really love programming, gaming, video editing, and my fair share of rap.
              </div>
              <Waypoint
                onEnter={() => {
                  animateRight("data-me");
                }}
              />
              <div data-me data-to-animate>
                Whenever I work on something relatively big, it can usually be found under my
                Projects page. Want to know what I think about various topics? Either contact me or
                go snoop around in my Blogs page.
              </div>
              <div data-me data-to-animate>
                See you around.
              </div>
            </div>
          </div>
        </div>
        {/* <Img fluid={pic.b} className={"testImage"} /> */}
      </div>

      <Parallax strength={500}>
        <div className={"parallaxWrap"}>
          <div className={"aboutHeader aboutHeaderWhite"} data-to-animate data-que>
            What I Do
          </div>
          <Waypoint
            onEnter={() => {
              animateTop("data-que");
            }}
          />
        </div>
        <Background>
          <div className={"imageWrap"} />
          <Img fluid={pic.group} className={"heroImage"} />
        </Background>
      </Parallax>
      <div className={"codeAboutContainer"}>
        <div className={"aboutHeader"} data-to-animate data-code>
          C O D E
        </div>
        <div className={"editAboutWrap"}>
          <div data-to-animate data-code>
            <ReactPlayer url={"https://youtu.be/r-l2UxxzhmU"} loop className={"reactPlayer code"} />
          </div>

          <div className={"descText"}>
            <div data-to-animate data-code>
              I enjoy coding because of the problem solving. Equally frustrating as it is rewarding.
              It's kinda like cooking, you can make your own recipe or follow a cookbook but you
              won't ever make a delicious dish first try. I've come around to appreciating the
              things around us a LOT more than I did when I didn't know how to program.
            </div>
            <Waypoint
              onEnter={() => {
                animateLeft("data-code");
              }}
            />

            <div data-to-animate data-code>
              In the future I hope I can pursue a career in machine learning. Or maybe, I could work
              for Elon Musk, spearhead the way into interplanetary travel.
            </div>
          </div>
        </div>
      </div>

      {/* GAMING  */}

      <div className={"gameAboutContainer"}>
        <div className={"aboutHeader"} data-to-animate data-game>
          G A M E
        </div>
        <div className={"gameAboutWrap"}>
          <div data-to-animate data-game>
            <ReactPlayer url={"https://youtu.be/7LdMPg-EthY"} loop className={"reactPlayer"} />
          </div>
          <div className={"descText"}>
            <div data-to-animate data-game>
              A couple games I play (not all):
            </div>
            <div>
              <div data-to-animate data-game>
                <span className={"boldStyle"}>Minecraft.</span> I used to play singleplayer a lot (I
                didn't have a lot of friends :C). Hours and hours on end, exploring and building.
                Nowadays, I usually only play Minecraft with a couple of my bros.
              </div>
              <Waypoint
                onEnter={() => {
                  animateRight("data-game");
                }}
              />
              <div data-to-animate data-game>
                <span className={"boldStyle"}>Counter-Strike Global Offensive.</span> My rank in
                this game is silver... Yeah I know I suck but its a fun game. It's also really fun
                to edit clips and montages.
              </div>
              <div data-to-animate data-game>
                <span className={"boldStyle"}>Battlefield I.</span> I really enjoy this game because
                of the feeling of large scale battles that are super immersive. Planetside 2 was
                such a game.
              </div>
              <div data-to-animate data-game>
                To me, it's not the game that makes games fun; it's the teamwork, it's the banter
                with your friends.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EDITING */}

      <div className={"editAboutContainer"}>
        <div className={"aboutHeader"} data-to-animate data-edit>
          E D I T
        </div>
        <div className={"editAboutWrap"}>
          <div data-to-animate data-edit>
            <ReactPlayer url={"https://youtu.be/mM6UmVbCdDI"} loop className={"reactPlayer"} />
          </div>

          <div className={"descText"}>
            <div data-to-animate data-edit>
              The first video edit I ever made was for an 8th grade week-long field trip to Boston.
              Since then, I've come a long way.
            </div>
            <div data-to-animate data-edit>
              From Windows Movie Maker to Adobe Premiere Pro and Adobe After Effects, editing has
              been really fun.
            </div>
            <Waypoint
              onEnter={() => {
                animateLeft("data-edit");
              }}
            />
            <div data-to-animate data-edit>
              I used Premiere Pro for some of my first edits. It's good software and it's also very
              easy to use and learn. I'm very comfortable with Premiere Pro but I still have to
              learn how to properly color correct.
            </div>
            <div data-to-animate data-edit>
              Check out some of the edits I made over at my Youtube channel.
            </div>
          </div>
        </div>
      </div>
      <Parallax strength={500}>
        <div className={"parallaxWrap"}>
          <div className={"aboutHeader aboutHeaderWhite"} data-que2 data-to-animate>
            Skills
          </div>
          <Waypoint
            onEnter={() => {
              animateTop("data-que2");
            }}
          />
        </div>
        <Background>
          <div className={"imageWrap"} />
          <Img fluid={pic.groupriver} className={"heroImage"} />
        </Background>
      </Parallax>
      <div className={"skillAboutContainer"}>
        <div className={"skillAboutButton"} data-to-animate data-icon>
          <button
            onClick={() => {
              shuffle("");
            }}
            data-to-animate
            data-icon
          >
            All
          </button>
          <button
            onClick={() => {
              shuffle("code");
            }}
            data-to-animate
            data-icon
          >
            Code
          </button>
          <button
            onClick={() => {
              shuffle("edit");
            }}
            data-to-animate
            data-icon
          >
            Edit
          </button>
        </div>
        <Flipper
          spring={"veryGentle"}
          className={"skillAboutWrap"}
          flipKey={current + clickedElement}
        >
          <Waypoint
            onEnter={() => {
              animateCenter("data-icon");
            }}
          />
          {codeContent.map(key => {
            if (clickedElement === key.name) {
              {
                return (
                  <div key={key.name} className={"skillFullScreen"} onClick={() => animateOut()}>
                    <Flipped flipId={`${key.name}-icon`} spring={"noWobble"}>
                      <div className={"skillSVG"}>{key.icon}</div>
                    </Flipped>
                    <Flipped
                      flipId={`${key.name}-header`}
                      spring={"noWobble"}
                      onComplete={() => animateIn()}
                    >
                      <div className={"skillHeader"}>{key.name}</div>
                    </Flipped>
                    <div className={"starAboutWrap"} data-fade-in>
                      {Array.from(Array(5).keys()).map(i => {
                        if (i < key.star) {
                          return <div key={`${key.name}-${i}`}>{SVGcontent.Star}</div>;
                        }
                        return <div key={`${key.name}-${i}`}>{SVGcontent.NoStar}</div>;
                      })}
                    </div>
                    <div data-fade-in>{key.content}</div>
                    <div className={"skillClose"} data-fade-in>
                      {SVGcontent.Times}
                    </div>
                    <Flipped flipId={`${key.name}-tempBack`} spring={"noWobble"}>
                      <div className={"skillTempBack"} />
                    </Flipped>
                    <Flipped flipId={`${key.name}-back`} spring={"noWobble"}>
                      <div className={"skillBack"} style={{ backgroundColor: key.color }} />
                    </Flipped>
                  </div>
                );
              }
            }
            if (temp === key.name) {
              return (
                <div key={key.name} className={"skillIcon"} onClick={() => clickExpand(key.name)}>
                  <Flipped flipId={`${key.name}-tempBack`} spring={"noWobble"}>
                    <div className={"skillTempBackGone"} />
                  </Flipped>
                  <Flipped flipId={`${key.name}-back`} spring={"noWobble"}>
                    <div className={"skillBackGone"} style={{ backgroundColor: key.color }} />
                  </Flipped>
                  <Flipped flipId={`${key.name}-icon`}>
                    <div className={"skillTemp"}>{key.icon}</div>
                  </Flipped>
                  <Flipped flipId={`${key.name}-header`}>
                    <div className={"skillTemp"}>{key.name}</div>
                  </Flipped>
                </div>
              );
            }
            if (key.skillArea.includes(current) || current === "") {
              {
                return (
                  <div
                    key={key.name}
                    className={"skillIcon"}
                    onClick={() => clickExpand(key.name)}
                    data-to-animate
                    data-icon
                  >
                    <Flipped flipId={`${key.name}-tempBack`} spring={"noWobble"} stagger>
                      <div className={"skillTempBackGone"} />
                    </Flipped>
                    <Flipped flipId={`${key.name}-back`} spring={"noWobble"} stagger>
                      <div className={"skillBackGone"} style={{ backgroundColor: key.color }} />
                    </Flipped>
                    <Flipped flipId={`${key.name}-icon`} stagger>
                      <div className={"skillHere"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`} stagger>
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
                    <Flipped flipId={`${key.name}-icon`} stagger>
                      <div className={"skillGone"}>{key.icon}</div>
                    </Flipped>
                    <Flipped flipId={`${key.name}-header`} stagger>
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
