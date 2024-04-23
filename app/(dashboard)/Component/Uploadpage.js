'use client'
import React, { useEffect, useState } from 'react';
import UploadForm from '../(routes)/upload/_components/UploadForm';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../../../firebaseConfig';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { GenerateRandomString } from '@/app/Components/Utils/GenerateRandomString';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs';

function Uploadpage() {

 const [progress, setProgress] = useState(0);

  // const handleChange = (event) => {
  //   setProgress(event.target.value);
  // };

  // const handleUpload = () => {
  //   setProgress(0);
  // };

  const storage = getStorage(app);
  const router = useRouter();
  const db = getFirestore(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'Uploadfile/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        progress === 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL);
        });
      },
    );

    const saveInfo = async(file,fileUrl) => {
      const docId =GenerateRandomString().toString()
      await setDoc(doc(db, "uploadedfile", docId ), {
       fileName: file.name,
       fileType: file.type,
       fileSize: file.size,
       fileUrl: fileUrl,
       password: '',
       id:GenerateRandomString(),
       shortUrl: process.env.NEXT_PUBLIC_BASE_URL+docId  
      }).then(resp=> {
        console.log(resp);
      })
    }
  };

  useEffect(() => { 
  },[ progress==100 ] );

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'> Start <strong className='text-primary'>uploading</strong> file and <strong className='text-primary'>share</strong> it  </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
    </div>
  );
}

export default Uploadpage;