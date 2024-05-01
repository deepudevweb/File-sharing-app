'use client'
import React, { useEffect, useState } from 'react';
import UploadForm from '../(routes)/upload/_components/UploadForm';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../../../firebaseConfig';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import CircleTickSVG from '../(routes)/upload/_components/Uploadsuccess';
import { GenerateRandomString } from '@/app/Components/Utils/GenerateRandomString';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useRouter } from 'next/navigation';


function Uploadpage() {

  const [progress, setProgress] = useState(0);

  const storage = getStorage(app);
  const router = useRouter();
  const db = getFirestore(app);
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState()
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
        progress === 100 && getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          console.log('File available at', downloadURL);
         await saveInfo(file, downloadURL);
        });
      },
    );   
  }

  const saveInfo = async (file, fileUrl) => {
    const docId = GenerateRandomString().toString();
    await setDoc(doc(db, "uploadedfile", docId), {
      fileName: file.name,
      fileType: file.type,    
      fileSize: file.size,
      fileUrl: fileUrl,
      // userName: userAgent.fullName,
      // userEmail: user.PrimaryEmailAddress.EmailAddress,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId
    }).then(() => {
      setFileDocId(docId);
    }).catch(error => {
      console.error("Error saving document: ", error);
      // Handle error if necessary
    });
  };
    

  useEffect(() => {
    if (progress === 100) {
      setUploadCompleted(true);
    }
  }, [progress]);

  useEffect(() => {
    uploadCompleted &&
      setTimeout(() => {
        setUploadCompleted(false)
        console.log("FileDocId", fileDocId);
        router.push('/file-preview/'+fileDocId);
      }, 2000)
  }, [uploadCompleted])

  return (
    <div className='p-5 px-8 md:px-28 text-center'>
      {uploadCompleted ? (
        <div className='flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out animate-opacity'>
          <CircleTickSVG />
          <p className="text-green-500 text-[40px]">Uploaded successfully</p>
        </div>
      ) : (
        <div>
          <h2 className='text-[40px] text-center m-5'> Start <strong className='text-primary'>uploading</strong> file and <strong className='text-primary'>share</strong> it  </h2>
          <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
        </div>
      )}
    </div>
  );
}

export default Uploadpage;