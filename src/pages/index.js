import React from "react";
import { Link } from "gatsby";
import "normalize.css";
import "../styles/styles.scss";
import Tilt from 'react-tilt';

export default class Home extends React.Component {
  render() {
    let addPad = !!Math.floor(Math.random);
    const intro = ["just somebody", "trying to figure", "the world out."];
    const introLink = [
      { link: "/about/", name: "about" },
      { link: "/skills/", name: "skills" },
      { link: "/project/", name: "projects" },
      { link: "/blog/", name: "blogs" },
      { link: "/contact/", name: "contact" }
    ];

    const shortLorem = [
      "Sed tempor elit vitae amet.",
      "Ut varius odio in volutpat.",
      "Curabitur ac ipsum posuere.",
      "Morbi tincidunt massa nunc.",
      "Cras sit amet ante id amet.",
      "Suspendisse rutrum posuere.",
      "Pellentesque lacinia metus.",
      "Sed diam nisl, rutrum amet.",
      "Pellentesque eleifend amet."
    ];
    const lorem = [
      "Sed ut volutpat felis. Etiam euismod sit amet ante ut ornare. Donec scelerisque, purus in laoret sodales, orci ipsum porttitor erat, et placerat metus arcu eget turpis. Integer sodales a quam a porta. Nunc et risus efficitur odio elementum venenatis et eu nisi. Sed consequat quis lorem nec finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eu aliquam nibh. In hac habitasse platea dictumst. Suspendisse convallis, mi mattis hendrerit aliquam, diam est suscipit est, eget iaculis nisi sapien volutpat lectus. Fusce et consequat sem. Donec non sollicitudin massa, quis congue lorem. Aliquam sollicitudin eleifend ipsum, at gravida massa scelerisque vel. Donec id ante est. Pellentesque bibendum lobortis orci, eu aliquet mauris dignissim ut. Suspendisse ut dui quis odio rutrum maximus at ac mauris. Morbi tristique interdum eros id rhoncus. Duis aliquet consectetur ipsum, quis placerat eros porttitor sed. Curabitur magna orci, faucibus id sed.",
      "Nam fermentum sed metus a semper. Maecenas consectetur ex pretium urna tempor porttitor. Nulla id elit sed quam placerat maximus ut eget elit. Suspendisse tincidunt venenatis velit sed elementum. Nulla iaculis nisl rutrum nulla mattis porttitor. Mauris eget mauris pulvinar leo mollis tincidunt sed at justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla tempus, sapien ut sagittis pharetra, felis tortor pellentesque lorem, in tempor neque odio ac velit. Nam tempus eleifend lorem non scelerisque. Proin dapibus tortor elit, non ornare massa feugiat quis. Nullam in ipsum in risus blandit vulputate quis eu mauris. Phasellus ac leo scelerisque, vehicula felis ut, maximus risus. Pellentesque sed risus semper ipsum venenatis venenatis. Proin tortor lorem, mollis at pellentesque a, feugiat eu lorem. Phasellus volutpat erat libero, sed fermentum sapien aliquet vel. Curabitur tempor erat quis eros viverra, vitae sagittis urna accumsan. Quisque metus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed eros eget risus facilisis pretium eget ac nunc. Aenean mattis quis augue eu luctus. Donec consectetur justo lacus, non fermentum ipsum eleifend sit amet. Cras vehicula tincidunt justo, nec portitor est euismod id. In sit amet mauris sed mi euismod interdum. Nulla elit nunc, suscipit malesuada erat sed, euismod finibus erat. Vivamus quis iaculis enim. Phasellus malesuada scelerisque justo. Ut facilisis quis turpis eget dapibus. Phasellus est tellus, interdum at bibendum quis, auctor nec diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sit amet odio elementum, scelerisque nibh non, ullamcorper erat. Pellentesque scelerisque vel elit id ornare. Fusce lacinia feugiat magna et luctus. Praesent dictum elementum elementum. Aenean quis convallis lorem, in ornare augue. Donec vitae suscipit velit. Suspendisse rutrum nibh sit amet nibh mattis, nec varius felis volutpat.",
      "Nulla tristique eros eget quam porta, nec ultrices ipsum volutpa. Ut id mauris eu tortor dapibus finibus. Nullam sed elit iaculis, egestas est quis, tempus nibh. Sed aliquet tellus ut ultrices malesuada. Nam in imperdiet nisl. Phasellus in felis nibh. Sed nec neque at enim fringila interdum vel non mi. Duis tempor lobortis dui ac euismod. Nunc elementum metus in velit auctor molestie. Proin vestibulum arcu vel tortor condimentum, a interdum nisl suscipit. Maecenas laoreet ligula nibh, sed hendrerit risus facilisis sed. Curabitur vel accumsan urna. Donec porta non justo non ullamcorper. Sed dolor elit, malesuada cursus risus eu, gravida scelerisque quam. Sed scelerisque volutpat dui nec iaculis. Etiam consectetur eget erat ac pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et luctus magna. Aliquam erat volutpat. Nullam vehicula sed mi a vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor fringilla ultricies cras amet.",
      "Vestibulum dictum sapien in euismod aliquam. Vivamus aliquam nisi quis imperdiet auctor. Praesent ac aliquam libero, condimentum imperdiet ligula. Pellentesque faucibus luctus sodales. Cras vulputate nulla sit amet semper vehicula. Vivamus auctor eleifend tellus, et eleifend felis rhoncus id. Fusce blandit rutrum faucibus. Nullam placerat, dolor sit amet imperdiet bibendum, ligula lacus pulvinar erat, venenatis aliquet lorem erat ac nulla. Duis risus nulla, luctus id aliquet eu, placerat sit amet sapien. Mauris viverra mi ut velit condimentum consectetur eget eu mauris. Pellentesque id mauris et ligula finibus blandit bibendum id elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam aliquet rutrum felis nec ultrices. Vestibulum fermentum sit amet mauris eget dignissim. Phasellus non metus dignissim, aliquet mauris at, mollis lorem. Aliquam consectetur neque quis fringilla mollis. Nullam in sem id velit hendrerit gravida non et diam posuere.",
      "Aenean vehicula mattis erat nec pulvinar. Quisque nisi nisl, pharetra dignissim tincidunt hendrerit, malesuada vehicula sapien. Donec luctus purus vel gravida hendrerit. Sed a placerat tortor, id laoreet felis. Fusce posuere felis eget est pretium, semper fermentum felis sagittis. Sed rhoncus volutpat tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ornare metus eu mollis bibendum. Ut lacinia pretium metus egestas dignissim. Donec ex justo, iaculis sit amet ipsum tempus, egestas feugiat mauris. Sed viverra malesuada tempor. In ut nunc ut ex rutrum egestas. Vivamus ut consequat augue, vel dignissim felis. Donec nulla turpis, eleifend sit amet turpis eget, suscipit acumsan lectus. Nunc ut aliquet purus. Aliquam nec mi elementum felis auctor porta. Vivamus vitae tempus ante. Pellentesque vitae orci ut sapien iaculis eleifend. Cras ullamcorper velit eu leo volutpat, vitae volutpat felis molestie. Nunc purus elit, consectetur eget posuere.",
      "Maecenas elit ante, dignissim ac gravida sed, hendrerit ac sapien. Nam pretium consectetur lacinia. Etiam feugiat dignissim mi eget posuere. Mauris sit amet nulla et tellus sodales interdum. Mauris egestas dui porttitor dictum luctus. Aliquam tortor quam, cursus a tincidunt vitae, cursus in lacus. Aenean ut auctor eros. Cras lacus libero, venenatis sed tempor sit amet, malesuada id erat. In ut sapien metus. Sed luctus imperdiet mi, condimentum faucibus augue imperdiet nonNunc volutpat, neque a finibus maximus, nisi turpis pretium dolor, vel tempus elit nisi at arcu. Mauris et convallis sapien, sed placerat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere  cubilia Curae; Quisque porttitor vulputate semper. Cras laoreet ipsum quis vestibulum accumsan. Nullam velit turpis, vestibulum et varius a, faucibus maximus nisi. Curabitur varius tempor urna, quis vulputate lorem vehicula ac. Phasellus vulputate dui in libero molestie vestibulum. Sed suscipit ac posuere.",
      "Vivamus id lorem a risus auctor imperdiet. Phasellus ac vehicula risus, dictum iaculis orci. Maecenas bibendum lorem nec nunc congue bibendum. Nullam mattis nisi mauris, ac ullamcorper lorem blandit quis. Vivamus vitae risus quis nisl pharetra volutpat. Ut consectetur orci at nibh congue, id luctus neque lacinia. Quisque eu lectus quis est lobortis elementum in sed est. Vivamus pharetra quam at ex luctus, id pellentesque ex eleifend. Maecenas porttitor ligula vitae enim finibus consequat. Praesent cursus, massa tristique viverra bibendum, ante orci ultrices metus, sollicitudin ullamcorper magna eros vitae odio. Etiam quis massa erat.Etiam vitae dui est. Maecenas nisi justo, posuere eu erat non, sagittis imperdiet magna. Aenean lacinia justo eu lorem efficitur, sit amet posuere erat facilisis. Cras quis auctor felis, quis congue ipsum. Integer in mi quis nibh maximus rutrum vel id quam. Suspendisse at rhoncus magna. Nullam sit amet suscipit turpis. Sed condimentum malesuada ex, ut amet.",
      "Donec dapibus scelerisque felis, non commodo metus tempor eu. Integer accumsan nunc turpis, nec luctus lacus hendrerit commodo. Nunc blandit augue ut sapien consequat, ultrices vehicula velit accumsan. Sed semper laoreet ipsum, sed imperdiet lorem dapibus quis. Sed rhoncus nisi vitae lorem aliquet gravida. Aliquam condimentum elit dolor, sit amet gravida ante condimentum ac. Aenean eleifend dictum mollis. Mauris ullamcorper molestie ligula, ac sollicitudin lacus aliquam non. Sed suscipit urna id condimentum ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique massa sed lorem blandit, euismod fermentum quam pulvinar. In pretium vel neque non lacinia. Integer in dolor laoreet arcu blandit rutrum. Morbi interdum eros ut ex dignissim posuere. Donec non finibus ipsum. Etiam nec augue a risus sodales porta eu id ipsum. Curabitur id ligula nulla. In eget sollicitudin eros. Phasellus luctus augue sem, in semper eros placerat in. Quisque iaculis est at lacus turpis duis.",
      "Nullam volutpat, elit in semper scelerisque, nulla magna fringilla lorem, sed facilisis dui libero non velit. Curabitur finibus congue lectus. Proin magna ligula, tincidunt ut leo vel, pretium lacinia metus. Vivamus quis neque magna. Donec commodo dolor nec tristique cursus. Integer id lobortis urna. Fusce non metus fringilla, tincidunt massa nec, blandit risus. Sed mollis convallis tortor in ornare. Suspendisse imperdiet rutrum leo et auctor.Mauris sed dui a lectus bibendum molestie. In aliquam neque non nunc vehicula ultrices. Donec finibus, lorem sit amet convallis venenatis, dui justo efficitur nisi, lobortis fringilla eros sapien eu risus. Morbi et mauris risus. Praesent vehicula nibh sit amet est maximus, mollis ultricies nisl pellentesque. Suspendisse facilisis imperdiet mauris. Duis id risus ante. Nulla dapibus vestibulum sagittis. Aenean vel lorem fringilla, sagittis justo quis, rhoncus est. Vestibulum consectetur, mi eu laoreet interdum, felis tortor porttitor felis, id amet.",
      "Proin laoreet nulla sed ipsum pellentesque, eu rhoncus diam aliquet. Sed lacinia turpis nec bibendum volutpat. Aenean congue dolor eu aliquet dictum. Suspendisse sed vehicula metus, id luctus leo. Nam efficitur scelerisque enim vel laoreet. Donec cursus id lacus non dapibus. Nulla sapien mauris, posuere ut lectus sit amet, dictum vehicula quam. Nullam at sem sollicitudin, pulvinar risus non, lobortis sapien.Donec non odio metus. Etiam feugiat nisi quis dapibus pellentesque. Sed euismod velit nibh, eu luctus mauris malesuada eget. Quisque id ornare dolor. Nunc sodales finibus rhoncus. Donec laoreet cursus ante vitae consectetur. Proin faucibus arcu sed tellus tempus feugiat. Morbi ante risus, laoreet eget elementum eget, porta vitae sapien. Nunc ut nisl ac erat dapibus consectetur. Integer eu lacinia leo. Morbi rhoncus sollicitudin dolor, et eleifend nisi laoreet ut. Proin et hendrerit enim, a dignissim diam. Sed hendrerit condimentum turpis vitae molestie. Quisque imperdiet mollis sed.",
      "Duis tincidunt blandit sem, fermentum consectetur velit tempus pretium. Vestibulum quis sagittis dui. Suspendisse in pretium felis. Nam varius accumsan nibh, et elementum metus iaculis non. Vestibulum quis augue nunc. Nullam posuere, lorem id sollicitudin mattis, turpis tellus iaculis lacus, in consectetur velit risus eu ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eleifend congue nisl eget malesuada. Aenean condimentum vitae massa quis porta. Donec erat metus, tincidunt at dignissim et, sodales eget libero. Integer id felis in diam aliquet luctus a a mauris. Duis et tortor pharetra, interdum nisl vitae, maximus neque. Nullam sollicitudin quis ipsum non dignissim. Aenean nibh ex, dictum sed facilisis eget, convallis quis velit. Nulla ac dolor in elit suscipit tristique eu at justo.Nullam bibendum neque vitae nunc interdum dapibus. Nulla facilisi. Sed eu blandit arcu, ac cursus ipsum. Mauris ullamcorper, metus et cras amet.",
      "Vivamus vitae blandit metus. Pellentesque iaculis eros tellus, rhoncus tempus lacus consectetur vel. Cras gravida risus arcu, at placerat ante tempus vel. Morbi eu eleifend est, non consequat augue. Integer ac purus ut turpis venenatis rutrum sed ut velit. Sed a suscipit diam. Ut ultricies auctor aliquam. Nullam lacus nisi, mollis et dui ut, euismod gravida sem. Fusce consectetur placerat urna, in posuere nisi fringilla vel. Donec vel elementum metus, a tempus eros. Vestibulum porta varius eros vel porttitor. Donec blandit odio ac pretium congue. In ultrices ut lorem nec iaculis. Vivamus vehicula dui eu sagittis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eros ante, fringilla quis imperdiet ac, mollis hendrerit orci.Nunc ex elit, convallis vitae neque eget, mollis placerat erat. In vitae facilisis est. Sed vulputate, diam eu porttitor porttitor, est risus viverra purus, in tincidunt felis ipsum eget est orci aliquam.",
      "Nulla at purus eget diam cursus pulvinar id eu metus. Nullam non condimentum neque. Vestibulum ornare tincidunt egestas. Quisque sit amet sapien id lacus varius rutrum non at ante. Phasellus consequat ullamcorper ipsum, non tempor velit fermentum nec. Praesent vel orci pharetra, ultricies nulla a, congue leo. Nullam ac feugiat nisl. Vestibulum id tempus elit. Proin et est eget libero ullamcorper interdum a sit amet est. Duis semper lacus eu tincidunt pretium. Fusce elementum nibh ut maximus gravida. Quisque mauris ipsum, elementum dapibus viverra ac, aliquet nec erat. Phasellus gravida iaculis leo, nec malesuada urna bibendum vitae. Vestibulum porta libero quis congue feugiat. Duis pellentesque imperdiet ante, rutrum cursus tellus ultrices id.Cras aliquet faucibus nisl sit amet scelerisque. Donec convallis bibendum placerat. Nunc tempus scelerisque euismod. Aenean a pulvinar urna. Quisque tincidunt sit amet risus at maximus. Nunc consequat ligula nulla, non semper libero maximus metus.",
      "Nullam tempus sodales dictum. Aliquam mauris enim, cursus vitae porttitor in, pretium laoreet orci. Donec ac egestas mauris, at elementum libero. Duis venenatis sapien eget interdum condimentum. Aenean porttitor sodales felis vitae lobortis. Suspendisse tristique semper libero, tristique facilisis ante vestibulum nec. Nulla quam metus, viverra ac nisi et, accumsan luctus odio. Duis sagittis mi quis tortor bibendum, ut dictum metus sollicitudin. Donec non risus lorem. Proin rhoncus quam sapien, eget consectetur enim sagittis eu. Donec fermentum massa augue, in scelerisque tortor ultricies non. Maecenas nec arcu lacus. Duis volutpat eros in nunc tristique ornare. Quisque sed nisi eros. Aenean sit amet aliquet odio.Quisque et tristique odio. Ut at mauris iaculis, sodales turpis eu, mattis mauris. Vestibulum quis egestas dui. Vivamus placerat, arcu eget consequat elementum, est justo volutpat tortor, eget sollicitudin lorem ipsum id urna. Ut pellentesque, nibh non iaculis consequat nullam.",
      "Nam enim dui, rutrum vel bibendum sed, rhoncus ac purus. Duis consectetur, ligula in consectetur finibus, arcu leo varius felis, at suscipit quam quam non tortor. Ut cursus libero ultricies varius ullamcorper. Donec eros nibh, eleifend sit amet mauris vitae, pellentesque rutrum risus. Duis pretium ultricies egestas. Nullam ac ultrices nunc, eu euismod purus. Morbi vestibulum tristique dolor, et sagittis massa. Phasellus in nisl quis nulla tristique euismod non ut sem. In hac habitasse platea dictumst. Proin ultricies ut justo vel interdum. Aliquam ut vehicula orci, at pharetra nulla. Suspendisse mollis dapibus mattis. Pellentesque vel magna ut turpis rhoncus porta.Nunc elementum urna pretium, cursus lorem et, tincidunt arcu. Aliquam laoreet magna ut ligula maximus ultricies. Donec maximus aliquet eros, sit amet accumsan metus vestibulum vitae. Nunc ultricies nisi nisl, a iaculis libero dictum eu. Nullam luctus luctus eros posuere volutpat. Phasellus bibendum, erat vulputate dictum sed."
    ];
    return (
      
     <Tilt className="Tilt hometilt" options={{
  reverse:        false,  // reverse the tilt direction
  max:            80,     // max tilt rotation (degrees)
  perspective:    10000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          1000,    // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          false,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)"    // Easing on enter/exit.
}}>

      <div className="homeWrap Tilt-inner">

      <div className="header">
      <h1 className="text underline--magical">dumblole</h1>
      </div>
      
      <Link className="homeButt link" to={"/about"}>
      home
      </Link>
     
      </div>
    
       </Tilt>

       

       
    );
  }
}

