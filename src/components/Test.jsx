import React, { useEffect, useState } from 'react';
import {useGamepads} from 'react-gamepads';
import CircleOne from './CircleOne';

const GamepadExample = () => {
    const [gamepads,setGamePads] = useState([]);
    useGamepads( _gamepads => {
        setGamePads(Object.values(_gamepads))
        if (!gamepads) return '';
        
    })

    const buttonNames = (index) => {
        switch (index) {
            case 0:
                return <i className='bi bi-x-lg text-info h3'></i>
            case 1:
                return <i className='bi bi-circle text-danger h3'></i>
            case 2:
                return <i className='bi bi-square h3'></i>
            case 3:
                return <i className='bi bi-triangle text-success h3'></i>
            case 4:
                return <p className='h5'>L1</p>
            case 5:
                return <p className='h5'>R1</p>
            case 6:
                return <p className='h5'>L2</p>
            case 7:
                return <p className='h5'>R2</p>
            case 8:
                return <p className='h5'>Share</p>
            case 9:
                return <p className='h5'>Options</p>
            case 10:
                return <p className='h5'><i className='bi bi-joystick'></i> Left Stick Click</p>
            case 11:
                return <p className='h5'><i className='bi bi-joystick'></i> Right Stick Click</p>
            case 12:
                return <p className='h5'><i className='bi bi-arrow-up'></i> Up</p>
            case 13:
                return <p className='h5'><i className='bi bi-arrow-down'></i> Down</p>
            case 14:
                return <p className='h5'><i className='bi bi-arrow-left'></i> Left</p>
            case 15:
                return <p className='h5'><i className='bi bi-arrow-right'></i> Right</p>
            case 16:
                return <p className='h5'><i className='bi bi-playstation'></i> Play Station Button</p>
            case 17:
                return <p className="h5">Touch Pad Click</p>
            default:
                return index;
        }
    }

    const axesNames = (index) => {
        switch (index) {
            case 0:
                return "Left Stick X"
            case 1:
                return "Left Stick Y"
            case 2:
                return "Right Stick X"
            case 3:
                return "Right Stick Y"
            default:
                return index;
        }
    }

    return (
        <div className='container'>
          <h1>Play Station Dualshock 4 Tester</h1>
          <p>Open the browser console and press buttons on the connected gamepad.</p>
          {gamepads.length && gamepads.map( gp => {
            return (
                <div>
                    <div className="d-flex align-items-center flex-row">
                        <h3 className='h5 me-2'>ID</h3>
                        <p>{gp.id}</p>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='text-start'>Button</th>
                            <th scope="col" className='text-end'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        gp.buttons.map((button,index)=>{

                            return (
                                <>
                                <tr>
                                    <th key={index} scope="row">{index+1}</th>
                                    <td className='text-start'>{buttonNames(index)}</td>
                                    <td className='text-end' style={{width:"50%", backgroundColor:`rgba(0,255,0,${button.value})`}}>{Math.floor((button.value)*100)}%</td>
                                </tr>
                                </>
                            )
                        })
                    }
                    </tbody>
                    </table>

                    <div className="row">
                        
                    {
                        gp.axes.map((axes,index) => {
                            return (
                                <div className="col-lg-3">
                                    <div style={{display:"flex",flexDirection:"column"}} key={index}>
                                        <h3>{axesNames(index)}</h3>
                                        <p>{axes}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <CircleOne width={250} height={250} xval={gp.axes[0]} yval={gp.axes[1]} clicked={parseInt(gp.buttons[10].value)===1 ? 1 : 0}/>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <CircleOne width={250} height={250} xval={gp.axes[2]} yval={gp.axes[3]} clicked={parseInt(gp.buttons[11].value)===1 ? 1 : 0}/>
                        </div>
                    </div>

                </div>
            )
          })}
        </div>
      );
  
};

export default GamepadExample;
