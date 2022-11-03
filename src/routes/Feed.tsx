import React, {useEffect, useState} from 'react';
import {PostInputInterface} from "../interfaces/post.interface";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {fireStoreJob} from "../initFirebase";

export const Feed = ({userInfo}: any) => {

    const [posts, setPosts] = useState<PostInputInterface[]>([]);
    const db_path = 'feed'
    useEffect(() => {
        const q = query(collection(fireStoreJob, db_path), orderBy("date_created", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const arr = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });
            // @ts-ignore
            setPosts(arr)
        });

        return () => {
            unsubscribe()
        }
    }, []);


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
