import React, { useEffect, useState } from "react";
import "../assets/css/HomeContent.css";
import "../assets/css/Animation.css";
import home1 from "../assets/images/cover/home_1.jpg";
import home2 from "../assets/images/cover/home_2.jpg";
import home3 from "../assets/images/cover/home_3.jpg";
import home4 from "../assets/images/cover/home_4.jpg";
import home6 from "../assets/images/cover/home_6.jpg";
import home8 from "../assets/images/cover/home_8.jpg";
import home9 from "../assets/images/cover/home_9.png";
import home10 from "../assets/images/cover/home_10.png";
import home12 from "../assets/images/cover/home_12.jpg";
import home13 from "../assets/images/cover/home_13.jpg";
import logo from "../assets/images/cover/logo.png";
import navigation from "../assets/images/cover/navigation.png";
import BONN9907 from "../assets/images/wedding/BONN9907.jpg";
import bgVideo from "/videos/v1.mp4";
import { useAutoScrollAnimation } from "../hooks/useAutoScrollAnimation";
import WeddingCountdown from "../components/WeddingCountdown";
import Gallery from "./Gallery";
// import Music from "./Music";
import Gift from "./Gift";
import { Link } from "react-router-dom";
import Confirm from "./Confirm";
import type { Guest } from "../types/Guest";
import { PARENT_FRIEND } from "../common/CodeConst";

interface HomeContentProps {
  guest: Guest | null;
  setGuest: React.Dispatch<React.SetStateAction<Guest | null>>;
}

