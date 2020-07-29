//example
import React, { Component } from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
// import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slide as Menu } from 'react-burger-menu'
import  CarouselC from './components/CarouselC.js'
//example



//First view
import home from './assets/index.png';
//Second view 
import logo from './assets/1m.png';
import menu1 from './assets/menu1.png';
import bebidas from './assets/be.png';
import pos from './assets/postres.png';
//third view
import tapas from './assets/tap.png';
import crudos from './assets/crud.png';
import delacasa from './assets/de.png';
import ensaladas from './assets/en.png';
import panes1 from './assets/panes.png';
import pizz from './assets/pizz.png';
import sushi from './assets/sushi.png';
import tacos from './assets/ta.png';
//Lading views
import tapainfo from './assets/tapin.png';
import crudosinfo from './assets/crudin.png';
import sushinfo from './assets/sushin.png';
import pizzainf from './assets/pizzain.png';
import panesinfo from './assets/panesin.png';
import ensaladasinfo from './assets/ensaladasin.png';
import tacosinfo from './assets/tacosin.png';
import casainfo from './assets/casain.png';
// Drinks menu
import wis from './assets/w.png';
import vin from './assets/v.png';
import ontap from './assets/on.png';
import coctails from './assets/cc.png';
import blanco from './assets/blk.png';
import licor from './assets/licor.png';
import esp from './assets/es.png';
//landing views
import w1 from './assets/w1.png';
import w2 from './assets/ww1.png';
import onn1 from './assets/on1.png';
import on11 from './assets/on11.png';
import on_11 from './assets/on111.png';
import blanc1 from './assets/blanc1.png';
import espum from './assets/espum1.png';
import tinto1m from './assets/tinto1.png';
import cla11 from './assets/cla1.png';
import ll11 from './assets/ll1.png';
import lll11 from './assets/lll1.png';
//dessert menu
import sweets from './assets/sweet1.png';
import scoops11 from './assets/scoops1.png';
import cafe11 from './assets/cafe1.png';
import infusion from './assets/infusion1.png';
//menu infor
import sweetinfor from './assets/sweetin.png';
import soopsin1 from './assets/soopsin.png';
import cafeo1 from './assets/cafeo.png';
import infuin from './assets/infuin.png';

//Menu
import hambur from './assets/hambur.png'

 
class App extends Component{
  constructor(props){
    super(props);
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this); 
    this.onClick = this.onClick.bind(this);
  }

  onChange(value) {
    this.setState({value});
  }

  onClick(value){
    this.setState({value});
  }

  handleEvent(){
    console.log(this.props);
  }
    
  render(){
  return (
    

    <div>
        
    <div className="App">
    
    <Menu>
          <div>
          <a value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 0))} id="home" className="menu-item" >Home</a><br/><br/> 
           <a value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 1))} id="home" className="menu-item" >Menú</a><br/><br/>
           <a value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))} id="about" className="menu-item">Bebidas</a><br/><br/>
           <a value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))} id="contact" className="menu-item" >Postres</a><br/><br/><br/>
           
           </div>
           </Menu>
      <div className="positionhv">
        <img src={hambur}/>
      </div>
     <Carousel  value={this.state.value} onChange={this.onChange}
     slides={[
      (<div>1</div>),
      (<div>2</div>)
     ]}
     >
     
        <div>
        
         <img src={home}/>
        </div>
       
       <div>
         <div className="opciones">
           <img  src={logo} />
           <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))} src={menu1}/>
           <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={bebidas}/>
           <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  src={pos}/>
         </div>
        </div>  
       
       <div >
          <div className="wrap">
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 3))} src={tapas}/>
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 7))}  src={pizz}/>
          </div>
          <div className="wrap">
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 4))} src={crudos}/>
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 8))}  src={panes1}/>
          </div>
          <div className="wrap"> 
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 5))}  src={sushi}/>
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 9))}  src={tacos}/>
          </div>
          <div className="wrap"> 
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 6))}  src={ensaladas}/>
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 10))}  src={delacasa}/>
          </div>
        </div>

        <div  className="landing">
            <img src={tapainfo}/>
        </div>

        <div className="landing">
            <img src={crudosinfo}/>
        </div>

        <div className="landing">
            <img src={sushinfo}/>
        </div>

        <div className="landing">
            <img src={ensaladasinfo}/>
        </div>

        <div className="landing">
            <img src={pizzainf}/>
        </div>

        <div className="landing">
            <img src={panesinfo}/>
        </div>

        <div className="landing">
            <img src={tacosinfo}/>
        </div>

        <div className="landing">
            <img src={casainfo}/>
        </div>

        <div className="flex">
         <div>
          <div className="wrap">
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 12))}  className="wi" src={wis}/>
            <img  className="vi" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 19))}  src={vin}/>
          </div>
          <div className="wrap">
            <img className="on" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 14))}  src={ontap}/>
            <img className="cc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 20))} src={coctails}/>
          </div>
          <div className="wrap">
            <img className="blanc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 17))}  src={blanco}/>
            <img className="cc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 21))}  src={licor}/> 
          </div>
          <div className="wrap">
            <img className="blanc1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 18))} src={esp}/>
            <img/>
          </div>
         </div>
        </div>
        <div className="landing">
          <img src={w1}/>
        </div>

        <div>
        <img src={w2}/> 
        </div>
        <div>
        <img src={onn1}/> 
        </div>
        <div>
        <img src={on11}/> 
        </div>
        <div>
        <img src={on_11}/> 
        </div>
        <div>
        <img src={blanc1}/> 
        </div>
        <div>
        <img src={espum}/>
        </div>
        <div>
        <img src={tinto1m}/>
        </div>
        <div>
        <img src={cla11}/> 
        </div>
        <div>
        <img src={ll11}/> 
        </div>
        <div>
        <img src={lll11}/> 
        </div>
        <div>
          <div className="opciones">
          <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 24))} src={sweets}/>
          <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 25))} src={scoops11}/>
          <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 26))}  src={cafe11}/>
          <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 27))}  src={infusion}/>
          </div>
        </div>
        <div> 
          <img  src={sweetinfor}/>
        </div>
        <div>
          <img src={soopsin1}/>
        </div>
        <div>
          <img src={cafeo1}/>
        </div>
        <div>
          <img src={infuin}/>
        </div>
     </Carousel>
    </div>
    </div>
   
  );
}
}

export default App;