// export const ImageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "1.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     imageTwo: file(relativePath: { eq: "abc.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1080) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;


// <body className="no-scroll">
//         <div className="header">
//           <h1 className="text underline--magical">dumblole</h1>
//         </div>
//         <div className=" home-back">
//           {intro.map(intro => {
//             addPad = !!Math.round(Math.random());
//             console.log(addPad);
//             return (
//               <div key={intro}>
//                 <div className="desc-wrap lorem-rem">
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                 </div>
//                 <div className="desc-wrap">
//                   <h1 className="lorem-rem">{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                   <h1 className="lorem-rem">
//                     {console.log(addPad)}
//                     {addPad && shortLorem[Math.floor(Math.random() * shortLorem.length)]}
//                   </h1>
//                   <h1 className="text">
//                     &nbsp;
//                     {intro}
//                     &nbsp;
//                   </h1>
//                   <h1 className="lorem-rem">
//                     {!addPad && shortLorem[Math.floor(Math.random() * shortLorem.length)]}
//                   </h1>
//                   <h1 className="lorem-rem">{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                 </div>
//                 <div className="desc-wrap lorem-rem">
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                 </div>
//               </div>
//             );
//           })}
//           {introLink.map(({ link, name }) => {
//             addPad = !!Math.floor(Math.random);
//             return (
//               <div key={link}>
//                 <div className="desc-wrap lorem-rem">
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                 </div>
//                 <div className="desc-wrap">
//                   <h1 className="lorem-rem">
//                     {lorem[Math.floor(Math.random() * lorem.length)]}
//                     {addPad && shortLorem[Math.floor(Math.random() * shortLorem.length)]}
//                   </h1>
//                   <h1 className="text">
//                     &nbsp;
//                     <Link to={link} className="link underline--magical">
//                       {name}
//                     </Link>
//                     &nbsp;
//                   </h1>
//                   <h1 className="lorem-rem">
//                     {lorem[Math.floor(Math.random() * lorem.length)]}
//                     {addPad && shortLorem[Math.floor(Math.random() * shortLorem.length)]}
//                   </h1>
//                 </div>
//                 <div className="desc-wrap lorem-rem">
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                   <h1>{lorem[Math.floor(Math.random() * lorem.length)]}</h1>
//                 </div>
//               </div>
//             );
//           })}
//           {lorem.map(line => (
//             <div className="desc-wrap lorem-rem" key={line}>
//               <h1>{line}</h1>
//             </div>
//           ))}
//         </div>
//       </body>