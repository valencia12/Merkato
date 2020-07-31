//example
import React, { Component } from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from '@brainhubeu/react-carousel';
// import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slide as Menu } from 'react-burger-menu'

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

//arrows
import rigtha from './assets/arrow.png';
import lefta from './assets/back.png';

 
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
          <p value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 0))}   className="menu-item" >Home</p>
           <p value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 1))}   className="menu-item" >Menú</p>
           <p value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}   className="menu-item">Bebidas</p>
           <p value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  className="menu-item" >Postres</p><br/>
           
           </div>
           </Menu>
      <div className="positionhv">
        <img src={hambur} alt="merkato"/>
      </div>
      <div className="altura">
     <Carousel    plugins={[
          'arrows',
          'clickToChange'
        ]} value={this.state.value} onChange={this.onChange}
     slides={[
      (<div>1</div>),
      (<div>2</div>)
     ]}
     >
     
        <div className="flexible">

         <img className="logo1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 1))} src={home} alt="merkato"/>
         
         
        </div>
       
       <div>
         <div className="opciones">
           <img className="sizelogo" src={logo} alt="merkato" />
           <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))} alt="merkato" src={menu1}/>
           <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))} alt="merkato"  src={bebidas}/>
           <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))} alt="merkato"  src={pos}/>
           
         </div>
        </div>  
       
       <div className="wrapparent">
          <div className="wrap">
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 3))} alt="merkato"  src={tapas}/>
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 7))} alt="merkato"  src={pizz}/>
          </div>
          <div className="wrap">
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 4))} alt="merkato"  src={crudos}/>
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 8))} alt="merkato"  src={panes1}/>
          </div>
          <div className="wrap"> 
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 5))} alt="merkato"  src={sushi}/>
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 9))} alt="merkato"  src={tacos}/>
          </div>
          <div className="wrap"> 
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 6))} alt="merkato"  src={ensaladas}/>
            <img className="margin1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 10))} alt="merkato"  src={delacasa}/>
          </div>
        </div>

        <div  className="landing">
          <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={tapainfo} alt="merkato" />
        </div>

        <div className="landing">
        <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={crudosinfo} alt="merkato" />
        </div>

        <div className="landing">
        <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={sushinfo} alt="merkato" />
        </div>

        <div className="landing">
         <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={ensaladasinfo} alt="merkato" />
        </div>

        <div className="landing">
          <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={pizzainf} alt="merkato" />
        </div>

        <div className="landing">
         <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={panesinfo} alt="merkato" />
        </div>

        <div className="landing">
          <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={tacosinfo} alt="merkato" />
        </div>

        <div className="landing">
          <div className="regresa12">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))}  src={lefta}/>
          </div>
            <img className="landing1" src={casainfo} alt="merkato" />
        </div>

        <div className="flex">
         <div>
          <div className="wrap">
            <img value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 12))}  alt="merkato"  className="wi" src={wis}/>
            <img  className="vi" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 19))} alt="merkato"  src={vin}/>
          </div>
          <div className="wrap">
            <img className="on" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 14))} alt="merkato"   src={ontap}/>
            <img className="cc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 20))} alt="merkato"  src={coctails}/>
          </div>
          <div className="wrap">
            <img className="blanc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 17))} alt="merkato"  src={blanco}/>
            <img className="cc" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 21))} alt="merkato"  src={licor}/> 
          </div>
          <div className="wrap">
            <img className="blanc1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 18))} alt="merkato"  src={esp}/>
            
          </div>
         </div>
        </div>
        <div className="landing">
           <div className="regresa12w">
            <img className="regresa1" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
          <img  className="bebidas" src={w1} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={w2} alt="merkato" /> 
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={onn1} alt="merkato" /> 
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={on11} alt="merkato" /> 
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={on_11} alt="merkato" /> 
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={blanc1} alt="merkato" /> 
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={espum} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={tinto1m} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={cla11} alt="merkato"/> 
        </div>
        <div>
           <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={ll11} alt="merkato"/> 
        </div>
        <div>
        <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 11))}  src={lefta}/>
          </div>
        <img className="beb" src={lll11} alt="merkato"/> 
        </div>
        <div>
          <div className="opciones">
          <img className="postres" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 24))} alt="merkato" src={sweets}/>
          <img className="postres" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 25))} alt="merkato" src={scoops11}/>
          <img className="postres" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 26))} alt="merkato" src={cafe11}/>
          <img className="postres" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 27))} alt="merkato" src={infusion}/>
          </div>
        </div>
        <div> 
         <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  src={lefta}/>
          </div>
          <img  className="beb" src={sweetinfor} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  src={lefta}/>
          </div>
          <img className="beb" src={soopsin1} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  src={lefta}/>
          </div>
          <img className="beb" src={cafeo1} alt="merkato" />
        </div>
        <div>
          <div className="regresa12w">
            <img className="regresa16" alt="merkato"  value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 23))}  src={lefta}/>
          </div>
          <img className="beb" src={infuin} alt="merkato" />
        </div>
     </Carousel>
     </div>
    </div>
    </div>
   
  );
}
}

export default App;
