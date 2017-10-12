import React, { Component } from 'react';
import avatar from './assets/images/avatar.png';
import kickstarter from './assets/images/kickstarter.jpg';
import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <div>
        <br />
        <br />

        <div className="box">
          <div className="box-header">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="cust-check-head">
                  <input type="checkbox" className="cust-check" id="input1" />
                  <label className="label-check" htmlFor="input1"></label>
                </div>

                <div className="avatar">
                  <div className="front-avatar">
                    <img src={avatar} className="img-responsive img-circle" alt="Avatar" />
                  </div>
                  <div className="back-avatar">
                    <img className="img-responsive img-circle" src={kickstarter} alt="Kickstarter" />
                  </div>
                  <div className="avatar-name">
                    <p className="name"><a href="/">Oil Wanichpoonsuk</a></p>
                    <p className="status">
                      <i className="fa fa-globe"></i> Public <i className="fa fa-circle small-icon"></i> 15 May 2017 9:00 AM
                    </p>
                  </div>
                </div>

                <div className="trigger">
                  <a href="/"><i className="fa fa-ellipsis-v"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="box-body">
            <h1 className="box-title">Mixed Berry Sparkling @ Tom N Tomas Coffe, Venice Shopping Plaza</h1>
            <p className="box-text">Eu keytar trust fund gluten-free, synth banjo la croix. Lo-fi gentrify quinoa edison bulb disrupt put a bird on it biodiesel in. DIY tbh tumeric, pork belly disrupt do copper mug sriracha hoodie typewriter aesthetic chicharrones pariatur VHS. Eu four loko quinoa dolore fugiat sed bicycle rights you probably haven't heard of them subway tile id. Hammock bicycle rights gluten-free polaroid...</p>
            <div className="row">
              <div className="col-md-2 col-xs-6 col-sm-4">
                <div className="status">
                  <ul>
                    <li>
                      <i className="fa fa-headphones"></i> 300
                    </li>
                    <li>
                      <i className="fa fa-thumbs-o-up"></i> 549
                    </li>
                    <li>
                      <i className="fa fa-comments-o"></i> 10K
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-10 col-xs-6 col-sm-8">
                <hr />
              </div>
              <div className="col-md-12">
                <table className="table-social">
                  <tbody>
                    <tr>
                      <td className="face-icon"><i className="fa fa-smile-o"></i></td>
                      <td className="name">Tom N Toms</td>
                      <td className="colon">:</td>
                      <td>
                        <div className="tag">Tom N Toms</div>
                      </td>
                      <td>
                        <a href="/" className="add-tag"><i className="fa fa-plus-circle"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td className="face-icon"><i className="fa fa-smile-o meh"></i></td>
                      <td className="name">Starbuck</td>
                      <td className="colon">:</td>
                      <td>
                        <div className="tag">starbuck</div>
                      </td>
                      <td>
                        <div className="tag">Starbuck</div>
                      </td>
                      <td>
                        <a href="/" className="add-tag"><i className="fa fa-plus-circle"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td className="face-icon"><i className="fa fa-frown-o frown"></i></td>
                      <td className="name">Toms Coffe</td>
                      <td className="colon">:</td>
                      <td>
                        <div className="tag">Tom N</div>
                      </td>
                      <td>
                        <a href="/" className="add-tag"><i className="fa fa-plus-circle"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="box-footer">
            <div className="link">
              <a href="/"><i className="fa fa-eye"></i></a>
            </div>
            <div className="link">
              <a href="/"><i className="fa fa-heart-o"></i></a>
            </div>
            <div className="link">
              <a href="/" className="border"><i className="fa fa-plus-circle"></i></a>
            </div>
            <div className="link">
              <a href="/"><i className="fa fa-ticket"></i></a>
            </div>
            <div className="link right-link">
              <a href="/" className="last-border"><i className="fa fa-trash"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
