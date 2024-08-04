import { cn } from "@/lib/utils";

export const CarZoneLogo = ({ className, ...props }) => (
   <svg className={cn(`${className}`)} width="351" height="143" viewBox="0 0 351 143" xmlns="http://www.w3.org/2000/svg" {...props}>
   <path d="M23.1819 141.984C17.4159 141.447 11.9834 144.514 6.5441 141.017C15.6909 136.144 26.1007 135.318 36.7409 131.43C28.9944 127.603 25.4706 118.72 15.7144 119.074C11.9145 119.212 8.24579 117.479 4.72127 115.972C0.339375 114.098 0.204 112.333 4.16047 109.394C5.61763 108.311 7.22632 107.432 9.37656 106.075C4.24039 100.154 2.22381 92.9662 0.657407 85.4441C-1.4773 75.1929 1.55414 67.4427 10.2296 61.7781C26.1032 51.4136 43.4628 45.2436 62.2519 42.6368C92.4738 38.4438 122.779 36.0104 153.311 36.8988C170.781 37.4072 188.112 40.332 205.639 39.8883C207.094 39.8515 208.685 39.8909 209.738 41.7192C207.92 44.5864 204.842 43.7376 202.244 43.9819C181.512 45.9312 160.959 49.0665 140.547 53.1533C138.927 53.4777 137.354 54.0363 135.845 54.4616C134.983 56.4145 138.091 56.7205 136.649 59.3397C121.774 63.2018 105.427 63.5136 89.8727 67.8271C104.615 68.458 119.031 65.2008 134.753 63.8767C130.572 70.9018 125.45 74.5385 118.658 75.7895C112.111 76.9953 105.518 77.9463 98.9624 79.1039C96.7125 79.5012 94.3832 79.7666 91.2107 81.7421C107.312 81.4496 122.264 81.7696 134.88 71.8893C137.993 69.4512 140.491 66.2252 143.257 63.347C144.824 61.716 146.556 60.7448 148.982 60.9001C158.355 61.5006 167.007 58.7672 175.662 55.4576C180.577 53.5777 185.945 52.61 191.199 51.9319C212.302 49.2086 233.439 46.7457 254.567 44.2153C261.503 43.3846 268.54 43.0955 275.369 41.7456C284.484 39.944 293.358 37.0937 301.752 32.9732C304.045 31.8476 306.073 30.289 307.066 27.8934C308.18 25.2046 309.676 24.9539 312.127 26.2038C322.363 31.4242 332.679 36.4889 342.921 41.6964C346.3 43.4141 348.951 45.7778 348.568 51.2913C332.354 39.5363 315.268 37.4252 296.991 43.4276C297.438 46.1833 299.168 47.3339 300.885 47.3985C307.877 47.6617 314.263 50.9119 321.274 51.1961C323.977 51.3057 325.414 50.7832 326.168 47.8833C326.324 46.2613 323.241 46.5258 323.47 44.2118C326.274 42.4837 329.247 43.5718 332.01 44.2814C347.915 48.3663 351.852 54.9234 349.862 71.323C348.611 81.6367 342.385 87.8118 334.898 93.5089C332.911 91.9536 333.927 90.4109 334.033 89.0393C334.508 82.8636 334.744 76.7102 332.617 70.7504C330.765 65.5596 326.915 62.4632 321.615 61.7154C316.513 60.9954 312.569 63.571 309.849 67.7655C303.486 77.5795 303.108 88.0182 306.841 98.8623C308.16 102.695 311.753 104.566 315.361 108.901C268.127 114.553 222.004 119.197 175.627 124.878C175.664 121.751 177.537 120.954 178.683 119.751C190.293 107.556 192.648 88.352 183.92 76.6212C176.577 66.7539 165.735 65.7444 156.817 74.0977C143.994 86.1073 144.347 109.968 157.498 121.635C158.591 122.605 160.133 123.158 160.724 125.176C156.601 127.362 151.883 127.461 147.493 127.849C121.477 130.15 95.7086 134.424 69.7723 137.362C54.4082 139.102 39.0586 140.808 23.1819 141.984ZM59.2256 104.633C60.8516 104.126 62.3153 103.293 63.3784 101.979C69.17 94.819 73.1601 86.5697 77.3613 78.4639C78.8363 75.618 77.2689 73.3003 75.1837 71.4181C73.0092 69.4554 70.2536 68.675 67.4446 68.2424C54.1115 66.1891 40.6364 65.9181 27.199 65.3152C23.0918 65.1309 18.8886 65.7139 14.8168 66.4376C8.74196 67.5175 6.63237 70.5969 7.64897 76.763C9.02401 85.1033 12.9257 92.4703 17.1974 99.6217C18.3047 101.476 20.0637 103.146 22.2687 103.434C34.2812 105.003 46.3016 106.802 59.2256 104.633ZM247.304 91.2117C245.203 90.7897 242.965 89.4884 240.973 90.5869C234.002 94.4296 226.162 93.7686 218.747 95.2637C213.662 96.2889 208.337 96.347 203.594 98.8545C231.718 97.5325 259.676 95.1023 287.14 88.574C282.337 88.5183 277.611 87.4034 272.816 88.2697C264.638 89.747 256.436 91.1139 247.304 91.2117ZM92.9237 115.435C91.8987 115.974 90.1642 115.356 89.7915 117.862C96.7505 117.249 103.503 116.755 110.229 116.017C113.509 115.657 116.875 115.67 120.008 114.3C127.449 111.049 128.587 107.255 123.911 100.966C122.82 99.4982 121.724 98.0234 120.501 96.6677C118.837 94.8219 116.804 94.0918 114.227 94.5355C101.402 96.7439 89.4149 101.358 77.603 106.909C78.796 107.796 79.689 106.96 80.5773 106.719C90.6811 103.973 100.767 101.163 110.867 98.4016C112.607 97.9258 114.637 96.8355 116.146 98.0948C118.936 100.423 122.237 103.253 122.406 106.713C122.58 110.254 118.255 110.96 115.335 111.826C108.287 113.916 100.938 114.336 92.9237 115.435ZM169.063 41.3505C145.988 43.1493 122.932 45.0814 100.687 52.1134C97.2085 53.2129 93.8038 54.5647 90.4222 55.9404C89.1172 56.4713 88.1856 57.5627 88.9042 59.1318C89.6076 60.6678 90.9425 60.6553 92.3139 60.165C93.2534 59.8291 94.1607 59.4031 95.0825 59.0174C112.062 51.9132 129.787 47.5915 147.88 44.4484C155.033 43.2057 162.435 44.1672 169.063 41.3505ZM35.02 114.845C26.4203 114.208 17.8546 112.24 9.14039 114.724C32.6609 116.794 56.1814 118.863 81.0515 121.051C75.9434 118.306 71.8063 116.621 67.3365 116.343C56.8887 115.694 46.4232 115.328 35.02 114.845ZM205.05 63.3412C206.01 60.8565 205.691 58.5947 203.194 57.3744C201.295 56.4465 199.574 57.6455 198.373 59.0822C197.011 60.7093 197.31 62.601 198.642 64.0925C200.62 66.3067 202.72 65.86 205.05 63.3412Z" />
   <path d="M137.841 14.3466C155.52 5.10474 174.354 2.33657 193.541 0.719658C215.27 -1.11158 236.726 0.682961 258.076 4.618C261.489 5.24706 264.876 6.01634 267.9 8.01867C266.925 10.2077 265.178 9.29209 264.006 9.00636C237.277 2.49229 216.873 12.8637 200.253 32.9899C197.71 36.0687 195.405 36.9356 191.36 36.4456C164.729 33.2196 137.985 32.2932 111.178 33.5685C110.192 33.6154 109.174 33.8495 107.575 32.011C116.549 24.3629 127.225 19.7495 137.841 14.3466ZM175.323 14.5621C176.764 14.0213 178.432 13.9029 179.698 12.3809C171.578 12.5876 161.977 15.8385 155.58 20.6914C162.373 18.5686 168.488 16.6578 175.323 14.5621ZM187.855 11.4615C191.357 10.3505 195.388 11.0915 198.488 8.53161C193.641 9.1159 188.682 9.0789 184.218 11.6613C185.184 11.6171 186.151 11.573 187.855 11.4615Z" />
   <path d="M233.273 33.8387C231.371 36.5116 228.831 37.4224 225.534 37.3136C219.089 37.1009 212.632 37.2511 205.925 37.2511C206.151 33.3319 208.974 31.9019 210.745 30.0433C220.103 20.2195 230.825 11.6666 244.848 11.3788C264.695 10.9716 284.41 12.9786 301.828 24.1927C302.2 24.4322 302.367 24.9896 302.876 25.7819C298.577 31.2199 292.299 33.0162 286.016 34.0138C278.656 35.1822 271.146 35.4519 263.69 35.9573C255.235 36.5305 246.77 36.9639 238.306 37.388C236.141 37.4965 233.33 38.496 233.456 33.9892C235.876 30.4618 234.293 28.8577 231.566 28.499C227.603 27.978 223.51 27.6542 219.841 30.341C222.935 30.8808 226.032 30.7025 229.094 30.9497C230.845 31.0911 233.444 30.6488 233.273 33.8387Z" />
   <path d="M153.687 89.7942C154.432 86.5592 155.779 84.0633 157.592 81.8651C161.215 77.471 165.438 73.7947 171.621 74.9005C178.171 76.0719 181.455 81.1822 183.067 86.9218C185.084 94.104 184.628 101.395 181.29 108.315C177.63 115.904 171.406 120.367 165.701 119.373C159.552 118.302 153.924 111.56 153.107 103.612C152.651 99.1721 152.424 94.634 153.687 89.7942Z" />
   <path d="M325.446 68.4493C334.083 77.0832 333.703 92.4959 324.987 100.386C319.966 104.932 314.129 103.919 311.038 97.9272C306.435 89.0046 307.318 80.2519 312.208 71.8021C314.916 67.1226 319.495 66.0162 325.446 68.4493Z" />
   <path d="M328.139 103.003C329.53 100.721 331.072 99.8025 333.258 101.251C335.808 102.942 339.527 101.838 342.299 105.292C337.249 106.555 332.672 106.209 328.204 106.082C326.524 106.033 327.528 104.319 328.139 103.003Z" />
   <path d="M42.6938 69.4506C50.8232 69.6922 58.4772 69.9842 66.0111 71.5874C72.8737 73.0479 74.2661 75.9249 71.2497 82.1081C68.5433 87.6557 65.6229 93.0629 62.0675 98.1266C60.0037 101.066 57.211 103.023 53.7417 102.91C44.4394 102.609 35.1509 101.888 25.8557 101.355C22.8367 101.182 20.9344 99.5057 19.788 96.8753C17.1282 90.7728 14.3155 84.7253 11.9548 78.5075C9.82106 72.8873 11.2066 70.4011 17.3219 69.4082C25.5773 68.0678 33.9233 68.633 42.6938 69.4506ZM30.9225 79.0853C28.4607 79.0853 25.9988 79.0853 23.537 79.0853C30.8877 79.0333 38.1754 81.2953 45.5784 79.103C41.0107 79.103 36.443 79.103 30.9225 79.0853ZM24.5202 85.0358C31.9594 85.9903 39.4107 85.374 46.8637 84.732C38.7843 84.732 30.7048 84.732 23.3797 84.732C23.038 84.6295 23.483 84.763 24.5202 85.0358ZM24.4742 90.5595C30.5905 90.9044 36.6823 92.1306 42.838 91.0608C36.5588 90.3579 30.2829 89.5466 24.4742 90.5595ZM28.5772 74.6106C33.6798 74.6106 38.7824 74.6106 43.885 74.6106C38.6032 74.5102 33.3007 73.0843 28.5772 74.6106Z" />
</svg>

)

