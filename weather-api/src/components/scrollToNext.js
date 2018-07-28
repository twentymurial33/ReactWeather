import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { toElement as scrollToElement } from '@utils/scroll';

import './style.css';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    // scrollToElement(nextPage);
  }

  render() {
    
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce">
          <header className ="scroll-text">Next Page
          <button className="fas fa-chevron-down fa-2x" href="#" />
          <button/>
          </header>
          </div>
</div>
    );
      };
    }




export default ScrollToNext;