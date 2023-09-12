import { useState } from 'react'
import './App.css'
import Navbar, {Print} from './components/Navbar';
import PackingList from './components/List';

// export default function App(){
//   return(
//     <Toolbar
//     onPlayMovie={()=>alert('Playing...')}
//     onUploadImage={()=>alert('Uploading...')}/>
//   );
// }


// function Toolbar({onPlayMovie, onUploadImage}){
//   return(
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         UploadImage
//       </Button>
//     </div>
//   );
// }

// export default function Button() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}

//     </button>
//   );
// }



// export default function Button() {
//   // function handleClick(){
//   //   alert('Clicked')
//   // }
//   // return (
//   //   <button onClick={handleClick}>
//   //     I don't do anything
//   //   </button>
//   // );
//   return (
//     // <button onClick={function handleClick(){
//     //   alert("clicked");
//     // }}>
//      <button onClick={()=>{
//         alert("clicked");
//       }}>
//       I don't do anything
//      </button>
//   );
// }


// function AlertButton({message, children}){
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }


// export default function Toolbar() {
//   return(
//     <div>
//       <AlertButton message="Playing!">
//         Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload
//       </AlertButton>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClickCapture={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }






