import React, {ChangeEvent, useEffect, useState} from 'react';
import moment from "moment";

// FIREBASE
import {fireStoreJob, fireStorage} from "../initFirebase";
import {collection, addDoc, onSnapshot, query, where, orderBy} from "firebase/firestore";
import {ref, uploadString, getDownloadURL} from "firebase/storage";

// CSS
import {WriterWrapper} from "../css/Write.styled";
import {Button, Input} from "@mui/material";

// Interface
import {PostInputInterface} from "../interfaces/post.interface";
import {createDeflateRaw} from "zlib";

export const Write = ({userInfo}: any) => {
    const db_path = 'images'
    const [content, setContent] = useState<string>("");
    const [posts, setPosts] = useState<PostInputInterface[]>([]);
    const [attachment, setAttachment] = useState<string[]>([]);

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


    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let attachmentURL :any[] = [];
        try {

            if(attachment.length > 0) {
                attachment.forEach((data) => {
                    let storageRef = ref(fireStorage, `${userInfo.uid}-${moment().utc().format()}`);
                    const res =  uploadString(storageRef, data, 'data_url');
                    console.log(res)
                })
            }

            const data = {
                uid: userInfo.uid,
                text: content,
                imageURL: attachmentURL,
                date_created: moment().utc().format()
            }

            const docRef = await addDoc(collection(fireStoreJob, db_path), data)
            console.log("Document written with ID: ", docRef.id);

            setContent("")
            setAttachment([])

        } catch (e) {
            console.error('Error adding document', e)
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        setContent(value);
    }
    const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const files_arr = e.target.files;
            let imageURL: any[] = [];
            if (files_arr) {
                let file;
                for (let i = 0; i < files_arr.length; i++) {
                    file = files_arr[i];

                    let reader = new FileReader();
                    reader.onload = () => {
                        imageURL[i] = reader.result;
                        setAttachment([...imageURL]);
                    }
                    reader.readAsDataURL(file);
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    const onDeleteFile = () => setAttachment([]);


    return <WriterWrapper>
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onFileChange} type={'file'} id={'img-upload'} accept={'image/*'} multiple/>
                <Input onChange={onChange} value={content} type={'text'}/>
                <Button type={'submit'} variant="contained">Upload</Button>
            </form>
            <div className={'preview'}>
                {attachment ? attachment.map((data, index) => (
                    <div key={index}>
                        <img src={data} width={'500px'} height={'400px'}/>
                        <button onClick={onDeleteFile}>X</button>
                    </div>
                )) : (<div></div>)}
            </div>
        </div>
    </WriterWrapper>
}