import {motion} from 'framer-motion'
import React from "react";


function PageTransition({children}) {
  return ( 
    <motion.div
           initial={{ opacity: 0, rotateY: -5 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -5 }}
            transition={{ duration: 1 }}
    >
          {children}
    </motion.div>
   );
}

export default PageTransition;