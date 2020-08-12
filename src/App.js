//example
import React, { Component } from 'react';
import './App.css';
import './landing.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from '@brainhubeu/react-carousel';
// import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import NavBar from './components/Nav/Navbar';

//example



//First view
import home from './assets/index.png';
//Second view 
import logo from './assets/1m.png';
import menu1 from './assets/menu1.png';
import bebidas from './assets/be.png';
import pos from './assets/postres.png';
import crudos from './assets/crudos.png';
import sushi from './assets/sushi.png';
import sopas from './assets/sopas.png';
import flatbreads from './assets/flatbreads.png';
import panes from './assets/panes.png'
import tacos from './assets/tacos.png';
import madehome from './assets/delacasa.png';
//third view
import vino1 from './assets/vino1.png';
import vino2 from './assets/vino2.png';
import vino4 from './assets/vino4.png';
import vino5 from './assets/vino5.png';
import vino6 from './assets/vino6.png';
import vino7 from './assets/vino7.png';
 
//Postres
import cafe1 from './assets/postre1.png';
import cafe2 from './assets/postre2.png';
import cafe3 from './assets/postre3.png';
import cafe4 from './assets/postre4.png';

//Tipografia



//Menu
import tapitas from './assets/tapas.png';

//arrows




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  onClick(value) {
    this.setState({ value });
  }

  handleEvent() {
    console.log(this.props);
  }

  haddleChangeIndex(value) {
    this.setState({ value })
  }

  render() {
    return (


      <div>

        <div className="App">
          <div className="<ind">
            <NavBar onChangeItem={this.onChange}>
            </NavBar>
          </div>


          <div className="altura">
            <Carousel plugins={[
              'arrows',
              'clickToChange'
            ]} value={this.state.value} onChange={this.onChange}
              slides={[
                (<div>1</div>),
                (<div>2</div>)
              ]}
            >

              <div className="flexible">

                <img className="logo1" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 1))} src={home} alt="merkato1" />


              </div>

              <div>
                <div className="opciones10">
                  <img className="sizelogo" src={logo} alt="merkato" />
                  <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 2))} alt="merkato" src={menu1} />
                  <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 3))} alt="merkato" src={bebidas} />
                  <img className="sizelogo" value={this.state.value} onClick={e => this.onClick(parseInt(e.target.value || 4))} alt="merkato" src={pos} />

                </div>
              </div>

              <div className="opciones0">
                <div className="landingp">
                  <img className="tapitas1" alt="merkato" src={tapitas} />
                  <p>·TAPAS·</p>
                  <p>Pulpo a la gallega y yuca 10</p>
                  <p className="margintext">Tostada de camarones aguachile y escabeche de <br />zanahoria, cebolla y elote 9</p>
                  <p>Hummus con tostadas o zanahoria 8</p>
                  <p>Papas bravas o belgas con salsa brava y alioli 7</p>
                  <p>Croquetas de jamón y queso suizo 7</p>
                  <p>Chicharrones de pulpo con alioli de pinot grigio 12</p>
                  <p>Buffalo o BBQ bites de coliflor 8</p>
                  <p>Tuna poke nachos 11</p>
                  <p>Jamón ibérico onza 4.5 + Pan con tomate 3</p>
                  <p>Tabla de quesos importados con jalea de mora 10</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={crudos} />
                  <p>Pinchos de ahi tuna sobre sambal y nachos de wonton 10</p>
                  <p>Washimi de tilapia en leche de tigre con maracuya y<br /> aceite de ajonjoli tostado 8</p>
                  <p>Tartar de tuna y salmón con quinoa roja y manzana verde 11</p>
                  <p>Spicy tartar de salmón o tuna 10</p>
                  <p>CARPACCIO:</p>
                  <p>Salmón en ponzu y miel 8</p>
                  <p>Atún sellado en ponzu y miel 9</p>
                  <p>Pulpo 9 </p>
                  <p>Lomito y parmesano 8</p>
                  <p>CEVICHES:</p>
                  <p>Camarón y cítricos 11</p>
                  <p>Tuna al rocotto 11</p>
                  <p>TATAKI:</p>
                  <p>Ahi tuna 9</p>
                  <p>Salmón 10</p>
                  
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={sushi} />
                  <p>California roll 8</p>
                  <p>Camarón tempura roll 10</p>
                  <p>Dragon roll 9</p>
                  <p>Spicy tuna o salmon roll 10</p>
                  <p>Salmon skin roll 10</p>
                  <p>Tuna tataki roll 11</p>
                  <p>Nigiri de ahi tuna o Salmón 5</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={sopas} />
                  <p>Sopa de tomate rostizado y albahaca fresca 6</p>
                  <p>Minestrone de lentejas, garbanzos y camote 8</p>
                  <p>Burrata en ensalada de arúgula, tomates cherry y reducción balsámica 11</p>
                  <p>Ensalada Santa Fe con pollo a la plancha 11</p>
                  <p>Ensalada de quinoa y feta con atún sellado 14</p>
                  <p>Ensalada ceasar 10 *Adicional puedes agregar proteína Ensalada de pulpo y camote en quinoa con 
                   aderezo asiático y cilantro 12</p>
                  <p>Nigiri de ahi tuna o Salmón 5</p>
                  <p>Ensalada caprese de esparrágos y boconccini 9</p>
                  <p>Ensalada de pavo rostizado, garbanzos y elote chamuscado 9</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={flatbreads} />
                  <br/><br/>
                  <p>Margarita y stracciatella 10</p>
                  <p>Cuatro quesos y portobello 10</p>
                  <p>Camarón y manchego 13</p>
                  <p>Prosciutto, pesto y tomates deshidratados 11</p>
                  <p>Manzana y brie con almendra caramelizada 10</p>
                  <p>Lomito, cebolla caramelizada y roquefort 12</p>
                  <p>Pulpo a la gallega y feta 12</p>
                  <p>Chile morron, espárragos, champignon y manchego 11</p>
                  <p>Pollo chipotle o nuca de cerdo, tocino caramelizado y piña 11</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={panes} />
                  <br/><br/>
                  <p>Elige tu acompañamiento: Papas bravas, belgas, ensalada de frijoles o frescaMerkato club 10</p>
                  <p>Grilled cheese con tomate y tocino caramelizado 9</p>
                  <p>Pavo, tocino y aguacate 10</p>
                  <p>Pavo rostizado y queso suizo 11</p>
                  <p>Pollo al pesto, berro con escabeche de manzana verde y zanahoria 11</p>
                  <p>Roast beef, suizo y cebolla caramelizada 11</p>
                  <p>Lomito con hongos salteados, berro y alioli 13</p>
                  <p>Prosciutto, mozarella, y arúgula 12</p>
                  <p>Hamburguesa Merkato 13</p>
                  <p>Hamburguesa de pulled pork con mole y escabeche de piña y zanahoria 13</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={tacos} />
                  <br/><br/>
                  <p>Lomito con chimichurri 3</p>
                  <p>Tilapia en panko 3</p>
                  <p>Atún sellado 3</p>
                  <p>Pulpo al mole 3</p>
                  <p>Nuca de cerdo 3</p>
                  
                </div>  
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={madehome} />
                  <br/><br/>
                  <p>Ravioles negros rellenos de langosta 19</p>
                  <p>Ravioles rellenos de ragout toscano de hongos 17</p>
                  <p>Gnocchi dorados con salsa blanca o marinara 12</p>
                  <p>Risotto de pulpo y aceite de trufa 18</p>
                  <p>Salmón al mole en puré de camote y vegetales 21</p>
                  <p>Filete de tilapia flambeado con vino blanco y mantequilla dorada, con puré de papa y chicharrón de piel de salmón 13</p>
                  <p>Camarones chipotle con papas y puré de aguacate 19</p>
                  <p>Atún sellado en panko con chimichurri, maiz y esparrágos 19</p>
                  <p>Stk frites 17</p>
                  <p>Filet mignon en puré de papa y hongos salteados 21</p>
                </div> 
              </div>
              <div>
              



                <div className="opciones1">
                <div className="landingp1">
                  <img className="tapitas1" alt="merkato" src={vino1} />
                  <br/><br/>
                  <p>BLENDED</p>
                  <p>Buchanan's 12 años 6/9/78</p>
                  <p className="margintext">Old Parr 12 años 7/12/84</p>
                  <p>Chivas Regal 12 años 6/10/88</p>
                  <p>Chivas Regal 18 años 8/14/125</p>
                  <p>Chivas Extra 10/18/98</p>
                  <p>JW Black Label 5/8/70</p>
                  <p>JW Gold Label 7/12/97</p>
                  <p>BOURBON</p>
                  <p>Jack Daniel's Old No. 7 4/7/67</p>
                  <p>Jack Daniel's Single Barrel 7/12/105</p>
                  <p>Woodford Reserve 6/10/95 </p>
                  <p>Wild Turkey 5/8/72</p>
                  <p>Jim Beam White Bourbon 3/5/56</p>
                  <p>Jim Beam Honey Bourbon 3/5/56</p>
                  <p>Jim Beam Black Bourbon  4/7/61</p>
                  <p>SPEYSIDE</p>
                  <p>Craigellachie 13 años 8/14</p>
                  <p>Cragganmore 12 años 8/14</p>
                  <p>Glenfiddich 12 años 6/10/85</p>
                  <p>Glenfiddich 15 años 8/14/117</p>
                  <p>Glenfiddich 18 años 10/18/147</p>
                  <p>Glenlivet Founders Reserve 6/10/81</p>
                  <p>Glenlivet Nadurra Olorroso 10/18/131</p>
                  <p>Glenlivet Nadurra Peated 10/18/139</p>
                  <p>Glenlivet 18 años 10/18/139</p>
                  <p>Glenlivet Nadurra First Fill 10/18/139</p>
                  <p>HIGHLANDS</p>
                  <p>Oban 8/14</p>
                  <p>Clynelish 14 años 8/14</p>
                  <p>Glenmorangie Nectar D'or 8/14/116</p>
                  <p> Glenmorangie La Santa 12 años 8/14/109</p>
                  <p>Glenmorangie La Quinta Ruban 8/14/121</p>
                  <p>Aberlour 12 años 7/12/93</p>
                  <p>Macallan 12 años 10/18/115</p>
                  <p>Bowmore 7/12</p>
                  <p>Ardmore Tradition 8/14</p>
                  <p>Aberfeldy 12 años 7/12</p>
                  <p>ISLAY</p>
                  <p>Ardbeg Corryvreckan 8/16</p>
                  <p>Ardberg 10 años 8/14</p>
                  <p>Caol Ila 12 años 8/14</p>
                  <p>Lagavulin 16 años 10/18</p>
                  <p>Laphroaig 8/14</p>
                  <p>ISLEY OF SKYE</p>
                  <p>Talisker 10 años 8/14</p>
                  <p>Talisker Dark Storm 10/18</p>
                  <p>ORKNEY ISLANDS</p>
                  <p>Highland Park 12 años 8/14</p>



                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={vino2} />
                  <p>12 onz 4</p>
                  <p>20 onz 6</p>
                  <p>SIVAR BREWING COMPANY</p>
                  <p>Maestro Pils</p>
                  <p>Mágica Wheat Ale</p>
                  <p>Premio Lager</p>
                  <p>Pasión Brown Ale</p>
                  <p>CADEJO</p>
                  <p>Mera Belga Wheat Ale</p>
                  <p>Wheat American Pale Ale</p>
                  <p>Suegra IPA</p>
                  <p>SANTO CORAJE</p>
                  <p>Classic Pils</p>
                  <p>Brown Ale</p>
                  <p>Premium Lager</p>
                  <p>Dunkel Brown</p>
                  <p>LAGER</p>
                  <p>Regia 5</p>
                  <p>Tucher Hell 6</p>
                  <p>Sam Adams 6</p>
                  <p>Grolsch 6</p>
                  <p>Heineken 5</p>
                  <p>Fuller’s London 6</p>
                  <p>Corona 5</p>
                  <p>Presidente 5</p>
                  <p>Peroni 6</p>
                  <p>Golden 4</p>
                  <p>Pilsener 4</p>
                  <p>Suprema 4</p>
                  <p>Stella Artois 5</p>
                  <p>Birra Moretti 6</p>
                  <p>PILS</p>
                  <p>Pilsner Urquell 6</p>
                  <p>Acme 6</p>
                  <p>Steller 6</p>
                  <p>HEFE / WEIZEN / WITBIER</p>
                  <p>Erdinger Weissbier 6</p>
                  <p>Tucher Hefe 6</p>
                  <p>ALES</p>
                  <p>Bass Ale 6</p>
                  <p>Blue Moon 6</p>
                  <p>Cadejo Roja 4</p>
                  <p>New Castle Brown Ale 6</p>
                  <p>Fuller India Pale Ale 6</p>
                  <p>Sierra Nevada Pale Ale 6</p>
                  <p>Leffe 6</p>
                  <p>STOUT</p>
                  <p>Bayobator 6</p>
                  <p>North Coast 6</p>
                  <p>Sumeria 6</p>
                  
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={vino4} />
                  <p>Don Luis Sauvignon Blanc 4/23</p>
                  <p>Banfi Le Rime Pinot Grigio 4/23</p>
                  <p>Marques de Caceres Verdejo 33</p>
                  <p>Mar de Frades Albarino 34</p>
                  <p>Casa Albali Verdejo 4/20</p>
                  <p>Casa Albali Verdejo 4/20</p>
                  <p>Flor de Vetus Verdejo 5/26</p>
                  <p>Viña Montes Sel. Limitada Sauvignon Blanc 27</p>
                  <p>Viña Montes Classic Series Chardonnay 4/22</p>
                  <p>Bianco di Ciccio IGT 34</p>
                  <p>Norton Torrontes 4/24</p>
                  <p>Chateau Ste Michelle Riesling 39</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={vino5} />
                  <p>Cinzano Prosecco Rosé 25</p>
                  <p>Prosecco Pergolo La Pieve 36</p>
                  <p>Chandon Rosé 39</p>
                  <p>Chandon Extra Brut 35</p>
                  <p>Prosecco Antichello 5/30</p>
                  <p>ROSADO</p>
                  <p>Cousiño Macul Gris 25</p>
                  <p>Banfi Centine Rosé 36</p>
                  <p>TINTO</p>
                  <p>Antichello Valpolicela DOC 6/31</p>
                  <p>Two Hands Picture Series Maclaren Shiraz 47</p>
                  <p>La Crema Monterrey Pinot Noir 44</p>
                  <p>Alamos Malbec 4/20</p>
                  <p>Escorihuela Garson Malbec 6/33</p>
                  <p>Catena Malbec 45</p>
                  <p>Las Perdices Pinot Noir 44</p>
                  <p>Maipo Vitral Reserva Merlot 4/20</p>
                  <p>Banfi Cum Laude IGT 45</p>
                  <p>Casa Albali Gran Seleccion Tempranillo 24</p>
                  <p>Montes Alpha Carmenere 40</p>
                  <p>Ramón Roqueta Garnacha 30</p>
                  <p>Los Vascos Gran Reserva 46</p>
                  <p>Banfi Brunello di Montalcino 69</p>
                  <p>Carpineto Dogajolo IGT 42</p>
                  <p>Cousino Macul Finis Terrea 43</p>
                  <p>Montepulciano D'Abruzzo Colline Teramame 51</p>
                  <p>Ramon Bilbao Reserva 41</p>
                  <p>El Enemigo Cab Franc 2015 59</p>
                  <p>El Enemigo Malbec 2015 59</p>
                  <p>Robert Moldavi Pinot Noir 44</p>
                  <p>Banfi Chanti Classico 47</p>
                  <p>Flor de Vetus Toro Tempranillo 6/33</p>
                  <p>Louis Martini Cab Sauvignon Sonoma 47</p>
                  

                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={vino6} />
                  <br/><br/>
                  <p>Antichello Valpolicela DOC 6/31</p>
                  <p>Two Hands Picture Series Maclaren Shiraz 47</p>
                  <p>La Crema Monterrey Pinot Noir 44</p>
                  <p>Alamos Malbec 4/20</p>
                  <p>Escorihuela Garson Malbec 6/33</p>
                  <p>Catena Malbec 45</p>
                  <p>Las Perdices Pinot Noir 44</p>
                  <p>Maipo Vitral Reserva Merlot 4/20</p>
                  <p>Banfi Cum Laude IGT 45</p>
                  <p>Casa Albali Gran Seleccion Tempranillo 24</p>
                  <p>Montes Alpha Carmenere 40</p>
                  <p>Ramón Roqueta Garnacha 30</p>
                  <p>Los Vascos Gran Reserva 46</p>
                  <p>Banfi Brunello di Montalcino 69</p>
                  <p>Carpineto Dogajolo IGT 42</p>
                  <p>Cousino Macul Finis Terrea 43</p>
                  <p>Montepulciano D&#39;Abruzzo Colline Teramame 51</p>
                  <p>Ramon Bilbao Reserva 41</p>
                  <p>El Enemigo Cab Franc 2015 59</p>
                  <p>El Enemigo Malbec 2015 59</p>
                  <p>Robert Moldavi Pinot Noir 44</p>
                  <p>Banfi Chanti Classico 47</p>
                  <p>Flor de Vetus Toro Tempranillo 6/33</p>
                  <p>Louis Martini Cab Sauvignon Sonoma 47</p>
                </div>
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={vino7} />
                  <br/><br/>
                  <p>Gin martini 6</p>
                  <p>Old fashioned 8</p>
                  <p>Manhattan 8</p>
                  <p>Margarita 6</p>
                  <p>Mojito 5</p>
                  <p>Carajillo 7</p>
                  <p>Sangría 5</p>
                  <p>Aperol Spritz 7</p>
                  <p>Negroni 7</p>
                  <p>Moscow Mule 7</p>
                  <p>HANDCRAFTED</p>
                  <p>Gingibre 9</p>
                  <p>Mad Thai 7</p>
                  <p>Berry Martini 8</p>
                  <p>Italian Summer 7</p>
                  <p>La Botica 11</p>
                  <p>Sangría Merkato 8</p>
                  <p>Minuit 12</p>
                  <p>Cucumber Gin Mule 7</p>
                  <p>Pomelo Hot Margarita 8</p>
                  <p>Citrus Pear 7</p>
                </div>
                
                
                </div>
              </div>
              <div>
                <div className="opciones3">
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={cafe1} />
                  <br/><br/>
                  <p>Budin Merkato 6</p>
                  <p>Budín de banano 7</p>
                  <p>Pecado de chocolate 7</p>
                  <p>Creme brulee 5</p>
                  <p>Creme brulee de coco 5</p>
                  <p>Panacotta de frutos rojos 6</p>
                  <p>Lava cake de dulce de leche 7</p>
                  <p>Key lime pie 5</p>
                  <p>Mousse de chocolate horneado y banano caramelizado 6</p>
                  
                </div> 
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={cafe2} />
                  <br/><br/>
                  <p>NIEVES 4</p>
                  <p>Limón y hierbabuena</p>
                  <p>Maracuya</p>
                  <p>Mora</p>
                  <p>Mango zula</p>
                  <p>Coco</p>
                  <p>SORBETES 4</p>
                  <p>Vainilla</p>
                  <p>Dulce de leche</p>
                  <p>Chocolate belga</p>
                </div> 
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={cafe3} />
                  <br/><br/>
                  <p>Americano 2</p>
                  <p>Latte 2.5</p>
                  <p>Espresso 2</p>
                  <p>Machiatto 2.5</p>
                  <p>Capuccino:</p>
                  <p>Sencillo 3</p>
                  <p>Doble 4</p>
                  <p>HELADO</p>
                  <p>Latte 3</p>
                  <p>Té chai 3</p>
                  <p>Café de vainilla 3.5</p>
                  <p>CON LICOR</p>
                  <p>Minuit 12</p>
                  <p>Carajillo 7</p>
                </div> 
                <div className="landingp1">
                  <img className="tapitas12" alt="merkato" src={cafe4} />
                  <br/><br/>
                  <p>DE PEDASI CON AMORDETOX</p>
                  <p>Té verde, lemongrass, hoja dehigo, piel de naranja, jengíbre, jazmín, menta, cardamomo, hierba de Santa María 3</p>
                  <p>¡HASTA MAÑANA!TISANA RELAJANTE</p>
                  <p>Manzanilla,  jazmín, tilo, lavanda, hojas de naranja agria y menta 3</p>
                  <p>INDIAN MASALA CHAI DIGESTIVO</p>
                  <p>ENSAYO DE AMOR ANTIOXIDANTE</p>
                  <p>Té negro Darjeeling de primera cosecha 2018, manzana, pétalos de rosa, pimienta de Jamaica 3</p>
                  <p>TÉ OOLONG OSMANTHUS ANTIOXIDANTE</p>
                  <p>TÉ MERKATO SELECCIÓN ESPECIAL</p>
                  <p>Té verde Giddapahar, jazmín, pétalos de rosa, lavanda, rosa de jamaica, piel de mandarina y vaina de vainilla 3</p>
                </div> 
                
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
