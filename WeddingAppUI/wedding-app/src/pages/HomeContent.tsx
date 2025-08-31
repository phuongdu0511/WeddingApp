import React from "react";
import "../assets/css/HomeContent.css";
import "../assets/css/Animation.css";
import home1 from "../assets/images/cover/home_1.jpg";
import home2 from "../assets/images/cover/home_2.jpg";
import home4 from "../assets/images/cover/home_4.jpg";
import home5 from "../assets/images/cover/home_5.jpg";
import home6 from "../assets/images/cover/home_6.jpg";
import home7 from "../assets/images/cover/phong-bi-chinh-sua.png";
import home8 from "../assets/images/cover/home_8.jpg";
import home9 from "../assets/images/cover/home_9.png";
import home10 from "../assets/images/cover/home_10.png";
import home13 from "../assets/images/cover/home_13.jpg";
import logo from "../assets/images/cover/logo.png";
import navigation from "../assets/images/cover/navigation.png";
import BONN0283 from "../assets/images/wedding/BONN0283.jpg";
// import BONN0052 from '../assets/images/wedding/BONN0052.jpg';
// import BONN8959 from '../assets/images/wedding/BONN8959.jpg';
// import BONN1012 from '../assets/images/wedding/BONN1012.jpg';
import BONN0412 from "../assets/images/wedding/BONN0412.jpg";
import BONN1068 from "../assets/images/wedding/BONN1068.jpg";
import BONN0785 from "../assets/images/wedding/BONN0785.jpg";
import { useAutoScrollAnimation } from "../hooks/useAutoScrollAnimation";
import WeddingCountdown from "../components/WeddingCountdown";
import Gallery from "./Gallery";
import ChatBox from "./ChatBox";
import Music from "./Music";
import { Link } from "react-router-dom";
import bgVideo from "../assets/video/v1.mp4";

