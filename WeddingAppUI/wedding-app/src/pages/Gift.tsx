import React from "react";
import "../assets/css/Gift.css";

interface GiftProps {
  onClose: () => void;
}

const Gift: React.FC<GiftProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      {/* Overlay mờ */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }} // bấm ra ngoài sẽ đóng
      ></div>

      {/* Nội dung Gift */}
      <div id="SECTION_POPUP" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container">
          <div id="POPUP2" className="absolute">
            <div className="ladi-popup">
              <div className="ladi-popup-background"></div>
              <div id="IMAGE58" className="absolute">
                <button
                  onClick={(e) => {
                    onClose();
                    e.stopPropagation();
                  }}
                  className="absolute z-40 w-12 right-[4%] top-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                  ×
                </button>
                <div className="ladi-image">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="BOX34" className="absolute">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="GROUP58" className="absolute">
                <div className="ladi-group flex justify-center gap-4">
                  <div id="GROUP59">
                    <div className="ladi-group">
                      <div id="BOX35" className="absolute">
                        <div className="ladi-box ladi-transition"></div>
                      </div>
                      <div id="IMAGE29" className="absolute">
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div id="HEADLINE109" className="absolute">
                        <h3 className="ladi-headline">Duong Phuong Duy</h3>
                      </div>
                      <div id="HEADLINE110" className="absolute">
                        <h3 className="ladi-headline">Vietcombank</h3>
                      </div>
                      <div id="HEADLINE111" className="absolute">
                        <h3 className="ladi-headline">0011004389106</h3>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP40">
                    <div className="ladi-group">
                      <div id="BOX36" className="absolute">
                        <div className="ladi-box ladi-transition"></div>
                      </div>
                      <div id="IMAGE30" className="absolute">
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div id="HEADLINE112" className="absolute">
                        <h3 className="ladi-headline">Nguyen Ngoc Diep</h3>
                      </div>
                      <div id="HEADLINE113" className="absolute">
                        <h3 className="ladi-headline">MBBank</h3>
                      </div>
                      <div id="HEADLINE114" className="absolute">
                        <h3 className="ladi-headline">1006101995</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
