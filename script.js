'use strict';

// Component 
function MyProjects(props) {
  return <div>
      <h1>{props.message1}</h1>
      <p>{props.message2}</p>
      <ol>
        {
          // use map() to loop thru array passed in props.list, creating new element for each array value
          props.list.map( 
            // copy current array value into item and pass to arrow function
            (item,index) => (
              <li key={index}>
                {item.projectname}
                <br/>{item.projectdate}
                <br/>{item.projectdescription}
                <br/>
                
                <p>
                  <a href={item.url}>
                <img src={item.thumbnail} width={200} height={200} alt={item.alttext} />
                
                    </a>
                  </p>
                <br/>
              </li>
              
            )
          )
        }
      </ol>
    </div>;
}

// define dataset as array in a variable
const data = [
  { projectname: 'My First Quiz', projectdate:'Feb 21,2022', projectdescription:"Construct a quiz with Drag and drop",thumbnail:"assets/quiz.png", alttext:"quiz" , url:"https://cs50c-week06-19-kikima.srjcethanwilde.repl.co/quiz.html" },
  { projectname: 'My First Carousel', projectdate:'March 7,2022', projectdescription: 'Create a promotional site highlighting Jquery plug-in' ,thumbnail:"assets/pluginpromo.png", alttext:'Jquery plug-ins and carousel' , url: 'https://cs50c-week07-18-kikima.srjcethanwilde.repl.co/promo.html'   },
  { projectname: 'My First Map', projectdate: 'March 14, 2022', projectdescription:"Create a map with Google Maps API with geolocation and markers" ,thumbnail: "assets/map.png", alttext:'Sebastopol Map' , url:  'https://cs50c-week08-20-kikima.srjcethanwilde.repl.co/'  },
  { projectname: 'My First Data Viz', projectdate:'April 18', projectdescription:'Use Data visualization from a JSON File' ,thumbnail: "assets/dataviz.png", alttext:'MyBackyard Data visualization' , url:"https://cs50c-week12-16-kikima.srjcethanwilde.repl.co/" },
   { projectname: 'My First Game', projectdate:'April 25, 2022' ,projectdescription:"Create a basic game using Phaser3 Game Engine" ,thumbnail: "assets/game1.png", alttext:"jumping game" , url: "https://cs50c-week13-17-kikima.srjcethanwilde.repl.co/" },
  { projectname: 'My Second Game', projectdate: 'May 2, 2022',projectdescription:"Create a more advanced game from a tutorial" ,thumbnail:"assets/game2.png", alttext:'advanced jumping game' , url:"https://cs50c-week14-16-kikima.srjcethanwilde.repl.co/ "   },
];

ReactDOM.render(
  <MyProjects list={data} message1="Welcome to My Projects!" message2="Here is a list of all of my projects in CS 50C" message3="Click on an image to see site" />,
  document.getElementById('mirApp')
);
