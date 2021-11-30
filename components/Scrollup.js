import Image from 'next/image';
import React from 'react';
import classes from '/styles/Scrollup.module.css';

const Scrollup = () => {
    return (
        <div>
            <i className={classes.scrollU}>
          <Image
        src="/icons8-upward-arrow.gif"
        class={classes.upArrow}
        alt="scroll-up"
        layout="fill"
    /></i>
        </div>
    )
}

export default Scrollup
