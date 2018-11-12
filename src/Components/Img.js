import React, { Component } from 'react';
import './img.css';


class Img extends Component {
 


  render() {
    let imgs = this.props.items.arrImg.map((el)=><img  alt='icon' className={+this.props.items.active === el.id  ? 'imgBorder' : ''} key={el.id} src={el.src}></img>)
    return (
      <div className="ImgWrapp" tabIndex="1"  >
        {imgs}
      </div>
    );
  }
}
 
export default Img;
