// pages/404.js
// import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Custom404() {
    const router=useRouter();
    const {postId}=router.query;
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
       <h1>postid:{postId}</h1>
      </div>
    );
  }