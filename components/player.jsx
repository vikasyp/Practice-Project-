import React,{Component} from 'react';
class Player extends Component {
    state={};
    render (){
        const {plyr,index,onIncreament}=this.props;
        const {name,score}=plyr;
        return <div className='row m-2'>
            <div className='col-5'></div>
                <div className='col-4 text-primary bg-light'>
                    Name :{name} <br />
                    Score :{score}
                    <br />
                    <button className='btn btn-success btn-sm' onClick={()=>onIncreament(index)}>1 Point</button>
            </div>
        </div>
    }
}
export default Player;