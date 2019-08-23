import React,{Component} from 'react';
import Content from '../components/Content'

class MainPage extends Component  { 
    state = {
        contentImg : []
    }
    componentDidMount = ()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
        .then(response => response.json())
        .then(json => this.setState(()=>({contentImg:json})));
    }
    render(){
        const {contentImg} = this.state;
        return (
            <div className='mainPage'>
              <img alt='' src='img/big-photo.png' className='mainImage'/>
              <div >
                { contentImg.length>0 ?
                  <div className='mainContent'>
                  <Content url={contentImg[0].thumbnailUrl} header='Features' />
                  <Content url={contentImg[1].thumbnailUrl} header='Arhitecture' />
                  <Content url={contentImg[2].thumbnailUrl} header='Insights' />
                  </div>
                  : null}
                </div>
            </div>
    )
    }
}

export default MainPage
