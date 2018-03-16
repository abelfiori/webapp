import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux'
import DirectorySolution from '../directorySolution';
import { bindActionCreators } from 'redux'
import Result from '../result'
import resources from '../../api/resources.js'
import DirectoryHeader from '../directoryHeader'
import ImageBarb from '../../assets/images/home/lady.png';
import DirectoryDigital from '../directoryDigital'

const characterStyle = {
  height: 170,
  width: 100,
  background:'no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  backgroundSize: 100,
  overflow: 'hidden',
  backgroundPosition: 'bottom right',
  position:'absolute',
  marginLeft:-40
}


function Directory(props){
  // 1/ Retrieve the data


  // 2/ Rank priorities
  // 3/ Choose the right solution

  function solutionMatching(){
    console.log(props.counter.answersArray);
    var priorities = props.counter.answersArray;
    // console.log('Vediamo se dice giusto');
    // console.log(!(priorities) );
    if ( !!(priorities) ) priorities= [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], ];
    var results = Result(priorities);

    return [
      resources.filter(data=>data.label===results[0][0]),
      resources.filter(data=>data.label===results[1][0]),
      resources.filter(data=>data.label===results[2][0]),
    ];
  }

  const renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website} textColor='black'/>
    )
    const renderSolutionsRec = (key) => (
        <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].comments} imageURL={key[0].imgURL} website={key[0].website} textColor='white'/>
      )

    window.scrollTo(0,0);


  return(
    <div className='directoryContainer'>
      <div >
        <DirectoryHeader />
      </div>
      <DirectoryDigital />

    </div>


  )
}

//
// <div className='directoryTitleWrapper'>
//   <h2 className='directoryTitle'>Exercise</h2>
// </div>
//
// <div className="solutionWrapper">
//   <div className="solutionContainer">
//     <DirectorySolution />
//   </div>
//   <div className="solutionContainer">
//   <DirectorySolution />
//
//   </div>
//   <div className="solutionContainer">
//   <DirectorySolution />
//
//   </div>
// </div>


const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
