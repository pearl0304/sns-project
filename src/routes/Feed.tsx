import React, { useEffect, useState } from 'react';
import { PostInputInterface } from '../interfaces/post.interface';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireStoreJob } from '../initFirebase';

export const Feed = ({ userInfo }: any) => {
  const [posts, setPosts] = useState<PostInputInterface[]>([]);
  const db_path = 'feed';
  useEffect(() => {
    const q = query(collection(fireStoreJob, db_path), orderBy('date_created', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // @ts-ignore
      setPosts(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className={'post'}></div>
    </>
  );
};
