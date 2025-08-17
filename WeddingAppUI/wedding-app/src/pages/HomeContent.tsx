import React from 'react';
import '../assets/css/HomeContent.css';
import '../assets/css/Animation.css'
import home1 from '../assets/images/cover/home_1.jpg';
import home2 from '../assets/images/cover/home_2.jpg';
import home4 from '../assets/images/cover/home_4.jpg';
import home5 from '../assets/images/cover/home_5.jpg';
import home6 from '../assets/images/cover/home_6.jpg';
import home7 from '../assets/images/cover/home_7.png';
import home8 from '../assets/images/cover/home_8.jpg';
import home9 from '../assets/images/cover/home_9.png';
import home10 from '../assets/images/cover/home_10.png';
import home11 from '../assets/images/cover/home_11.png';
import logo from '../assets/images/cover/logoBA.png';
import navigation from '../assets/images/cover/navigation.png';
import BONN0977 from '../assets/images/wedding/BONN0977.jpg';
// import BONN0052 from '../assets/images/wedding/BONN0052.jpg';
// import BONN8959 from '../assets/images/wedding/BONN8959.jpg';
// import BONN1012 from '../assets/images/wedding/BONN1012.jpg';
import BONN0412 from '../assets/images/wedding/BONN0412.jpg';
import BONN1068 from '../assets/images/wedding/BONN1068.jpg';
import BONN0785 from '../assets/images/wedding/BONN0785.jpg';
import { useAutoScrollAnimation } from '../hooks/useAutoScrollAnimation';
import WeddingCountdown from "../components/WeddingCountdown";
import { Link } from 'react-router-dom';
import bgVideo from "../assets/video/v1.mp4";