const HomeContent: React.FC = () => {
  useAutoScrollAnimation();
  return (
    <div className="relative min-h-screen items-center main-wr">
      <div className="relative">
        <video autoPlay loop muted playsInline preload="none" className="w-full h-full">
          <source src={bgVideo} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div
          className="absolute top-9 -translate-x-1/2 w-full h-full animate-on-scroll"
          data-animate="zoomIn"
        >
          <p className="font-highSpirited text-7xl text-center text-white">
            We get married
          </p>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="relative">
          <img loading="lazy" src={home4} alt="Ảnh home4" className="w-full" />
          <div className="flex justify-center">
            <img loading="lazy"
              src={logo}
              alt="Ảnh logo"
              className="absolute top-32 w-1/3 z-10 animate-on-scroll"
              data-animate="zoomIn"
            />
          </div>
          <div
            className="absolute top-72 z-20 w-full animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-2xl text-center">WE WILL BECOME</p>
            <p className="font-lora text-2xl text-center">
              HUSBAND AND WIFE IN
            </p>
            <WeddingCountdown />
            <img loading="lazy" src={home7} alt="Ảnh home7" className="absolute w-420 z-10" />
            <div id="LETTER1" className="absolute">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="LETTER2" className="absolute">
              <div className="ladi-box ladi-transition"></div>
            </div>
          </div>
        </div>
        <div className="relative h-[510px]">
          <img loading="lazy" src={home5} alt="Ảnh home5" className="absolute w-full" />
          <img loading="lazy"
            src={home6}
            alt="Ảnh home6"
            className="absolute w-full z-5 mt-72"
          />
        </div>
        <div className="relative h-[265px]">
          <img loading="lazy" src={BONN0412} alt="Ảnh BONN0412" className="absolute" />
          <div className="absolute left-8 top-40 z-20 w-full text-white">
            <p
              className="font-lora text-5xl animate-on-scroll"
              data-animate="fadeInLeft"
            >
              SAVE
            </p>
            <div
              className="flex gap-2 animate-on-scroll"
              data-animate="fadeInRight"
            >
              <p className="font-highSpirited text-5xl">the</p>
              <p className="font-lora text-5xl">DATE</p>
            </div>
          </div>
        </div>
        <div className="relative h-[765px]">
          <img loading="lazy" src={home1} alt="Ảnh home1" className="absolute" />
          <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-24" />
          <img loading="lazy" src={home8} alt="Ảnh home8" className="absolute mt-47 z-5" />
          <div className="absolute flex items-start justify-center gap-4 border border-transparent w-full mt-48">
            <div
              className="text-center animate-on-scroll"
              data-animate="fadeInLeft"
            >
              <p className="font-lora font-bold text-lg">NHÀ GÁI</p>
              <p>Ông. Nguyễn Văn Long</p>
              <p>Bà. Hứa Hồng Vân</p>
            </div>
            <div className="line-1"></div>
            <div
              className="text-center animate-on-scroll"
              data-animate="fadeInRight"
            >
              <p className="font-lora font-bold text-lg">NHÀ TRAI</p>
              <p>Ông. Dương Lê Phương</p>
              <p>Bà. Bùi Thị Hương Giang</p>
            </div>
          </div>
          <div
            className="absolute flex items-start justify-center mt-73 w-full animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-lg">
              Thân mời đến dự lễ thành hôn của chúng tôi!
            </p>
          </div>
          <div className="absolute w-full mt-22">
            <p className="font-lora text-4xl  text-center">PHƯƠNG DUY</p>
            <p className="font-highSpirited text-6xl text-center">and</p>
            <p className="font-lora text-4xl  text-center">NGỌC DIỆP</p>
          </div>
          <div
            className="absolute w-full mt-33 animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-center">Được tổ chức vào lúc</p>
          </div>
          <div
            className="w-full absolute flex items-start justify-center mt-36 animate-on-scroll"
            data-animate="fadeInRight"
          >
            <div className="line-2"></div>
          </div>
          <div className="absolute w-full mt-37">
            <p
              className="font-lora text-3xl text-center animate-on-scroll"
              data-animate="fadeInRight"
            >
              17:30 - THỨ BẢY
            </p>
            <p
              className="font-lora text-3xl text-center animate-on-scroll"
              data-animate="fadeInLeft"
            >
              29.11.2025
            </p>
          </div>
          <div
            className="w-full absolute flex items-start justify-center mt-42 animate-on-scroll"
            data-animate="fadeInLeft"
          >
            <div className="line-2"></div>
          </div>
          <div
            className="absolute w-full mt-43 animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-center">Địa điểm:</p>
          </div>
          <div
            className="absolute w-full mt-45 animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-2xl text-center">
              SOFTWATER RESTAURANT
            </p>
            <i className="block font-lora text-1xl text-center">
              42 đường 9, tập thể F361 An Dương, Tây Hồ, Hà Nội
            </i>
          </div>
          <div className="absolute mt-50 w-full pointer-animate z-10">
            <Link
              to="https://www.google.com/maps/dir/?api=1&destination=Softwater+Restaurant@21.051373090058295,105.84581257495877"
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-center"
              onClick={(e) => {
                e.stopPropagation(); // tránh trigger body click
              }}
            >
              <img loading="lazy" src={navigation} className="nav-image" />
              <p className="font-lora text-1xl text-center">CHỈ ĐƯỜNG</p>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-8" />
          <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-30" />
          <div
            className="absolute top-40 z-20 w-full flex gap-3 justify-center animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-3xl  text-center">THE STORY</p>
            <p className="font-highSpirited text-6xl text-center">of</p>
            <p className="font-lora text-3xl text-center">LOVE</p>
          </div>
          <div id="GROUP1" className="absolute">
            <div className="flex">
              <img loading="lazy" src={home9} alt="Cô dâu" className="absolute z-30" />
              <div id="BOX1" className="absolute z-40">
                <div className="ladi-box ladi-transition z-40"></div>
              </div>
              <div
                className="absolute text-center z-30 dip animate-on-scroll"
                data-animate="fadeInRight"
              >
                <p className="font-highSpirited text-5xl">Cô dâu</p>
                <p className="font-lora text-1xl">NGỌC DIỆP</p>
                <p>06.10.1995</p>
              </div>
            </div>
            <div className="flex">
              <div
                className="absolute text-center z-20 duy animate-on-scroll"
                data-animate="fadeInLeft"
              >
                <p className="font-highSpirited text-5xl">Chú rê</p>
                <p className="font-lora text-1xl">PHƯƠNG DUY</p>
                <p>05.11.1996</p>
              </div>
              <img loading="lazy" src={home10} alt="Chú rể" className="absolute z-20" />
              <div id="BOX2" className="absolute">
                <div className="ladi-box ladi-transition z-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="SECTION5 absolute">
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-50" />
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-135" />
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-74" />
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-81" />
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-172" />
            <img loading="lazy" src={home2} alt="Ảnh home2" className="absolute mt-186" />
            <img loading="lazy" src={home13} alt="Ảnh home2" className="absolute mt-209" />
            <div id="GROUP38" className="absolute mt-16">
              <div className="ladi-group">
                <div id="IMAGE50" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="IMAGE49" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="LINE4" className="absolute">
                  <div className="ladi-line">
                    <div className="ladi-line-container"></div>
                  </div>
                </div>
                <div id="BOX10" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX11" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX12" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div
                  id="HEADLINE37"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">2022 – Gặp gỡ định mệnh</p>
                </div>
                <div
                  id="HEADLINE38"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">
                    Phương Nga – cô hoa hậu tài sắc vẹn toàn, gặp gỡ Bình An –
                    một nam diễn viên trẻ đầy triển vọng tại một sự kiện giải
                    trí. Ngay từ ánh nhìn đầu tiên, họ đã có ấn tượng đặc biệt
                    về nhau. Những lần gặp gỡ sau đó, những cuộc trò chuyện kéo
                    dài khiến họ dần nhận ra sự đồng điệu trong tâm hồn.
                  </p>
                </div>
                <div
                  id="HEADLINE39"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">2023 – Thử Thách Và Gắn Kết</p>
                </div>
                <div
                  id="HEADLINE40"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">
                    Bận rộn với công việc trong showbiz, họ nhiều lần xa cách
                    nhưng vẫn luôn hướng về nhau. Dư luận, tin đồn đôi lúc khiến
                    tình yêu gặp sóng gió, nhưng sự tin tưởng và thấu hiểu giúp
                    họ vượt qua. Trong suốt hai năm, Bình An luôn âm thầm ủng hộ
                    Phương Nga trong các sự kiện lớn, còn cô cũng lặng lẽ dõi
                    theo từng bước tiến của anh. Cuối năm 2024, Bình An bất ngờ
                    cầu hôn Phương Nga trong một không gian lãng mạn, và cô xúc
                    động gật đầu.
                  </p>
                </div>
                <div
                  id="HEADLINE41"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">2025 – Hạnh Phúc Viên Mãn</p>
                </div>
                <div
                  id="HEADLINE42"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline">
                    Năm 2025, họ tổ chức một đám cưới cổ tích trước sự chứng
                    kiến của gia đình, bạn bè và người hâm mộ. Phương Nga rạng
                    rỡ trong chiếc váy cưới lộng lẫy, Bình An nắm chặt tay cô,
                    hứa hẹn một cuộc đời hạnh phúc. Họ chính thức trở thành vợ
                    chồng, bắt đầu một hành trình mới, tràn đầy yêu thương và
                    gắn bó mãi mãi.
                  </p>
                </div>
              </div>
            </div>
            <div id="IMAGE7" className="absolute mt-54">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="BOX17" className="absolute mt-54">
              <div className="ladi-box"></div>
            </div>
            <div id="BOX16" className="absolute mt-54">
              <div className="ladi-box"></div>
            </div>
            <div id="BOX15" className="absolute mt-54">
              <div className="ladi-box"></div>
            </div>
            <div id="BOX14" className="absolute mt-54">
              <div className="ladi-box"></div>
            </div>
            <div id="BOX13" className="absolute mt-54">
              <div className="ladi-box"></div>
            </div>
            <div
              id="GROUP9"
              className="absolute mt-54 z-30 animate-on-scroll"
              data-animate="rotateInDownRight"
            >
              <div className="ladi-group">
                <div id="BOX18" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX19" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
              </div>
            </div>
            <div
              id="GROUP19"
              className="absolute mt-54 animate-on-scroll"
              data-animate="fadeInLeft"
            >
              <div className="ladi-group">
                <div id="HEADLINE43" className="absolute">
                  <p className="ladi-headline font-highSpirited">The</p>
                </div>
                <div id="HEADLINE44" className="absolute">
                  <p className="ladi-headline font-lora">ALBUM</p>
                </div>
              </div>
            </div>
            <div id="IMAGE52" className="absolute mt-54">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              id="GROUP10"
              className="absolute mt-54 z-30 animate-on-scroll"
              data-animate="rotateInDownLeft"
            >
              <div className="ladi-group">
                <div id="BOX20" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX21" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
              </div>
            </div>
            <div
              id="HEADLINE45"
              className="absolute mt-54 ladi-animation z-30 animate-on-scroll"
              data-animate="fadeInRight"
            >
              <p className="ladi-headline font-lora">OF LOVE</p>
            </div>
            <div id="GALLERY1" className="absolute mt-89">
              <Gallery />
            </div>
            {/* <div id="CHATBOX" className="absolute mt-99">
              <ChatBox />
            </div> */}
            <div id="SECTION6" className="ladi-section absolute mt-181">
              <div className="ladi-container">
                <div id="IMAGE53" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="GROUP13" className="absolute">
                  <div className="ladi-group">
                    <div id="BOX27" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div id="BOX28" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                  </div>
                </div>
                <div
                  id="HEADLINE46"
                  className="absolute animate-on-scroll"
                  data-animate="zoomIn"
                >
                  <p className="ladi-headline font-lora">dress code</p>
                </div>
                <div id="HEADLINE47" className="absolute">
                  <p className="ladi-headline font-lora">timeline</p>
                </div>
                <div className="w-full absolute flex items-start justify-center time-line-1">
                  <div className="time-line"></div>
                </div>
                <div id="GROUP39" className="absolute">
                  <div className="ladi-group">
                    <div id="BOX32" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="GROUP23"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftDisco"
                    >
                      <div className="ladi-group">
                        <div id="IMAGE11" className="absolute">
                          <div className="ladi-image">
                            <div className="ladi-image-background"></div>
                          </div>
                        </div>
                        <div id="HEADLINE51" className="absolute">
                          <p className="ladi-headline font-lora">20:00</p>
                        </div>
                        <div id="HEADLINE55" className="absolute">
                          <p className="ladi-headline font-lora">minigame</p>
                          <p className="ladi-headline font-lora">và khiêu vũ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="BOX29" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX30" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX31" className="absolute">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="GROUP22" className="absolute ladi-animation">
                  <div className="ladi-group">
                    <div
                      id="IMAGE10"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftEat"
                    >
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftEat"
                    >
                      <div id="HEADLINE50" className="absolute">
                        <p className="ladi-headline font-lora">18:30</p>
                      </div>
                      <div id="HEADLINE54" className="absolute">
                        <p className="ladi-headline font-lora">chung vui</p>
                        <p className="ladi-headline font-lora">khai tiệc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute">
                  <div id="HEADLINE49" className="absolute">
                    <p className="ladi-headline font-lora">18:00</p>
                  </div>
                  <div id="HEADLINE53" className="absolute">
                    <p className="ladi-headline font-lora">bắt đầu</p>
                    <p className="ladi-headline font-lora">lễ thành hôn</p>
                  </div>
                </div>

                <div id="GROUP49" className="absolute">
                  <div className="ladi-group">
                    <div id="IMAGE9" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="IMAGE8" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute">
                  <div id="HEADLINE48" className="absolute">
                    <p className="ladi-headline font-lora">17:30</p>
                  </div>
                  <div id="HEADLINE52" className="absolute">
                    <p className="ladi-headline font-lora">đón tiếp</p>
                    <p className="ladi-headline font-lora">khách mời</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="SECTION7" className="ladi-section absolute mt-181">
              <div className="ladi-container">
                <div id="FORM2" className="absolute ladi-animation flex justify-center">
                  <div id="FORM_ITEM5" className="absolute">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background"></div>
                      <div className="ladi-form-item">
                        <select
                          name="form_item8"
                          className="ladi-form-control ladi-form-control-select"
                        >
                          <option value="">Bạn tham dự cùng ai?</option>
                          <option value="1 người">1 người</option>
                          <option value="2 người">2 người</option>
                          <option value="3 người">3 người</option>
                          <option value="4 người">4 người</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="ladi-hidden"></button>
                </div>

                <div id="GROUP44" className="absolute mt-31">
                  <div className="ladi-group">
                    <div
                      id="BOX41"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftBlack"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX42"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftBrown"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX43"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftRed"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX44"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftWhite"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE63" className="absolute mt-190">
              <p className="ladi-headline font-highSpirited">Thank you!</p>
            </div>
            {/* <Music /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
