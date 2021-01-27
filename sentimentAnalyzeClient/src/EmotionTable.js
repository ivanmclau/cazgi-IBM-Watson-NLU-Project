import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    state = { emotionList:[] }

    componentDidMount() {
        
        const req = JSON.stringify(this.props.emotions);
        
        //console.log( JSON.stringify(this.props.emotions));
        /*
        req.then(resp => {
            let listOfEmotion = resp.data;
            let listOfEmotionAsArray = Object.entries(listOfEmotion);
            
            let emotionDetails = listOfEmotionAsArray.map((emontionDetial)=>{
                let emotionListCollection = Object.entries(emontionDetial[1])
                return <div>{emotionListCollection[1][1]}</div>
                //return <tr><td width='200px'>{eventListCollection[4][1]}</td><td width='150px'>{eventListCollection[5][1]}</td><td width='100px'>{eventListCollection[7][1]} </td><td width='800px'>{eventListCollection[10][1]}</td><td width='300px'> {eventListCollection[11][1]}</td></tr>
            })
            this.setState({emotionList:emotionDetails})
            
      })
    .catch(err => {
        console.log(err.toString())
    });
    */
  }

    render() {
        let li_ctr = 0;
        return (  
            <div>
                {/*You can remove this line and the line below. */}
                {JSON.stringify(this.props.emotions)}
                {/*<table border="1">
                    {this.state.emotionList.map(function(emotionDetails){
                    return <div key={li_ctr++}>{emotionDetails}</div>;
                    //return <tr key={li_ctr++}>{eventDetails}</tr>;
                    })}
                </table>*/}
                <table className="table table-bordered">
                    <tbody>
                    <tr><td>Sadness</td> <td>{JSON.stringify(this.props.emotions.sadness)}</td></tr>
                    <tr><td>Joy</td> <td>{JSON.stringify(this.props.emotions.joy)}</td></tr>
                    <tr><td>Fear</td> <td>{JSON.stringify(this.props.emotions.fear)}</td></tr>
                    <tr><td>Disgust</td> <td>{JSON.stringify(this.props.emotions.disgust)}</td></tr>
                    <tr><td>Anger</td> <td>{JSON.stringify(this.props.emotions.anger)}</td></tr>

                    {
                    //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    
}
export default EmotionTable;