export const SUVIcon = ({className, ...props}) => (
   <svg width="35" height="34" viewBox="0 0 35 34" xmlns="http://www.w3.org/2000/svg" className={cn(`${className}`)} {...props}>
<path d="M27.0625 13.8124H25.8194C25.6795 13.8133 25.5409 13.7865 25.4115 13.7336C25.282 13.6807 25.1643 13.6028 25.065 13.5043L22.2387 10.6781C21.5418 9.9811 20.7132 9.42962 19.8012 9.0557C18.8891 8.68177 17.9119 8.49286 16.9263 8.49995H7.9375C6.52854 8.49995 5.17728 9.05966 4.181 10.0559C3.18471 11.0522 2.625 12.4035 2.625 13.8124V19.1249C2.625 19.9703 2.96083 20.7811 3.5586 21.3789C4.15637 21.9766 4.96712 22.3124 5.8125 22.3124C5.8125 23.2987 6.2043 24.2446 6.9017 24.942C7.5991 25.6394 8.54498 26.0312 9.53125 26.0312C10.5175 26.0312 11.4634 25.6394 12.1608 24.942C12.8582 24.2446 13.25 23.2987 13.25 22.3124H20.7938C20.9112 23.2014 21.3478 24.0174 22.0221 24.6085C22.6965 25.1996 23.5626 25.5255 24.4594 25.5255C25.3561 25.5255 26.2223 25.1996 26.8966 24.6085C27.571 24.0174 28.0075 23.2014 28.125 22.3124H29.1875C30.0329 22.3124 30.8436 21.9766 31.4414 21.3789C32.0392 20.7811 32.375 19.9703 32.375 19.1249C32.375 17.716 31.8153 16.3647 30.819 15.3684C29.8227 14.3722 28.4715 13.8124 27.0625 13.8124ZM16.9794 10.6249C17.6775 10.6237 18.369 10.7601 19.0144 11.0262C19.6598 11.2924 20.2464 11.6832 20.7406 12.1762L22.3769 13.8124H9.255C9.05699 13.8138 8.86253 13.7598 8.69357 13.6566C8.5246 13.5533 8.38785 13.4049 8.29875 13.2281L7.06625 10.7631C7.34804 10.6734 7.64178 10.6268 7.9375 10.6249H16.9794ZM4.75 19.1249V13.8124C4.75058 13.1672 4.94694 12.5374 5.31313 12.0062L6.37563 14.1312C6.63626 14.6733 7.04495 15.1305 7.55446 15.4501C8.06398 15.7698 8.65353 15.9387 9.255 15.9374H15.375V20.1874H12.8781C12.5797 19.5519 12.1064 19.0144 11.5137 18.638C10.921 18.2615 10.2334 18.0616 9.53125 18.0616C8.8291 18.0616 8.14146 18.2615 7.54876 18.638C6.95607 19.0144 6.48282 19.5519 6.18437 20.1874H5.8125C5.53071 20.1874 5.26046 20.0755 5.0612 19.8763C4.86194 19.677 4.75 19.4067 4.75 19.1249ZM9.53125 23.3749C9.21604 23.3749 8.9079 23.2815 8.64581 23.1064C8.38372 22.9312 8.17944 22.6823 8.05882 22.3911C7.93819 22.0999 7.90663 21.7794 7.96812 21.4703C8.02962 21.1611 8.18141 20.8771 8.4043 20.6542C8.62719 20.4314 8.91117 20.2796 9.22032 20.2181C9.52948 20.1566 9.84993 20.1881 10.1412 20.3088C10.4324 20.4294 10.6813 20.6337 10.8564 20.8958C11.0315 21.1578 11.125 21.466 11.125 21.7812C11.125 22.2039 10.9571 22.6093 10.6582 22.9081C10.3593 23.207 9.95394 23.3749 9.53125 23.3749ZM24.4062 23.3749C24.091 23.3749 23.7829 23.2815 23.5208 23.1064C23.2587 22.9312 23.0544 22.6823 22.9338 22.3911C22.8132 22.0999 22.7816 21.7794 22.8431 21.4703C22.9046 21.1611 23.0564 20.8771 23.2793 20.6542C23.5022 20.4314 23.7862 20.2796 24.0953 20.2181C24.4045 20.1566 24.7249 20.1881 25.0162 20.3088C25.3074 20.4294 25.5563 20.6337 25.7314 20.8958C25.9065 21.1578 26 21.466 26 21.7812C26 22.2039 25.8321 22.6093 25.5332 22.9081C25.2343 23.207 24.8289 23.3749 24.4062 23.3749ZM29.1875 20.1874H27.7531C27.4547 19.5519 26.9814 19.0144 26.3887 18.638C25.796 18.2615 25.1084 18.0616 24.4062 18.0616C23.7041 18.0616 23.0165 18.2615 22.4238 18.638C21.8311 19.0144 21.3578 19.5519 21.0594 20.1874H17.5V15.9374H27.0625C27.5081 15.9398 27.9482 16.0356 28.3545 16.2186C28.7608 16.4017 29.1242 16.6678 29.4212 16.9999H29.1875C28.9057 16.9999 28.6355 17.1119 28.4362 17.3111C28.2369 17.5104 28.125 17.7807 28.125 18.0624C28.125 18.3442 28.2369 18.6145 28.4362 18.8138C28.6355 19.013 28.9057 19.1249 29.1875 19.1249H30.25C30.25 19.4067 30.1381 19.677 29.9388 19.8763C29.7395 20.0755 29.4693 20.1874 29.1875 20.1874Z" fill="#050B20"/>
</svg>

)