const HomeContent: React.FC<HomeContentProps> = ({ guest, setGuest }) => {
  const [showGift, setShowGift] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [invite, setInvite] = useState(false);
  useAutoScrollAnimation();

  // Đổi tên khách mời nếu tìm thấy
  const [guestName, setGuestName] = useState<string>("");
  const [showVow, setShowVow] = useState(false);
  const [parentFriend, setParentFriend] = useState<string>(" ");

  useEffect(() => {
    if (guest == null) return;
    if (guest.guestName != null) setGuestName(guest.guestName);
    if (PARENT_FRIEND.includes(guest.guestPath)) setParentFriend(" con ");
    if (guest.guestName != null || PARENT_FRIEND.includes(guest.guestPath))
      setInvite(true);

    setShowVow(guest.vow);
  }, []);

  return (
    <div className="relative min-h-screen items-center main-wr">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full"
        >
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
            <img
              loading="lazy"
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
            <p className="font-highSpirited text-6xl text-center">
              We will become
            </p>
            <p className="font-highSpirited text-6xl text-center">
              husband and wife in
            </p>
            <WeddingCountdown />
            <div id="GROUP46" className="absolute">
              <div className="ladi-group">
                <div id="IMAGE62" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="IMAGE63" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
                <div id="GROUP47" className="absolute">
                  <div className="ladi-group">
                    <div id="IMAGE64" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="BOX46" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                  </div>
                </div>
                <div id="GROUP48" className="absolute">
                  <div className="ladi-group">
                    <div id="IMAGE65" className="absolute">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div id="BOX47" className="absolute">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                  </div>
                </div>
                <div id="IMAGE66" className="absolute">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[660px]">
          <img
            loading="lazy"
            src={home2}
            alt="Ảnh home2"
            className="absolute w-full"
          />
          <img
            loading="lazy"
            src={home2}
            alt="Ảnh home2"
            className="absolute w-full mt-22"
          />
          <img
            loading="lazy"
            src={home6}
            alt="Ảnh home6"
            className="absolute w-full z-5 mt-27"
          />
        </div>
        <div className="relative h-[265px]">
          <img
            loading="lazy"
            src={BONN9907}
            alt="Ảnh BONN9907"
            className="absolute z-20"
          />
          <div className="absolute left-17 top-36 z-20 w-full text-white">
            <p
              className="font-highSpirited font-bold text-7xl animate-on-scroll"
              data-animate="fadeInLeft"
            >
              Save
            </p>
            <div
              className="flex gap-2 animate-on-scroll"
              data-animate="fadeInRight"
            >
              <p className="font-highSpirited text-5xl font-bold">the Date</p>
            </div>
          </div>
        </div>
        <div className="relative h-[765px]">
          <img
            loading="lazy"
            src={home1}
            alt="Ảnh home1"
            className="absolute"
          />
          <img
            loading="lazy"
            src={home12}
            alt="Ảnh home12"
            className="absolute mt-23"
          />
          <img
            loading="lazy"
            src={home3}
            alt="Ảnh home3"
            className="absolute mt-12"
          />
          <img
            loading="lazy"
            src={home8}
            alt="Ảnh home8"
            className="absolute mt-47 z-[-1]"
          />
          <div className="absolute flex items-start justify-center gap-2 border border-transparent w-full mt-40">
            <div
              className="text-center animate-on-scroll grid gap-[6px]"
              data-animate="fadeInLeft"
            >
              <p className="font-lora font-bold text-lg">NHÀ GÁI</p>
              <p className="font-lora text-lg">Ông Nguyễn Văn Long</p>
              <p className="font-lora text-lg">Bà Hứa Hồng Vân</p>
            </div>
            <div className="line-1"></div>
            <div
              className="text-center animate-on-scroll grid gap-[6px]"
              data-animate="fadeInRight"
            >
              <p className="font-lora font-bold text-lg">NHÀ TRAI</p>
              <p className="font-lora text-lg">Ông Dương Lê Phương</p>
              <p className="font-lora text-lg">Bà Bùi Hương Giang</p>
            </div>
          </div>
          <div
            className="absolute flex items-start justify-center mt-19 w-full animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-lg">Trân trọng kính mời</p>
            {guestName ? (
              <p className="font-lora text-lg font-bold">:&nbsp;{guestName}</p>
            ) : (
              ""
            )}
          </div>
          <div
            className="absolute flex items-start justify-center mt-20 w-full animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-lg">
              đến dự Lễ Thành Hôn của{parentFriend}chúng tôi
            </p>
          </div>
          <div className="absolute w-full mt-23">
            <p className="font-lora text-4xl  text-center">PHƯƠNG DUY</p>
            <p className="font-highSpirited text-6xl text-center">and</p>
            <p className="font-lora text-4xl  text-center">NGỌC DIỆP</p>
          </div>
          <div
            className="absolute w-full mt-33 animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-center text-lg">Được tổ chức vào lúc</p>
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
              {showVow ? "16:00" : "17:00"} - THỨ BẢY
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
            <p className="font-lora text-center text-lg">Địa điểm:</p>
          </div>
          <div
            className="absolute w-full mt-45 animate-on-scroll"
            data-animate="fadeInUp"
          >
            <p className="font-lora text-2xl font-bold text-center">
              SOFTWATER
            </p>
            <i className="block font-lora text-1xl text-center text-lg">
              42 đường 9, F361 An Dương, Tây Hồ, Hà Nội
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
          <img
            loading="lazy"
            src={home4}
            alt="Ảnh home4"
            className="absolute mt-8"
          />
          <img
            loading="lazy"
            src={home12}
            alt="Ảnh home12"
            className="absolute mt-27"
          />
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
              <img
                loading="lazy"
                src={home9}
                alt="Cô dâu"
                className="absolute z-30"
              />
              <div id="BOX1" className="absolute z-40">
                <div className="ladi-box ladi-transition z-40"></div>
              </div>
              <div
                className="absolute text-center z-30 dip animate-on-scroll"
                data-animate="fadeInRight"
              >
                <p className="font-highSpirited text-5xl">Cô dâu</p>
                <p className="font-lora text-2xl">NGỌC DIỆP</p>
              </div>
            </div>
            <div className="flex">
              <div
                className="absolute text-center z-20 duy animate-on-scroll left-1-5"
                data-animate="fadeInLeft"
              >
                <p className="font-highSpirited text-5xl">Chú rê</p>
                <p className="font-lora text-2xl">PHƯƠNG DUY</p>
              </div>
              <img
                loading="lazy"
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
          <div
            className="SECTION5 absolute"
            style={{ height: invite ? 3900 : 3700 }}
          >
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-50"
            />
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-135"
            />
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-74"
            />
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-81"
            />
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-172"
            />
            <img
              loading="lazy"
              src={home2}
              alt="Ảnh home2"
              className="absolute mt-199"
            />
            <img
              loading="lazy"
              src={home13}
              alt="Ảnh home2"
              className="absolute mt-222"
              style={{ marginTop: invite ? `219rem` : `206rem` }}
            />
            <div id="GROUP38" className="absolute mt-28">
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
                  <p className="ladi-headline font-lora">2017 – Gặp gỡ định mệnh</p>
                </div>
                <div
                  id="HEADLINE38"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline font-lora">
                    Năm thứ ba đại học, giữa những ngày giảng đường đầy ắp tiếng
                    cười và nhiệt huyết tuổi trẻ, Phương Duy và Ngọc Diệp tình
                    cờ gặp nhau. Ánh mắt, nụ cười và những quan tâm nhỏ bé ngày ấy
                    đã trở thành khởi đầu cho một hành trình yêu thương dài lâu.
                  </p>
                </div>
                <div
                  id="HEADLINE39"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline font-lora">2019 – Thử Thách Và Gắn Kết</p>
                </div>
                <div
                  id="HEADLINE40"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline font-lora">
                    Năm 2019, Ngọc Diệp lên đường du học Đức, mở ra quãng thời
                    gian yêu xa đầy thử thách. Những đêm lệch múi giờ, những
                    cuộc gọi video, và những dòng tin nhắn gửi vội trở thành cầu
                    nối giữa hai con tim. Dù cách nhau nửa vòng trái đất, niềm
                    tin và tình yêu họ dành cho nhau vẫn lớn dần theo năm tháng.
                    Chính khoảng cách ấy đã khiến họ càng trân trọng và thấu
                    hiểu nhau hơn.
                  </p>
                </div>
                <div
                  id="HEADLINE41"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline font-lora">2025 – Hạnh Phúc Viên Mãn</p>
                </div>
                <div
                  id="HEADLINE42"
                  className="absolute animate-on-scroll"
                  data-animate="fadeInUp"
                >
                  <p className="ladi-headline font-lora">
                    Sau bao năm chờ đợi và vun đắp, năm 2025, họ chính thức nên
                    duyên vợ chồng. Trong sự chúc phúc của gia đình và bạn bè,
                    Ngọc Diệp và Phương Duy nắm tay nhau bước vào một hành trình
                    mới — hành trình của hạnh phúc viên mãn và tình yêu bền
                    vững, bắt đầu từ những ngày thanh xuân tươi đẹp.
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
              <p className="ladi-headline font-highSpirited text-6xl">ofLove</p>
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
                  <p className="ladi-headline font-highSpirited text-7xl">
                    Dress code
                  </p>
                </div>
                <div id="HEADLINE47" className="absolute">
                  <p className="ladi-headline font-highSpirited text-7xl">
                    Timeline
                  </p>
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
                          <p className="ladi-headline font-lora">after party</p>
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
                <div id="GROUP24" className="absolute ladi-animation">
                  {showVow ? (
                    <div className="ladi-group">
                      <div
                        id="IMAGE12"
                        className="absolute animate-on-scroll"
                        data-animate="fadeInLeftCamera"
                      >
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div
                        className="absolute animate-on-scroll"
                        data-animate="fadeInLeftCamera"
                      >
                        <div id="HEADLINE57" className="absolute">
                          <p className="ladi-headline font-lora">16:00</p>
                        </div>
                        <div id="HEADLINE58" className="absolute">
                          <p className="ladi-headline font-lora">lễ vow</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ladi-group">
                      <div
                        id="IMAGE8"
                        className="absolute animate-on-scroll"
                        data-animate="fadeInLeftCamera"
                      >
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div
                        className="absolute animate-on-scroll"
                        data-animate="fadeInLeftCamera"
                      >
                        <div id="HEADLINE57" className="absolute">
                          <p className="ladi-headline font-lora">17:00</p>
                        </div>
                        <div id="HEADLINE58" className="absolute">
                          <p className="ladi-headline font-lora">chụp hình</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div id="GROUP25" className="absolute ladi-animation">
                  <div className="ladi-group">
                    <div
                      id="IMAGE9"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftRing"
                    >
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                    <div
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeftRing"
                    >
                      <div id="HEADLINE59" className="absolute">
                        <p className="ladi-headline font-lora">17:30</p>
                      </div>
                      <div id="HEADLINE60" className="absolute">
                        <p className="ladi-headline font-lora">lễ thành hôn</p>
                      </div>
                    </div>
                  </div>
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
                        <p className="ladi-headline font-lora">18:00</p>
                      </div>
                      <div id="HEADLINE54" className="absolute">
                        <p className="ladi-headline font-lora">khai tiệc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="SECTION7" className="ladi-section absolute mt-181">
              <div className="ladi-container">
                <div style={{ display: invite ? `flex` : `none` }}>
                  <div
                    id="BUTTON3"
                    className="absolute animate-on-scroll cursor-pointer"
                    data-animate="fadeInUp"
                    onClick={(e) => {
                      setShowConfirm(true);
                      e.stopPropagation();
                    }}
                  >
                    <div className="ladi-button">
                      <div className="ladi-button-background absolute"></div>
                      <div id="BUTTON_TEXT3" className="absolute">
                        <p className="ladi-headline font-lora">
                          phản hồi lời mời
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="BUTTON4"
                    className="absolute animate-on-scroll cursor-pointer"
                    data-animate="fadeInUp"
                    onClick={(e) => {
                      setShowGift(true);
                      e.stopPropagation();
                    }}
                  >
                    <div className="ladi-button">
                      <div className="ladi-button-background absolute"></div>
                      <div id="BUTTON_TEXT4" className="absolute">
                        <p className="ladi-headline font-lora">
                          GỬI QUÀ MỪNG CƯỚI
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    id="HEADLINE56"
                    className="absolute animate-on-scroll"
                    data-animate="fadeInUp"
                  >
                    <p className="ladi-headline font-lora">
                      Rất mong bạn phản hồi lời mời để chúng mình
                    </p>
                    <p className="ladi-headline font-lora">
                      chuẩn bị đón tiếp một cách chu đáo nhất nhé!
                    </p>
                    <p className="ladi-headline font-lora">Trân trọng!</p>
                  </div>
                </div>

                {/* Confirm */}
                {showConfirm && (
                  <Confirm
                    onClose={() => setShowConfirm(false)}
                    guest={guest}
                    setGuest={setGuest}
                  />
                )}

                {/* Gift */}
                {showGift && <Gift onClose={() => setShowGift(false)} />}

                <div id="GROUP44" className="absolute mt-31">
                  <div className="ladi-group">
                    <div
                      id="BOX41"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft41"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX42"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft42"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX43"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft43"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX44"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft44"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX45"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft45"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div
                      id="BOX48"
                      className="absolute animate-on-scroll"
                      data-animate="fadeInLeft48"
                    >
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="HEADLINE63"
              className="absolute mt-190 animate-on-scroll"
              style={{ top: invite ? 600 : 395 }}
              data-animate="zoomIn"
            >
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
