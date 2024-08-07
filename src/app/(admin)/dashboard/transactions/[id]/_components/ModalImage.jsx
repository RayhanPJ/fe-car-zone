// import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";

// import Image from "next/image";

// const ModalImage = ({ src, alt, title }) => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <div onPresss={onOpen} className="cursor-pointer">
//         <Image src={src} alt={alt} width={300} height={300} />
//       </div>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
//               <ModalBody>
//                 <Image
//                   src={src}
//                   alt={alt}
//                   width="80%"
//                   height="80%"
//                   layout="responsive"
//                   objectFit="contain"
//                 />
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" onPress={onClose}>
//                   Close
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default ModalImage;
