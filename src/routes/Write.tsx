import React, { ChangeEvent, useEffect, useState } from 'react';
import moment from 'moment';
import uuid from 'react-uuid';

//npm i react-uuid

// FIREBASE
import { fireStoreJob, fireStorage } from '../initFirebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

// CSS
import { WriterWrapper } from '../css/Write.styled';
import { Button, Input } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Carousel } from '../components/Carousel';

export const Write = ({ userInfo }: any) => {
  const db_path = 'feed';
  const [content, setContent] = useState<string>('');
  const [attachment, setAttachment] = useState<any[]>([]);
  const [btnEnable, setBtnEnable] = useState<boolean>(true);
  const [imgIndex, setImgIndex] = useState<number>(0);

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageURL: any[] = [];
    const time = Date.now();
    try {
      if (content === '') {
        alert('Please write content');
      }

      // // Create Document
      const data = {
        uid: userInfo.uid,
        text: content,
        imageURL: [],
        date_created: moment().utc().format(),
      };

      const docRef = await addDoc(collection(fireStoreJob, db_path), data);

      // Update Document
      if (attachment.length > 0) {
        attachment.forEach((data, index) => {
          let storageRef = ref(fireStorage, `images/${userInfo.uid}-${time}-${index}`);
          uploadString(storageRef, data, 'data_url').then(async (value) => {
            const downloadURL = await getDownloadURL(value.ref);
            imageURL.push(downloadURL);
            await updateDoc(doc(fireStoreJob, db_path, docRef.id), {
              imageURL: imageURL,
            });
          });
        });
      }

      setContent('');
      setAttachment([]);
    } catch (e) {
      console.error('Error adding document', e);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setContent(value);
    value ? setBtnEnable(false) : setBtnEnable(true);
  };
  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const files_arr = e.target.files;
      let images: any[] = [];
      let imageURL: any[] = [];
      if (files_arr) {
        let file;
        for (let i = 0; i < files_arr.length; i++) {
          file = files_arr[i];
          let reader = new FileReader();
          let id = uuid();
          reader.onload = () => {
            imageURL[i] = { id: id, url: reader.result };
            setAttachment([...imageURL]);
          };
          reader.readAsDataURL(file);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteFile = (index: number) => {
    const remove = attachment.splice(index, 1);
    setAttachment(remove);
  };

  return (
    <WriterWrapper>
      <div className={'upload-box'}>
        <div className={'preview'}>
          {attachment.length > 0 ? (
            <div className={'slider-box'}>
              <Carousel images={attachment} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={'upload-form'}>
          <form onSubmit={onSubmit} className={'align-center'}>
            <div className={'box label-img'}>
              <label htmlFor={'img-upload'}>
                <div>
                  <CloudUploadIcon fontSize="large" />
                </div>
              </label>
              <input
                onChange={onFileChange}
                type={'file'}
                id={'img-upload'}
                accept={'image/*'}
                multiple
                style={{ display: 'none' }}
              />
            </div>
            <div className={'box input-text'}>
              <Input
                inputProps={{ maxLength: 140 }}
                fullWidth={true}
                multiline={true}
                placeholder={"What's on your mind?"}
                onChange={onChange}
                value={content}
                type={'text'}
              />
            </div>
            <div className={'box'}>
              <Button disabled={btnEnable} fullWidth={true} type={'submit'} variant="contained">
                Upload
              </Button>
            </div>
          </form>
        </div>
      </div>
    </WriterWrapper>
  );
};
