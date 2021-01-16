import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonUser = ({theme}) => {
    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className='skeleton-profile'>
                {/* left */}
                <div>
                    <SkeletonElement type='avatar'/>
                </div>

                {/* right */}
                <div>
                    <SkeletonElement type='title'/>
                    <SkeletonElement type='text'/>
                    <SkeletonElement type='text'/>
                </div>
            </div>
        </div>
    );
};

export default SkeletonUser;
