'use strict';

// Component 
function MyProjects(props) {
  return <div>
      <h1>{props.message1}</h1>
      <h3>{props.message2}</h3>
    <h4>{props.message3}</h4>
      <ul>
        {
          props.list.map( 
            (item,index) => (
              <li key={index}>
                <strong>{item.projectname}</strong>
                <br/>{item.projectdate}
                <br/>{item.projectdescription}
                <br/>
                
                <p>
                  <a href={item.url}>
                <img src={item.thumbnail}  width={200} height={200} alt={item.alttext} />
                
                    </a>
                  </p>
                <br/>
              </li>
              
            )
          )
        }
      </ul>
    </div>;
}

const data = [
  { projectname: 'My First Quiz', projectdate:'Feb 21, 2022', projectdescription:"JS quiz with Drag and Drop",thumbnail:"assets/quiz.jpg", alttext:"quiz" , url:"https://cs50c-week06-19-kikima.srjcethanwilde.repl.co/quiz.html" },
  { projectname: 'My First Carousel', projectdate:'March 7, 2022', projectdescription: 'JQuery plug-in promo site' ,thumbnail:"assets/promo.jpg", alttext:'Jquery plug-ins and carousel' , url: 'https://cs50c-week07-18-kikima.srjcethanwilde.repl.co/promo.html'   },
  { projectname: 'My First Map', projectdate: 'March 14, 2022', projectdescription:"Custome Google API map" ,thumbnail: "assets/map3.jpg", alttext:'Sebastopol Map' , url:  'https://cs50c-week08-20-kikima.srjcethanwilde.repl.co/'  },
  { projectname: 'My First Data Viz', projectdate:'April 18, 2022', projectdescription:'Data visualization with JSON' ,thumbnail: "assets/viz.jpg", alttext:'MyBackyard Data visualization' , url:"https://cs50c-week12-16-kikima.srjcethanwilde.repl.co/" },
   { projectname: 'My First Game', projectdate:'April 25, 2022' ,projectdescription:"Basic Phaser 3 game " ,thumbnail: "assets/game1.jpg", alttext:"jumping game" , url: "https://cs50c-week13-17-kikima.srjcethanwilde.repl.co/" },
  { projectname: 'My Second Game', projectdate: 'May 2, 2022',projectdescription:"More advanced Phaser3 game" ,thumbnail:"assets/game2.jpg", alttext:'advanced jumping game' , url:"https://cs50c-week14-16-kikima.srjcethanwilde.repl.co/ "   },
];

ReactDOM.render(
  <MyProjects list={data} message1="Welcome to My Projects!" message2="Here is a list of all of my projects in CS 50C" message3="Click on an image to see the site!" />,
  document.getElementById('mirApp')
);
