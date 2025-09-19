import React from "react";
import "../assets/css/Confirm.css";
import type { Guest } from "../types/Guest";

interface ConfirmProps {
  onClose: () => void;
  guest: Guest | null;
}

const Confirm: React.FC<ConfirmProps> = ({ onClose, guest }) => {
  let flagGuest: boolean = false;
  if (guest != null && guest != undefined) {
    flagGuest = true;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      {/* Overlay mờ */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // bấm ra ngoài sẽ đóng
      ></div>

      {/* Nội dung Confirm */}
      <div id="SECTION_POPUP" className="ladi-section">
        <div className="ladi-section-background"></div>
        <div className="ladi-container">
          <div id="POPUP2" className="absolute">
            <div className="ladi-popup">
              <div className="ladi-popup-background"></div>
              <div id="IMAGE58" className="absolute">
                <div className="ladi-image">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="BOX37" className="absolute">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="FORM2" className="flex justify-center">
                <div id="FORM_ITEM3" className="absolute">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item">
                      <input
                        className="ladi-form-control-select"
                        placeholder="Tên của bạn"
                        defaultValue={guest?.guestName}
                        disabled={flagGuest}
                        maxLength={40}
                      ></input>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM4" className="absolute">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item">
                      <select
                        name="form_item7"
                        className="ladi-form-control font-lora ladi-form-control-select"
                        defaultValue={
                          guest?.status === null || guest?.status === undefined
                            ? "" // chưa có dữ liệu thì hiển thị option mặc định
                            : guest?.status
                            ? "1" // true  => "1"
                            : "0" // false => "0"
                        }
                      >
                        <option value="">Bạn sẽ đến chứ?</option>
                        <option value="1">Mình chắc chắn sẽ đến</option>
                        <option value="0">Xin lỗi mình bận rồi!</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM5" className="absolute">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item">
                      <select
                        name="form_item8"
                        className="ladi-form-control font-lora ladi-form-control-select"
                        defaultValue={guest?.partner}
                      >
                        <option value="">Bạn tham dự cùng ai?</option>
                        <option value="0">Tham dự một mình</option>
                        <option value="1">Tham dự cùng 1 người</option>
                        <option value="2">Tham dự cùng 2 người</option>
                        <option value="3">Tham dự cùng 3 người</option>
                        <option value="4">Tham dự cùng 4 người</option>
                        <option value="5">Tham dự cùng 5 người</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  id="BUTTON5"
                  className="absolute cursor-pointer"
                  onClick={onClose}
                >
                  <div className="ladi-button">
                    <div className="ladi-button-background absolute"></div>
                    <div id="BUTTON_TEXT5" className="absolute">
                      <p className="ladi-headline font-lora">xác nhận</p>
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

export default Confirm;
