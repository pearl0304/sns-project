import React from 'react';

export const Feed = ({userInfo}: any) => {
    return <>
        <div className={'post'}>
            <div className={'post-header'}>
                <div className={'user-img'}></div>
            </div>

            <div className={'post-body'}>
                <div className={'post-img'}>
                    <div><img className="cover" src="http://placehold.it/500x500" alt="게시물이미지"/></div>
                    <div><img className="cover" src="http://placehold.it/600x400" alt="게시물이미지"/></div>
                    <div><img className="cover" src="http://placehold.it/750x300" alt="게시물이미지"/></div>
                </div>

                <div className={'post-txt'}>게시물 내용이 나오는 곳</div>
                <span className={'more'}>더보기</span>
                <ul className={'post-footer'}>
                    <li className={'comment'}></li>
                    <li className={'like'}></li>
                </ul>
            </div>


        </div>
    </>;
};
