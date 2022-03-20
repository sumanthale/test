import React, { useEffect } from 'react';
import { PageFlip, SizeType } from 'page-flip';
import Buddha from '../../assets/images/buddha.jpg';
import BuddhaOld from '../../assets/images/buddhaold.jpeg';
import './FlipBook.css';
import { useWindowSize } from '../../hooks/UseWindowSize';
import { Box, Button } from '@mui/material';
const FlipBooks = () => {
  const { height, width } = useWindowSize();
  console.log(height, width);
  useEffect(() => {
    const pageFlip = new PageFlip(document.getElementById('demoBookExample'), {
      width: 600, // base page width
      height: 633, // base page height

      size: 'fixed',
      // set threshold values:

      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    });
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // document.querySelector('.page-total').innerText = pageFlip.getPageCount();
    // document.querySelector('.page-orientation').innerText =
    //   pageFlip.getOrientation();

    document.querySelector('.btn-prev').addEventListener('click', () => {
      pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector('.btn-next').addEventListener('click', () => {
      pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on('flip', (e) => {
      console.log('flip');
      //   document.querySelector('.page-current').innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on('changeState', (e) => {
      console.log('state');

      //   document.querySelector('.page-state').innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on('changeOrientation', (e) => {
      console.log('orientation');

      //   document.querySelector('.page-orientation').innerText = e.data;
    });
  }, []);

  return (
    <>
      <Box sx={{ m: 3 }}>
        <div
          className="book-container"
          style={{
            zindex: 99999,
          }}
        >
          <div className="flip-book" id="demoBookExample">
            <div className="page page-cover page-cover-top" data-density="hard">
              <div className="page-content">
                <img src={BuddhaOld} alt="buddha" width="100%" />
                {/* <h2>SOLANA LAUGHING BUDDHA</h2> */}
              </div>
            </div>
            <div className="page">
              <div className="page-content">
                <h2 className="page-header">SOLANA LAUGHING BUDDHA</h2>
                <div className="page-image" style={{}}>
                  {' '}
                  <img src={BuddhaOld} alt="buddha" width="100%" />
                </div>
                {/* <div className="page-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus mollis nibh, non convallis ex convallis eu. Suspendisse
                  potenti. Aenean vitae pellentesque erat. Integer non tristique
                  quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                  velit viverra metus, a venenatis tellus tellus id magna.
                  Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim.
                  Pellentesque non justo vel nibh sollicitudin pharetra suscipit
                  ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In cursus mollis nibh, non convallis ex convallis eu.
                  Suspendisse potenti. Aenean vitae pellentesque erat. Integer
                  non tristique quam. Suspendisse rutrum, augue ac sollicitudin
                  mollis, eros velit viverra metus, a venenatis tellus tellus id
                  magna.
                </div> */}
                <div className="page-footer">16</div>
              </div>
            </div>
            <div className="page">
              <div className="page-content">
                <h2 className="page-header">SOLANA LAUGHING BUDDHA</h2>
                <div className="page-image" style={{}}>
                  <img src={Buddha} alt="buddha" width="100%" />
                </div>
                <div className="page-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus mollis nibh, non convallis ex convallis eu. Suspendisse
                  potenti. Aenean vitae pellentesque erat. Integer non tristique
                  quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                  velit viverra metus, a venenatis tellus tellus id magna.
                  Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim.
                  Pellentesque non justo vel nibh sollicitudin pharetra suscipit
                  ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In cursus mollis nibh, non convallis ex convallis eu.
                  Suspendisse potenti. Aenean vitae pellentesque erat. Integer
                  non tristique quam. Suspendisse rutrum, augue ac sollicitudin
                  mollis, eros velit viverra metus, a venenatis tellus tellus id
                  magna.
                </div>
                <div className="page-footer">2</div>
              </div>
            </div>

            <div className="page">
              <div className="page-content">
                <h2 className="page-header">Page header - 16</h2>
                <div className="page-image" style={{}}></div>
                <div className="page-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  cursus mollis nibh, non convallis ex convallis eu. Suspendisse
                  potenti. Aenean vitae pellentesque erat. Integer non tristique
                  quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                  velit viverra metus, a venenatis tellus tellus id magna.
                  Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim.
                  Pellentesque non justo vel nibh sollicitudin pharetra suscipit
                  ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In cursus mollis nibh, non convallis ex convallis eu.
                  Suspendisse potenti. Aenean vitae pellentesque erat. Integer
                  non tristique quam. Suspendisse rutrum, augue ac sollicitudin
                  mollis, eros velit viverra metus, a venenatis tellus tellus id
                  magna.
                </div>
                <div className="page-footer">17</div>
              </div>
            </div>
            <div
              className="page page-cover page-cover-bottom"
              data-density="hard"
            >
              <div className="page-content">
                <h2>THE END</h2>
              </div>
            </div>
          </div>
        </div>
        <Box
          className="book-container"
          sx={{
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <div>
            <Button type="button" className="btn-prev">
              Previous page
            </Button>
            [<span className="page-current">1</span> of{' '}
            <span className="page-total">-</span>]
            <Button type="button" className="btn-next">
              Next page
            </Button>
          </div>

          {/* <div>
            State: <i className="page-state">read</i>, orientation:{' '}
            <i className="page-orientation">landscape</i>
          </div> */}
        </Box>
      </Box>
    </>
  );
};

export default FlipBooks;