const HomeContent: React.FC = () => {
    useAutoScrollAnimation();
    return (
        <div className="relative min-h-screen items-center main-wr">
            <div className="relative">
                {/* <img
                    src={BONN0977}
                    alt="Ảnh BONN0977"
                    className="w-full h-40"
                /> */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full"
                >
                    <source src={bgVideo} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
                <div className="absolute top-9 -translate-x-1/2 w-full h-full animate-on-scroll" data-animate="zoomIn">
                    <p className="font-highSpirited text-7xl text-center text-white">
                        We get married
                    </p>
                </div>
                {/* <div className="absolute top-9 -translate-x-1/2 w-full mt-title animate-on-scroll" data-animate="zoomIn">
                    <p className="font-lora text-2xl text-center text-white">
                        PHƯƠNG DUY & NGỌC DIỆP
                    </p>
                    <p className="font-lora text-2xl text-center text-white">
                        29.11.2025
                    </p>
                </div> */}
            </div>
            <div className="min-h-screen">
                <div className="relative">
                    <img
                        src={home4}
                        alt="Ảnh home4"
                        className="w-full"
                    />
                    <img
                        src={logo}
                        alt="Ảnh logo"
                        className="absolute left-40 top-32 w-1/3 z-10 animate-on-scroll"
                        data-animate="zoomIn"
                    />
                    <div className="absolute top-72 z-20 w-full animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-2xl text-center">
                            WE WILL BECOME
                        </p>
                        <p className="font-lora text-2xl text-center">
                            HUSBAND AND WIFE IN
                        </p>
                        <WeddingCountdown />
                        <img
                            src={home7}
                            alt="Ảnh home7"
                            className="absolute w-ful z-10"
                        />
                    </div>
                </div>
                <div className="relative h-[510px]">
                    <img
                        src={home5}
                        alt="Ảnh home5"
                        className="absolute w-full"
                    />
                    <img
                        src={home6}
                        alt="Ảnh home6"
                        className="absolute w-full z-5 mt-72"
                    />
                </div>
                <div className="relative h-[265px]">
                    <img
                        src={BONN0412}
                        alt="Ảnh BONN0412"
                        className="absolute"
                    />
                    <div className="absolute left-8 top-40 z-20 w-full text-white">
                        <p className="font-lora text-5xl animate-on-scroll" data-animate="fadeInLeft">
                            SAVE
                        </p>
                        <div className="flex gap-2 animate-on-scroll" data-animate="fadeInRight">
                            <p className="font-highSpirited text-5xl">
                                the
                            </p>
                            <p className="font-lora text-5xl">
                                DATE
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[765px]">
                    <img
                        src={home1}
                        alt="Ảnh home1"
                        className="absolute"
                    />
                    <img
                        src={home2}
                        alt="Ảnh home2"
                        className="absolute mt-24"
                    />
                    <img
                        src={home8}
                        alt="Ảnh home8"
                        className="absolute mt-47 z-5"
                    />
                    <div className="absolute flex items-start justify-center gap-4 border border-transparent w-full mt-48">
                        <div className="text-center animate-on-scroll" data-animate="fadeInLeft">
                            <p className="font-lora font-bold text-lg">NHÀ GÁI</p>
                            <p>Ông. Nguyễn Văn Long</p>
                            <p>Bà. Hứa Hồng Vân</p>
                        </div>
                        <div className="line-1"></div>
                        <div className="text-center animate-on-scroll" data-animate="fadeInRight">
                            <p className="font-lora font-bold text-lg">NHÀ TRAI</p>
                            <p>Ông. Dương Lê Phương</p>
                            <p>Bà. Bùi Thị Hương Giang</p>
                        </div>
                    </div>
                    <div className="absolute flex items-start justify-center mt-73 w-full animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-lg">Thân mời đến dự lễ thành hôn của chúng tôi!</p>
                    </div>
                    <div className="absolute w-full mt-22">
                        <p className="font-lora text-4xl  text-center">
                            PHƯƠNG DUY
                        </p>
                        <p className="font-highSpirited text-6xl text-center">
                            and
                        </p>
                        <p className="font-lora text-4xl  text-center">
                            NGỌC DIỆP
                        </p>
                    </div>
                    <div className="absolute w-full mt-33 animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-center">
                            Được tổ chức vào lúc
                        </p>
                    </div>
                    <div className="w-full absolute flex items-start justify-center mt-36 animate-on-scroll" data-animate="fadeInRight">
                        <div className="line-2"></div>
                    </div>
                    <div className="absolute w-full mt-37">
                        <p className="font-lora text-3xl text-center animate-on-scroll" data-animate="fadeInRight">
                            17:30 - THỨ BẢY
                        </p>
                        <p className="font-lora text-3xl text-center animate-on-scroll" data-animate="fadeInLeft">
                            29.11.2025
                        </p>
                    </div>
                    <div className="w-full absolute flex items-start justify-center mt-42 animate-on-scroll" data-animate="fadeInLeft">
                        <div className="line-2"></div>
                    </div>
                    <div className="absolute w-full mt-43 animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-center">
                            Địa điểm:
                        </p>
                    </div>
                    <div className="absolute w-full mt-45 animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-2xl text-center">
                            SOFTWATER RESTAURANT
                        </p>
                        <i className="block font-lora text-1xl text-center">
                            42 đường 9, tập thể F361 An Dương, Tây Hồ, Hà Nội
                        </i>
                    </div>
                    <div className="absolute mt-50 w-full pointer-animate z-10">
                        <Link to="https://www.google.com/maps/dir/?api=1&destination=Softwater+Restaurant@21.051373090058295,105.84581257495877" rel="noopener noreferrer" target="_blank" className="flex justify-center">
                            <img
                                src={navigation}
                                className="nav-image"
                            />
                            <p className="font-lora text-1xl text-center">
                                CHỈ ĐƯỜNG
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={home2}
                        alt="Ảnh home2"
                        className="absolute mt-8"
                    />
                    <img
                        src={home2}
                        alt="Ảnh home2"
                        className="absolute mt-30"
                    />
                    <div className="absolute top-40 z-20 w-full flex gap-3 justify-center animate-on-scroll" data-animate="fadeInUp">
                        <p className="font-lora text-3xl  text-center">
                            THE STORY 
                        </p>
                        <p className="font-highSpirited text-6xl text-center">
                            of
                        </p>
                        <p className="font-lora text-3xl text-center">
                            LOVE
                        </p>
                    </div>
                    <div id="GROUP1" className="absolute">
                        <div className="flex">
                            <img
                                src={home9}
                                alt="Cô dâu"
                                className="absolute z-30"
                            />
                            <div id="BOX1" className="absolute z-40">
                                <div className="ladi-box ladi-transition z-40"></div>
                            </div>
                            <div className="absolute text-center z-30 dip animate-on-scroll" data-animate="fadeInRight">
                                <p className="font-highSpirited text-5xl">Cô dâu</p>
                                <p className="font-lora text-1xl">NGỌC DIỆP</p>
                                <p>06.10.1995</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="absolute text-center z-20 duy animate-on-scroll" data-animate="fadeInLeft">
                                <p className="font-highSpirited text-5xl">Chú rê</p>
                                <p className="font-lora text-1xl">PHƯƠNG DUY</p>
                                <p>05.11.1996</p>
                            </div>
                            <img
                                src={home10}
                                alt="Chú rể"
                                className="absolute z-20"
                            />
                             <div id="BOX2" className="absolute">
                                <div className="ladi-box ladi-transition z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={home2}
                        alt="Ảnh home2"
                        className="absolute mt-54"
                    />
                    <div id="IMAGE7" className="absolute mt-54">
                        <div className="ladi-image">
                            <div className="ladi-image-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;