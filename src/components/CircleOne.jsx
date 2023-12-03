import React from 'react'

const CircleOne = (props) => {

    function customFunction(y){
        var x1 =50;
        var y1=0;

        var x2=100;
        var y2=1;

        var m= (y2-y1)/(x2-x1);
        var x= ((y-y1)/m)+x1;

        return x;
    }

    const circleOneStyle = {
        position:"absolute",
        left:`${customFunction(props.xval)}%`,
        top:`${customFunction(props.yval)}%`,
        transform:"translate(-50%,-50%)"
    }
    const circleProps ={
        width:`${props.width}px`,
        height:`${props.height}px`,
        position:"relative",
        background:`${props.clicked ? "linear-gradient(90deg, rgba(112,255,97,1) 0%, rgba(84,162,49,1) 100%)" : "grey"}`,
    }

  return (
    <div className='rounded-circle' style={circleProps}>
        <i className='bi bi-circle' style={circleOneStyle}></i>
    </div>
  )
}

export default CircleOne