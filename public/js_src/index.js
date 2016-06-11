import React from 'react';
import ReactDom from 'react-dom';
import {Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

var dataModel = {
    year: 2016,
    month: 1,
    yearList: [
        2016, 2015, 2014, 2013, 2012,
        2011, 2010, 2009, 2008, 2007,
        2006, 2005, 2004, 2003, 2002,
        2001],
    monthList: [
        1, 4, 7, 10,
    ],
}
class Vidoeplayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <video id="example_video1" className="video-js vjs-default-skin" controls preload="none" width="640"
                   height="264"
                   poster="http://video-js.zencoder.com/oceans-clip.png"
                   data-setup="{}">
                <source
                    src="http://ws.acgvideo.com/2/88/6129632-1hd.mp4?wsTime=1465670443&wsSecret2=75cefb15b1ddccb679c90acc26b50fe9&oi=2067287383&appkey=4fa4601d1caa8b48&or=987503882"
                    type='video/mp4'/>
                <track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track>

                <track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track>

            </video>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: dataModel.yearList[0],
            month: 1,
        };
        this._handleYearClick = this._handleYearClick.bind(this);
        this._handleMonthClick = this._handleMonthClick.bind(this);
    }

    _handleYearClick(e, year) {
        this.setState({year: year});
        dataModel.year = year;
        console.log(year);
    }

    _handleMonthClick(e, month) {
        this.setState({month: month});
        dataModel.month = month;
        console.log(month);
    }

    render() {
        var yearList = dataModel.yearList;
        var self = this;

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="nav-btn-group">
                        <DropdownButton className="year-select-btn" title={this.state.year} id="bg-nested-dropdown">
                            {yearList.map((element)=> {
                                return <MenuItem eventKey={element} key={element}
                                                 onClick={(e)=>{self._handleYearClick(e,element)}}>{element}</MenuItem>
                            })}
                        </DropdownButton>
                        <ButtonGroup>
                            <Button className="month-select-btn" onClick={(e)=> {
                                self._handleMonthClick(e, 1)
                            }}>一月</Button>
                            <Button className="month-select-btn" onClick={(e)=> {
                                self._handleMonthClick(e, 4)
                            }}>四月</Button>
                            <Button className="month-select-btn" onClick={(e)=> {
                                self._handleMonthClick(e, 7)
                            }}>七月</Button>
                            <Button className="month-select-btn" onClick={(e)=> {
                                self._handleMonthClick(e, 10)
                            }}>十月</Button>
                        </ButtonGroup>
                    </div>
                </header>
                <Vidoeplayer/>
            </div>
        );
    }
}
;

ReactDom.render(
    <Content />,
    document.getElementById('react_content')
);