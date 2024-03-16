'use client';

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return ( 
    <Toaster 
     position="bottom-center"
    reverseOrder={false} />
   );
}
 
export default ToasterContext;
